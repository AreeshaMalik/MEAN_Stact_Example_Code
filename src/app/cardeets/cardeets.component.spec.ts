import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeetsComponent } from './cardeets.component';

describe('CardeetsComponent', () => {
  let component: CardeetsComponent;
  let fixture: ComponentFixture<CardeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardeetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
