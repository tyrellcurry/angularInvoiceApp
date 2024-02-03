import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-invoice-editor',
  templateUrl: './invoice-editor.component.html',
  styleUrls: ['./invoice-editor.component.css'],
})
export class InvoiceEditorComponent implements OnInit {
  @ViewChild('leftElements') leftElements!: ElementRef;
  @ViewChild('rightElements') rightElements!: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {}

  ngOnInit(): void {}

  addItem(): void {
    console.log('Button clicked');
    const existingLeftElements = this.leftElements.nativeElement.innerHTML;
    const newLeftElements =
      existingLeftElements +
      `
    <input class="block border-draft-dark w-full dark:border-dark-purple-alt border-2 outline-none focus:border-vivid-purple-hover dark:focus:border-vivid-purple py-1.5 px-3 rounded font-medium bg-faded-white dark:bg-dark-purple dark:text-white" type="text" id="productdescription" name="productdescription">
    `;
    this.renderer.setProperty(
      this.leftElements.nativeElement,
      'innerHTML',
      newLeftElements
    );

    const existingRightElements = this.rightElements.nativeElement.innerHTML;
    const newRightElements =
      existingRightElements +
      `
    <div #qtyElement>
          <input class="block border-draft-dark w-full dark:border-dark-purple-alt border-2 outline-none focus:border-vivid-purple-hover dark:focus:border-vivid-purple py-1.5 px-3 rounded font-medium bg-faded-white dark:bg-dark-purple dark:text-white" type="text" id="productdescription" name="productdescription">
        </div>
        <div #priceElement>
          <input class="block border-draft-dark w-full dark:border-dark-purple-alt border-2 outline-none focus:border-vivid-purple-hover dark:focus:border-vivid-purple py-1.5 px-3 rounded font-medium bg-faded-white dark:bg-dark-purple dark:text-white" type="text" id="productdescription" name="productdescription">
        </div>
        <div #totalElement>
          $123.99
        </div>
    `;
    this.renderer.setProperty(
      this.rightElements.nativeElement,
      'innerHTML',
      newRightElements
    );
  }
}
