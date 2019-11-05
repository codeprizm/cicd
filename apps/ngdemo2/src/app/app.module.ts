import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Lib2Module } from '@ngdev/lib2'
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Lib2Module,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
