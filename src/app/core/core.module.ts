import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NormalViewComponent } from './components/normal-view/normal-view.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { ObjectComponent } from './components/object/object.component';
import { ObjectPipe } from './pipes/object.pipe';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [HomeComponent, NormalViewComponent, TableViewComponent, ObjectComponent, ObjectPipe]
})
export class CoreModule { }
