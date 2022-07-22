import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { TopRatedProductsComponent } from './top-rated-products/top-rated-products.component';
import { TopBoughtProductsComponent } from './top-bought-products/top-bought-products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { TransformDescriptionPipe } from '../../pipes/transform-description.pipe';
import { MatIconModule } from '@angular/material/icon';
import { RatingPipe } from '../../pipes/rating.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    TopRatedProductsComponent,
    TopBoughtProductsComponent,
    NewProductsComponent,
    TransformDescriptionPipe,
    RatingPipe,
  ],
  imports: [CommonModule, HomeRoutingModule, MatIconModule],
})
export class HomeModule {}
