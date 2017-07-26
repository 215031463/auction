import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService, Product } from './../shared/product.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Observable<Product[]>;
  public pnameFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.getProducts().subscribe(data => this.products = data);
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(params => this.products = this.productService.search(params));
  }

}
