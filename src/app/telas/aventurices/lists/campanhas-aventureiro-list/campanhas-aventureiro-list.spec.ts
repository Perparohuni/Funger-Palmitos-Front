import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhasAventureiroList } from './campanhas-aventureiro-list';

describe('CampanhasAventureiroList', () => {
    let component: CampanhasAventureiroList;
    let fixture: ComponentFixture<CampanhasAventureiroList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CampanhasAventureiroList],
        }).compileComponents();

        fixture = TestBed.createComponent(CampanhasAventureiroList);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
