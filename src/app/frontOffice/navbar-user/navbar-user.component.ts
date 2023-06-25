import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent{
  constructor(private router: Router) {
  }
  redirectToRegister() {
    console.log("ok");
    this.router.navigate(['user/register']);
  }
  redirectToAuthenticate() {
    console.log("ok");
    this.router.navigate(['user/authenticate']);
  }
  redirectToHome() {
    console.log("ok");
    this.router.navigate(['user']);
  }
  redirectToRegisterLivreur() {
    console.log("ok");
    this.router.navigate(['user/register-livreur']);
  }
  redirectToRegisterBuyer() {
    console.log("ok");
    this.router.navigate(['user/register-buyer']);
  }
  redirectToRegisterProvider() {
    console.log("ok");
    this.router.navigate(['user/register-provider']);
  }
  redirectToRegisterVendor() {
    console.log("ok");
    this.router.navigate(['user/register-vendor']);
  }
  redirectToQrCode() {
    console.log("ok");
    this.router.navigate(['user/qrcode']);
  }
  redirectToSend() {
    console.log("ok");
    this.router.navigate(['user/send-mail']);
  }

  redirectToRegisterAdmin() {
    console.log("ok");
    this.router.navigate(['user/register-admin']);
  }
}
