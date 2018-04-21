import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../services/global-variables.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  constructor(private globalVariables: GlobalVariablesService) { }

  hidden: boolean = true;

  ngOnInit() {
    this.globalVariables.hidePreloader.subscribe((bool) => {
      setTimeout(() => {
        this.hidden = bool;
      }, 300);
    })
  }

}
