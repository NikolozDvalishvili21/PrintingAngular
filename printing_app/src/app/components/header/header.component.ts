import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedTab: string = 'home';
  cartItemCount: number = 0; 
  isModalOpen: boolean = false;
  username: string | null = null; // To store the user's username

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    // Listen to navigation events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedTab(event.url);
      }
    });

    this.updateSelectedTab(this.router.url);

    this.cartService.getCartItems().subscribe((items) => {
      this.cartItemCount = items.reduce((count, item) => count + item.quantity, 0);
    });

    const user = localStorage.getItem('user');
    if (user) {
      this.username = JSON.parse(user).username; // Set username if user is signed in
    }
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

  openModal(): void {
    this.isModalOpen = true; // Open modal
    console.log('Modal opened');
  }

  closeModal(): void {
    this.isModalOpen = false; // Close modal
  }
  
  logout(): void {
    localStorage.removeItem('user'); 
    alert("You logged out");
    this.username = null; 
    this.router.navigate(['/']); 
  }
}
