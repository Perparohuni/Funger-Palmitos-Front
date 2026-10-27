import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhasList } from './campanhas-list';

describe('CampanhasList', () => {
  let component: CampanhasList;
  let fixture: ComponentFixture<CampanhasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampanhasList],
    }).compileComponents();

    fixture = TestBed.createComponent(CampanhasList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
