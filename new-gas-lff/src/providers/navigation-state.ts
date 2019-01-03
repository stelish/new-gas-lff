import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavigationState {

  public _subject = new Subject<any>();
  public event = this._subject.asObservable();
  private _currentPage : any;

  public updateCurrentPage(page: any) {
    this._subject.next(page);
  }

  public updateCurrentPageWithParams(pge: any, params: any) {
    let res = {
      page : pge,
      param : params
    };
    this._subject.next(res);
  }

  public get currentPage():any {
    return this._currentPage;
  }

  public set currentPage(value:any) {
    this._currentPage = value;
  }

  public getUpdates(): Observable<any> {
    return this._subject.asObservable();
  }

}
