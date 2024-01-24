import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-nav',
  templateUrl: './invoice-nav.component.html',
})
export class InvoiceNavComponent implements OnInit {

  filterBoxOpen: boolean = false;

  filterBoxToggle():void{
    this.filterBoxOpen = !this.filterBoxOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
