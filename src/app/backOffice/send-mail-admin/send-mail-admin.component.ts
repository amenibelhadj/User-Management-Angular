import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-send-mail-admin',
  templateUrl: './send-mail-admin.component.html',
  styleUrls: ['./send-mail-admin.component.css']
})
export class SendMailAdminComponent {
  to!: string;
  subject!: string;
  body!: string;
  isLoading: boolean = false;

  constructor(private emailService: UserService) { }

  sendMail() {
    this.isLoading = true;
    this.emailService.sendMail(this.to, this.subject, this.body).subscribe(
      () => {this.isLoading = false;
        alert('E-mail sent successfully');
        },
      error => {console.error(error);this.isLoading = false;}
    );
  }

}
