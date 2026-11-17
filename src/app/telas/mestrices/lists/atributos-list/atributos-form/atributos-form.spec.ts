import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosForm } from './atributos-form';

describe('AtributosForm', () => {
    let component: AtributosForm;
    let fixture: ComponentFixture<AtributosForm>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AtributosForm],
        }).compileComponents();

        fixture = TestBed.createComponent(AtributosForm);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
