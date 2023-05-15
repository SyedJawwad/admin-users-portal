import { Component } from '@angular/core';
import { personDto } from '../Model/personDto';
import { AuthService } from '../Auth/auth.service';
import { SecurityService } from '../services/security.service';
import { UserType } from '../enums/user.enum';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  constructor(private authService: AuthService, public securityService: SecurityService) {}

  // isAdminLoggedIn(): boolean {
  //   return this.authService.isAdmin('true')
  // }
  userTypeEnum = UserType;
  personList=new Array<personDto>();
  personObj = new personDto();
  selectedIndex = -1;


saveData(){
  // localStorage.setItem('userData', JSON.stringify(this.personObj))

  if (this.selectedIndex === -1) {
    this.personList.push(this.personObj);
  } else {
    this.personList[this.selectedIndex] = this.personObj;
    this.selectedIndex = -1;
  }  
  this.personObj=new personDto();
}

deleteList(index:number){
  this.personList.splice(index, 1);
}

editList(index:number){
  this.selectedIndex = index;
  this.personObj = { ...this.personList[index] }
}
}
