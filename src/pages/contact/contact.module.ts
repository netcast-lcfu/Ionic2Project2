import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ContactPage} from './contact';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    HttpModule,
    IonicPageModule.forChild(ContactPage)
  ],
  exports: [
    ContactPage
  ]
})
export class ContactPageModule {
}
