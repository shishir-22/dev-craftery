import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';

const routes: Routes = [{path: '', component: HomeComponent},
{ path: 'problems', component: ListingsComponent },
{path: 'problem/:id', component:ProblemDetailComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

  
 }
