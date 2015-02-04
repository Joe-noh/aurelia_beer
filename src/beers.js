import {HttpClient} from 'aurelia-http-client';

let baseUrl = 'http://api.openbeerdatabase.com';

export class Beers {
  static inject() { return [HttpClient]; }

  constructor(http) {
    this.heading = 'Beer!';
    this.beers = [{name: "asahi"}];
    this.http = http;
  }

  activate() {
    console.log('beers activated');
  }
}
