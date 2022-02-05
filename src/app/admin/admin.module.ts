import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AddFaqComponent } from './add-faq/add-faq.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    ComplaintsComponent,
    FaqsComponent,
    AddFaqComponent,
    ViewComplaintComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
