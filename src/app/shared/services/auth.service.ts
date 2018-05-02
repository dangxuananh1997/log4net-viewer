import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Token } from '../models/token';
import { AccountService } from './account.service';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router, private accountService: AccountService) { }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
    var expectedRole: string = activatedRouteSnapshot.data.routeRole;
    var userToken: Token = this.accountService.getToken();
    var tokenExpiresTime: Date = this.accountService.getTokenExpiresTime();
    var isAuth: boolean = false;
    if (userToken != null && (userToken.roles == expectedRole || userToken.roles == undefined) && tokenExpiresTime >= new Date())
      isAuth = true

    if (!isAuth) {
      this.router.navigate(['login']);
    }
    return isAuth;

  }

}
