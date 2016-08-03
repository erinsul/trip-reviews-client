import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('trip');
  },
  actions: {
      changeTripStatus(id) {
        this.store.findRecord('trip', id).then(function(trip) {
          // ...after the record has loaded
          trip.set('visited', true);
          trip.save();
        });
      }
  }
});
