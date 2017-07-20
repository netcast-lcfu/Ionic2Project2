import { Component } from '@angular/core';
import { NavController,LoadingController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public userInfo:any = {
    username:'',
    password:''
  };

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log('username:'+this.userInfo.username);
    console.log('password:'+this.userInfo.password);
    let loader = this.loadingCtrl.create({
      content: "登录中..."
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.push(TabsPage);
    }, 1000);

  }

}
