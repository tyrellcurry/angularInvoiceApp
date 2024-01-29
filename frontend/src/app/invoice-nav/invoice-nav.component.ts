import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-nav',
  templateUrl: './invoice-nav.component.html',
})
export class InvoiceNavComponent implements OnInit {
  constructor(public _invoiceService: InvoiceService) { }

  filterBoxOpen: boolean = false;
  filterBoxToggle():void{
    this.filterBoxOpen = !this.filterBoxOpen;
  }

  ngOnInit(): void {
    
  }

  statusFilters = this._invoiceService.statusFilters;

  filterStatus(filter: any):void {
    const status = filter.getAttribute("name");
    const index = this.statusFilters.indexOf(status);
    console.log(index);
    if(filter.checked && index === -1){
      this.statusFilters.push(status);
    } else {
      console.log(this.statusFilters);
      if (index !== -1) {
        this.statusFilters.splice(index, 1);
        console.log(this.statusFilters);
      }
    }
  }

}

