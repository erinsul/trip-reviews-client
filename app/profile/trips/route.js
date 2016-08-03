import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('trip');
  },
  actions: {
      changeTripStatus(trip) {
        trip.set('visited', true);
        trip.save();
      },
      deleteTrip(trip) {
        trip.destroyRecord();
      }
  }
});
