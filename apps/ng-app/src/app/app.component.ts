import { Component, ElementRef, ViewChild } from '@angular/core';
import '@web-comp-app/shared/ui-components';

@Component({
  selector: 'web-comp-app-root',
  template: `
    <h1>Angular App</h1>
    <button (click)="onIncrement()">Increment</button>
    <wc-counter-value [attr.count]="count"></wc-counter-value>
    <wc-search-bar [attr.count]="count"></wc-search-bar>
    <my-counter #counter [attr.count]="124"></my-counter>
    <button (click)="update()">Update</button>
  `,
})
export class AppComponent {
  @ViewChild('counter') myCounter!: ElementRef;

  count = 0;

  onIncrement() {
    ++this.count;
  }

  // ngAfterViewInit() {
  //   console.log(this.myCounter.nativeElement.setAttribute('count', 100));
  // }

  update() {
    this.myCounter.nativeElement.setAttribute('count', 100);
  }
}
