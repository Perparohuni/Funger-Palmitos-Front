import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trapaceiro } from './trapaceiro';

describe('Trapaceiro', () => {
  let component: Trapaceiro;
  let fixture: ComponentFixture<Trapaceiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trapaceiro],
    }).compileComponents();

    fixture = TestBed.createComponent(Trapaceiro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
