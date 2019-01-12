import {AfterViewInit, Component, OnInit} from '@angular/core';

import {UserService} from './user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit, AfterViewInit {
  text = 'user page';
  users;
  users1: Array<any>;

  constructor(private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    console.log('ngOnInit: START ');

    this.userService.subj.subscribe(async value => {
      console.log('ispis: ' + value);
      usersNew.push(...await this.userService.getUsers().toPromise());
      this.users1 = usersNew;

    });

    /*    this.userService.behSubj.subscribe(value => {
          this.users = value;
        });*/

    /*this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
*/

    this.users = await this.userService.getUsers().toPromise();

    const usersNew = this.users.slice();
    usersNew.push(...await this.userService.getUsers().toPromise());
    this.users1 = usersNew;
    console.log('ngOnInit: STOP ');


  }

  ngAfterViewInit(): void {

    console.log('ngAfterViewInit: START ');
    let i = 0;
    setInterval(() => {
      this.userService.subj.next(i++);

    }, 100);

    /*    let i = 0;
        while (i < 1000) {

        }*/
    console.log('ngAfterViewInit: STOP ');

  }
}
