import { Component, VERSION, ViewChild } from '@angular/core';
import { DataSharing } from './aa/DataSharing.service';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  arrayList = [1, 2, 3, 4];
  instService: any;

  @ViewChild(HelloComponent)
  ref: HelloComponent;

  constructor(private inst: DataSharing) {
    // this.ref.arrayData; //Another way to parant to child component
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
