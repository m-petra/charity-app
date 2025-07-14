import { afterNextRender, Component, inject, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { DonationStore } from "../../store/donation.store";
import { DonationDetailComponent } from "../../components/donation-detail/donation-detail.component";
import { CartStore } from "../../store/cart.store";
import { map, pipe, switchMap } from "rxjs";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { CommonModule } from "@angular/common";

enum DonationStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  PAYMENT_REQUIRED = 'PAYMENT_REQUIRED'
}

@Component({
  selector: "app-checkout-success",
  imports: [DonationDetailComponent, CommonModule],
  templateUrl: "./checkout-success.component.html",
  styleUrl: "./checkout-success.component.scss",
})
export class CheckoutSuccessComponent implements OnInit {
  donationStore = inject(DonationStore);
  route = inject(ActivatedRoute);
  cartStore = inject(CartStore);
  getAndUpdateDonation = rxMethod<string>(
    pipe(
      switchMap((donationId) => {
        return this.donationStore.getDonation(donationId);
      }),
      map((donation) => {
        if (donation.status === DonationStatus.PAYMENT_REQUIRED) {
          return this.donationStore.updateDonation({
            id: donation.id,
            status: DonationStatus.PENDING,
          });
        }
        return null;
      })
    )
  );

  constructor() {
    afterNextRender(() => {
      this.cartStore.clearCart();
    });
  }

  ngOnInit() {
    const donationId = this.route.snapshot.queryParamMap.get("donationId");
    if (!donationId) {
      this.donationStore.setError("No donation ID found");
      return;
    }
    this.getAndUpdateDonation(donationId);
  }
}

