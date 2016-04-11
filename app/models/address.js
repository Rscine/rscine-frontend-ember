import DS from 'ember-data';

export default DS.Model.extend({
    street: DS.attr('string'),
    number: DS.attr('number'),
    postalCode: DS.attr('number'),
    complements: DS.attr('string'),
    district: DS.belongsTo('district')
});
