import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedTab: string = 'home';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Listen to navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedTab(event.url);
      }
    });

    // Set the initial selected tab based on the current route
    this.updateSelectedTab(this.router.url);
  }

  updateSelectedTab(url: string): void {
    if (url.includes('/shop')) {
      this.selectedTab = 'shop';
    } else if (url.includes('/teespace')) {
      this.selectedTab = 'teespace';
    } else if (url.includes('/blog')) {
      this.selectedTab = 'blog';
    } else if (url.includes('/pages')) {
      this.selectedTab = 'pages';
    } else {
      this.selectedTab = 'home';
    }
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    console.log(`Tab selected: ${tab}`);
  }
}
