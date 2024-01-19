import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvoiceNavComponent } from './invoice-nav/invoice-nav.component';
import { InvoiceMainComponent } from './invoice-main/invoice-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvoiceNavComponent,
    InvoiceMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
