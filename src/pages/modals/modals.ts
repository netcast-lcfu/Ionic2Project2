import {Component} from '@angular/core';
import {ModalController, IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';

@IonicPage({
  name: 'modals',
  segment: 'modals'
})
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html'
})
export class ModalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsPage');
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create('modal-content', characterNum);
    modal.present();
  }

}

