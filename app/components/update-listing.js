import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
 actions: {
   updateListingForm() {
     this.set('updateListingForm', true);
   },
   update(listing) {
     var params = {
       name: this.get('name'),
       timestamp: this.get('timestamp'),
       money: parseInt(this.get('money')),
       type: this.get('type')
     };
     this.set('updateListingForm', false);
     this.sendAction('update', listing, params);
   }
 }
});
