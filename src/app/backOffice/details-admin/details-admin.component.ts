import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-details-admin',
  templateUrl: './details-admin.component.html',
  styleUrls: ['./details-admin.component.css']
})
export class DetailsAdminComponent implements OnInit {
  user: User= new User();
  email!: string;
  logoData: any;
  etat!:boolean;
  id = this.route.snapshot.paramMap.get('id');
  selectedFile!: File;
  logoUrl!: string;
  userLogoUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.userService.getUserById(+id)
      .subscribe(user => {
        this.user = user;
        this.getUserLogo();
      });
  }
  reload() {
    console.log("ok");
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/admin/details', id]);
  }

  redirectToShow() {
    console.log("ok");
    this.router.navigate(['admin/pag']);
  }

  getUserLogo() {
    this.http.get(`http://localhost:8075/user/${this.user.email}/logo`, {responseType: 'blob'})
      .subscribe((data) => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.logoData = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  public deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        console.log('User deleted successfully!');
        this.router.navigateByUrl('admin/pag');
      });
    }
  }

  banUser(email: string): void {
    this.userService.banUser(email).subscribe(
      data => {
        console.log(data);
      },
      error => {console.log(error);
    console.log('Erreur lors du rechargement de la page')}
    );
  }

  unbanUser(email: string): void {
    this.userService.unbanUser(email).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error)
    );
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
    this.userService.uploadLogo(this.selectedFile, this.user.email).subscribe(
      res => {
        console.log(res);
        this.logoUrl = URL.createObjectURL(this.selectedFile);
      },
      err => console.log(err)
    );
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
