import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistraUsuarioService } from 'src/app/services/registra-usuario.service';
import { ModalEditUserComponent } from '../../usuarios/modal-edit-user/modal-edit-user.component';
import { Department } from '../../../../interfaces/InterfaceAllDepartment';
import { ModalConfirmarActualizarComponent } from '../modal-confirmar-actualizar/modal-confirmar-actualizar.component';

@Component({
  selector: 'app-modal-editar-departamento',
  templateUrl: './modal-editar-departamento.component.html',
  styleUrls: ['./modal-editar-departamento.component.css']
})
export class ModalEditarDepartamentoComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private registraUsuarioService : RegistraUsuarioService,
    private fb:FormBuilder, 
    public dialogRef: MatDialogRef<ModalEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Department

  ) { 


    this.RegisForm =  this.fb.group({
      name: [this.data.name,Validators.required],
      ubi: [this.data.ubication,Validators.required]
    })
  }

  RegisForm: FormGroup;

  ngOnInit(): void {
  }

  actualizarconf(){
    this.dialog
    .open(ModalConfirmarActualizarComponent, {
     
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.actualizar();
      }
    });
  }

  actualizar(){
    
  }

}
