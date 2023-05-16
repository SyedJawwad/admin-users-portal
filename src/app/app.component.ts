import { Component } from '@angular/core';
import { SecurityService } from './services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-users-portal';
  
  constructor(private securityService: SecurityService, private router: Router) {}

  ngOnInit(): void {
    // Check if the user is logged in
    if (this.securityService.userType === undefined) {
      // If not, redirect to the login page
      this.router.navigateByUrl('/login');
    }
  } 
}
