import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    remove() {
      this.sendAction('remove', this.get('trip'));
    }
  }
});
