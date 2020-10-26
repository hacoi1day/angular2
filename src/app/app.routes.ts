import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ProductsComponent} from "./product-management/components/products/products.component";
import {ProductDetailComponent} from "./product-management/components/product-detail/product-detail.component";
import {ProductListComponent} from "./product-management/components/product-list/product-list.component";
import {ProductEditComponent} from "./product-management/components/product-edit/product-edit.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./product-management/services/guards/auth.guard";
import {AccessGuard} from "./services/access.guard";

export const appRoutes : Routes = [
  {
    path: '',
    component: HomeComponent,
    canDeactivate: [AccessGuard]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
