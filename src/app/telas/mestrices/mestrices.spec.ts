import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mestrices } from './mestrices';

describe('Mestrices', () => {
  let component: Mestrices;
  let fixture: ComponentFixture<Mestrices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mestrices],
    }).compileComponents();

    fixture = TestBed.createComponent(Mestrices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
