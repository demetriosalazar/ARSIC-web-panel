import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerUsuariosComponent } from './modal-ver-usuarios.component';

describe('ModalVerUsuariosComponent', () => {
  let component: ModalVerUsuariosComponent;
  let fixture: ComponentFixture<ModalVerUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVerUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
