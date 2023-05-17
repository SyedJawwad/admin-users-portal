import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service';
import { SecurityService } from '../services/security.service';
import { UserType } from '../enums/user.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private securityService: SecurityService) { }

  login() {
    const enteredEmail = (document.getElementById('form3Example3') as HTMLInputElement).value;
    const enteredPassword = (document.getElementById('form3Example4') as HTMLInputElement).value;
    
    // Perform authentication logic (e.g., check credentials with a backend service)
    if(enteredEmail === 'admin@example.com' && enteredPassword === 'admin123'){
      localStorage.setItem('userType', UserType.Admin)
      this.securityService.userType = UserType.Admin;
      this.router.navigate(['/person-list']);
    }
    else if(enteredEmail === 'member@example.com' && enteredPassword === 'member123'){
      localStorage.setItem('userType', UserType.Member)
      this.securityService.userType = UserType.Member;
      this.router.navigate(['/person-list']);
    }
    else {
      alert('Invalid credentials. Please try again.');
    }
  }
}