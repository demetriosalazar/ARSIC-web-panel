import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmar-borrar',
  templateUrl: './modal-confirmar-borrar.component.html',
  styleUrls: ['./modal-confirmar-borrar.component.css']
})
export class ModalConfirmarBorrarComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<ModalConfirmarBorrarComponent>,
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
