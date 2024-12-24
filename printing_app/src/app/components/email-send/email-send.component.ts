import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as emailjs from 'emailjs-com';  

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class EmailSendComponent {

  inputtedEmail: string = '';  
  latestNews: string = 'Check out our new arrivals with HOT discounts!';  

  constructor() {
    emailjs.init("b0xmCUZJKXSR_Dnvc");  
  }

  sendEmail() {
    const templateParams = {
      inputted_email: this.inputtedEmail, 
      latest_news: this.latestNews,       
    };

    emailjs.send('service_8krydda', 'template_oo4xitr', templateParams)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
      });
  }
}
