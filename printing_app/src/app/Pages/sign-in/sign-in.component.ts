import { Component } from '@angular/core';
import { SignInInputComponent } from "../../components/sign-in-input/sign-in-input.component";

@Component({
  selector: 'app-sign-in',
  imports: [SignInInputComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
