import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosList } from './atributos-list';

describe('AtributosList', () => {
    let component: AtributosList;
    let fixture: ComponentFixture<AtributosList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AtributosList],
        }).compileComponents();

        fixture = TestBed.createComponent(AtributosList);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
