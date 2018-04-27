import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  @Input() object: object;

  constructor() { }

  valueIsObject: boolean;

  ngOnInit() {
  }

  isObject(item) {
    if (typeof item == 'object') {
      return true;
    }
    return false;
  }

}
