import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  constructor(private router: Router) {
  }
  redirectToShow() {
    console.log("ok");
    this.router.navigate(['admin/pag']);
  }

}
