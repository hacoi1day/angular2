import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../models/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public id: number;
  public product: Product;
  public subcription: Subscription;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.id = +this._activatedRouter.snapshot.params.id;
    // this.product = this._productService.getProductById(this.id);
    // console.log(this.product);
    this._activatedRouter.parent.params.subscribe((params: Params) => {
      console.log(params);
    })
  }

}
