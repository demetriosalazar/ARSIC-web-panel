import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AllDepartmentsService } from '../../../services/all-departments.service';
import { Department } from '../../../interfaces/InterfaceAllDepartment';
import { MatTableDataSource } from '@angular/material/table'
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmarBorrarComponent } from './modal-confirmar-borrar/modal-confirmar-borrar.component';
import { ModalEditarDepartamentoComponent } from './modal-editar-departamento/modal-editar-departamento.component';
import { DataUsers } from 'src/app/interfaces/InterfaceAllUser';
import { ModalVerDepartamentoComponent } from './modal-ver-departamento/modal-ver-departamento.component';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private AllDepartmentsService: AllDepartmentsService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this._getAllDepartaments();
  }

  get _Departments(){

    return this.AllDepartmentsService.DataTable

  }

  ELEMENT_DATA_TABLE: Department[] = this._Departments;
  displayedColumns: string[] = ['Nombre', 'Usuario', 'Ubicacion', 'Acciones'];
  dataSource = new  MatTableDataSource <Department>(this.ELEMENT_DATA_TABLE);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  _getAllDepartaments(){
    this.AllDepartmentsService.AllDepartments_API().subscribe(

      resp=> this.dataSource.data = resp.departments as Department[]

    )
  }

  borrar(id : any){
    this.dialog
      .open(ModalConfirmarBorrarComponent, {
       
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          console.log(id);
          
        }
      });
    
  }

  ver(element:Department){
    this.dialog.open(ModalVerDepartamentoComponent, {width: '500px',data:element})
    console.log(element);
    

  }

  editar (element:Department ){

    this.dialog.open(ModalEditarDepartamentoComponent, {width: '300px',data:element})
    .afterClosed()
    .subscribe((user: Department)=>{
      console.log('DESPUES DE CERRAR');
      
      console.log(user);
      //window.location.reload()
      //this.dataSource.data = this.dataSource.data.filter(element=>element._id != user._id)
    })


    console.log(element);
    
  }

}
