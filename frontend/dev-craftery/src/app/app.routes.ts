import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';

export const routes: Routes = [{path: '', component: HomeComponent},
{ path: 'problems', component: ListingsComponent }];
