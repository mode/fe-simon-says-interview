import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { FlashingBoxComponent } from './flashing-box/flashing-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    FlashingBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
