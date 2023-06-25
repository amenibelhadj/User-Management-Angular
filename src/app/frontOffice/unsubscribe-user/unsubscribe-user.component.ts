import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-unsubscribe-user',
  templateUrl: './unsubscribe-user.component.html',
  styleUrls: ['./unsubscribe-user.component.css']
})
export class UnsubscribeUserComponent {

  email!: string;
  isLoading: boolean = false;

  constructor(private newsletterService: UserService) {
  }

  unsubscribe(): void {
    this.isLoading = true;

    this.newsletterService.unsubscribe(this.email)
      .subscribe(response => {
          console.log("unsubscribed successfully !!");
          this.isLoading = false;},

        error => {
          console.error("error");
          this.isLoading = false;}
      );
  }
  logout() {

  }


}
