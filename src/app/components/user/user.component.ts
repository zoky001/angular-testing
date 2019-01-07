import {Component, OnInit} from '@angular/core';

import {UserService} from './user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  text = 'user page';
  users;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

    this.userService.behSubj.subscribe(value => {
      this.users = value;
    });

    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });

  }
}
