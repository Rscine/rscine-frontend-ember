import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('offer', { path:'/offers' }, function() {
      this.route('list', { path: '/list' });
      this.route('new', { path:'/new' });
  });
  this.route('profile', { path:'/profile/:user' });
});

export default Router;
