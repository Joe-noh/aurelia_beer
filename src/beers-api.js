import {HttpClient} from 'aurelia-http-client';

let baseUrl = 'http://api.openbeerdatabase.com/v1/';

export class BeersApi {
  static inject() { return [HttpClient]; }

  constructor(http) {
    this.http = http;
  }

  fetchAll() {
    return this.http.jsonp(`${baseUrl}beers.json`, 'callback');
  }

  fetch(id) {
    return this.http.jsonp(`${baseUrl}beers/${id}.json`, 'callback');
  }
}
