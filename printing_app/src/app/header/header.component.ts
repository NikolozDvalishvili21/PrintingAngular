import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedTab: string = 'home'

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
