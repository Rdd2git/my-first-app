import { Injectable } from '@angular/core';

import  User  from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	 users:User[] =[];
	
  constructor() { }

 deleteUser(id: number) {
   this.users = this.users.filter(user => user.id !== id);
 }
}
