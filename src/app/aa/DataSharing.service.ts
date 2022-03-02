import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataSharing {
  data: string = '';
  instSubject = new Subject();
  getService() {
    return this.instSubject;
  }

  sentData(data) {
    this.instSubject.next(data);
  }
}
