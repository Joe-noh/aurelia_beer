System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, baseUrl, Beers;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      baseUrl = "http://api.openbeerdatabase.com";
      Beers = _export("Beers", (function () {
        function Beers(http) {
          _classCallCheck(this, Beers);

          this.heading = "Beer!";
          this.beers = [{ name: "asahi" }];
          this.http = http;
        }

        _prototypeProperties(Beers, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              console.log("beers activated");
            },
            writable: true,
            configurable: true
          }
        });

        return Beers;
      })());
    }
  };
});