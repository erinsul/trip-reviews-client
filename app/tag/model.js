import DS from 'ember-data';

export default DS.Model.extend({
  descriptor: DS.attr('string'),
  trips: DS.hasMany('trip', { inverse: 'tags' }),
  descriptions: DS.hasMany('description', { inverse: 'tag' })
});
