import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTemplatesList } from './ficha-templates-list';

describe('FichaTemplatesList', () => {
    let component: FichaTemplatesList;
    let fixture: ComponentFixture<FichaTemplatesList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FichaTemplatesList],
        }).compileComponents();

        fixture = TestBed.createComponent(FichaTemplatesList);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
