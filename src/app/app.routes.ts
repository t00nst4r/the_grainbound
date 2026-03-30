import { Routes } from '@angular/router';
import {Landing} from './pages/landing/landing';
import {ProductsOverview} from './pages/products-overview/products-overview';
import {About} from './pages/about/about';
import {ProductDetail} from './pages/product-detail/product-detail';
import {Freebies} from './pages/freebies/freebies';


export const routes: Routes = [
  {
    path: '',
    component: Landing
  },
  {
    path: 'freebies',
    component: Freebies
  },
  {
    path: 'products',
    component: ProductsOverview
  },
  {
    path: 'products/:id',
    component: ProductDetail
  },
  {
    path: 'about',
    component: About
  }
];
