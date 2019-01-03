import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Title }     from '@angular/platform-browser';

@Injectable()
export class DocumentTitleService {

  constructor(private titleService: Title) {
  }

  setTitle(str) : void {
    this.titleService.setTitle(str);
  }

}
