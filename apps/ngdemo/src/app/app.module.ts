import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Lib1Module } from '@ngdev/lib1';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, Lib1Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
