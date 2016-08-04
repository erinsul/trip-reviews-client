import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addDescription(data) {
      console.log('up a level');
      data.trip = this.get('trip');
      this.sendAction('addDescription', data);
    }
  }
});
