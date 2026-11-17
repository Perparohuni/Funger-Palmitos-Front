import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresForm } from './contadores-form';

describe('ContadoresForm', () => {
    let component: ContadoresForm;
    let fixture: ComponentFixture<ContadoresForm>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContadoresForm],
        }).compileComponents();

        fixture = TestBed.createComponent(ContadoresForm);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
