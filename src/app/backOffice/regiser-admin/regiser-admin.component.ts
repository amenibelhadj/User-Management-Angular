import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-regiser-admin',
  templateUrl: './regiser-admin.component.html',
  styleUrls: ['./regiser-admin.component.css']
})
export class RegiserAdminComponent {
  constructor(private router: Router) {
  }
  redirectToRegisterBuyer() {
    console.log("ok");
    this.router.navigate(['admin/register-buyer']);
  }
  redirectToRegisterVendor() {
    console.log("ok");
    this.router.navigate(['admin/register-vendor']);
  }
  redirectToRegisterProvider() {
    console.log("ok");
    this.router.navigate(['admin/register-provider']);
  }
  redirectToRegisterDeliveryman() {
    console.log("ok");
    this.router.navigate(['admin/register-livreur']);
  }
}
