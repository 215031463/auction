import { Component, OnInit, Input } from '@angular/core';
import { Cars } from './../quote/quote.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input()
  public car: Cars;

  constructor() { }

  ngOnInit() {
  }

}
