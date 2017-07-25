import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, LoadingController, AlertController} from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiServiceProvider]
})

export class HomePage implements OnInit {
  public myDate: string = '2016-02-02';

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public  apiService: ApiServiceProvider) {

  }

  ngOnInit() {
    this.apiService.load().then(data => {
      console.log('get data success...');
      console.log(data);
    }, err => {
      console.log('get data fail...' + err);
    });
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

  showDateValue() {
    console.log(this.myDate);
  }

  GoToTest() {
    this.navCtrl.push('test');
  }

}
