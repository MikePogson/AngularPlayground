import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs"
import { PrismUser } from '../Models/PrismUser';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {

  constructor() { }

  private user = new Subject<PrismUser>();

    loginUser(userName: string) {
        this.user.next(new PrismUser(userName));
    }

    onLogin(): Observable<any> {
        return this.user.asObservable();
    }
}
