import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerDepartamentoComponent } from './modal-ver-departamento.component';

describe('ModalVerDepartamentoComponent', () => {
  let component: ModalVerDepartamentoComponent;
  let fixture: ComponentFixture<ModalVerDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVerDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
