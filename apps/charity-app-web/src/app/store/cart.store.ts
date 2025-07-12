import { computed } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from "@ngrx/signals";
import { Organisation } from "@prisma/client";

const CART_LOCALSTORAGE_KEY = 'pet_markt_cart';

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
    providedIn: "root",
  },
  withState(() => initialState),
  withComputed((store) => ({
    totalItems: computed(() =>
      store.items().reduce((acc, item) => {
        return acc + item.quantity;
      }, 0)
    ),
    totalAmount: computed(() =>
      store.items().reduce((acc, item) => {
        return acc + item.quantity * item.suggestedAmount;
      }, 0)
    ),
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
    updateQuantity(productId: string, quantity: number) {
      const updatedItems = store
        .items()
        .map((item) => (item.id === productId ? { ...item, quantity } : item));
      patchState(store, { items: updatedItems });
      localStorage.setItem(CART_LOCALSTORAGE_KEY, JSON.stringify(updatedItems));
    },
    removeFromCart(productId: string) {
      const updatedItems = store
        .items()
        .filter((item) => item.id !== productId);
      patchState(store, { items: updatedItems });
      localStorage.setItem(CART_LOCALSTORAGE_KEY, JSON.stringify(updatedItems));
    },
    clearCart() {
      patchState(store, {
        items: [],
      });
      localStorage.removeItem(CART_LOCALSTORAGE_KEY);
    },
  }))
);
