import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@IonicPage({
  name: 'signaturepad',
  segment: 'signaturepad'
})
@Component({
  selector: 'page-signaturepad',
  templateUrl: 'signaturepad.html',
})
export class SignaturepadPage implements OnInit {
  public title: string;

  public imgSrc: String = '';

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //初始化(执行在视图初始化之前)
  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); // set szimek/signature_pad options at runtime
    this.signaturePad.set('canvasWidth', document.getElementById("signaturePadContainer").offsetWidth);
    this.signaturePad.set('canvasHeight', '300');
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  saveSignature(): void {
    var data = this.signaturePad.toDataURL('image/png');
    this.imgSrc = data;
// Send data to server instead...
//     window.open(data);
  }

  clearSignaturePad(): void {
    this.signaturePad.clear();
    this.imgSrc = '';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturepadPage');
    this.title = this.navParams.get('title');
  }

}
