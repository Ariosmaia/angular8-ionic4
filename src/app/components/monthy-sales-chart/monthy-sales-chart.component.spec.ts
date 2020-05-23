import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthySalesChartComponent } from './monthy-sales-chart.component';

describe('MonthySalesChartComponent', () => {
  let component: MonthySalesChartComponent;
  let fixture: ComponentFixture<MonthySalesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthySalesChartComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthySalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
