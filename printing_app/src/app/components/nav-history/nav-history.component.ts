import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-history',
  templateUrl: './nav-history.component.html',
  styleUrls: ['./nav-history.component.scss'],
})
export class NavHistoryComponent implements OnInit {
  previousUrl: string = ''; // To hold the previous route
  currentUrl: string = ''; // To hold the current route

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Track navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Store the current URL before navigation starts
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }
}
