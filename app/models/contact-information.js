import DS from 'ember-data';

export default DS.Model.extend({
    emails: DS.hasMany('email'),
    phones: DS.hasMany('phone'),
    addresses: DS.hasMany('address'),
});
