import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  menu: any[] = [
    { name: "Coordenadoras", path: "/admin/coordenadoras" },
    { name: "Eventos", path: "/admin/eventos" },
  ];

  ngOnInit() {}



}
