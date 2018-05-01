import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';
import { GlobalVariablesService } from './global-variables.service';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient, private globalVariables: GlobalVariablesService) { }

  async login(username: string, password: string) {
    return await new Promise((resolve, reject) => {
      this.httpClient.post(this.globalVariables.getUrl() + '/token', 'username=' + username + '&password=' + password + '&grant_type=password')
        .toPromise()
        .then((response: Token) => {
          var token: Token;
          token = response;
          console.log(token);
          localStorage.setItem('L4NV_TOKEN', JSON.stringify(token));
          var expiresDate: Date = new Date();
          expiresDate.setSeconds(expiresDate.getSeconds() + token.expires_in - 60);
          localStorage.setItem('L4NV_TOKENEXPIRESTIME', expiresDate.toString());
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  }

  getToken(): Token {
    var token: Token = JSON.parse(localStorage.getItem('L4NV_TOKEN'));
    if (token != null)
      return token;
    return null;
  }

  getTokenExpiresTime(): Date {
    var expiresTime: Date = new Date(localStorage.getItem('L4NV_TOKENEXPIRESTIME'));
    if (expiresTime != null)
      return expiresTime;
    return null;
  }

}
