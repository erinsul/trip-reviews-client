import Ember from 'ember';

export default Ember.Component.extend({
  trip: {},
  store: Ember.inject.service(),
  actions: {
    click () {
    this.get('trip').visited = false;
    this.get('trip').place = this.get('place');
    this.sendAction('click', this.get('trip'));
    }
  }
});
