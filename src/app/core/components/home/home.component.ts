import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent, MatSidenav, MatTableDataSource } from '@angular/material';
import { GlobalVariablesService } from '../../../shared/services/global-variables.service';
import { AccountService } from '../../../shared/services/account.service';
import { Log } from '../../models/log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private globalVariables: GlobalVariablesService, private accountService: AccountService, private logService: LogService) { }

  panelIsOpen = false;

  //info
  isTableView: boolean = false;
  site: string;
  username: string;
  role: string;
  expiresTime: Date;
  
  //data
  logList: Log[];

  //search
  search: string = '';
  strictSearch: boolean = true;

  //date
  date: Date = null;
  
  //levels
  levels = [
    { name: 'All', value: '' },
    { name: 'Info', value: 'INFO' },
    { name: 'Debug', value: 'DEBUG' },
    { name: 'Warn', value: 'WARN' },
    { name: 'Error', value: 'ERROR' },
    { name: 'Fatal', value: 'FATAL' },
  ];
  level: string = "";

  //pagination
  length = 100;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25, 100];

  ngOnInit() {
    this.site = this.globalVariables.getUrl();
    this.username = this.accountService.getToken().userName;
    this.role = this.accountService.getToken().roles;
    this.expiresTime = this.accountService.getTokenExpiresTime();
    this.getLog(this.pageIndex, this.pageSize);
  }

  refresh() {
    this.getLog(this.pageIndex, this.pageSize);
  }

  changeDate() {
    this.getLog(this.pageIndex, this.pageSize);
  }

  changeLevel() {
    this.getLog(this.pageIndex, this.pageSize);
  }

  changeStrictSearch() {
    this.strictSearch = !this.strictSearch;
    this.getLog(this.pageIndex, this.pageSize);
  }

  searchKeyup() {
    var temp: string = this.search;
    setTimeout(() => {
      if (temp == this.search) {
        this.getLog();
      }
    }, 400);
  }

  paging($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    if (this.pageSize != $event.pageSize) {
      this.pageSize = $event.pageSize;
      this.pageIndex = 0;
    }
    this.getLog(this.pageIndex, this.pageSize);
  }

  getLog(pageIndex?: number, pageSize?: number) {
    this.logList = undefined;
    pageIndex = typeof pageIndex == 'undefined' ? 1 : pageIndex + 1;
    pageSize = typeof pageSize == 'undefined' ? 10 : pageSize;
    var search = this.search;
    var date = this.date != null ? this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate() : '';
    var level = this.level;
    this.logService.getLog(pageSize, pageIndex, level, search, date + '', this.strictSearch)
      .then(response => {
        this.logList = response.data;
        this.length = response.length;
        this.logList.forEach(element => {
          var first = element.Message.indexOf('{');
          var last = element.Message.lastIndexOf('}');
          if (first != -1 && last != -1) {
            element.JsonObject = JSON.parse(element.Message.substring(first, last + 1));
            element.Message = element.Message.substring(0, first - 2); //remove the ':'
          } else {
            element.JsonObject = JSON.parse('{}');
          }
        });
      });
    // console.log(date);
  }

  changeView(isTableView: boolean) {
    this.isTableView = isTableView;
    this.sidenav.toggle();
  }

  logout() {
    this.accountService.logout();
  }

}
