define([
  "../../../../js/requireConfig"
], function(requireConfig) {
  "use strict";

  // Run the main site"s configuration so that all of the normal paths and shims are set up
  require.config(requireConfig);

  // Shim jasmine. jasmine.js creates the `window.jasmineRequire` global. jasmine-html.js adds additional properties to that global.
  require.config({
    baseUrl: "..",
    paths: {
      "jasmineRequire": "tests/lib/jasmine-2.0.0/jasmine",
      "jasmineRequireHtml": "tests/lib/jasmine-2.0.0/jasmine-html",
      "amd": "tests/lib/jasmine-2.0.0/amd",
      "Squire": "bower_components/squire/src/Squire"
    },
    shim: {
      "jasmineRequire": {
        exports: "jasmineRequire"
      },
      "jasmineRequireHtml": {
        deps: ["jasmineRequire"],
        exports: "jasmineRequire"
      }
    }
  });

  // Load the HTML bootloader and all of the specs
  require(["tests/spec/amdSpecList", "amd/boot", "router", "js/routes"], function (amdSpecList, boot, router, routes) {
    // Configure the router so that routes are set up the same way as on the main site
    router.config({
      routes: routes,
      routeLoadedCallback: function routeLoadedCallback() { } // no-op for tests
    });

    require(amdSpecList, function() {
      // All of the specs have been loaded. Initialize the HTML Reporter and execute the environment.
      boot.initializeHtmlReporter();
      boot.execute();
    });
  });
});
