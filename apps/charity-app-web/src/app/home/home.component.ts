import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { OrganisationCardComponent } from "../components/organisation-card/organisation-card.component";
import { OrganisationStore } from "../store/organisation.store";
import { CartStore } from "../store/cart.store";
import { Organisation } from "@prisma/client/client";

@Component({
  selector: "app-home",
  imports: [RouterLink, OrganisationCardComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  organisationStore = inject(OrganisationStore);
  cartStore = inject(CartStore);

  constructor() {
     this.organisationStore.getFeaturedOrganisations(true);
  }

  onAddToCart(organization: Organisation) {
    this.cartStore.addToCart(organization);
  }
}
