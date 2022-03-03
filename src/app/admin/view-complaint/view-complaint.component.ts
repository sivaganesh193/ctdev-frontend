import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { fromEvent, map, Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { style, transition, trigger, animate } from '@angular/animations';

@UntilDestroy()

@Component({
    selector: 'app-view-complaint',
    templateUrl: './view-complaint.component.html',
    styleUrls: ['./view-complaint.component.scss'],
    animations: [
        trigger('slide',[
            transition('void => left', [
                style({ opacity: 0, transform: 'translateX(-30px)' }), 
                animate('.5s', style({ opacity: 1, transform: 'translateX(0)' }))
            ]),
            transition('void => right', [
                style({ opacity: 0, transform: 'translateX(30px)' }), 
                animate('.5s', style({ opacity: 1, transform: 'translateX(0)' }))
            ])
        ]),
    ]
})
export class ViewComplaintComponent implements OnInit {
    chats: any[]
    readonly showScroll$: Observable<boolean>;

    constructor(
        @Inject(DOCUMENT) private readonly document: Document, 
        private readonly viewport: ViewportScroller) { 
        this.chats = [
            {
                user: 'admin',
                message: 'Hello this is admin',
                timestamp: '7:24 PM'
            },
            {
                user: 'sdfsdf',
                message: 'Hello this is userr',
                timestamp: '7:25 PM'
            },
        ];
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
