import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    saveCategory3(params) {
     var newCategory= this.store.createRecord('category', params);
     newCategory.save();
     this.transitionTo('admin');
   },
    destroyCategory(category) {
      var listing_deletions = category.get('listings').map(function(listing) {
      return listing.destroyRecord();
    });
    Ember.RSVP.all(listing_deletions).then(function() {
      return category.destroyRecord();
    });
    this.transitionTo('index');
    }
  }
});
