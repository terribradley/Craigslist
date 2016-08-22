import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    saveListing3(params) {
     var newListing = this.store.createRecord('listing', params);
     newListing.save();
     this.transitionTo('category', params.category);
   }
  }
});
