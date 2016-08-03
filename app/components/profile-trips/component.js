import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeTripStatus (trip) {
    this.sendAction('changeTripStatus', trip);
  },
    deleteTrip (trip) {
    this.sendAction('deleteTrip', trip);
    }
  }
});
