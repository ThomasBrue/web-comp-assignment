import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import '@web-comp-app/shared/ui-components';

@Component({
  selector: 'web-comp-app-root',
  template: `
    <h1>Angular App</h1>
    <div style="border: 2px solid green;">
      <wc-search-bar #searchBarId [attr.namelist]="nameList"></wc-search-bar>
    </div>
    <div *ngFor="let item of items">
      <div>{{ item }}</div>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  nameList = [
    'Sandy',
    'Alfred',
    'Maximilian',
    'Tadeus',
    'Spongebob',
    'James',
    'Lisa',
    'Sam',
    'Jack',
    'Simon',
    'Dr No',
    'Sebastian',
    'Franz',
    'Eva',
    'Manuel',
    'Karl',
  ];

  @ViewChild('searchBarId') mySearchBar!: ElementRef;

  items: string[] = [];

  ngAfterViewInit() {
    this.mySearchBar.nativeElement.addEventListener(
      'onBlurEvent',
      (evt: any) => {
        console.log(evt);
        this.items.push(evt.detail);
      }
    );
  }
}
