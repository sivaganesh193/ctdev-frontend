import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { StudentService } from '../student.service';
import { Complaint } from 'src/app/shared/types/complaint';
import { trigger, transition, style, animate } from '@angular/animations';
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
    complaint!: Complaint;
    readonly showScroll$: Observable<boolean>;

    constructor(
        @Inject(DOCUMENT) private readonly document: Document, 
        private readonly viewport: ViewportScroller,
        private readonly _studentService: StudentService,
    ) {
        this.showScroll$ = fromEvent(this.document,'scroll')
        .pipe(
            untilDestroyed(this),
            map(() => this.viewport.getScrollPosition()?.[1] > 0)
        );
    }

    ngOnInit(): void {
        this._studentService.fetchComplaint()
        .subscribe(complaint => this.complaint = complaint);
    }

    trackByIdFn(_:number, data: any) {
        return data.cid;
    }

    onScrollToTop(): void {
        this.viewport.scrollToPosition([0,0]);
    }
}
