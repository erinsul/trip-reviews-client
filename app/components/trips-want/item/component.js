import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    move () {
    this.sendAction('move', this.get('trip'));
    },
    remove() {
      this.sendAction('remove', this.get('trip'));
    }
  }
});
