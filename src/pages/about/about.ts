import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SignaturepadPage} from '../signaturepad/signaturepad';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goToSignaturepad(): void {
    this.navCtrl.push(SignaturepadPage,{title:'SignaturePad'});
  }

}
