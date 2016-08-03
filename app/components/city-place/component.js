import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createTrip(data) {
      this.sendAction('createTrip', data);
    }
  }
});
