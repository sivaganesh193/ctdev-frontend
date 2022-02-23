import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

import { ConfirmationComponent } from 'src/app/shared/components/confirmation/confirmation.component';
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
        private readonly router: Router,
        private readonly matDialog: MatDialog
    ) { 
        this.complaintForm = new FormGroup({
            cid: new FormControl(null, Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    onSubmit(): void {
        const dialog = this.matDialog.open(ConfirmationComponent,{data: 'Do you want to Submit ?'});
        dialog.afterClosed().subscribe(confirmed => {
            if(confirmed) {
                this._studentService.authComplaint(this.complaintForm.value)
                .subscribe(data => {
                    if(data) {
                        const { cid, user_role } = jwtDecode(data.token) as any; 
                        localStorage.setItem('ctdevStudentToken',data.token);
                        localStorage.setItem('user_role',user_role);
                        this.router.navigateByUrl(`/student/view-complaint/${cid}`);
                    }
                });
            }
        })
    }
}
