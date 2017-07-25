import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HomePage} from './home';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {
}
