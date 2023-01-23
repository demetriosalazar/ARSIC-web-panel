import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataUsers } from 'src/app/interfaces/InterfaceAllUser';
import { AllUsersTableService } from 'src/app/services/all-users-table.service';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import { Role } from 'src/app/interfaces/RespApi';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditUserComponent } from './modal-edit-user/modal-edit-user.component';
import { environment } from '../../../../environments/environment';
import { ModalConfirmarBorrarComponent } from './modal-confirmar-borrar/modal-confirmar-borrar.component';
import { RegistraUsuarioService } from '../../../services/registra-usuario.service';
import { ModalVerUsuariosComponent } from './modal-ver-usuarios/modal-ver-usuarios.component';
import { RespEditar } from '../../../interfaces/Interfaces';
import { User } from '../../../interfaces/RespApi';





  @Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
  })




export class UsuariosComponent implements OnInit {

  role_selected: string = "USER_ROLE" ;

  roles!: Role[];


  constructor(
    public dialog: MatDialog,
    private AllUsersTableService: AllUsersTableService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private ServicesByStatusService: ServicesByStatusService,
    private service : RegistraUsuarioService
    ) {

     }

    ngOnInit(): void {

        this.cargarRoles()

        this.activatedRoute.queryParams.subscribe((querys:any)=>{
        //console.log(querys.page)
        if(!querys.page){
          this.PaginaActual= 1;
        }
        else{this.PaginaActual=querys.page}

        if(!querys.value){
          this.role_selected= 'USER_ROLE'
        }
        else{ this.role_selected=querys.value}

        this._getInitUsers(this.role_selected, this.PaginaActual)
      })
    }

    get _Users(){

    return this.AllUsersTableService.DataTable

    }


  PaginaActual : number =1;
  Cargando= false;
  TotalResultados: number = 0;


  ELEMENT_DATA_TABLE: DataUsers[] = this._Users;
  displayedColumns: string[] = ['Foto', 'Usuario', 'Nombre', 'Role', 'Acciones'];
  dataSource = new  MatTableDataSource <DataUsers>(this.ELEMENT_DATA_TABLE);




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  _getInitUsers(role : string, page: number){

    //console.log(`${role}     ${page}`);

    const url= environment.baseURL + '/api';

    this.Cargando=true;
    this.AllUsersTableService.Get_UserAPI(role,page).subscribe(
      resp=> {
        this.dataSource.data = resp.users as DataUsers[]

        this.dataSource.data.forEach((elem)=>{

          elem.image= `${url}/images/users/${elem.image}`

        });

        this.TotalResultados= resp.totalResults;
        //console.log(resp)
        this.Cargando= false;
      }

    )
  }

  cargarRoles(){

    this.ServicesByStatusService.Get_RolesAPI().subscribe(
      resp=>{
        this.roles=resp.roles
        console.log(resp.roles);
      }
    )

  }

  cambioRole(newRole : any){

    //this._getInitUsers(1)

    this.router.navigateByUrl(`dashboard/usuarios?page=1&value=${newRole}`)
    //console.log(`ROLES TS   `+ newRole +`  ---->   ` + `dashboard/usuarios?page=1&role=${newRole}`  );


  }


  editar (User:DataUsers ){

    this.dialog.open(ModalEditUserComponent, {width: '300px',data:User})
    .afterClosed()
    .subscribe((user: User)=>{
      console.log('DESPUES DE CERRAR');
      
      console.log(user);
      //window.location.reload()
      //this.dataSource.data = this.dataSource.data.filter(element=>element._id != user._id)
    })


    console.log(User);
    
  }

  borrar(id : any){
    this.dialog
      .open(ModalConfirmarBorrarComponent, {
       
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {

          this.service.borrar(id).subscribe(
            resp => {
              if(!resp.status){
                alert("Error");
              } else {
                this.dataSource.data = this.dataSource.data.filter((element)=>{
                    return element._id != id
                })
                //window.location.reload();
              }
            }
          );
        }
      });
    
  }

  ver(User:DataUsers){
    this.dialog.open(ModalVerUsuariosComponent, {width: '500px',data:User})


  }

}

