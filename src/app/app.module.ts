import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CountPipe} from "./count.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CountPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
