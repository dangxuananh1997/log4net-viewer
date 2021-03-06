import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';

import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatGridListModule, MatProgressBarModule } from '@angular/material';
import { AuthService } from './services/auth.service';
import { AccountService } from './services/account.service';
import { GlobalVariablesService } from './services/global-variables.service';
import { FormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  declarations: [
    LoginComponent,
    PreloaderComponent,
    ProgressBarComponent
  ],
  exports: [
    PreloaderComponent,
    ProgressBarComponent
  ],
  providers: [
    AuthService,
    AccountService,
    GlobalVariablesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class SharedModule { }
