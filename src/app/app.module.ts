import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StructuralComponent } from './components/structural/structural.component';
import {FormsModule} from "@angular/forms";
import { AttributeComponent } from './components/attribute/attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    AttributeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
