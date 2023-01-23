import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataUsers } from 'src/app/interfaces/InterfaceAllUser';
import { RegistraUsuarioService } from '../../../../services/registra-usuario.service';
import { Router } from '@angular/router';
import { RespEditar } from '../../../../interfaces/Interfaces';
import { ModalConfirmarActualizarComponent } from '../modal-confirmar-actualizar/modal-confirmar-actualizar.component';

interface Roles {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css']
})
export class ModalEditUserComponent implements OnInit {

  roles: Roles[] = [
    {value: 'ADMIN_ROLE', viewValue: 'ADMIN_ROLE'},
    {value: 'SITE_ROLE', viewValue: 'SITE_ROLE'},
    {value: 'USER_ROLE', viewValue: 'USER_ROLE'},
  ];

  RegisForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    private registraUsuarioService : RegistraUsuarioService,
    private fb:FormBuilder, 
    public dialogRef: MatDialogRef<ModalEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataUsers

  ) { 


    this.RegisForm =  this.fb.group({
      name: [this.data.name,Validators.required],
      user: [this.data.username,Validators.required],
      role: [this.data.role,Validators.required]
    })
  }

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
    const name = this.RegisForm.value.name
    const user = this.RegisForm.value.user 
    const role =this.RegisForm.value.role

    this.registraUsuarioService.editar(this.data._id, name, user, role).subscribe( resp =>{
      if((resp as RespEditar).status){
        console.log('RESPUESTA: ');
        
         
        this.dialogRef.close((resp as RespEditar).user)
        window.location.reload();
      } else{
        this.dialogRef.close((resp as RespEditar).user)
      
        console.log("Ocurrio un Error")
      }
      
    })

  }
  

}
