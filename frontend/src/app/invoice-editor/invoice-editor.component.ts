import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormArray } from '@angular/forms';

import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-editor',
  templateUrl: './invoice-editor.component.html',
  styleUrls: ['./invoice-editor.component.css'],
})
export class InvoiceEditorComponent implements OnInit {

  
  item = {
    items: [{ itemName: '', qty: 0, price: 0, total: 0 }]
  }
  
  form: FormGroup = this.formBuilder.group({
    items: this.buildContacts(this.item.items)
  });
  
  constructor(private formBuilder: FormBuilder, public _invoiceService: InvoiceService) {}
  
  invoiceEdited = this._invoiceService.invoiceEdited$;

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  buildContacts(contacts: {itemName: string; qty: number; price: number;}[] = []) {
    return this.formBuilder.array(contacts.map(contact => this.formBuilder.group(contact)));
  }

  addItem() {
    this.items.push(this.formBuilder.group({itemName: '', qty: 0, price: 0, total: 0 }))
  }

  removeItem(index: number): void {
   this.items.removeAt(index);
  }
  
  calculateTotal(rowIndex: number) {
    console.log('input changed')
    let formGroup = this.items.controls[rowIndex] as FormGroup;
    let qty = formGroup.controls['qty'].value;
    let price = formGroup.controls['price'].value;
    console.log("Qty: " + qty);
    console.log("Price: " + price);
  
    if (qty && price){
      formGroup.controls['total'].setValue(qty * price);
    } else {
        formGroup.controls['total'].setValue(0); 
    }
  }

  invoiceEditToggle():void {
    console.log("Button clicked");
    this._invoiceService.invoiceEditToggle();
  }
  submit(value: any): void {
    console.log(value)
  }

  ngAfterViewInit() {}

  ngOnInit(): void {
  }
  newItems: any[] = [];
  total: number = 0;

}
