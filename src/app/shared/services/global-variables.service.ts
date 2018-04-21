import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GlobalVariablesService {

  constructor() { }

  public url: string;
  public hidePreloader = new EventEmitter<boolean>();

}
