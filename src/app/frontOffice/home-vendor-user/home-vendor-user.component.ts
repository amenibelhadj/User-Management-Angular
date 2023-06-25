import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home-vendor-user',
  templateUrl: './home-vendor-user.component.html',
  styleUrls: ['./home-vendor-user.component.css']
})
export class HomeVendorUserComponent {
  constructor(private userService: UserService,private router: Router) {
  }
  logout() {
    localStorage.removeItem('token'); // supprimer le token JWT du localStorage
    this.router.navigate(['user/authenticate']); // rediriger l'utilisateur vers la page de connexion
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
    this.router.navigate(['user/vendor']);
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
}
