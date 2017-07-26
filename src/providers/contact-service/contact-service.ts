import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactServiceProvider {
  private data: any;
  private url: string = 'https://api.github.com/orgs/angular/members?page=1&per_page=5';

  constructor(public http: Http) {
    console.log('Hello ContactServiceProvider Provider');
  }

  getContacts() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          reject(err);
        });
    });
  }

}
