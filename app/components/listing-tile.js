import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['timestamp:asc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy')
});
