import { Component,  OnInit, Output, inject } from '@angular/core';
import { UsersService } from 'src/app/component/service/users-service.service';
import { UsersApiService } from 'src/app/component/service/users-api-service.service';
import  User  from 'src/app/types/user';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass'],

})
export class UsersListComponent implements OnInit {
	
	users: User[] =[];
	usersService: UsersService = inject(UsersService);
	usersApiService: UsersApiService = inject(UsersApiService);

  constructor(
	
  ) {
	  
  }
  ngOnInit(): void {
	this.usersApiService.getUsers().subscribe(users => this.usersService.users = users);
  }
  onDelete(id: number) {
    this.usersService.deleteUser(id);
  }

}
