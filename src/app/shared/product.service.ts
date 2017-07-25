import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/RX';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  public getProducts(): Observable<Product[]> {
    let myHeaders = new Headers();
    myHeaders.append('authorization', 'base 123456');
    return this.http.get('/api/products', {headers: myHeaders}).map((res: Response) => res.json());
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get('/api/product/' + id).map((res: Response) => res.json());
  }

  public getComments (id: number): Observable<Comment[]> {
    return this.http.get('/api/product/' + id + '/comments').map((res: Response) => res.json());
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
