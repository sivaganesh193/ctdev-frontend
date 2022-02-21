import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.scss']
})
export class ViewComplaintComponent implements OnInit {
  chats:any[];
  readonly showScroll$: Observable<boolean>;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly viewport: ViewportScroller) { 
      this.chats = [];
      this.showScroll$ = fromEvent(this.document,'scroll')
      .pipe(
          untilDestroyed(this),
          map(() => this.viewport.getScrollPosition()?.[1] > 0)
      );
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
              message: 'Thanks for replying. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab quisquam commodi soluta fugit. Dolorum minima quasi assumenda unde veritatis quaerat, vero perferendis cumque voluptate rem, aspernatur recusandae porro obcaecati!',
              timestamp: '07:00 PM'
          },
          {
              user: "admin",
              message: 'Okay ✌️',
              timestamp: '07:02 PM'
          },
      ]
  }

  trackByIdFn(_:number, data: any) {
      return data.cid;
  }

  onScrollToTop(): void {
      this.viewport.scrollToPosition([0,0]);
  }
}
