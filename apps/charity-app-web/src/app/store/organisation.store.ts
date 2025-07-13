import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { Organisation } from "@prisma/client";
import { Apollo, gql } from "apollo-angular";
import { catchError, EMPTY, map, pipe, switchMap, tap } from "rxjs";

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

const GET_FEATURED_ORGANISATIONS = gql`
  query GetFeaturedOrganisations($featured: Boolean) {
    organisations(featured: $featured) {
      id
      name
      description
      suggestedAmount
      image
      stripePriceId
      isFeatured
    }
  }
`;

const SEARCH_ORGANISATIONS = gql`
  query SearchOrganisations($searchTerm: String!) {
    searchOrganisations(term: $searchTerm) {
      id
      name
      description
      suggestedAmount
      image
      stripePriceId
    }
  }
`;

export interface OrganisationState {
  organisations: Organisation[];
  featuredOrganisations: Organisation[];
  loading: boolean;
  error: string | null;
}

const initialState: OrganisationState = {
  organisations: [],
  featuredOrganisations: [],
  loading: false,
  error: null,
};

export const OrganisationStore = signalStore(
  {
    providedIn: "root",
  },
  withState(initialState),
  withMethods((store, apollo = inject(Apollo)) => ({
    loadOrganisations() {
      patchState(store, { loading: true, error: null });
      apollo
        .watchQuery<{ organisations: Organisation[] }>({
          query: GET_ORGANISATIONS,
        })
        .valueChanges.pipe(
          tap({
            next: ({ data }) =>
              patchState(store, {
                organisations: data.organisations,
                loading: false,
              }),
            error: (error) =>
              patchState(store, { error: error.message, loading: false }),
          })
        )
        .subscribe();
    },
    getFeaturedOrganisations: rxMethod<boolean>(
      pipe(
        switchMap((featured) =>
          apollo.query<{ organisations: Organisation[] }>({
            query: GET_FEATURED_ORGANISATIONS,
            variables: { featured },
          })
        ),
        tap({
          next: ({ data }) =>
            patchState(store, {
              organisations: data.organisations,
              loading: false,
              error: null,
            }),
          error: (error) =>
            patchState(store, { error: error.message, loading: false }),
        })
      )
    ),
    searchOrganisations(term: string) {
      patchState(store, { loading: true, error: null });
      apollo
        .query<{ searchOrganisations: Organisation[] }>({
          query: SEARCH_ORGANISATIONS,
          variables: {
            searchTerm: term,
          },
        })
        .pipe(
          map(({ data }) =>
            patchState(store, {
              organisations: data.searchOrganisations,
              loading: false,
            })
          ),
          catchError((error) => {
            patchState(store, { error: error.message, loading: false });
            return EMPTY;
          })
        )
        .subscribe();
    },
  }))
);
