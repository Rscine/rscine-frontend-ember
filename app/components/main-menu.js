import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        historyPrevious() {
            window.history.go(-1)
        },

        historyNext() {
            window.history.go(+1)
        },

        openDash() {
            Ember.$('#dash')
              .modal('show')
            ;
        }
    }
});
