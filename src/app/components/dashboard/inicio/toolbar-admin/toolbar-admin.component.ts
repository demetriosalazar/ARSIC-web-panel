import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  styleUrls: ['./toolbar-admin.component.css']
})
export class ToolbarAdminComponent implements OnInit {

  constructor() { }

  name:string = "";

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;

  }

}
