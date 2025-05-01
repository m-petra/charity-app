import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationStore } from '../store/organisation.store';
import { OrganisationCardComponent } from "../components/organisation-card/organisation-card.component";
import { Organisation } from '@prisma/client';

@Component({
  selector: 'app-organisations',
  imports: [CommonModule, OrganisationCardComponent],
  templateUrl: './organisations.component.html',
  styleUrl: './organisations.component.scss',
})
export class OrganisationsComponent {
  organisationStore = inject(OrganisationStore);

  constructor() {
    this.organisationStore.loadOrganisations();
  }

  addToCart(organisation: Organisation) {
    console.log('Organisation added to cart:', organisation);
  }
}
