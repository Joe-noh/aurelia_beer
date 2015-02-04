import {HttpClient} from 'aurelia-http-client';

var beers = [
  {id: 1, name: 'Asahi Super Dry', description: 'good'},
  {id: 2, name: 'Kirin Ichiban-Shibori', description: 'okay'},
  {id: 3, name: 'Suntory The Premium Malts', description: 'awesome'}
];

export class BeersApi {
  static inject() { return [HttpClient]; }

  constructor(http) {
    this.http = http;
  }

  fetchAll() {
    return new Promise(resolve => {
      resolve(beers);
    });
  }

  fetch(id) {
    return new Promise(resolve => {
      resolve(beers.find(beer => beer.id == id));
    });
  }
}
