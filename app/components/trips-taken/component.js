import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteTrip (trip) {
    this.sendAction('deleteTrip', trip);
    }
  }
});
