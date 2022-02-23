import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';

import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintModalComponent } from './complaint-modal/complaint-modal.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { ViewComplaintModalComponent } from './view-complaint-modal/view-complaint-modal.component';


@NgModule({
  declarations: [
    ComplaintComponent,
    ComplaintModalComponent,
    ViewComplaintComponent,
    ViewComplaintModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StudentRoutingModule,
  ]
})
export class StudentModule { }
