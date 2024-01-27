import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
})
export class InvoicePreviewComponent implements OnInit {
  selectedInvoice: any;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoiceService.selectedInvoice$.subscribe((invoice) => {
      this.selectedInvoice = invoice;
    });
  }

}
