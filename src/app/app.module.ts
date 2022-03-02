import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ColorchangerDirective } from './aa/colorchanger.directive';
import { DataSharing } from './aa/DataSharing.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ColorchangerDirective],
  bootstrap: [AppComponent],
  providers:[DataSharing]
})
export class AppModule {}
