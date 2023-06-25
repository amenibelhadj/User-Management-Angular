import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Email} from "../../models/Email";

@Component({
  selector: 'app-mail-admin',
  templateUrl: './mail-admin.component.html',
  styleUrls: ['./mail-admin.component.css']
})
export class MailAdminComponent implements OnInit{
  emails!: Email[];

  constructor(private emailService: UserService) { }

  ngOnInit(): void {
    this.emailService.getAllEmails().subscribe(
      (data: Email[]) => {
        this.emails = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
