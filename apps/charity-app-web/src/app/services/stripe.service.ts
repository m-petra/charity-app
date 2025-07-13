import { inject, Injectable } from "@angular/core";
import { CartStore } from "../store/cart.store";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { AuthService } from "../auth/auth.service";
import { from, switchMap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StripeService {
  cartStore = inject(CartStore);
  http = inject(HttpClient);
  auth = inject(AuthService);
  
  createCheckoutSession() {
    const items = this.cartStore.items();
    const totalAmount = this.cartStore.totalAmount();

    return from(this.auth.getToken()).pipe(
      switchMap((token) =>
        this.http.post<{ url: string }>(
          `${environment.apiUrl}/api/checkout`,
          {
            items: items.map((item) => ({
              organisationId: item.id,
              name: item.name,
              amount: item.suggestedAmount,
              quantity: item.quantity,
              stripePriceId: item.stripePriceId,
            })),
            totalAmount,
          },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        )
      )
    );
  }
}
