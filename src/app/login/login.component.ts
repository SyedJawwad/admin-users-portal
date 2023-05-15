import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    const enteredEmail = (document.getElementById('form3Example3') as HTMLInputElement).value;
    const enteredPassword = (document.getElementById('form3Example4') as HTMLInputElement).value;

    // Perform authentication logic (e.g., check credentials with a backend service)
    const isAdmin = enteredEmail === 'admin@example.com' && enteredPassword === 'admin123';

    if (this.authService.isAdmin) {
      this.router.navigate(['/person-dto']);
    } else {
      alert('Invalid credentials. Please try again.');
      
    }
  }
}