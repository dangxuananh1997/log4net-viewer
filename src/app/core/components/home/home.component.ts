import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  panelOpenState: boolean = false;
  search: string = '';
  strictSearch: boolean = true;
  
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
    // pageIndex = typeof pageIndex == 'undefined' ? 1 : pageIndex + 1;
    // pageSize = typeof pageSize == 'undefined' ? 10 : pageSize;
    // var search = this.search;
    // var date = $('input[name=date]').val();
    // var level = this.level;
    // this.logService.read(pageSize, pageIndex, level, search, date + '', this.strictSearch)
    //   .then(response => {
    //     this.logList = response.data;
    //     this.length = response.length;
    //     this.logList.forEach(element => {
    //       var first = element.Message.indexOf('{');
    //       var last = element.Message.lastIndexOf('}');
    //       if (first != -1 && last != -1) {
    //         element.JsonObject = JSON.parse(element.Message.substring(first, last + 1));
    //         element.Message = element.Message.substring(0, first - 2); //remove the ':'
    //       } else {
    //         element.JsonObject = JSON.parse('{}');
    //       }
    //     });
    //   });
  }

}
