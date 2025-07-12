import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { DonationStore } from "../../store/donation.store";
import { DonationDetailComponent } from "../../components/donation-detail/donation-detail.component";

@Component({
  selector: "app-checkout-success",
  imports: [CommonModule, DonationDetailComponent],
  templateUrl: "./checkout-success.component.html",
  styleUrl: "./checkout-success.component.scss",
})
export class CheckoutSuccessComponent implements OnInit {
  donationStore = inject(DonationStore);
  route = inject(ActivatedRoute);

  ngOnInit() {
    const DonationId = this.route.snapshot.queryParamMap.get('donationId');
    if (!DonationId) {
      this.donationStore.setError('No order ID found');
      return;
    }
    this.donationStore.getDonation(DonationId).subscribe()
  }
}
