import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-upload-logo-user',
  templateUrl: './upload-logo-user.component.html',
  styleUrls: ['./upload-logo-user.component.css']
})
export class UploadLogoUserComponent {
  selectedFile!: File;
  email!: string;
  logoUrl!: string;
  logoData: any;
  userLogoUrl!: string;
  isLoading: boolean = false;

  constructor(private uploadService: UserService, private route: ActivatedRoute,private http: HttpClient) {
  }

  onFileSelected(event: Event) {
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.selectedFile = inputElement.files[0];
    } else {
      console.error('No file selected');
    }
  }

  onUpload() {
    this.isLoading = true;
    this.uploadService.uploadLogo(this.selectedFile, this.email).subscribe(
      res => {
        console.log(res);
        this.logoUrl = URL.createObjectURL(this.selectedFile);
        this.isLoading = false;
      },
      err => console.log(err)
    );
    this.isLoading = false;
    const email = this.email;
    this.userLogoUrl = `http://localhost:8075/user/${email}/logo`;
    this.http.get(this.userLogoUrl, { responseType: 'arraybuffer' })
      .subscribe(response => {
        const bytes = new Uint8Array(response);
        const numbers = Array.from(bytes);
        const base64String = btoa(String.fromCharCode(...numbers));
        this.userLogoUrl = 'data:image/jpeg;base64,' + base64String;
      });
  }


}
