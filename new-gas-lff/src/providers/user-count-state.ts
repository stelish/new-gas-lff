import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class UserCountState {
  public _subject = new Subject<any>();
  public event = this._subject.asObservable();
  public _userCount : any = 0;

  public update_count(count: number) {
    this._subject.next(count);
  }

  get userCount():number {
    return this._userCount;
  }

  set selectedOrigin(count:number) {
    this._userCount= count;
  }

  getUpdates(): Observable<any> {
    return this._subject.asObservable();
  }
}
