import {HttpClient} from 'aurelia-http-client';
import {BeersApi} from './beers-api';

export class Beers {
  static inject() { return [HttpClient, BeersApi]; }

  constructor(http, beersApi) {
    this.heading = 'Beer!';
    this.beers = [];
    this.http = http;
    this.beersApi = beersApi;
  }

  activate() {
    this.beers = this.beersApi.fetchAll();
  }
}
