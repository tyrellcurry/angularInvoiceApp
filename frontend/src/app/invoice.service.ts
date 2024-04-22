
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private selectedInvoiceSource = new BehaviorSubject<any>(null);
  selectedInvoice$ = this.selectedInvoiceSource.asObservable();
  public dmData: boolean = false;
  public invoiceCount: any = "No";

  private _invoiceEdited$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get invoiceEdited$(): Observable<boolean> { 
    return this._invoiceEdited$.asObservable();
  }

  public invoiceEditToggle(): void { 
    let toggle = !this._invoiceEdited$.getValue();
    this._invoiceEdited$.next(toggle);
  }

  public invoicePreview: boolean = false;
  public statusFilters: string[] = [];

  setSelectedInvoice(invoice: any) {
    this.selectedInvoiceSource.next(invoice);
  }
}