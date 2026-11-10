import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aventurices } from './aventurices';

describe('Aventurices', () => {
    let component: Aventurices;
    let fixture: ComponentFixture<Aventurices>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Aventurices],
        }).compileComponents();

        fixture = TestBed.createComponent(Aventurices);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
