import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';

@IonicPage({
  name:'tabs',
  segment:'tabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'home';
  tab2Root = 'contact';
  tab3Root = 'chat';
  tab4Root = 'about';
  tab5Root = 'setting';
  constructor() {

  }
}
