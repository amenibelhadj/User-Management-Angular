import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Email} from "../../models/Email";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-receive-mail-user',
  templateUrl: './receive-mail-user.component.html',
  styleUrls: ['./receive-mail-user.component.css']
})
export class ReceiveMailUserComponent {
  emails!: Email[];
  errorMessage!: string;
  username!:string;
  password!:string;

  constructor(private emailService: UserService, private http: HttpClient) { }

  receiveEmails(): Observable<Email[]> {
    this.username="noreply.pidev@gmail.com";
    this.password="jhwwlvtllzoccvnh";
    const url = `http://localhost:8075/mailbox/receive?username=${this.username}&password=${this.password}`;
    return this.http.get<Email[]>(url);
  }
}
