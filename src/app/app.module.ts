import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductService } from './shared/product.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { HomeComponent } from './home/home.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { PercentPipe } from './pipe/percent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    SearchComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailsComponent,
    HomeComponent,
    MultiplePipe,
    FilterPipe,
    FormComponent,
    ReactiveFormComponent,
    MobileValidatorDirective,
    EqualValidatorDirective,
    ProductListsComponent,
    PercentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: ProductService, useClass: ProductService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
