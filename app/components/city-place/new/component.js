import Ember from 'ember';

export default Ember.Component.extend({
  place: {},
  actions: {
    submit () {
      this.sendAction('submit', this.get('place'));
      // this.set('place', "");
    }
  },
});
