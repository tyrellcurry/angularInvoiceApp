import { Component, OnInit} from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private _invoiceService: InvoiceService) {
  }
  darkMode: boolean = false;

  darkModeToggle = (): void => {
    this.darkMode = !this.darkMode;
    this._invoiceService.dmData = this.darkMode;
    if (this.darkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      return;
    }
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }
  tester: string = 'helloworld';
  pfp: string = 'assets/nav/pfp-2.png';

  ngOnInit(): void {
    const DM_INIT = localStorage.getItem('theme');
    if(DM_INIT == 'dark'){
      document.documentElement.classList.add('dark');
      this.darkMode = true;
    } else if(DM_INIT == 'light') {
      document.documentElement.classList.add('light');
      this.darkMode = false;
    }
  }

}
