import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/shared/data/mock-products';

@Component({
  selector: 'top-rated-products',
  templateUrl: './top-rated-products.component.html',
  styleUrls: ['../home.component.scss'],
})
export class TopRatedProductsComponent implements OnInit {
  products: any = products;
  topRatedProducts: any;
  constructor() {}

  ngOnInit(): void {
    let sortedProducts = products.sort((a, b) => b.rating - a.rating);
    this.topRatedProducts = [...sortedProducts];
    console.log(this.topRatedProducts);
  }
}
