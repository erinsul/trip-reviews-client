import DS from 'ember-data';

export default DS.Model.extend({
  trip: DS.belongsTo('trip', { inverse: 'descriptions' }),
  tag: DS.belongsTo('tag', { inverse: 'descriptions' })
});
