import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { UsersListComponent } from './users-list.component';
import { UsersListService } from './users-list.service';
import { IUser } from './users-list.model';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let users: IUser[];

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule,
          MatChipsModule,
          MatIconModule
        ],
        declarations: [UsersListComponent],
        providers: [UsersListService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onRemoved method', () => {
    beforeEach(() => {
      users = [
        {
          firstName: 'Sorin',
          id: 'sorin',
          enabled: true
        },
        {
          firstName: 'Andrei',
          id: 'andrei',
          enabled: false
        }
      ];

    });

    it('should remove enabled user', () => {
      component.usersList = [...users];

      component.onRemoved({
        firstName: 'Sorin',
        id: 'sorin',
        enabled: true
      });

      expect(component.usersList.length).toEqual(1);
    });

    it('should NOT remove disabled user', () => {
      component.usersList = [...users];

      component.onRemoved({
        firstName: 'Andrei',
        id: 'andrei',
        enabled: false
      });

      expect(component.usersList.length).toEqual(2);
    });
  });
});
