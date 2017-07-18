import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/rx';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  private productsStream: Observable<any>;

  public products: Array<any>;

  constructor(private http: Http) {
    let myHeaders = new Headers();
    myHeaders.append('authorition', 'Jerry 513623');
    this.productsStream = this.http.get('/api/products', { headers: myHeaders }).map(res => res.json());
  }

  ngOnInit() {
    this.productsStream.subscribe(data => this.products = data);
  }

}
