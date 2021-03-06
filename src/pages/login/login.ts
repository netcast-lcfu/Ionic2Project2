import {Component} from '@angular/core';
import {IonicPage, NavController, LoadingController, NavParams} from 'ionic-angular';

@IonicPage({
  name: 'login',
  segment: 'login'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public userInfo: any = {
    username: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log('username:' + this.userInfo.username);
    console.log('password:' + this.userInfo.password);
    let loader = this.loadingCtrl.create({
      content: "登录中..."
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.push('tabs');
    }, 1000);

  }

}
