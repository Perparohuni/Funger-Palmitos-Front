import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoresList } from './contadores-list';

describe('ContadoresList', () => {
    let component: ContadoresList;
    let fixture: ComponentFixture<ContadoresList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContadoresList],
        }).compileComponents();

        fixture = TestBed.createComponent(ContadoresList);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
