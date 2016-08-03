import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click () {
    this.sendAction('click', this.get('trip').id);
    }
  }
});
