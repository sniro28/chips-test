import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UsersListService } from './users-list.service';


describe('UsersListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [UsersListService]
  }));

  it('should be created', () => {
    const service: UsersListService = TestBed.get(UsersListService);
    expect(service).toBeTruthy();
  });
});
