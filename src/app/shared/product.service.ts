import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/RX';

@Injectable()
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();

  constructor(private http: Http) { }

  private encodeParams(params: ProductSearchParams): URLSearchParams {
    return Object
      .keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.set(key, params[key]);
        console.log(sum);
        console.log(String(sum));
        return sum;
      }, new URLSearchParams());
  }

  public getProducts(): Observable<Product[]> {
    let myHeaders = new Headers();
    myHeaders.append('authorization', 'base 123456');
    return this.http.get('/api/products', { headers: myHeaders }).map((res: Response) => res.json());
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get('/api/product/' + id).map((res: Response) => res.json());
  }

  public getComments(id: number): Observable<Comment[]> {
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

  public search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get('/api/products', { search: this.encodeParams(params) }).map((res: Response) => res.json());
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

export class ProductSearchParams {

  constructor(
    public title: string,
    public price: number,
    public category: string
  ) { }

}
