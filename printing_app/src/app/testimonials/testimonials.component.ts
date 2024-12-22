import { Component } from '@angular/core';

interface Author {
  image: string;
  name: string;
  position: string;
}

interface Testimonials {
  id: number;
  review: string;
  author: Author; // Change to an object instead of a string array
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonials[] = [
    {
      id: 1,
      review:
        'For all your printing prerequisites. Offer to make and print their pamphlets, business cards, solicitations, and occasion programs.',
      author: {
        image: '/assets/images/p1.png',
        name: 'Eddy M.',
        position: 'Designer at Lift',
      },
    },
  ];
}
