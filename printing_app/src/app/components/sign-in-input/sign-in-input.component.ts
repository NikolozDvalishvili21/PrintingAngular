import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-input',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './sign-in-input.component.html',
  styleUrl: './sign-in-input.component.scss',
})
export class SignInInputComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();  // Prevent the form from reloading the page
    console.log('Entered Username:', this.username);
    console.log('Entered Password:', this.password);
  
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (
        this.username.trim() === parsedUser.username &&
        this.password.trim() === parsedUser.password
      ) {
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    } else {
      this.errorMessage = 'No user found in local storage';
    }
  }
  
}
