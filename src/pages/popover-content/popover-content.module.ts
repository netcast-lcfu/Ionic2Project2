import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PopoverContentPage} from './popover-content';

@NgModule({
  declarations: [
    PopoverContentPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverContentPage),
  ],
  exports: [
    PopoverContentPage
  ]
})
export class PopoverContentPageModule {
}
