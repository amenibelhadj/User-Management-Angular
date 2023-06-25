import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-send-mail-user',
  templateUrl: './send-mail-user.component.html',
  styleUrls: ['./send-mail-user.component.css']
})
export class SendMailUserComponent {

  username!: string;
  password!: string;
  recipient!: string;
  subject!: string;
  body!: string;
  isLoading: boolean = false;

  constructor(private http: HttpClient,private router: Router) { }

  sendEmail() {
    this.isLoading = true;
    const url = 'http://localhost:8075/mailbox/send';
    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);
    formData.append('recipient', this.recipient);
    formData.append('subject', this.subject);
    formData.append('body', this.body);

    this.http.post(url, formData).subscribe(
      response => {console.log(response);
        this.router.navigate(['user']);
        this.isLoading = false;},
      error => {console.log(error);this.isLoading = false;}
    );
  }

}
