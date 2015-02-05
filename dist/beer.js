System.register(["./beers-api"], function (_export) {
  "use strict";

  var BeersApi, _prototypeProperties, _classCallCheck, Beer;
  return {
    setters: [function (_beersApi) {
      BeersApi = _beersApi.BeersApi;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Beer = _export("Beer", (function () {
        function Beer(beersApi) {
          _classCallCheck(this, Beer);

          this.beersApi = beersApi;
        }

        _prototypeProperties(Beer, {
          inject: {
            value: function inject() {
              return [BeersApi];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params) {
              var _this = this;
              return this.beersApi.fetch(params.id).then(function (response) {
                _this.beer = response.content;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Beer;
      })());
    }
  };
});