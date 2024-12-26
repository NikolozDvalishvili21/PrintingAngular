import { Component } from '@angular/core';
import { SignUpService } from '../../services/sign-up.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up-input',
  imports: [FormsModule],
  templateUrl: './sing-up-input.component.html',
  styleUrl: './sing-up-input.component.scss',
})
export class SingUpInputComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private signUpService: SignUpService, private router: Router) {}

  onSignUp() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.signUpService.saveUserData(userData);

    alert('User registered successfully!');
    this.router.navigate(['/signIn']);
    this.resetForm();
  }

  resetForm() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
