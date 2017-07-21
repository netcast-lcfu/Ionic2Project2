import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage({
  name: 'chat',
  segment: 'chat'
})
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController) {

  }

}
