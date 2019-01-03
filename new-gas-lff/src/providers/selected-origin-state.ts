import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SelectedOriginState {
  public _subject = new Subject<any>();
  public event = this._subject.asObservable();
  // akl default
  public _selectedOrigin : any = { name: 'Auckland', code:'AKL', country: "NZ",  thumbnail: 'https://d2ds1ta3ddxtjl.cloudfront.net/resource/aacab0c8-9477-46f3-93c7-d4007521761f?width=60&height=60'};

  public update_origin(city: any) {
    this._subject.next(city);
  }

  get selectedOrigin():any {
    return this._selectedOrigin;
  }

  set selectedOrigin(origin:any) {
    this._selectedOrigin = origin;
  }

  getUpdates(): Observable<any> {
    return this._subject.asObservable();
  }
}
