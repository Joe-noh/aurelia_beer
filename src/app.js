import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }

  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Beer';
      config.map([
        {route: '', moduleId: 'home', nav: true, title: 'Beer'}
      ]);
    });
  }
}
