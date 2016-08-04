import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      trip: this.get('store').findRecord('trip', params.trip_id),
      tags: this.store.findAll('tag')
    });
  },

  actions: {
    addDescription(data) {
      let description = this.get('store').createRecord('description', data);
      description.save();
    },
  }
});
