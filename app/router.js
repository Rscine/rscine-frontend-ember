import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('offers', { path: '/offers' });
  this.route('user', { path: '/user/:user' });
  this.route('login');
  this.route('profile');
});

export default Router;
