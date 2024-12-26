import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {

  constructor() {}

  // Save user data in localStorage
  saveUserData(userData: { username: string; email: string; password: string }) {
    // You can use any unique key for the user data storage
    localStorage.setItem('user', JSON.stringify(userData));
  }

  // Retrieve user data from localStorage
  getUserData(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
