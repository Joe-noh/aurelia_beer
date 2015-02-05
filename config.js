System.config({
  "paths": {
    "*": "*.js",
    "aurelia_beer/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "github:aurelia/metadata@0.3.1/system/origin",
      "github:aurelia/metadata@0.3.1/system/resource-type",
      "github:aurelia/metadata@0.3.1/system/metadata",
      "github:aurelia/loader@0.3.3/system/index",
      "github:aurelia/path@0.4.2/system/index",
      "github:aurelia/logging@0.2.2/system/index",
      "github:aurelia/dependency-injection@0.4.2/system/metadata",
      "github:aurelia/dependency-injection@0.4.2/system/util",
      "github:aurelia/templating@0.8.8/system/util",
      "github:aurelia/binding@0.3.3/system/value-converter",
      "github:aurelia/binding@0.3.3/system/event-manager",
      "github:aurelia/task-queue@0.2.3/system/index",
      "github:aurelia/binding@0.3.3/system/array-change-records",
      "github:aurelia/binding@0.3.3/system/dirty-checking",
      "github:aurelia/binding@0.3.3/system/property-observation",
      "github:aurelia/binding@0.3.3/system/binding-modes",
      "github:aurelia/binding@0.3.3/system/lexer",
      "github:aurelia/binding@0.3.3/system/path-observer",
      "github:aurelia/binding@0.3.3/system/composite-observer",
      "github:aurelia/binding@0.3.3/system/binding-expression",
      "github:aurelia/binding@0.3.3/system/listener-expression",
      "github:aurelia/binding@0.3.3/system/name-expression",
      "github:aurelia/binding@0.3.3/system/call-expression",
      "github:aurelia/templating@0.8.8/system/behavior-instance",
      "github:aurelia/templating@0.8.8/system/children",
      "github:aurelia/templating@0.8.8/system/content-selector",
      "github:aurelia/templating@0.8.8/system/resource-registry",
      "github:aurelia/templating@0.8.8/system/view",
      "github:aurelia/templating@0.8.8/system/view-slot",
      "github:aurelia/templating@0.8.8/system/binding-language",
      "github:aurelia/templating@0.8.8/system/view-strategy",
      "github:aurelia/templating@0.8.8/system/element-config",
      "github:aurelia/templating@0.8.8/system/template-controller",
      "github:aurelia/templating@0.8.8/system/resource-coordinator",
      "github:aurelia/templating@0.8.8/system/composition-engine",
      "github:aurelia/framework@0.8.6/system/plugins",
      "github:aurelia/logging-console@0.2.2/system/index",
      "github:aurelia/metadata@0.3.1/system/index",
      "github:aurelia/loader@0.3.3",
      "github:aurelia/path@0.4.2",
      "github:aurelia/logging@0.2.2",
      "github:aurelia/dependency-injection@0.4.2/system/container",
      "github:aurelia/task-queue@0.2.3",
      "github:aurelia/binding@0.3.3/system/array-observation",
      "github:aurelia/binding@0.3.3/system/ast",
      "github:aurelia/templating@0.8.8/system/behaviors",
      "github:aurelia/templating@0.8.8/system/view-factory",
      "github:aurelia/logging-console@0.2.2",
      "github:aurelia/metadata@0.3.1",
      "github:aurelia/dependency-injection@0.4.2/system/index",
      "github:aurelia/binding@0.3.3/system/observer-locator",
      "github:aurelia/binding@0.3.3/system/parser",
      "github:aurelia/templating@0.8.8/system/attached-behavior",
      "github:aurelia/templating@0.8.8/system/view-compiler",
      "github:aurelia/loader-default@0.4.1/system/index",
      "github:aurelia/dependency-injection@0.4.2",
      "github:aurelia/binding@0.3.3/system/index",
      "github:aurelia/templating@0.8.8/system/view-engine",
      "github:aurelia/loader-default@0.4.1",
      "github:aurelia/binding@0.3.3",
      "github:aurelia/templating@0.8.8/system/custom-element",
      "github:aurelia/templating@0.8.8/system/property",
      "github:aurelia/templating@0.8.8/system/index",
      "github:aurelia/templating@0.8.8",
      "github:aurelia/framework@0.8.6/system/aurelia",
      "github:aurelia/framework@0.8.6/system/index",
      "github:aurelia/framework@0.8.6",
      "github:aurelia/bootstrapper@0.9.3/system/index",
      "github:aurelia/bootstrapper@0.9.3",
      "github:aurelia/route-recognizer@0.2.2/system/dsl",
      "github:aurelia/router@0.5.4/system/navigation-plan",
      "github:aurelia/router@0.5.4/system/navigation-instruction",
      "github:aurelia/router@0.5.4/system/router-configuration",
      "github:aurelia/router@0.5.4/system/util",
      "github:aurelia/history@0.2.2/system/index",
      "github:aurelia/router@0.5.4/system/pipeline",
      "github:aurelia/router@0.5.4/system/model-binding",
      "github:aurelia/router@0.5.4/system/route-loading",
      "github:aurelia/router@0.5.4/system/navigation-commands",
      "github:aurelia/http-client@0.4.4/system/headers",
      "github:aurelia/http-client@0.4.4/system/http-response-message",
      "github:aurelia/http-client@0.4.4/system/jsonp-request-message",
      "github:aurelia/route-recognizer@0.2.2/system/index",
      "github:aurelia/router@0.5.4/system/navigation-context",
      "github:aurelia/history@0.2.2",
      "github:aurelia/router@0.5.4/system/activation",
      "github:aurelia/http-client@0.4.4/system/http-request-message",
      "github:aurelia/route-recognizer@0.2.2",
      "github:aurelia/router@0.5.4/system/pipeline-provider",
      "github:aurelia/http-client@0.4.4/system/http-client",
      "github:aurelia/router@0.5.4/system/router",
      "github:aurelia/http-client@0.4.4/system/index",
      "github:aurelia/http-client@0.4.4",
      "github:aurelia/router@0.5.4/system/app-router",
      "dist/beers-api",
      "github:aurelia/router@0.5.4/system/index",
      "github:aurelia/router@0.5.4",
      "dist/app"
    ]
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.9.3",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
    "aurelia-framework": "github:aurelia/framework@0.8.6",
    "aurelia-http-client": "github:aurelia/http-client@0.4.4",
    "aurelia-router": "github:aurelia/router@0.5.4",
    "npm:bootflat": "npm:bootflat@2.0.4",
    "github:aurelia/binding@0.3.3": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3"
    },
    "github:aurelia/bootstrapper@0.9.3": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.2",
      "aurelia-framework": "github:aurelia/framework@0.8.6",
      "aurelia-history": "github:aurelia/history@0.2.2",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.3",
      "aurelia-loader-default": "github:aurelia/loader-default@0.4.1",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.2",
      "aurelia-router": "github:aurelia/router@0.5.4",
      "aurelia-templating": "github:aurelia/templating@0.8.8",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.8.4",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.8.5",
      "aurelia-templating-router": "github:aurelia/templating-router@0.9.2"
    },
    "github:aurelia/dependency-injection@0.4.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/framework@0.8.6": {
      "aurelia-binding": "github:aurelia/binding@0.3.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3",
      "aurelia-templating": "github:aurelia/templating@0.8.8"
    },
    "github:aurelia/history-browser@0.2.3": {
      "aurelia-history": "github:aurelia/history@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/http-client@0.4.4": {
      "aurelia-path": "github:aurelia/path@0.4.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/loader-default@0.4.1": {
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2"
    },
    "github:aurelia/loader@0.3.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.10",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.4"
    },
    "github:aurelia/router@0.5.4": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-history": "github:aurelia/history@0.2.2",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-binding@0.8.4": {
      "aurelia-binding": "github:aurelia/binding@0.3.3",
      "aurelia-templating": "github:aurelia/templating@0.8.8"
    },
    "github:aurelia/templating-resources@0.8.5": {
      "aurelia-binding": "github:aurelia/binding@0.3.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-templating": "github:aurelia/templating@0.8.8",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-router@0.9.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-router": "github:aurelia/router@0.5.4",
      "aurelia-templating": "github:aurelia/templating@0.8.8"
    },
    "github:aurelia/templating@0.8.8": {
      "aurelia-binding": "github:aurelia/binding@0.3.3",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.2",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.2",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:bootflat@2.0.4": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

