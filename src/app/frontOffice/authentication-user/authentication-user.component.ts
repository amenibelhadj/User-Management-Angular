import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";



interface User {
  roles: string[];
  jti: string;
  sub: string;
  iat: number;
  exp: number;
}

interface AuthenticationResponse {
  token: string;
}

@Component({
  selector: 'app-authentication-user',
  templateUrl: './authentication-user.component.html',
  styleUrls: ['./authentication-user.component.css']
})
export class AuthenticationUserComponent {
  email!: string;
  password!: string;
  role!: string;

  constructor(
    private userService: UserService,
    private router: Router) {}

  onSubmit() {
    const request = { email: this.email, password: this.password };
    this.userService.authenticate(request).subscribe(
      (response: AuthenticationResponse) => {
        console.log(response.token);
        // Enregistrer le token JWT dans le localStorage
        localStorage.setItem('token', response.token);

        // Rediriger l'utilisateur en fonction de son rôle
        const user: User = JSON.parse(atob(response.token.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur
        const role = user.roles[0];
        console.log(role);

        if (role === 'VENDOR') {
          this.router.navigate(['user/vendor']);
        } else if (role === 'ADMIN') {
          this.router.navigate(['admin']);
        } else if (role === 'PROVIDER') {
          this.router.navigate(['user/provider']);
        } else if (role === 'LIVREUR') {
          this.router.navigate(['user/livreur']);
        } else if (role === 'BUYER') {
          this.router.navigate(['user/buyer']);
        }
        else {
          console.error('Unknown role:', role);
        }
      },
      error => {
        console.error(error);
      }
    );
  }


  redirectToForgot() {
    console.log("ok");
    this.router.navigate(['user/forgot-password']);
  }
}
