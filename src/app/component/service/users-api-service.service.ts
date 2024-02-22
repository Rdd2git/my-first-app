import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  User  from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) {

   }
   getUsers(){
	 return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
   }
}
