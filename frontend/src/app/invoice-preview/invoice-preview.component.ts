import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
})
export class InvoicePreviewComponent implements OnInit {
  selectedInvoice: any;

  constructor(private _invoiceService: InvoiceService) {}

  invoiceEditToggle():void {
    console.log("Button clicked");
    this._invoiceService.invoiceEditToggle();
  }

  
  ngOnInit() {
    this._invoiceService.selectedInvoice$.subscribe((invoice) => {
      this.selectedInvoice = invoice;
    });    
  }

}
