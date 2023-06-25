import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User";

@Component({
  selector: 'app-navbar2-user',
  templateUrl: './navbar2-user.component.html',
  styleUrls: ['./navbar2-user.component.css']
})
export class Navbar2UserComponent {

  user!:User

  constructor(private userService: UserService,private router: Router,private http: HttpClient) {}

  logout() {
    localStorage.removeItem('token'); // supprimer le token JWT du localStorage
    this.router.navigate(['user/authenticate']); // rediriger l'utilisateur vers la page de connexion
  }
  redirectToQrCode() {
    console.log("ok");
    this.router.navigate(['user/qrcode']);
  }
  redirectToSend() {
    console.log("ok");
    this.router.navigate(['user/send-mail']);
  }
  redirectToUpload() {
    console.log("ok");
    this.router.navigate(['user/upload-logo']);
  }
  redirectToUnsubscribe() {
    console.log("ok");
    this.router.navigate(['user/unsubscribe']);
  }
  redirectToUpdate() {
    console.log("ok");
    this.router.navigate(['user/update-pwd']);
  }

}
