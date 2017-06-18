import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  protected products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products.push(new Product(1, '第一个商品', 1.00, 2.50, '这是第一个商品的内容', ['图书', '教科书']));
    this.products.push(new Product(2, '第二个商品', 2.00, 3.00, '这是第二个商品的内容', ['电子产品', '电竞外设']));
    this.products.push(new Product(1, '第三个商品', 3.00, 3.50, '这是第三个商品的内容', ['生鲜', '海鲜']));
    this.products.push(new Product(1, '第四个商品', 4.00, 4.00, '这是第四个商品的内容', ['服装', '秋装']));
    this.products.push(new Product(1, '第五个商品', 5.00, 4.50, '这是第五个商品的内容', ['工具', '维修工具']));
    this.products.push(new Product(1, '第六个商品', 6.00, 1.50, '这是第六个商品的内容', ['生活', '电影']));
  }

}

export class Product {
  constructor (
    public id: number,
    public pname: string,
    public price: number,
    public rating: number,
    public desc: string,
    public types: Array<string>
  ) {}
}
