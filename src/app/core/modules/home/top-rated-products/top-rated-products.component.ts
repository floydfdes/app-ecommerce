import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/shared/data/mock-products';

@Component({
  selector: 'top-rated-products',
  templateUrl: './top-rated-products.component.html',
  styleUrls: ['./top-rated-products.component.scss'],
})
export class TopRatedProductsComponent implements OnInit {
  products: any = products;
  constructor() {}

  ngOnInit(): void {}
}
