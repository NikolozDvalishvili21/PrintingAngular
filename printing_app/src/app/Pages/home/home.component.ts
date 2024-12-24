import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CategoriesDisplayComponent } from '../../components/categories-display/categories-display.component';
import { NewArrivalsComponent } from '../../components/new-arrivals/new-arrivals.component';
import { UnderPriceComponent } from '../../components/under-price/under-price.component';
import { LastPartComponent } from '../../components/last-part/last-part.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { EmailSendComponent } from '../../components/email-send/email-send.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CategoriesDisplayComponent,
    NewArrivalsComponent,
    UnderPriceComponent,
    LastPartComponent,
    TestimonialsComponent,
    EmailSendComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
