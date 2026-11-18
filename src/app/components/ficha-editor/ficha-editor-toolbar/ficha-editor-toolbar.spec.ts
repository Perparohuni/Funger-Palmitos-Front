import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEditorToolbar } from './ficha-editor-toolbar';

describe('FichaEditorToolbar', () => {
    let component: FichaEditorToolbar;
    let fixture: ComponentFixture<FichaEditorToolbar>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FichaEditorToolbar],
        }).compileComponents();

        fixture = TestBed.createComponent(FichaEditorToolbar);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
