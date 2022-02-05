import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ComplaintComponent } from './complaint/complaint.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { ComplaintModalComponent } from './complaint-modal/complaint-modal.component';


@NgModule({
  declarations: [
    ComplaintComponent,
    ViewComplaintComponent,
    ComplaintModalComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
