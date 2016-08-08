import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addDescription(data) {
      data.trip = this.get('trip');
      this.sendAction('addDescription', data);
    }
  }
});
