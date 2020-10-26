import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  public product: Product = null;
  public subscription: Subscription

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // this.handleParamsBySnapshot();
    this.handleParams();
    // this.handleParamsBySnapshot();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleParams() {
    this.subscription = this._activatedRoute.params.subscribe(data => {
      let id = +data.id;
      this.product = this._productService.getProductById(id);
    })
  }

  handleParamsBySnapshot(): void {
    let id = +this._activatedRoute.snapshot.params.id;
    this.product = this._productService.getProductById(id);
  }

  onBackToList(): void {
    // this._router.navigate(['products/list']);
    this._router.navigate(['list'], {
      relativeTo: this._activatedRoute.parent // http://localhost:4200/products + /list
    });
  }

  onEdit(): void {
    let id = this._activatedRoute.snapshot.params.id;
    this._router.navigate([`${id}/edit`], {
      relativeTo: this._activatedRoute.parent
    });
  }

  onDelete(): void {

  }

}
