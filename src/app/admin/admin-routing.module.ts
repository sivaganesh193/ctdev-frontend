import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFaqComponent } from './add-faq/add-faq.component';

import { AdminComponent } from './admin.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'complaints', component: ComplaintsComponent },
            { path: 'faqs', component: FaqsComponent },
            { path: 'add-faq', component: AddFaqComponent },
            { path: 'complaints/:id', component: ViewComplaintComponent},
        ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
