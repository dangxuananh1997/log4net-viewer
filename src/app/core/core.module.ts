import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NormalViewComponent } from './components/normal-view/normal-view.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { ObjectComponent } from './components/object/object.component';
import { ObjectPipe } from './pipes/object.pipe';
import { MatSidenavModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatGridListModule, MatIconModule, MatSlideToggleModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    HomeComponent,
    NormalViewComponent,
    TableViewComponent,
    ObjectComponent,
    ObjectPipe
  ],
  providers: [
  ]
})
export class CoreModule { }
