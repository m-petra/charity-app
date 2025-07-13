import { Component, effect, inject, signal } from "@angular/core";

import { RouterLink, RouterLinkActive } from "@angular/router";
import { CartStore } from "../../store/cart.store";
import { AuthService } from "../../auth/auth.service";
import { User } from "firebase/auth";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  cartStore = inject(CartStore);
  previousCount = 0;
  isCartBouncing = signal(false);
  auth = inject(AuthService);
  currentUser$ = this.auth.currentUser$;
  isDropdownOpen = false;

  constructor() {
    effect(() => {
      const currentCount = this.cartStore.totalItems();

      if (currentCount && currentCount > this.previousCount) {
        this.isCartBouncing.set(true);

        setTimeout(() => {
          this.isCartBouncing.set(false);
        }, 1000);
      }

      this.previousCount = currentCount;
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getUserDisplayName(user: User | null): string {
    return user?.displayName || user?.email?.split('@')[0] || 'User';
  }

  getUserPhotoUrl(user: User | null): string {
    return (
      user?.photoURL ||
      `https://ui-avatars.com/api/?name=${this.getUserDisplayName(user)}`
    );
  }

  async logout() {
    try {
      await this.auth.logout();
      this.isDropdownOpen = false;
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}
