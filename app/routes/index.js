import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let users = this.store.findAll('user');
        return users;
    }
});
