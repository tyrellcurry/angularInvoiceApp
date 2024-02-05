
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private selectedInvoiceSource = new BehaviorSubject<any>(null);
  selectedInvoice$ = this.selectedInvoiceSource.asObservable();
  public dmData: boolean = false;
  public invoiceCount: any = "No";
  public invoicePreview: boolean = false;
  public invoiceEdited: boolean = false;
  public statusFilters: string[] = [];

  setSelectedInvoice(invoice: any) {
    this.selectedInvoiceSource.next(invoice);
  }
}