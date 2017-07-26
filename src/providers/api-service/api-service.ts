import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {
  private data: any;
  private url: string = 'https://api.github.com/orgs/angular/members?page=1&per_page=5';

  // private url: string = 'http://10.1.1.63:8090/api/AGENT_CLUSTER';
  constructor(public http: Http) {
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise((resolve, reject) => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        }, err => {
          reject(err);
        });
    });
  }

  post() {
    let header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');
    let pramas = JSON.stringify({username: "", password: ""});
    return new Promise((resolve, reject) => {
      this.http.post(this.url, pramas, header)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    });
  }

  private toQueryString(obj) {
    let result = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        result = result.concat(queryValues);
      } else {
        result.push(this.toQueryPair(key, values));
      }
    }
    return result.join('&');
  }

  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }

  post2(data) {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return new Promise((resolve, reject) => {
      this.http.post(this.url, this.toQueryString(data), headers)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    });
  }

}
