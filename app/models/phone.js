import DS from 'ember-data';

export default DS.Model.extend({
    number: DS.attr('string'),
    type: DS.attr('string')
});
