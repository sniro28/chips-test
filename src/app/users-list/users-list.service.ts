import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IList } from './users-list.model';

@Injectable()
export class UsersListService {

  constructor(
    private http: HttpClient
  ) { }

  getUsersList(): Observable<IList> {
    return this.http.get<IList>('/assets/people.json');
  }
}
