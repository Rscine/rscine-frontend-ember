import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    // creator: DS.belongsTo(),
    // applicants: DS.hasMany(),
    // handler: DS.belongsTo()
});
