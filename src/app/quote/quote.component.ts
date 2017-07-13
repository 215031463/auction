import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Output()
  private buyRequest: EventEmitter<Cars> = new EventEmitter();

  public car: Cars;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.car = new Cars('infinite', 10000 * Math.floor(Math.random() * (100 - 49) + 50));
    }, 2000);
  }

  buyIn(): void {
    this.buyRequest.emit(this.car);
  }

}
export class Cars {

  constructor (
    public name: string,
    public price: number
  ) { }

}
