import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface GalleryItem {
  title: string;
  resources: string;
  image: string;
}

interface integratedCompanies {
  image: string;
}

@Component({
  selector: 'app-last-part',
  imports: [CommonModule],
  templateUrl: './last-part.component.html',
  styleUrl: './last-part.component.scss',
})
export class LastPartComponent {
  selectedIndex: number = 0;

  // Gallery items data
  galleryItems: GalleryItem[] = [
    {
      title: 'Astronauts',
      resources: '85 resources',
      image: '/assets/images/austronauts.png',
    },
    {
      title: 'Quote that collection',
      resources: '6 resources',
      image: '/assets/images/quotes.png',
    },
    {
      title: 'Art Styles',
      resources: '68 resources',
      image: '/assets/images/third.png',
    },
    {
      title: 'Collections',
      resources: '+28',
      image: '/assets/images/last.png',
    },
  ];

  // Companues data
  integratedCompany: integratedCompanies[] = [
    {
      image: '/assets/icons/spotify.png',
    },
    {
      image: '/assets/icons/lattice.png',
    },
    {
      image: '/assets/icons/upwork.png',
    },
    {
      image: '/assets/icons/dribble.png',
    },
    {
      image: '/assets/icons/feedly.png',
    },
    {
      image: '/assets/icons/hopin.png',
    },
    {
      image: '/assets/icons/amazon.png',
    },
    {
      image: '/assets/icons/ebay.png',
    },
  ];

  // Function to handle item selection
  selectItem(index: number): void {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }
}
