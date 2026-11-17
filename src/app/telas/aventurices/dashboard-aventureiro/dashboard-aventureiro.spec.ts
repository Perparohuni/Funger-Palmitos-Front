import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAventureiro } from './dashboard-aventureiro';

describe('DashboardAventureiro', () => {
    let component: DashboardAventureiro;
    let fixture: ComponentFixture<DashboardAventureiro>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DashboardAventureiro],
        }).compileComponents();

        fixture = TestBed.createComponent(DashboardAventureiro);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
