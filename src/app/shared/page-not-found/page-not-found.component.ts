import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router, private titleService: Title) {
      this.titleService.setTitle('404 | Page Not Found');
   }

  ngOnInit(): void {
  }

  goToHomepage(): void {
      this.router.navigateByUrl('/');
  }

}
