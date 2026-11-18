import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTemplatesForm } from './ficha-templates-form';

describe('FichaTemplatesForm', () => {
    let component: FichaTemplatesForm;
    let fixture: ComponentFixture<FichaTemplatesForm>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FichaTemplatesForm],
        }).compileComponents();

        fixture = TestBed.createComponent(FichaTemplatesForm);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
