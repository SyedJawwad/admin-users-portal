import { Component, OnInit } from '@angular/core';
import { personDto } from '../Model/personDto';
import { AuthService } from '../Auth/auth.service';
import { SecurityService } from '../services/security.service';
import { UserType } from '../enums/user.enum';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  userTypeEnum = UserType;
  personList=new Array<personDto>();
  personObj = new personDto();
  selectedIndex = -1;
  localItem: string | null | undefined;
  constructor(private authService: AuthService, public securityService: SecurityService) {}
ngOnInit(): void {
  this.localItem = localStorage.getItem("List");
  if(this.localItem == null){

    this.personList = []
  }
  else{
    this.personList =  JSON.parse(this.localItem);
  }

}
  // isAdminLoggedIn(): boolean {
  //   return this.authService.isAdmin('true')
  // }
  


storeData(){
  // var saveData = JSON.parse(localStorage['saveData'] || null) || {};

  if (this.selectedIndex === -1) {
    this.personList.push(this.personObj);
    // localStorage.setItem('saveData', JSON.stringify(this.personObj))
    localStorage.setItem("List",JSON.stringify(this.personList));
   
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
