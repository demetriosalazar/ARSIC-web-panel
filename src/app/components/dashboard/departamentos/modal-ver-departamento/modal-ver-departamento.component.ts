import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Department } from '../../../../interfaces/InterfaceAllDepartment';

@Component({
  selector: 'app-modal-ver-departamento',
  templateUrl: './modal-ver-departamento.component.html',
  styleUrls: ['./modal-ver-departamento.component.css']
})
export class ModalVerDepartamentoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalVerDepartamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Department
  ) { }

  ngOnInit(): void {
  }

}
