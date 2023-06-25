import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-livreur-user',
  templateUrl: './home-livreur-user.component.html',
  styleUrls: ['./home-livreur-user.component.css']
})
export class HomeLivreurUserComponent {
  constructor(private router: Router) {
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
    this.router.navigate(['user/livreur']);
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
