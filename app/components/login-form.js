import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),
    routing: Ember.inject.service('-routing'),

    actions: {
        authenticate () {
            var username = this.get('login');
            var password = this.get('password');
            var authenticator = 'authenticator:api';
            this.get('session').authenticate(authenticator, username, password).then(() => {
                // redirect to profile page after login
                this.get('routing').transitionTo('profile.me');
            }, (reason) => {
                console.log(reason);
            });

        }
    }
});
