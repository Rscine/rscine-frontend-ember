import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createOffer() {
            var store = this.get('targetObject.store');
            let offer = store.createRecord('offer', {
                title: this.get('title'),
                description: this.get('description')
            });

            offer.save();
        }
    }
});
