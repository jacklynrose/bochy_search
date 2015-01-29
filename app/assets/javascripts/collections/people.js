var App = App || {};

App.People = Backbone.Collection.extend({
  url: "/people",
  model: App.Person
});