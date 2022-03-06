import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: string,
        private dialogRef: MatDialogRef<ConfirmationComponent> 
    ) { }

    onProceed(): void {
        this.dialogRef.close(true);
    }
}
