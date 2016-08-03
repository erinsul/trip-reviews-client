import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  country: DS.attr('string'),
  trips: DS.hasMany('trip', { inverse: 'place' }),
  profiles: DS.hasMany('profile', { inverse: 'places' })
});
