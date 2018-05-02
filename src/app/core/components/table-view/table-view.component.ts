import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Log } from '../../models/log';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit, OnChanges {
  @Input() logList: Log[];
  
  constructor() { }
  
  dataSource: MatTableDataSource<Log>;
  displayedColumns = ['Level', 'Date', 'Logger', 'Message', 'JSON', 'Exception'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Log>(this.logList);
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Log>(this.logList);
  }

}
