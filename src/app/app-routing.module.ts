import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilsearchComponent} from "./accueilsearch/accueilsearch.component";
import {ResultsComponent} from "./results/results.component";

const routes: Routes = [
  { path: '', component: AccueilsearchComponent, pathMatch: 'full' },
  { path: 'results',  component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
