import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-nav',
  templateUrl: './invoice-nav.component.html',
})
export class InvoiceNavComponent implements OnInit {

  filterBoxOpen: boolean = false;

  filterBoxToggle():void{
    this.filterBoxOpen = !this.filterBoxOpen;
  }
  constructor(public _invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

}
