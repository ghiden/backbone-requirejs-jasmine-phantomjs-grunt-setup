define(['backbone'], function(Backbone) {
  var todo = Backbone.Model.extend({
    defaults: {
      title: ''
    }
  });
  return todo;
});
