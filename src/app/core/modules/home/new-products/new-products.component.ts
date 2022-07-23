import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from 'src/app/core/interfaces/products';

@Component({
  selector: 'new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['../home.component.scss'],
})
export class NewProductsComponent implements OnInit {
  @Input() public products: IProducts[] = [];
  @Input() public heading: string = '';
  constructor() {}

  ngOnInit(): void {}
}
