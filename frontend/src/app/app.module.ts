import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { AdminDashPageComponent } from './admin-dash-page/admin-dash-page.component';
import { ClientDashPageComponent } from './client-dash-page/client-dash-page.component';
import { SellingPageComponent } from './selling-page/selling-page.component';
import { MarketPlaceComponent } from './market-place/market-place.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistroPageComponent,
    AdminDashPageComponent,
    ClientDashPageComponent,
    SellingPageComponent,
    MarketPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }