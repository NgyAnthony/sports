import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsComponent } from './components/sports/sports.component';
import {SportDetailComponent} from './components/sport-detail/sport-detail.component';

const routes: Routes  = [
  { path: '', component: SportsComponent },
  { path: 'sport/:id', component: SportDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
