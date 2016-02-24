import DS from 'ember-data';
import App from '../app';

App.UserModel = DS.Model.extend({
    username: DS.attr('string'),
    email: DS.attr('string'),
    contactInformations: DS.belongsTo('contact-information', {
        async: true,
        inverse: null
    })
});

export default App.UserModel;
