import { Component, OnInit } from '@angular/core';
import { UsersListService } from './users-list.service';
import { IUser } from './users-list.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: IUser[];

  constructor(
    private usersListService: UsersListService
  ) { }

  ngOnInit() {
    this.usersListService.getUsersList()
      .subscribe(response => {
        this.usersList = response.list.entries.map(entry => entry.entry);
      });
  }

  /**
   * Callback for the remove action
   *
   * @param user - the user to be removed
   */
  onRemoved(user: IUser) {
    if (user.enabled) {
      this.usersList = this.usersList.filter((item) => item.id !== user.id);
    }
  }

}
