import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/RX';

@Injectable()
export class ProductService {

  private comments: Comment[] = [
    new Comment(1, 1, '2016-9-17', '张三', 3.5, '这东西还不错。。'),
    new Comment(2, 1, '2016-9-17', '张三丰', 3.5, '东西不错，很喜欢。。'),
    new Comment(3, 1, '2016-9-17', '张无极', 3.5, '这宝贝很喜欢。。'),
    new Comment(4, 1, '2016-9-17', '周桂标', 3.5, '物流很快，隔天就收到了。。'),
    new Comment(5, 3, '2016-12-31', '李四', 3.5, '这东西是不错。。'),
    new Comment(6, 3, '2016-12-5', '李奎', 3.5, '第一次发现这么好的东西。。'),
    new Comment(7, 3, '2016-7-31', '刘洋', 4.5, '东西很赞。。'),
    new Comment(8, 3, '2016-10-31', '李丽', 3.5, '这家店铺东西不错，下次还来。。'),
    new Comment(9, 2, '2017-3-15', '王麻子', 3.5, '这东西用着很舒服。。'),
    new Comment(10, 2, '2017-4-15', '周立波', 3.5, '东西很好，第二次买这家的货了。。'),
    new Comment(11, 2, '2017-4-5', '赵敏', 3.5, '这是好东西，值得推荐。。'),
    new Comment(12, 2, '2017-5-20', '赵五', 3.5, '这东西是好货，店家是好店家。。')
  ]

  constructor(private http: Http) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get('/api/products').map((res: Response) => res.json());
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get('/api/products:' + id).map((res: Response) => res.json());
  }

  public getComments (id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
  }

  public getAllCategories(): string[] {
    let categories: string[] = [];
    /* this.products.forEach((product: Product) => {
      let categoryWords = product.types;
      categoryWords.forEach((type) => {
        if (!categories.find(val => val === type)) {
          categories.push(type);
        }
      });
    }); */
    return categories;
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
