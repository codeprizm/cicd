import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import {Lib3Module} from '@ngdev/lib3'
@NgModule({
  imports: [CommonModule, Lib3Module],
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent]
})
export class Lib1Module { }
