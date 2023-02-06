import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakwheelsComponent } from './pakwheels.component';

describe('PakwheelsComponent', () => {
  let component: PakwheelsComponent;
  let fixture: ComponentFixture<PakwheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakwheelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakwheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
