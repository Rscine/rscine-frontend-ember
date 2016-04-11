import DS from 'ember-data';

export default DS.Model.extend({
    emails: DS.hasMany('email', {async:false}),
    phones: DS.hasMany('phone', {async:false}),
    addresses: DS.hasMany('address', {async:false}),
});
