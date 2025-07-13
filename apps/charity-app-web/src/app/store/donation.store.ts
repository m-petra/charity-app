import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import {
  Donation,
  DonationItem,
  DonationStatus,
  Organisation,
} from "@prisma/client";
import { Apollo, gql } from "apollo-angular";
import { map, pipe, switchMap, tap } from "rxjs";

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
const UPDATE_DONATION = gql`
  mutation UpdateDonationStatus($id: String!, $status: DonationStatus!) {
    updateDonation(updateDonationInput: { id: $id, status: $status }) {
      id
      status
      totalAmount
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
      updatedAt
    }
  }
`;
const DELETE_UNPAID_DONATION = gql`
  mutation RemoveDonation($id: String!) {
    removeUnpaid(id: $id) {
      donationId
      success
      error
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
    providedIn: "root",
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
            next: ({ data }) =>
              patchState(store, { donationDetail: data.donation }),
            error: (error) => patchState(store, { error: error.message }),
          }),
          map(({ data }) => data.donation)
        );
    },
    updateDonation: rxMethod<{ id: string; status: DonationStatus }>(
      pipe(
        switchMap(({ id, status }) =>
          apollo.mutate<{
            updateDonation: DonationWithItems;
          }>({
            mutation: UPDATE_DONATION,
            variables: {
              id,
              status,
            },
          })
        )
      )
    ),
    removeUnpaidDonation: rxMethod<string>(
      pipe(
        switchMap((id) =>
          apollo.mutate<{
            updateDonation: DonationWithItems;
          }>({
            mutation: DELETE_UNPAID_DONATION,
            variables: {
              id,
            },
          })
        ),
        tap({
          next: ({ data }) => {
            console.log("Unpaid donation deleted", { data });
            patchState(store, { error: null });
          },
          error: (error) => patchState(store, { error: error.message }),
        })
      )
    ),
    setError(error: string) {
      patchState(store, {
        error,
      });
    },
  }))
);
