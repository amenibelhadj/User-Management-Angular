import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.css']
})
export class ShowAdminComponent implements OnInit{
  users!: User[];

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(users => this.users = users);
  }

  onUserClick(id: number) {
    this.router.navigate(['/admin/details', id]);
  }

  redirectToUpdate() {
    this.router.navigate(['/admin/update']);
  }

}
