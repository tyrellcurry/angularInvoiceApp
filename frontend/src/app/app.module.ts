import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InvoiceNavComponent } from './invoice-nav/invoice-nav.component';
import { InvoiceMainComponent } from './invoice-main/invoice-main.component';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';
import { InvoiceEditorComponent } from './invoice-editor/invoice-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvoiceNavComponent,
    InvoiceMainComponent,
    InvoicePreviewComponent,
    InvoiceEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
