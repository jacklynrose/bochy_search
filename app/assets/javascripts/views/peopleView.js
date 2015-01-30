var App = App || {};

App.PeopleView = Backbone.View.extend({

  events: {
    'keyup .search_input': 'search',
    // 'click li': 'fillSearch',
    'click button': 'deletePerson',
    'dblclick li' : 'renderForm', 
    'submit form' : 'updatePerson'  
  },

  updatePerson: function(event) {
    event.preventDefault();
    var updatedFirst = $(event.currentTarget).find(".first_name").val();
    var updatedLast = $(event.currentTarget).find(".last_name").val();
    var id = $(event.currentTarget).parent().attr("data-id");
    var person = this.collection.get(id);
    person.save({
      first_name: updatedFirst,
      last_name: updatedLast
    });
    $(event.currentTarget).fadeOut();
    this.search();
  },

  renderForm: function(event) {
    var id = $(event.currentTarget).attr("data-id");
    var person = this.collection.get(id);

    $(event.currentTarget).html(JST['form'](
      person.toJSON()
    ));
  },

  deletePerson: function(event) {
    var id = $(event.currentTarget).parent().attr("data-id");
    event.stopPropagation();
    $(event.currentTarget).parent().fadeOut();
    this.collection.get(id).destroy();
  },

  fillSearch: function(event) {
    var id = $(event.currentTarget).attr("data-id");

    var textForFilling = this.collection.get(id).fullname();

    this.$el.find("input").val(textForFilling);
    this.search();
  },

  render: function() {

    this.$el.html(JST['app']());

    this.renderCollection(this.collection.toJSON());

    return this;
  },

  renderCollection: function(data) {
    this.$el.find("ul").html(
      JST['people'](
        { people: data }
      )
    );
  },

  search: function() {
    var searchText = this.$el.find("input").val();

    if (searchText === "") {
      this.renderCollection(this.collection.toJSON());
    } else {
      this.renderCollection(
        this.collection.filterBySearch(searchText).toJSON()
      );
    }
  },

  // createPerson: function() {
  //   var firstName = this.$el.find(".first_name").val();
  //   var lastName = this.$el.find(".last_name").val();

  //   App.peopleCollection.create({
  //     first_name: firstName,
  //     last_name: lastName
  //   });
  // }

});









