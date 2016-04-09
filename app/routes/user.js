import Ember from 'ember';

export default Ember.Route.extend({
    model (params) {
        let user = this.store.find('user', params.user);
        return user;
    }
});
