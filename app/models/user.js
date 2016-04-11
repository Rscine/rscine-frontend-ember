import DS from 'ember-data';
import App from 'ember-application';

App.UserModel = DS.Model.extend({
    username: DS.attr('string'),
    email: DS.attr('string'),
    contactInformation: DS.belongsTo('contact-information', {
        async: false
    }),
    profiles: DS.hasMany('profile', {
        async: false
    })
});

export default App.UserModel;
