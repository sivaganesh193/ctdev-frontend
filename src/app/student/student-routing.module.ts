import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComplaintComponent } from './complaint/complaint.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

const routes: Routes = [
    { path: '', component: ComplaintComponent },
    { path: 'view-complaint/:id', component: ViewComplaintComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
