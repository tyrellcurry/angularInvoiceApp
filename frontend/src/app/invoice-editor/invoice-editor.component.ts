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
  @ViewChild('leftElements') leftElements!: ElementRef;
  @ViewChild('rightElements') rightElements!: ElementRef;
  constructor(private renderer: Renderer2) {}

  qty:number = 0;
  price:number = 0;
  total:number = 0;

  ngAfterViewInit() {}

  ngOnInit(): void {}

  addItem(): void {
    
  }
  calculateTotal():void {
    this.total = this.qty * this.price;
  }
}
