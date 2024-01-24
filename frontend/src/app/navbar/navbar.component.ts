import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  darkMode: boolean = false;
  darkModeToggle = (): void => {
    this.darkMode = !this.darkMode;  
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
  constructor() { 
  }

  ngOnInit(): void {
  }  

}
