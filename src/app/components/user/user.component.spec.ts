import {USERS, UserService} from './user.service';
import {TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import {UserComponent} from './user.component';
import {UserServiceMock} from '../../mocks/user.service.mock';
import {of} from 'rxjs/observable/of';

describe('ContactComponent', () => {
  let comp: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent
      ],
      providers: [
        {provide: UserService, useClass: UserServiceMock}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UserComponent);
      userService = TestBed.get(UserService);
      comp = fixture.componentInstance; // UserComponent test instance
    });
  }));

  it(`should have 4 user`, async(() => {

    spyOnProperty(userService.behSubj, 'value', 'get').and.returnValue(USERS);
    comp.ngOnInit();
    fixture.detectChanges();
    expect(comp.users.length).toEqual(4);

    // expect(spy).toHaveBeenCalled();

  }));

  it('Button label via jasmine.done', (done) => {
    fixture.detectChanges();
    // expect(comp.users).toBeUndefined();
    // const spy = spyOn(userService, 'getUsers').and.returnValue(of(USERS));
    // const spy = spyOnProperty(userService.behSubj, 'value', 'get').and.returnValue(USERS);
    comp.ngOnInit();
    fixture.detectChanges();
    expect(userService.getUsers).toHaveBeenCalled();

    done(); // pvaj done mora biti za krajj
  });

  it('zove drugu metoduu ', (done) => {
    fixture.detectChanges();
    // expect(comp.users).toBeUndefined();
    // const spy = spyOn(userService, 'getUsers2').and.returnValue(of(USERS));
    //const spy = spyOnProperty(userService.behSubj, 'value', 'get').and.returnValue(USERS);
    comp.ngOnInit();
    fixture.detectChanges();
    expect(userService.getUsers).toHaveBeenCalled();
   // expect(userService.getUsers2).toHaveBeenCalled();
    //expect(spy).toHaveBeenCalled();

    done(); // pvaj done mora biti za krajj
  });

  it('Button label via async() and whenStable()', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(userService.getUsers).toHaveBeenCalled();
    });
    comp.ngOnInit();
  }));

  it('Button label via fakeAsync() and tick()', fakeAsync(() => {
    fixture.detectChanges();

    comp.ngOnInit();

    tick();
    fixture.detectChanges();
    expect(userService.getUsers).toHaveBeenCalled();
  }));

  /* it(`html should render one user`, async(() => {

      fixture.detectChanges();
      expect(comp.users).toBeUndefined();

      spyOn(userService, 'getUsers').and.returnValue(Promise.resolve(true));

      comp.ngOnInit();
      (4);
      fixture.detectChanges();
      (5);
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      (6);
      fixture.detectChanges();
      const el = fixture.nativeElement.querySelector('p');
      expect(el.innerText).toContain('user1');
      expect(comp.users.length).toEqual(1);

    }));*/
});
