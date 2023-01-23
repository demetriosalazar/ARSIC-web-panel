import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmarActualizarComponent } from './modal-confirmar-actualizar.component';

describe('ModalConfirmarActualizarComponent', () => {
  let component: ModalConfirmarActualizarComponent;
  let fixture: ComponentFixture<ModalConfirmarActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmarActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmarActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
