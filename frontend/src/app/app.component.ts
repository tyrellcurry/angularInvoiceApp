import { Component } from '@angular/core';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}
)

export class AppComponent {
  title = 'angularInvoiceApp';
  constructor(public _invoiceService: InvoiceService) {}

  disableClicks(){
    console.log('I clicked!')
  }
}
