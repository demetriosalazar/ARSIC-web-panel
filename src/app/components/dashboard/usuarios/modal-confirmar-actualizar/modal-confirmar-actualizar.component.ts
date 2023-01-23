import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmar-actualizar',
  templateUrl: './modal-confirmar-actualizar.component.html',
  styleUrls: ['./modal-confirmar-actualizar.component.css']
})
export class ModalConfirmarActualizarComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<ModalConfirmarActualizarComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }


  ngOnInit(): void {
  }

}
