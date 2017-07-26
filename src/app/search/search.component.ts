import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { positiveNumValidator } from '../Validators/positiveNumValidator'
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public formModel: FormGroup;

  public categories: string[];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
    this.formModel = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      price: ['', positiveNumValidator],
      category: [this.categories[0], Validators.required]
    });
  }

  onSubmit() {
    if (!this.formModel.valid) {
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }

}
