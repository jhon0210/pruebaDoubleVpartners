import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubSearchComponent } from './core/components/github-search/github-search.component';

const routes: Routes = [
  // { path: '', redirectTo: 'github-search', pathMatch: 'full' },
  { path: '', component: GithubSearchComponent },
  { path: 'github-search', component: GithubSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
