import {BeersApi} from './beers-api';

export class Beer {
  static inject() {
    return [BeersApi];
  }

  constructor(beersApi) {
    this.beersApi = beersApi;
  }

  activate(params) {
    return this.beersApi.fetch(params.id).then(response => {
      this.beer = response.content;
    });
  }
}
