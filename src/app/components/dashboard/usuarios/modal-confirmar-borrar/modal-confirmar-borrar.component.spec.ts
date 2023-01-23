import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmarBorrarComponent } from './modal-confirmar-borrar.component';

describe('ModalConfirmarBorrarComponent', () => {
  let component: ModalConfirmarBorrarComponent;
  let fixture: ComponentFixture<ModalConfirmarBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmarBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmarBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
