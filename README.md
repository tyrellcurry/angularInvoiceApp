# Angular Invoice App

This is an interactive and dynamic invoice app built with [Angular](https://angular.io/).

Backend and advanced features currently under development 🚧!

## Table of contents

- [Overview](#overview)
  - [Features & Functionality](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#my-process)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Features and Functionality

Users should be able to:

- View existing invoices
- Switch between light and dark mode
- Create new invoices (under development)
- Send invoices (under development)
- Update or Delete existing invoices (under development)

### Screenshot

<img src="./frontend/src/assets/readme/preview.jpg" alt="desktop preview" width="500"/>

## My process

### Built with

- Angular
- TailwindCSS
- Java Springboot (under development)

### What I learned

This was my first experience with Angular. I've learned about component creation and management. As well as passing state between components through services via Classes. 

#### A few awesome things I learned was:

Creating a service with an observable property checking for when an invoice is edited, which toggles the the invoice edit status and emmits it to the subscriber:

```typescript
private _invoiceEdited$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

get invoiceEdited$(): Observable<boolean> { 
  return this._invoiceEdited$.asObservable();
}

public invoiceEditToggle(): void { 
  let toggle = !this._invoiceEdited$.getValue();
  this._invoiceEdited$.next(toggle);
}
```

Conditionally showing a section if true, otherwise triggering a different section via template variable:

```html
<section *ngIf="(invoices.length < 1); else invoiceSection" ...>
```

### Continued development

The plan is the have this application as a fullstack application using Java. 

### Useful resources

- [Introduction to Angular concepts](https://angular.io/guide/architecture) 

### Author

- Website - [Tyrell Curry](https://www.tyrellcurry.io)
- Linkedin - [Tyrell Curry](https://www.linkedin.com/feed/)
- Twitter - [@Tyrell_io](https://twitter.com/Tyrell_io)