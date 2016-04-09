import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    creator: DS.belongsTo('user', {async: true}),
    applicants: DS.hasMany('user', {async: true}),
    handler: DS.belongsTo('user', {async: true})
});
