import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-complaint-modal',
  templateUrl: './view-complaint-modal.component.html',
  styleUrls: ['./view-complaint-modal.component.scss']
})
export class ViewComplaintModalComponent {
    complaintForm: FormGroup;

    constructor(
        private readonly _studentService: StudentService,
        private readonly router: Router
    ) { 
        this.complaintForm = new FormGroup({
            cid: new FormControl(null, Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    onSubmit(): void {
        this._studentService.fetchComplaint(this.complaintForm.value)
        .subscribe(data => {
            if(data) {
                localStorage.setItem('ctdevStudentToken',data.token);
                this.router.navigateByUrl(`/student/view-complaint/${data.complaint.cid}`);
            }
        })
    }
}
