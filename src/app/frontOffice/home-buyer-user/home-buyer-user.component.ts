import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-buyer-user',
  templateUrl: './home-buyer-user.component.html',
  styleUrls: ['./home-buyer-user.component.css']
})
export class HomeBuyerUserComponent  {
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
    this.router.navigate(['user/buyer']);
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
