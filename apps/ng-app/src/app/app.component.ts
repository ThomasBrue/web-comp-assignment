import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import '@web-comp-app/shared/ui-components';

@Component({
  selector: 'web-comp-app-root',
  template: `
    <h1>Angular App</h1>
    <button (click)="onIncrement()">Increment</button>
    <hr />
    <wc-counter-value [attr.count]="count"></wc-counter-value>
    <hr />
    <div style="border: 2px solid green;">
      <wc-search-bar #searchBarId [attr.count]="nameList"></wc-search-bar>
    </div>

    <hr />
    <my-counter #counter [attr.count]="124"></my-counter>
    <hr />
    <button (click)="update()">Update</button>
    <hr />
    <div>
      <click-counter #clickCounter></click-counter>
    </div>

    <div *ngFor="let item of items">
      <div>{{ item }}</div>
    </div>
  `,
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('counter') myCounter!: ElementRef;
  @ViewChild('clickCounter') myclickCounter!: ElementRef;
  @ViewChild('searchBarId') mySearchBar!: ElementRef;

  count = 0;
  nameList = [
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

  items: string[] = [];

  onIncrement() {
    ++this.count;
  }

  update() {
    this.myCounter.nativeElement.setAttribute('count', 100);
  }

  ngOnInit() {
    setInterval(() => {
      if (this.myCounter && this.myCounter.nativeElement.count)
        console.log(this.myCounter.nativeElement.count);
    }, 1000);
  }

  ngAfterViewInit() {
    this.myclickCounter.nativeElement.addEventListener(
      'clicked',
      (evt: any) => {
        console.log(evt);
      }
    );

    this.mySearchBar.nativeElement.addEventListener(
      'onBlurEvent',
      (evt: any) => {
        console.log(evt);
        this.items.push(evt.detail);
      }
    );
  }
}
