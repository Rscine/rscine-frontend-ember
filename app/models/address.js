import DS from 'ember-data';

export default DS.Model.extend({
    stree: DS.attr('string'),
    number: DS.attr('number'),
    postalCode: DS.attr('number'),
    complements: DS.attr('string'),
    distric: DS.belongsTo('district')
});
