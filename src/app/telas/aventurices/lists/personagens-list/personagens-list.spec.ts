import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensList } from './personagens-list';

describe('PersonagensList', () => {
    let component: PersonagensList;
    let fixture: ComponentFixture<PersonagensList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PersonagensList],
        }).compileComponents();

        fixture = TestBed.createComponent(PersonagensList);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
