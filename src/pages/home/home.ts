import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public myDate :Object = new Date();

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showDateValue(){
    console.log(this.myDate);
  }

}
