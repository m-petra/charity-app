import { afterNextRender, Component, inject } from '@angular/core';
import { OrganisationStore } from '../store/organisation.store';
import { OrganisationCardComponent } from "../components/organisation-card/organisation-card.component";
import { Organisation } from '@prisma/client';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import untilDestroyed from '../utils/untilDestroyed';
import { CartStore } from '../store/cart.store';

@Component({
  selector: 'app-organisations',
  imports: [OrganisationCardComponent, FormsModule],
  templateUrl: './organisations.component.html',
  styleUrl: './organisations.component.scss',
})
export class OrganisationsComponent {
  organisationStore = inject(OrganisationStore);
  cartStore = inject(CartStore)
  searchTerm = '';
  searchSubject = new Subject<string>();
  destroyed = untilDestroyed();

  constructor() {
    this.organisationStore.loadOrganisations();
    afterNextRender(() => {
      this.searchSubject
        .pipe(debounceTime(500), distinctUntilChanged(), this.destroyed())
        .subscribe((term) => {    
          this.organisationStore.searchOrganisations(term);
        });
    });
  }

  addToCart(organisation: Organisation) {
    this.cartStore.addToCart(organisation);
  }

  onSearch(term: string) {
    this.searchSubject.next(term);
  }
}
