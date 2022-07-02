import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBoughtProductsComponent } from './top-bought-products.component';

describe('TopBoughtProductsComponent', () => {
  let component: TopBoughtProductsComponent;
  let fixture: ComponentFixture<TopBoughtProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBoughtProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBoughtProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
