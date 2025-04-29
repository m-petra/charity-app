import { afterNextRender, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationStore } from '../store/organisation.store';

@Component({
  selector: 'app-organisations',
  imports: [CommonModule],
  templateUrl: './organisations.component.html',
  styleUrl: './organisations.component.scss',
})
export class OrganisationsComponent {
  organisationStore = inject(OrganisationStore);

  constructor() {
    afterNextRender(() => {
    this.organisationStore.loadOrganisations();
    });
  }
}
