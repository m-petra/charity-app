import { Component, input, output } from "@angular/core";

import { Organisation } from '@prisma/client';


@Component({
  selector: "app-organisation-card",
  imports: [],
  templateUrl: "./organisation-card.component.html",
  styleUrl: "./organisation-card.component.scss",
})
export class OrganisationCardComponent {
  organisation = input.required<Organisation>();
  addToCart = output<Organisation>();

  onAddToCart(organisation: Organisation) {
    this.addToCart.emit(organisation);
  }
}
