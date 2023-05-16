import { Component } from '@angular/core';
import { UserType } from './enums/user.enum';
import { SecurityService } from './services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-users-portal';
  user = UserType;
  private router: any;
  constructor(
    private securityService: SecurityService  ) {}
  ngOnInit():void {
    
    this.securityService.securityObject = JSON.parse("userData");
    if (this.user?.id) {

    } else {
      this.router.navigateByUrl('./login/login.component');    }
  }
    
  
  
}

