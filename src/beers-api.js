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
    return beers;
  }

  fetch(id) {
    return beers.find(beer => beer.id === id);
  }
}
