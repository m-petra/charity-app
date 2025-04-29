import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Organisation } from '@prisma/client';
import { Apollo, gql } from 'apollo-angular';
import { tap } from 'rxjs';

const GET_ORGANISATIONS = gql`
  query GetOrganisations {
    organisations {
      id
      name
      description
      suggestedAmount
      image
      stripePriceId
    }
  }
`;

export interface  OrganisationState {
  organisations: Organisation[];
  featuredOrganisations: Organisation[];
  loading: boolean;
  error: string | null;
}

const initialState:  OrganisationState = {
  organisations: [],
  featuredOrganisations: [],
  loading: false,
  error: null,
};

export const  OrganisationStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialState),
  withMethods((store, apollo = inject(Apollo)) => ({
    loadOrganisations() {
      patchState(store, { loading: true });
      apollo
        .watchQuery<{  organisations: Organisation[] }>({
          query: GET_ORGANISATIONS,
        })
        .valueChanges.pipe(
          tap({
            next: ({ data }) =>
              patchState(store, { organisations: data.organisations, loading: false }),
            error: (error) =>
              patchState(store, { error: error.message, loading: false }),
          })
        ).subscribe();
    },
  }))
);