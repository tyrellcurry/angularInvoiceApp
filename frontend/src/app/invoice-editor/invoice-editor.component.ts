import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-editor',
  templateUrl: './invoice-editor.component.html',
  styleUrls: ['./invoice-editor.component.css'],
})
export class InvoiceEditorComponent implements OnInit {
  @ViewChild('newItems') newItems!: ElementRef;

  constructor(private renderer: Renderer2) {}

  qty:number = 0;
  price:number = 0;
  total:number = 0;

  ngAfterViewInit() {}

  ngOnInit(): void {}

  calculateTotal():void {
    this.total = this.qty * this.price;
  }

  addItem(): void {
    console.log('Button clicked');
  }
}
