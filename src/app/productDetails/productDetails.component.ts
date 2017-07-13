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
  public newRating = 5;
  public newComment = '';
  public isHidden = true;

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

  addComment(): void {
    if (!this.newComment) {
      window.alert('留言 多 说句话吧');
      this.newRating = 5;
      return;
    }
    let commentId = this.comments[this.comments.length - 1].id + Math.floor(Math.random() * 9);
    let comment = new Comment(commentId, this.productId, new Date().toISOString(), 'xxxxx', this.newRating, this.newComment);
    this.comments.unshift(comment);

    this.product.rating = this.comments.map(comment => comment.rating).reduce((prev, current) => prev + current) / this.comments.length;

    this.newRating = 5;
    this.newComment = '';
    this.isHidden = true;
  }

}
