import { Injectable } from '@angular/core';
import { UserType } from '../enums/user.enum';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  userType: UserType = UserType.Admin;
}
//   constructor() { }

//   setUserType(userType: UserType): void {
//     this.userType = userType;
//   }

//   getUserType(): UserType {
//     return this.userType;
//   }
// }


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SecurityService {
// userType!: number
//   constructor() { }
// }
