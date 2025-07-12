import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartStore } from '../../store/cart.store';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  cartStore = inject(CartStore)
  previousCount = 0;
  isCartBouncing = signal(false);

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
}
