import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    routing: Ember.inject.service('-routing'),
    session: Ember.inject.service('session'),
    actions: {
        logIn() {
            Ember.$('.ui.modal')
              .modal('show')
            ;
        },

        logOut() {
            this.get('session').invalidate();
            this.get('routing').transitionTo('index');
        }
    }
});
