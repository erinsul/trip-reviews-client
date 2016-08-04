import DS from 'ember-data';

export default DS.Model.extend({
  visited: DS.attr('boolean'),
  place: DS.belongsTo('place', { inverse: 'trips' }),
  profile: DS.belongsTo('profile', { inverse: 'trips' }),
  tags: DS.hasMany('tag', { inverse: 'trips' }),
  descriptions: DS.hasMany('description', { inverse: 'trip' })
});
