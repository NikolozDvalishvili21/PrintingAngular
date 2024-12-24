import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CategoriesDisplayComponent } from '../../components/categories-display/categories-display.component';
import { NewArrivalsComponent } from '../../components/new-arrivals/new-arrivals.component';
import { UnderPriceComponent } from '../../components/under-price/under-price.component';
import { LastPartComponent } from '../../components/last-part/last-part.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { EmailSendComponent } from '../../components/email-send/email-send.component';
import { FooterComponent } from '../../components/footer/footer.component';
import routes from '../../app.routes';
import { ConfigOwnComponent } from '../../components/config-own/config-own.component';

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
    ConfigOwnComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {}
