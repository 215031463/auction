import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService, Product } from './../shared/product.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private keywords: string;
  public products: Product[];
  public pnameFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.pnameFilter.valueChanges.debounceTime(500).subscribe(val => this.keywords = val);
  }

}
