System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, baseUrl, BeersApi;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      baseUrl = "http://api.openbeerdatabase.com/v1/";
      BeersApi = _export("BeersApi", (function () {
        function BeersApi(http) {
          _classCallCheck(this, BeersApi);

          this.http = http;
        }

        _prototypeProperties(BeersApi, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          fetchAll: {
            value: function fetchAll() {
              return this.http.jsonp("" + baseUrl + "beers.json", "callback");
            },
            writable: true,
            configurable: true
          },
          fetch: {
            value: function fetch(id) {
              return this.http.jsonp("" + baseUrl + "beers/" + id + ".json", "callback");
            },
            writable: true,
            configurable: true
          }
        });

        return BeersApi;
      })());
    }
  };
});