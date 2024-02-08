import { Component, inject } from '@angular/core';
import { UsersService } from 'src/app/component/service/users-service.service';
import { UsersApiService } from 'src/app/users-api-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent {
	usersService: UsersService=inject(UsersService);

  constructor(private usersApiService: UsersApiService) {
  }

  users = this.usersApiService.getUsers();

}
