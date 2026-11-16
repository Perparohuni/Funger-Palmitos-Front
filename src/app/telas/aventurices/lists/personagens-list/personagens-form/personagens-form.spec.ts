import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensForm } from './personagens-form';

describe('PersonagensForm', () => {
    let component: PersonagensForm;
    let fixture: ComponentFixture<PersonagensForm>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PersonagensForm],
        }).compileComponents();

        fixture = TestBed.createComponent(PersonagensForm);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
