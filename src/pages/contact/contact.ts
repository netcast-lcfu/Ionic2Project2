import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, LoadingController, AlertController, ItemSliding} from 'ionic-angular';
import {ContactServiceProvider} from '../../providers/contact-service/contact-service';
import {Contact} from "../../model/contact";

@IonicPage({
  name: 'contact',
  segment: 'contact'
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ContactServiceProvider]
})

export class ContactPage implements OnInit {
  private contactDatas: Array<Contact>;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public contactService: ContactServiceProvider) {
  }

  ngOnInit() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.contactService.getContacts().then(data => {
      loading.dismiss();
      console.log('get contact success...');
      // console.log(data);
      this.contactDatas = data;
      console.log(this.contactDatas);
    }, err => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: '提示',
        subTitle: '获取数据失败!错误原因:' + err,
        buttons: ['OK']
      });
      alert.present();

      console.log('get contact fail...' + err);
    });
  }

  doRefresh(refresher): void {
    let contact = new Contact();
    let contact1: Contact = {id: 10089, login: 'Test10089', avatar_url: this.contactDatas[1].avatar_url};
    contact.id = 10086;
    contact.login = 'Test10086';
    contact.avatar_url = this.contactDatas[0].avatar_url;
    setTimeout(() => {
      this.contactDatas.push(contact);
      this.contactDatas.push(contact1);
      console.log('refresh success');
      refresher.complete();
    }, 2000);
  }

  showContact(id) {
    console.log('contact id :' + id);
  }

  saveItem(contact) {
    console.log(contact);
  }

  archive(contact, slidingItem: ItemSliding) {
    console.log(contact);
    slidingItem.close();
  }

  more(contact, slidingItem: ItemSliding) {
    console.log(contact);
    slidingItem.close();
  }

  delete(contact, slidingItem: ItemSliding) {
    console.log(contact);
    slidingItem.close();
  }

}
