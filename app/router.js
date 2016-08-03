import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('profile', { path: '/profiles' }, function() {
    this.route('trips', { path: '/trips' });
  });
  this.route('create-profile');
  this.route('search', function() {
    this.route('places', { path: '/places' });
  });
});

export default Router;
