import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
   categoryFormShow() {
     this.set('addNewCategory', true);
   },
   saveCategory1() {
      var params = {
        name: this.get('name')
      };
      this.set('addNewCategory', false);
      this.sendAction('saveCategory2', params);
    }
 }
});
