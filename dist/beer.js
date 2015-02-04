System.register(["aurelia-framework", "aurelia-router"], function (_export) {
  "use strict";

  var Parent, Router, _prototypeProperties, _classCallCheck, Beer;
  return {
    setters: [function (_aureliaFramework) {
      Parent = _aureliaFramework.Parent;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Beer = _export("Beer", (function () {
        function Beer(router) {
          _classCallCheck(this, Beer);

          this.router = router;
        }

        _prototypeProperties(Beer, {
          inject: {
            value: function inject() {
              return [Parent.of(Router)];
            },
            writable: true,
            configurable: true
          }
        }, {
          canActivate: {
            value: function canActivate(params) {
              this.beerId = Number(params.id);

              if (Number.isNaN(this.beerId)) {
                return false;
              }
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