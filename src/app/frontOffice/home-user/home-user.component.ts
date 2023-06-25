import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit{
  data = 'https://docs.google.com/forms/d/1hQxF5fPpXjVDK4WWPt9O6hEM1bwmDnkGlEp13INMw2A/prefill';
  imageUrl!: string;

  constructor() { }

  generateQRCode2(): void {
    const qrCodeElement = document.getElementById('qrcode');

    // Appel de la méthode 'toCanvas' de la bibliothèque qrcode.js pour générer le code QR
    QRCode.toCanvas(qrCodeElement, this.data, function(error) {
      if (error) {
        console.error("error");
      } else {
        console.log('Code QR généré avec succès !');
      }
    });
  }

  ngOnInit(): void {
    this.generateQRCode2()
  }

}
