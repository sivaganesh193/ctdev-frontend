import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.scss']
})
export class ViewComplaintComponent implements OnInit {
  chats:any[];

  constructor() { 
      this.chats = [];
  }

  ngOnInit(): void {
      this.chats = [
          {
              user: "admin",
              message: 'Hello is this Jitiendran KS',
              timestamp: '06:30 PM'
          },
          {
              user: "1234",
              message: 'Hi this Jitiendran KS',
              timestamp: '06:35 PM'
          },
          {
              user: "admin",
              message: 'Thanks for replying.',
              timestamp: '07:00 PM'
          },
          {
              user: "admin",
              message: 'Okay ✌️',
              timestamp: '07:02 PM'
          },
      ]
  }

}
