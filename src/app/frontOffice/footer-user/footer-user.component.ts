import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer-user',
  templateUrl: './footer-user.component.html',
  styleUrls: ['./footer-user.component.css']
})
export class FooterUserComponent {
  email!: string;
  constructor(private newsletterService: UserService,private router: Router) {
  }

  subscribe(): void {
    this.newsletterService.subscribe(this.email)
      .subscribe(response => {
        console.log("subscribed successfully !!")},
        error => {
          console.error("error");}
        );
  }


  unsubscribe(): void {
    this.newsletterService.unsubscribe(this.email)
      .subscribe(response => console.log(response));
  }
  redirectToHome() {
    console.log("ok");
    this.router.navigate(['user']);
  }

}
