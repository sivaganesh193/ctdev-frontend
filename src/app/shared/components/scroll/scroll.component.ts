import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {
  @Output() scrollToTop: EventEmitter<void>

  constructor() { 
      this.scrollToTop = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  onScrollToTop(): void {
      this.scrollToTop.emit();
  }

}
