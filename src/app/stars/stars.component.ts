import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private rating: number;

  protected stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [false, false, true, true, true];
    for (let i = 0; i < 5; i++) {
      this.stars[i] = i + 1 <= Math.floor(this.rating);
    }
  }
}
