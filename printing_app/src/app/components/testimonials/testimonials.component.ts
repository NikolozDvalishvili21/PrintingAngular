import { Component } from '@angular/core';

interface Author {
  image: string;
  name: string;
  position: string;
}

interface Testimonial {
  id: number;
  review: string;
  author: Author;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'], 
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      review:
        'For all your printing prerequisites. Offer to make and print their pamphlets, business cards, solicitations, and occasion programs.',
      author: {
        image: '/assets/images/reviewer.png',
        name: 'Eddy M.',
        position: 'Designer at Lift',
      },
    },
    {
      id: 2,
      review:
        'The quality of prints on our t-shirts was outstanding. Vibrant colors and long-lasting designs!',
      author: {
        image: '/assets/images/reviewer.png',
        name: 'Sarah T.',
        position: 'Event Organizer',
      },
    },
    {
      id: 3,
      review:
        'Custom hoodies for our team turned out amazing! Everyone loved the quality and attention to detail.',
      author: {
        image: '/assets/images/reviewer.png',
        name: 'Michael P.',
        position: 'Project Manager',
      },
    },
    {
      id: 4,
      review:
        'The tote bags with our company logo were perfect for our promotional event. Fast and reliable service!',
      author: {
        image: '/assets/images/reviewer.png',
        name: 'Priya K.',
        position: 'Marketing Specialist',
      },
    },
    {
      id: 5,
      review:
        'Printed caps for our charity event were spot on. High-quality and quick turnaround. Thank you!',
      author: {
        image: '/assets/images/reviewer.png',
        name: 'Alex T.',
        position: 'Non-Profit Coordinator',
      },
    },
  ];

  currentIndex: number = 0;

  nextTestimonial(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
