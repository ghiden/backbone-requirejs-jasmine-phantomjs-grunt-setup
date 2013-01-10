require.config({
  baseUrl: "/app/js",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'lib/jquery.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min',
    spec: '../../test/spec/'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['jquery', 'spec/index'], function($, index) {
  var jasmineEnv = jasmine.getEnv(),
      htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  $(function() {
    require(index.specs, function() {
      jasmineEnv.execute();
    });
  });
});
