import {Component} from '@angular/core';
import {IonicPage, NavParams, Platform, ViewController} from 'ionic-angular';

@IonicPage({
  name: 'modal-content',
  segment: 'modal-content'
})
@Component({
  selector: 'page-modal-content',
  templateUrl: 'modal-content.html'
})

export class ModalContentPage {
  character;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController) {
    let characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/pic1.jpg',
        items: [
          {title: 'Race', note: 'Hobbit'},
          {title: 'Culture', note: 'River Folk'},
          {title: 'Alter Ego', note: 'Smeagol'}
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/pic2.jpg',
        items: [
          {title: 'Race', note: 'Hobbit'},
          {title: 'Culture', note: 'Shire Folk'},
          {title: 'Weapon', note: 'Sting'}
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/pic3.jpg',
        items: [
          {title: 'Race', note: 'Hobbit'},
          {title: 'Culture', note: 'Shire Folk'},
          {title: 'Nickname', note: 'Sam'}
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}


