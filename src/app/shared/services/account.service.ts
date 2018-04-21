import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';
import { GlobalVariablesService } from './global-variables.service';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient, private globalVariables: GlobalVariablesService) { }

  token: Token;

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.globalVariables.url + '/token', 'username=' + username + '&password=' + password + '&grant_type=password')
        .toPromise()
        .then((response: Token) => {
          this.token = response;
          console.log(this.token);
          localStorage.setItem('L4NV_TOKEN', JSON.stringify(this.token));
          var expiresDate: Date = new Date();
          expiresDate.setSeconds(expiresDate.getSeconds() + this.token.expires_in - 60);
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
