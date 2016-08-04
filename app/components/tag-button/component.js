import Ember from 'ember';

export default Ember.Component.extend({
  description: {},
  actions: {
    click() {
      this.get('description').tag = this.get('tag');
      this.sendAction('click', this.get('description'));
    }
  }
});
