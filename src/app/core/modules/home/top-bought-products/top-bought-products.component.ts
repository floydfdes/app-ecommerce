import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/shared/data/mock-products';

@Component({
  selector: 'top-bought-products',
  templateUrl: './top-bought-products.component.html',
  styleUrls: ['../home.component.scss'],
})
export class TopBoughtProductsComponent implements OnInit {
  products: any = products;
  mostBoughtProducts: any;
  constructor() {}

  ngOnInit(): void {
    let sortedProducts = products.sort((a, b) => a.stock - b.stock);
    this.mostBoughtProducts = [...sortedProducts];
    console.log(this.mostBoughtProducts);
  }
}
