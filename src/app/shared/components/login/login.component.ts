import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { GlobalVariablesService } from '../../services/global-variables.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private globalVariables: GlobalVariablesService) { }

  url: string;
  username: string;
  password: string;
  protocol: string = 'http://';

  ngOnInit() {
  }

  login() {
    this.globalVariables.url = this.protocol + this.url;
    this.accountService.login(this.username, this.password);
  }

}
