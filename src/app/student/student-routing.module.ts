import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintGuard } from '../shared/guards/complaint.guard';

import { ComplaintComponent } from './complaint/complaint.component';
import { ViewComplaintModalComponent } from './view-complaint-modal/view-complaint-modal.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

const routes: Routes = [
    { path: '', component: ComplaintComponent },
    { path: 'view-complaint', component: ViewComplaintModalComponent },
    { 
        path: 'view-complaint/:id', 
        component: ViewComplaintComponent,
        canActivate: [ComplaintGuard]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
