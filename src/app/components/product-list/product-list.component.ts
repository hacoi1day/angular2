import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {Subscription} from "rxjs";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  public name: string;
  public price: string;
  public queryParamsSubscription: Subscription;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.queryParamsSubscription = this._activatedRoute.queryParams.subscribe(data => {
      let {name, price} = data;
      this.name = name;
      this.price = price;
      this.products = this._productService.getAllProducts(name, price);
    })
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  onSearch(): void {
    this._router.navigate(['/products/list'], {
      queryParams: {
        name: this.name ? this.name : '',
        price: this.price ? this.price : ''
      }
    }).then(r => {
      if (r === true) {

      }
    })
  }

}
