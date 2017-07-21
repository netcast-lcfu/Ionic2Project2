import { Component } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name:'contact',
  segment:'contact'
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

}
