import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DonationStore } from "../../store/donation.store";
import { DonationDetailComponent } from "../../components/donation-detail/donation-detail.component";
import { CartStore } from "../../store/cart.store";
import { map, pipe, switchMap } from "rxjs";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DonationStatus } from "@prisma/client/client";

@Component({
  selector: "app-checkout-success",
  imports: [CommonModule, DonationDetailComponent],
  templateUrl: "./checkout-success.component.html",
  styleUrl: "./checkout-success.component.scss",
})
export class CheckoutSuccessComponent implements OnInit {
  donationStore = inject(DonationStore);
  route = inject(ActivatedRoute);
  cartStore = inject(CartStore);
  getAndUpdateOrder = rxMethod<string>(
    pipe(
      switchMap((donationId) => {
        return this.donationStore.getDonation(donationId);
      }),
      map((donation) => {
        if (donation.status === DonationStatus.PAYMENT_REQUIRED) {
          return this.donationStore.updateOrder({
            id: donation.id,
            status: DonationStatus.PENDING,
          });
        }
        return null;
      })
    )
  );

  constructor() {
    this.cartStore.clearCart();
  }

  ngOnInit() {
    const DonationId = this.route.snapshot.queryParamMap.get("donationId");
    if (!DonationId) {
      this.donationStore.setError("No order ID found");
      return;
    }
    this.getAndUpdateOrder(DonationId);
  }
}

