import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  constructor(private router: Router) {
  }
  redirectToRegisterBuyer() {
    console.log("ok");
    this.router.navigate(['user/register-buyer']);
  }
  redirectToRegisterVendor() {
    console.log("ok");
    this.router.navigate(['user/register-vendor']);
  }
  redirectToRegisterProvider() {
    console.log("ok");
    this.router.navigate(['user/register-provider']);
  }
  redirectToRegisterDelivery() {
    console.log("ok");
    this.router.navigate(['user/register-livreur']);
  }

}
