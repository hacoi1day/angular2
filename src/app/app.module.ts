import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// module

// router
import {appRoutes} from "./app.routes";

// components
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import {AccessGuard} from "./services/access.guard";
import {ProductManagementModule} from "./product-management/product-management.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // module child
    ProductManagementModule,
    // router
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AccessGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
