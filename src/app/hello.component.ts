import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { DataSharing } from './aa/DataSharing.service';

@Component({
  selector: 'hello',
  template: `<h1><ng-content></ng-content></h1> <button (click)="sentSomeData2('hi this first click')">Click1</button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() arrayData = [];
  constructor(private inst: DataSharing) {
    this.inst.data = 'ss';
  }

  sentSomeData2(data) {
    this.inst.sentData('somedata');
    this.inst.getService().subscribe((data) => {
      console.log(data);
      //logic
    });
  }
}
