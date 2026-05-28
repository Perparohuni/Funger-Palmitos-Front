import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMestre } from './dashboard-mestre';

describe('DashboardMestre', () => {
  let component: DashboardMestre;
  let fixture: ComponentFixture<DashboardMestre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMestre],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardMestre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
