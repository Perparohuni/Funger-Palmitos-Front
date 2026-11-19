import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEditorMestre } from './ficha-editor-mestre';

describe('FichaEditorMestre', () => {
    let component: FichaEditorMestre;
    let fixture: ComponentFixture<FichaEditorMestre>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FichaEditorMestre],
        }).compileComponents();

        fixture = TestBed.createComponent(FichaEditorMestre);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
