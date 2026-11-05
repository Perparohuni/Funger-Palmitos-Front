import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhasUsuariosList } from './campanhas-usuarios-list';

describe('CampanhasUsuariosList', () => {
    let component: CampanhasUsuariosList;
    let fixture: ComponentFixture<CampanhasUsuariosList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CampanhasUsuariosList],
        }).compileComponents();

        fixture = TestBed.createComponent(CampanhasUsuariosList);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
