import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('place');
  },

  actions: {
      createTrip(data) {
        let trip = this.get('store').createRecord('trip', data);
        trip.save()
        .then(()=> {
          this.transitionTo('profile.trips');
        })
        .catch(() => {
          // trip.deleteRecord();
          this.get('flashMessages')
          .danger('That trip could not be saved.');
        });
      },
    }
});
