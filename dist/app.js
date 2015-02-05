System.register(["aurelia-router", "./beers-api"], function (_export) {
  "use strict";

  var Router, BeersApi, _prototypeProperties, _classCallCheck, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_beersApi) {
      BeersApi = _beersApi.BeersApi;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router, beersApi) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia Beer";
            config.map([{ route: "", moduleId: "home", nav: true }, { route: "beers/:id", moduleId: "beer" }]);
          });

          this.beersApi = beersApi;
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router, BeersApi];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.beersApi.fetchAll().then(function (response) {
                _this.beers = response.content.beers;
              });
            },
            writable: true,
            configurable: true
          },
          selectBeer: {
            value: function selectBeer(beer) {
              this.router.navigate("beers/" + beer.id);
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});