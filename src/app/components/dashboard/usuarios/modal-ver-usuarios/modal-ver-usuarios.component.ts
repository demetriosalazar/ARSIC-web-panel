import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataUsers } from 'src/app/interfaces/InterfaceAllUser';
import { ModalEditUserComponent } from '../modal-edit-user/modal-edit-user.component';

@Component({
  selector: 'app-modal-ver-usuarios',
  templateUrl: './modal-ver-usuarios.component.html',
  styleUrls: ['./modal-ver-usuarios.component.css']
})
export class ModalVerUsuariosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalVerUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataUsers
  ) { }

  ngOnInit(): void {
  }

}
