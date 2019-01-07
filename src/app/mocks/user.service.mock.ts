import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {USERS} from '../components/user/user.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class UserServiceMock {
  public behSubj: BehaviorSubject<any> = new BehaviorSubject<any>([
    {
      name: 'user1 beh subj',
      surname: 'usersurname1'
    },
    {
      name: 'user2 beh subj',
      surname: 'usersurname2'
    }
  ]);
  'getUsers' = jasmine.createSpy('getUsers').and.returnValue(of(USERS));
  'getUsers2' = jasmine.createSpy('getUsers').and.returnValue(of(USERS));

  /*  getUsers(): Observable<Array<{}>> {
      return of([
        {
          name: 'user1',
          surname: 'usersurname1'
        },
        {
          name: 'user2',
          surname: 'usersurname2'
        },
        {
          name: 'user2',
          surname: 'usersurname2'
        }
      ]);
    }*/
}
