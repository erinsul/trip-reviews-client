import Ember from 'ember';

export default Ember.Component.extend({
  profile: {},
  actions: {
    submit () {
      this.sendAction('submit', this.get('profile'));
    }
  },
});
