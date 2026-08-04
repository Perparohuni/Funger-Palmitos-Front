import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhasForm } from './campanhas-form';

describe('CampanhasForm', () => {
    let component: CampanhasForm;
    let fixture: ComponentFixture<CampanhasForm>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CampanhasForm],
        }).compileComponents();

        fixture = TestBed.createComponent(CampanhasForm);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
