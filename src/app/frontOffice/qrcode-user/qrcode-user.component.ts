import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as QRCode from "qrcode";

@Component({
  selector: 'app-qrcode-user',
  templateUrl: './qrcode-user.component.html',
  styleUrls: ['./qrcode-user.component.css']
})
export class QrcodeUserComponent implements OnInit{
  data = 'https://docs.google.com/forms/d/1hQxF5fPpXjVDK4WWPt9O6hEM1bwmDnkGlEp13INMw2A/prefill';
  imageUrl!: string;
  backgroundImage!: string;
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
