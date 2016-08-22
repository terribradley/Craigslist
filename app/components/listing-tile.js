import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['timestamp:asc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),
  actions: {
    update(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('category', params.category);
    },
    destroyListing(listing, params) {
      listing.destroyRecord();
      this.transitionTo('category', params.category);
    }
  }
});
