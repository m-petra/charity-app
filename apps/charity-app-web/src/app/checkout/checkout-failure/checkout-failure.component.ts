import { Component, inject, OnInit, PLATFORM_ID } from "@angular/core";
import { isPlatformServer } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DonationStore } from "../../store/donation.store";

@Component({
  selector: "app-checkout-failure",
  imports: [RouterLink],
  templateUrl: "./checkout-failure.component.html",
  styleUrl: "./checkout-failure.component.scss",
})
export class CheckoutFailureComponent implements OnInit {
  DonationStore = inject(DonationStore);
  route = inject(ActivatedRoute);
  platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    const donationId = this.route.snapshot.queryParamMap.get("donationId");
    if (!donationId) {
      this.DonationStore.setError("No order ID found");
      return;
    }
    this.DonationStore.removeUnpaidDonation(donationId);
  }
}
