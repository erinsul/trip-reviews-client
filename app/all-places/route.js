import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('place');
  },

  actions: {
      createTrip(data) {
        let trip = this.get('store').createRecord('trip', data);
        trip.save();
      },
    }
});
