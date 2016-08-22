import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  timestamp: DS.attr(),
  money: DS.attr(),
  type: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});
