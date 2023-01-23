import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmar-actualizar',
  templateUrl: './modal-confirmar-actualizar.component.html',
  styleUrls: ['./modal-confirmar-actualizar.component.css']
})
export class ModalConfirmarActualizarComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<ModalConfirmarActualizarComponent>) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }

  ngOnInit(): void {
  }

}
