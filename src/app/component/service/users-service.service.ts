import { Injectable } from '@angular/core';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	protected users:User[] = [];

  constructor() { }
}
