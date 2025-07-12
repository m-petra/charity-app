import { Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DonationWithItems } from "../../store/donation.store";

@Component({
  selector: "app-donation-detail",
  imports: [CommonModule],
  templateUrl: "./donation-detail.component.html",
  styleUrl: "./donation-detail.component.scss",
})
export class DonationDetailComponent {
    donation = input.required<DonationWithItems | null>();
}
