import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  constructor(private router: Router) {
  }
  redirectToShow() {
    console.log("ok");
    this.router.navigate(['admin/pag']);
  }
  redirectToHome() {
    console.log("ok");
    this.router.navigate(['admin']);
  }

  redirectToRegister() {
    console.log("ok");
    this.router.navigate(['admin/register']);
  }
  redirectToSend() {
    console.log("ok");
    this.router.navigate(['admin/send-mail']);
  }
  redirectToReceive() {
    console.log("ok");
    this.router.navigate(['admin/mail']);
  }
  logout() {
    localStorage.removeItem('token'); // supprimer le token JWT du localStorage
    this.router.navigate(['user/authenticate']); // rediriger l'utilisateur vers la page de connexion
  }
}
