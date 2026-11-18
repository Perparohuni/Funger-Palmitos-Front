import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEditorView } from './ficha-editor-view';

describe('FichaEditorView', () => {
    let component: FichaEditorView;
    let fixture: ComponentFixture<FichaEditorView>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FichaEditorView],
        }).compileComponents();

        fixture = TestBed.createComponent(FichaEditorView);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
