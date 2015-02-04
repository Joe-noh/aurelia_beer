import {Parent} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class Beer {
  static inject() {
    return [Parent.of(Router)];
  }

  constructor(router) {
    this.router = router;
  }

  canActivate(params) {
    this.beerId = Number(params.id);

    if (Number.isNaN(this.beerId)) {
      return false; // refuse activation
    }
  }
}
