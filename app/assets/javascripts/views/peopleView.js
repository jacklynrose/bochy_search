var App = App || {};

App.PeopleView = Backbone.View.extend({

  render: function() {

    // PUT IT IN THE VIEW'S ELEMENT
    this.$el.html(

      // RENDER THE DATA
      JST['people'](

        // GET THE DATA
        // @people = Person.all
        { people: this.collection.toJSON() }

      )

    );

    // RETURN THE VIEW FOR CHAINING
    return this;
  }

});