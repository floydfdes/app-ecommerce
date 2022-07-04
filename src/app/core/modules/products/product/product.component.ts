import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/shared/data/mock-products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  allProducts: any[] = [];
  currentProduct: any;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.allProducts = [...products];
    this.currentProduct = this.allProducts.filter((ele) => {
      return ele.id == id;
    });
  }
}
