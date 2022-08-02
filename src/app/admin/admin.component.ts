import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  menu: any[];

  private adminRoutes = [
    {}
  ];

  ngOnInit() {
    this.menu = this.adminRoutes;
  }

}
