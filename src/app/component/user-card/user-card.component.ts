import { Component, Input, Output, EventEmitter } from '@angular/core';
import  User  from 'src/app/types/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent {
	@Input() user!: User;
	@Output() deleteUser = new EventEmitter<number>();
	constructor() {

	}
	onDelete(id: number) {
		this.deleteUser.emit(id);
	}
}
