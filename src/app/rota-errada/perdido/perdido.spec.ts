import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perdido } from './perdido';

describe('Perdido', () => {
  let component: Perdido;
  let fixture: ComponentFixture<Perdido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perdido],
    }).compileComponents();

    fixture = TestBed.createComponent(Perdido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
