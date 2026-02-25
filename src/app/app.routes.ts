import { Routes } from '@angular/router';
import {Test} from './pages/test/test';
import {Signup} from './pages/signup/signup';


export const routes: Routes = [
  {
    path: '',
    component: Test
  },
  {
    path: 'signup',
    component: Signup
  }
];
