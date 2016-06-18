import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let offers = this.store.findAll('offer');
        return offers;
    }
});
