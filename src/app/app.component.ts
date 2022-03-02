import { Component, VERSION } from '@angular/core';
import { DataSharing } from './aa/DataSharing.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  arrayList = [1, 2, 3, 4];
  instService: any;

  constructor(private inst: DataSharing) {
    this.instService = inst;
    inst.getService().subscribe((data) => {
      console.log('appcomponent - ' + data);
      //logic
    });
  }

  sentSomeData() {
    this.inst.sentData('somedata from app component');
  }
}
