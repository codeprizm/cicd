import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3Module } from '@ngdev/lib3';
import { Lib2cmpComponent } from './components/lib2cmp/lib2cmp.component';
@NgModule({
  imports: [CommonModule, Lib3Module],
  declarations: [Lib2cmpComponent],
  exports: [Lib2cmpComponent]
})
export class Lib2Module { }
