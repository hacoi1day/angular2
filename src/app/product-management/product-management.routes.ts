import {Routes} from "@angular/router";
import {ProductsComponent} from "./components/products/products.component";
import {AuthGuard} from "./services/guards/auth.guard";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {ProductListComponent} from "./components/product-list/product-list.component";

export const productRoutes : Routes = [
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
];
