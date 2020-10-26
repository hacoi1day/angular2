import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    // CommonModule,
    // FormsModule
  ],
  exports: [
    CapitalizePipe,
    CommonModule,
    FormsModule,
  ]
})
export class ShareModule { }
