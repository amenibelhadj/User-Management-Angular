import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-password-user',
  templateUrl: './update-password-user.component.html',
  styleUrls: ['./update-password-user.component.css']
})
export class UpdatePasswordUserComponent {
  email!: string;
  oldPassword!: string;
  newPassword!: string;

  constructor(private userService: UserService,private router: Router) {}

  onSubmit() {
    this.userService.updatePassword(this.email, this.oldPassword, this.newPassword).subscribe(
      (response) => {
        console.log("updated succefully !!");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
