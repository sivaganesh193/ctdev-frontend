import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { fromEvent, map, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.scss']
})
export class ViewComplaintComponent implements OnInit {
    chats: any[]
    readonly showScroll$: Observable<boolean>;

    constructor(
        @Inject(DOCUMENT) private readonly document: Document, 
        private readonly viewport: ViewportScroller) { 
        this.chats = [];
        this.showScroll$ = fromEvent(this.document,'scroll')
        .pipe(
            untilDestroyed(this),
            map(() => this.viewport.getScrollPosition()?.[1] > 0)
        );
    }

    ngOnInit(): void {
    }

    trackByIdFn(_:number, data: any) {
        return data.cid;
    }

    onScrollToTop(): void {
        this.viewport.scrollToPosition([0,0]);
    }
}
