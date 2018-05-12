import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class GlobalVariablesService {

  constructor() { }

  public hidePreloader = new EventEmitter<boolean>();
  public progress = new EventEmitter<number>();

  setUrl(site: string): void {
    localStorage.setItem('L4NV_SITE', site);
  }

  getUrl(): string {
    return localStorage.getItem('L4NV_SITE') != null ? localStorage.getItem('L4NV_SITE') : '';
  }

}
