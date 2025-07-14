import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DonationStore } from "../store/donation.store";
import { RouterLink } from "@angular/router";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap } from "rxjs";

@Component({
  selector: "app-donations",
  imports: [CommonModule, RouterLink],
  templateUrl: "./donations.component.html",
  styleUrl: "./donations.component.scss",
})
export class DonationsComponent implements OnInit {
  donationStore = inject(DonationStore);
  getOrders = rxMethod<void>(
    pipe(switchMap(() => this.donationStore.getUserDonations()))
  );

  ngOnInit() {
    this.getOrders();
  }
}
