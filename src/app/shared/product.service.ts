import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.00, 2.50, '这是第一个商品的内容', ['图书', '教科书']),
    new Product(2, '第二个商品', 3.00, 3.50, '这是第三个商品的内容', ['生鲜', '海鲜']),
    new Product(3, '第三个商品', 2.00, 3.00, '这是第二个商品的内容', ['电子产品', '电竞外设']),
    new Product(4, '第四个商品', 5.00, 4.50, '这是第五个商品的内容', ['工具', '维修工具']),
    new Product(5, '第五个商品', 4.00, 4.00, '这是第四个商品的内容', ['服装', '秋装']),
    new Product(6, '第六个商品', 6.00, 4.50, '这是第六个商品的内容', ['生活', '电影'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2016-9-17', '张三', 3.5, '这东西还不错。。'),
    new Comment(2, 3, '2016-12-31', '李四', 3.5, '这东西是不错。。'),
    new Comment(3, 2, '2017-3-15', '王麻子', 3.5, '这东西用着很舒服。。'),
    new Comment(4, 2, '2017-5-20', '赵五', 3.5, '这东西是好货，店家是好店家。。')
  ]

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProduct(id: number): Product {
    return this.products.find((product: Product) => product.id === id);
  }

  public getComments (id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
  }

}

export class Product {
  constructor(
    public id: number,
    public pname: string,
    public price: number,
    public rating: number,
    public desc: string,
    public types: Array<string>
  ) { }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}
