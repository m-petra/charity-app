import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Organisation } from '@prisma/client';

type CartItem = Organisation & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const CartStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(() => initialState),
  withComputed((store) => ({
    totalItems: computed(() =>
      store.items().reduce((acc, item) => {
        return acc + item.quantity;
      }, 0)
    )
  })),
  withMethods((store) => ({
    addToCart(organisaton: Organisation, quantity = 1) {
      const currentItems = store.items();
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === organisaton.id
      );

      if (existingItem) {
        const updatedItems = store.items().map((cartItem) => {
          if (cartItem.id === existingItem.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
            };
          }
          return cartItem;
        });
        patchState(store, {
          items: updatedItems,
        });
      } else {
        patchState(store, {
          items: [
            ...store.items(),
            {
              ...organisaton,
              quantity,
            },
          ],
        });
      }
    },
  }))
);