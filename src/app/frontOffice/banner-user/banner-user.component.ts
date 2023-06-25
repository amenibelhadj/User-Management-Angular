import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-banner-user',
  templateUrl: './banner-user.component.html',
  styleUrls: ['./banner-user.component.css']
})
export class BannerUserComponent implements OnInit{
  constructor(private router: Router) {
  }
  ngOnInit() {
  }
  redirectToHome() {
    console.log("ok");
    this.router.navigate(['user']);
  }
}
