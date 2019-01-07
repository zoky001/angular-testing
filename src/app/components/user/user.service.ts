import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  behSubj: BehaviorSubject<any> = new BehaviorSubject<any>([
    {
      name: 'user1 beh subj',
      surname: 'usersurname1'
    },
    {
      name: 'user2 beh subj',
      surname: 'usersurname2'
    }
  ]);


  constructor() {
  }

  getUsers(): Observable<Array<{}>> {
    return this.getUsers2();
  }

  getUsers2(): Observable<Array<{}>> {
    return of([
      {
        name: 'user1',
        surname: 'usersurname1'
      },
      {
        name: 'user2',
        surname: 'usersurname2'
      }
    ]);
  }
}

export const USERS: any = [
  {
    'name': 'user1 create spy',
    'surname': 'usersurname1'
  },
  {
    'name': 'user2 create spy',
    'surname': 'usersurname2'
  },
  {
    'name': 'user2 create spy',
    'surname': 'usersurname2'
  },
  {
    'name': 'user2 create spy',
    'surname': 'usersurname2'
  }
];
