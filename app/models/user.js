import DS from 'ember-data';
import App from 'ember-application';

App.UserModel = DS.Model.extend({
    username: DS.attr('string'),
    email: DS.attr('string'),
    contactInformations: DS.belongsTo('contact-information', {
        async: false,
        inverse: null
    }),
    profiles: DS.hasMany('profile', {
        async: false,
        inverse: null
    })
});

export default App.UserModel;
