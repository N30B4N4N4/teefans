import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpriceComponent } from './orderprice.component';

describe('OrderpriceComponent', () => {
  let component: OrderpriceComponent;
  let fixture: ComponentFixture<OrderpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
