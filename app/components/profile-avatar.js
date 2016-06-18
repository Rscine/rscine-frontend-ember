import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    store: Ember.inject.service(),

    didInsertElement() {
        let applicant = this.get('store').findRecord('user', this.get('user').get('id'));
        this.$('.avatar.profile').popup({
            title: applicant.get('username'),
            content: applicant.get('username')
        })
    }
});
