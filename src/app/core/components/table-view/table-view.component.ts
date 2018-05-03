import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Log } from '../../models/log';
import { style, animate, animation, animateChild, useAnimation, group, sequence, transition, state, trigger, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
  animations: [
    trigger('list', [
      state('in', style({})),
      transition(':enter', [
        query('@item', stagger(10, animateChild()))
      ])
    ]),
    trigger('item', [
      transition(':enter', [
        style({ transform: 'translateY(-60%)', opacity: 0 }),
        animate('0.2s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
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
