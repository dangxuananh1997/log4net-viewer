import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../../models/log';

@Component({
  selector: 'app-normal-view',
  templateUrl: './normal-view.component.html',
  styleUrls: ['./normal-view.component.css']
})
export class NormalViewComponent implements OnInit {
  @Input() logList: Log[];
  
  constructor() { }

  ngOnInit() {
  }

}
