import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../services/global-variables.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(private globalVariable: GlobalVariablesService) { }

  progress: number = 0;
  hidden: boolean = true;

  ngOnInit() {
    this.globalVariable.progress.subscribe((progress) => {
      this.hidden = false;
      this.progress = progress;
      if (progress == 100) {
        setTimeout(() => {
          this.hidden = true;
        }, 700)
      }
    });
  }

}
