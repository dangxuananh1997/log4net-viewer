import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { GlobalVariablesService } from '../../services/global-variables.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private globalVariables: GlobalVariablesService,
    private router: Router
  ) { }

  url: string;
  username: string;
  password: string;
  protocol: string = 'http://';
  invalidLogin: boolean = false;
  invalidUrl: boolean = false;

  ngOnInit() {
    var tmpUrl = this.globalVariables.getUrl();
    this.url = tmpUrl.substring(tmpUrl.lastIndexOf('/') + 1, tmpUrl.length);
  }

  async login() {
    this.globalVariables.setUrl(this.protocol + this.url);
    await this.accountService.login(this.username, this.password).then(
      (response) => {
        this.invalidLogin = false;
        this.invalidUrl = false;
      },
      (error) => {
        if (error.status == 400) {
          this.invalidLogin = true;
          this.invalidUrl = false;
        }
        else {
          this.invalidLogin = false;
          this.invalidUrl = true;
        }
      }
    );

    if (!this.invalidLogin && !this.invalidUrl) {
      this.router.navigate(['home']);
    }
  }

}
