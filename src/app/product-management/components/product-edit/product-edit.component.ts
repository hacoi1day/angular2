import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../../models/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {

  public id: number;
  public product: Product;
  public subscription: Subscription;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.id = +this._activatedRouter.snapshot.params.id;
    // this.product = this._productService.getProductById(this.id);
    // console.log(this.product);
    this.subscription = this._activatedRouter.parent.params.subscribe((params: Params) => {
      let id = +params.id;
      this.product = this._productService.getProductById(id);
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
