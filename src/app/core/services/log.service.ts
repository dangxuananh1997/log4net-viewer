import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariablesService } from '../../shared/services/global-variables.service';
import { Data } from '../models/data';

@Injectable()
export class LogService {

  constructor(private httpClient: HttpClient, private globalVariables: GlobalVariablesService) { }

  getLog(pageSize: number, pageIndex: number, level: string, search: string, date: string, strictSearch: boolean) {
    return this.httpClient.get(this.globalVariables.getUrl() + '/api/LogCenter/Read', {
      params: {
        PageSize: pageSize.toString(),
        PageIndex: pageIndex.toString(),
        Level: level.toString(),
        Search: search.toString(),
        Date: date.toString(),
        StrictSearch: String(strictSearch)
      }
    }).toPromise().then((response: Data) => response as Data);
  }

}
