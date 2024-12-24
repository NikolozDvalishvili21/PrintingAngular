import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectedTab: string = 'home';

  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        console.log(`Navigation started to ${event.url}`);
      }
      if (event instanceof NavigationEnd) {
        console.log(`Navigation ended at ${event.url}`);
      }
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    console.log(`Tab selected: ${tab}`);
  }
}
