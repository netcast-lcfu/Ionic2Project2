import {
  Component,
  OnInit
} from '@angular/core';
import {
  IonicPage,
  NavController,
  LoadingController,
  AlertController
} from 'ionic-angular';
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
  private myDate: string = '2016-02-02';
  private language: string = 'java';
  private gaming: Array<string> = ['nes', 'n64', 'ps'];

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public  apiService: ApiServiceProvider) {

  }

  ngOnInit() {
    // this.apiService.load().then(data => {
    //   console.log('get data success...');
    //   console.log(data);
    // }, err => {
    //   console.log('get data fail...' + err);
    // });
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

  GoToTestModals() {
    this.navCtrl.push('modals');
  }

  doSubmit() {
    console.log(this.language);
    console.log(this.gaming);
  }

}
