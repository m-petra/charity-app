import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () =>
      import("./home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "organisations",
    loadComponent: () =>
      import("./organisations/organisations.component").then(
        (m) => m.OrganisationsComponent
      ),
  },
  {
    path: "cart",
    loadComponent: () =>
      import("./cart/cart.component").then((m) => m.CartComponent),
  },
  {
    path: "checkout",
    loadComponent: () =>
      import("./checkout/checkout.component").then((m) => m.CheckoutComponent),
  },
  {
    path: "checkout/cancel",
    loadComponent: () =>
      import("./checkout/checkout-failure/checkout-failure.component").then(
        (m) => m.CheckoutFailureComponent
      ),
  },
  {
    path: "checkout/success",
    loadComponent: () =>
      import("./checkout/checkout-success/checkout-success.component").then(
        (m) => m.CheckoutSuccessComponent
      ),
  },
  {
    path: "auth/login",
    loadComponent: () =>
      import("./auth/login/login.component").then((m) => m.LoginComponent),
  },
  {
    path: "auth/signup",
    loadComponent: () =>
      import("./auth/signup/signup.component").then((m) => m.SignupComponent),
  },
  {
    path: "donations",
    loadComponent: () =>
      import("./donations/donations.component").then((m) => m.DonationsComponent),
  },
];
