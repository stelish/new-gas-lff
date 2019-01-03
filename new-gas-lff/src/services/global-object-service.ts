import { Injectable } from '@angular/core';

@Injectable()
export class GlobalObjectService {
  public getWindow(): any {
    return window;
  }
  public getNavigator(): any {
      return navigator;
  }
}