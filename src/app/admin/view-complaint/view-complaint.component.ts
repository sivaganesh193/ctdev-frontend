import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.scss']
})
export class ViewComplaintComponent implements OnInit {
  chats: any[]

  constructor() { 
      this.chats = [];
  }

  ngOnInit(): void {
  }

}
