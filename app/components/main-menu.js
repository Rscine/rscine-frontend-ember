import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        openSideBar() {
            Ember.$('.ui.sidebar')
              .sidebar('toggle')
            ;
        }
    }
});
