import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchChecksComponent } from './fetchChecks/fetchChecks.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [ 
  {
    path: '',
    component: FetchChecksComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
