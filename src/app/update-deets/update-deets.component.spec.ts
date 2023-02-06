import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeetsComponent } from './update-deets.component';

describe('UpdateDeetsComponent', () => {
  let component: UpdateDeetsComponent;
  let fixture: ComponentFixture<UpdateDeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
