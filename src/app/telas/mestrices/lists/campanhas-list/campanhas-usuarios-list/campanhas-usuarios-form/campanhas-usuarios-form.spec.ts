import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhasUsuariosForm } from './campanhas-usuarios-form';

describe('CampanhasUsuariosForm', () => {
    let component: CampanhasUsuariosForm;
    let fixture: ComponentFixture<CampanhasUsuariosForm>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CampanhasUsuariosForm],
        }).compileComponents();

        fixture = TestBed.createComponent(CampanhasUsuariosForm);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
