import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEditor } from './ficha-editor';

describe('FichaEditor', () => {
    let component: FichaEditor;
    let fixture: ComponentFixture<FichaEditor>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FichaEditor],
        }).compileComponents();

        fixture = TestBed.createComponent(FichaEditor);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
