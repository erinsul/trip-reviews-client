import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.get('store').query('place', params);
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

      createPlace(data) {
        let place=this.get('store').createRecord('place', data);
        place.save();
        this.transitionTo('all-places');
      }
    }


});
