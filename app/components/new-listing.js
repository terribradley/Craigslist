import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
     this.set('addNewListing', true);
    },
    saveListing1() {
      var params = {
        name: this.get('name'),
        timestamp: this.get('timestamp'),
        money: this.get('money'),
        type: this.get('type'),
        category: this.get('category')
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing2', params);
    }
 }
});
