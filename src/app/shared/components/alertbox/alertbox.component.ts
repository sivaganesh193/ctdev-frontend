import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.scss']
})
export class AlertboxComponent {
    url: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<AlertboxComponent>
    ) {
        if(this.data.status === 's') {
            this.url = '/assets/img/check.png';
        }
        else {
            this.url = '/assets/img/cancel.png';
        }
    }

    onProceed(): void {
        this.dialogRef.close(true);
    }

}
