import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from "./components/products/products.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {ProductService} from "./services/product.service";
import {AuthGuard} from "./services/guards/auth.guard";
import {RouterModule} from "@angular/router";
import {productRoutes} from "./product-management.routes";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes),
  ],
  providers: [
    ProductService,
    AuthGuard,
  ]
})
export class ProductManagementModule { }
