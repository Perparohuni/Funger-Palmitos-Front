import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloballWrapper } from './globall-wrapper';

describe('GloballWrapper', () => {
    let component: GloballWrapper;
    let fixture: ComponentFixture<GloballWrapper>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GloballWrapper],
        }).compileComponents();

        fixture = TestBed.createComponent(GloballWrapper);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
