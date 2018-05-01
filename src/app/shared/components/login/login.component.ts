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
  invalidLogin: boolean = true;

  ngOnInit() {
  }

  async login() {
    this.globalVariables.setUrl(this.protocol + this.url);
    await this.accountService.login(this.username, this.password).then(
      (response) => {
        this.invalidLogin = false;
      },
      (error) => {
        this.invalidLogin = true;
      }
    );

    if (!this.invalidLogin) {
      this.router.navigate(['home']);
    }
  }

}
