import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage({
  name: 'popover-content',
  segment: 'popover-content'
})
@Component({
  selector: 'page-popover-content',
  templateUrl: 'popover-content.html',
})
export class PopoverContentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverContentPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
