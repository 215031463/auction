import { Product, Comment, ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private productId: number;
  public product: Product;
  public comments: Comment[];
  constructor (
    private routeInfo: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit () {
    // console.log(typeof this.routeInfo.snapshot.params['id']);
    // this.productId = parseInt(this.routeInfo.snapshot.params['id']);

    this.productId = Number(this.routeInfo.snapshot.params['id']);
    this.product = this.productService.getProduct(this.productId);
    this.comments = this.productService.getComments(this.productId);
  }
}
