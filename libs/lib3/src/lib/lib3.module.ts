import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3cmpComponent } from './components/lib3cmp/lib3cmp.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3cmpComponent],
  exports:[Lib3cmpComponent]
})
export class Lib3Module {}
