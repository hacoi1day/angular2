import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./services/auth.guard";
import {AccessGuard} from "./services/access.guard";

export const appRoutes : Routes = [
  // { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    canDeactivate: [AccessGuard]
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductDetailComponent },
      { path: 'edit', component: ProductEditComponent },
    ]
  },
  // { path: 'products/:id', component: ProductDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
