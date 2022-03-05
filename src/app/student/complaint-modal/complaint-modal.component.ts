import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-complaint-modal',
	templateUrl: './complaint-modal.component.html',
	styleUrls: ['./complaint-modal.component.scss']
})
export class ComplaintModalComponent implements OnInit {

	complaintForm: FormGroup;

	constructor() {
		this.complaintForm = new FormGroup({
			complaint: new FormControl('', Validators.required)
		});
	}

	ngOnInit(): void {
	}

	onSubmit(): void {
		console.log(this.complaintForm.value);
	}

	getScreenWidth(): number {
		return screen.width;
	}

}
