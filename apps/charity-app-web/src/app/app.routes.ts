import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
},{
    path: 'organisations',
    loadComponent: () => import('./organisations/organisations.component').then(m => m.OrganisationsComponent),
}
,{
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent),
}
];
