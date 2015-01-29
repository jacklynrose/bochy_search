var App = App || {};

App.People = Backbone.Collection.extend({
  url: "/people",
  model: App.Person,

  filterBySearch: function(searchText) {
    var matchedPeople = this.filter(function(person) {
      return person.fullname() === searchText;
    });
    return new App.People(matchedPeople);
  }
});