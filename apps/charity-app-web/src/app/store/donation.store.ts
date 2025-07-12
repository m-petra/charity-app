import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Donation, DonationItem, Organisation } from '@prisma/client';
import { Apollo, gql } from 'apollo-angular';
import { map, tap } from 'rxjs';

const GET_DONATION = gql`
  query GetDonation($id: String!) {
    donation(id: $id) {
      id
      totalAmount
      status
      items {
        id
        quantity
        amount
        Organisation {
          id
          name
          image
        }
      }
      createdAt
    }
  }
`;

export type DonationItemWithOrganisation = DonationItem & {
  Organisation: Organisation;
};

export type DonationWithItems = Donation & {
  items: DonationItemWithOrganisation[];
};

type DonationState = {
  loading: boolean;
  donations: DonationWithItems[];
  donationDetail: DonationWithItems | null;
  error: string | null;
};

const initialState: DonationState = {
  loading: false,
  donations: [],
  donationDetail: null,
  error: null,
};

export const DonationStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(() => initialState),
  withMethods((store, apollo = inject(Apollo)) => ({
    getDonation(id: string) {
      patchState(store, { error: null });
      return apollo
        .query<{ donation: DonationWithItems }>({
          query: GET_DONATION,
          variables: {
            id,
          },
        })
        .pipe(
          tap({
            next: ({ data }) => patchState(store, { donationDetail: data.donation }),
            error: (error) => patchState(store, { error: error.message }),
          }),
          map(({ data }) => data.donation)
        );
    },
    setError(error: string) {
      patchState(store, {
        error,
      });
    },
  }))
);
