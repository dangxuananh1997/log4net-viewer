import { Component, OnInit, Input } from '@angular/core';
import { Log } from '../../models/log';
import { style, animate, animation, animateChild, useAnimation, group, sequence, transition, state, trigger, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-normal-view',
  templateUrl: './normal-view.component.html',
  styleUrls: ['./normal-view.component.css'],
  animations: [
    trigger('list', [
      transition(':enter', [
        query('@item', stagger(100, animateChild()))
      ])
    ]),
    trigger('item', [
      transition(':enter', [
        style({ transform: 'translateY(-100px)', opacity: 0 }),
        animate('0.6s cubic-bezier(.8,-0.6,0.2,1.5)', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class NormalViewComponent implements OnInit {
  @Input() logList: Log[];
  
  constructor() { }

  ngOnInit() {
  }

}
