import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { LoggedInUserAuthGuard } from './shared/guards/auth-loggedin-users.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthGuard, LoggedInUserAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
