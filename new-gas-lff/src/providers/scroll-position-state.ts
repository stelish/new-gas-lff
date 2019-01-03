import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ScrollPositionState {
  public _subject = new Subject<any>();
  public event = this._subject.asObservable();

  private scrollEvent: any = {position: 0,changedAmnt: 0};

  public update_position(position: any,change: any) {
    this.scrollEvent.position = position;
    this.scrollEvent.changedAmnt = change;
    this._subject.next(this.scrollEvent);
  }

  getUpdates(): Observable<any> {
    return this._subject.asObservable();
  }
}
