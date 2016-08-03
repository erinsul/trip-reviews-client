import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  user: DS.belongsTo('user'),
  trips: DS.hasMany('trip', { inverse: 'profile' }),
  places: DS.hasMany('place', { inverse: 'profiles' })
});
