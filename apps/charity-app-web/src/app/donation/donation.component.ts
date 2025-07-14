import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DonationDetailComponent } from "../components/donation-detail/donation-detail.component";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DonationStore } from "../store/donation.store";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap } from "rxjs";

@Component({
  selector: "app-donation",
  imports: [CommonModule, DonationDetailComponent, RouterLink],
  templateUrl: "./donation.component.html",
  styleUrl: "./donation.component.scss",
})
export class DonationComponent implements OnInit {
  private route = inject(ActivatedRoute);
  donationStore = inject(DonationStore);

  getOrder = rxMethod<string>(
    pipe(switchMap((donationId) => this.donationStore.getDonation(donationId)))
  );

  ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('id');
    if (!donationId) {
      this.donationStore.setError('No order ID found');
      return;
    }
    this.getOrder(donationId);
  }
}
