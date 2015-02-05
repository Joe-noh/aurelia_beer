import {Router} from 'aurelia-router';
import {BeersApi} from './beers-api'

export class App {
  static inject() {
    return [Router, BeersApi];
  }

  constructor(router, beersApi) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia Beer';
      config.map([
        {route: '',          moduleId: 'home', nav: true},
        {route: 'beers/:id', moduleId: 'beer'}
      ]);
    });

    this.beersApi = beersApi;
  }

  activate() {
    return this.beersApi.fetchAll().then(response => {
      this.beers = response.content.beers;
    });
  }

  selectBeer(beer) {
    this.router.navigate('beers/' + beer.id);
  }
}
