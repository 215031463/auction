import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  public rating: number;

  @Input()
  public readonly = true;

  @Output()
  public ratingChange: EventEmitter<number> = new EventEmitter();

  public stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [false, false, true, true, true];
    for (let i = 0; i < 5; i++) {
      this.stars[i] = i + 1 <= Math.floor(this.rating);
    }
  }

  ngOnChanges() {
    this.stars = [false, false, true, true, true];
    for (let i = 0; i < 5; i++) {
      this.stars[i] = i + 1 <= Math.floor(this.rating);
    }
  }

  public clickHandler(idx: number): void {
    if (this.readonly) {
      return;
    }
    this.rating = idx + 1;
    this.ratingChange.emit(this.rating);
  }

}
