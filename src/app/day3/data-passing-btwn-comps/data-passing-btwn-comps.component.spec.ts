import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPassingBtwnCompsComponent } from './data-passing-btwn-comps.component';

describe('DataPassingBtwnCompsComponent', () => {
  let component: DataPassingBtwnCompsComponent;
  let fixture: ComponentFixture<DataPassingBtwnCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPassingBtwnCompsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPassingBtwnCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
