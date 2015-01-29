var App = App || {};

App.Router = Backbone.Router.extend({
  routes: {
    '': 'homePage'
  },

  homePage: function() {
    $("body").append("It works!");
  }
});
App.router = new App.Router();