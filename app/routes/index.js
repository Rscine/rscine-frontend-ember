import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let users = this.store.findAll('user');

        let user = this.store.findRecord('user', 65);

        // console.log(users.getEach('username'));

        return users;
    }
});
