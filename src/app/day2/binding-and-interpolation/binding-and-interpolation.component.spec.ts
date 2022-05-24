import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingAndInterpolationComponent } from './binding-and-interpolation.component';

describe('BindingAndInterpolationComponent', () => {
  let component: BindingAndInterpolationComponent;
  let fixture: ComponentFixture<BindingAndInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingAndInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingAndInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
