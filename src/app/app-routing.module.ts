import { RequestDetailsComponent } from './request-details/request-details.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'request', pathMatch: 'full' },
  { path: 'requests', component: RequestListComponent },
  { path: 'add', component: CreateRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
