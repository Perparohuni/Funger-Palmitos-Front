import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCanvas } from './ficha-canvas';

describe('FichaCanvas', () => {
    let component: FichaCanvas;
    let fixture: ComponentFixture<FichaCanvas>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FichaCanvas],
        }).compileComponents();

        fixture = TestBed.createComponent(FichaCanvas);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
