
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private selectedInvoiceSource = new BehaviorSubject<any>(null);
  selectedInvoice$ = this.selectedInvoiceSource.asObservable();
  
  setSelectedInvoice(invoice: any) {
    this.selectedInvoiceSource.next(invoice);
  }
}