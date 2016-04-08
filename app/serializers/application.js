import DS from 'ember-data';

export default DS.RESTSerializer.extend({

    /**
     * @{inheritdoc}
     */
    normalizeResponse (store, primaryModelClass, payload, id, requestType) {
        var normalizedPayload = {};
        normalizedPayload[primaryModelClass.modelName] = payload;
        console.log(normalizedPayload);
        return this._super(store, primaryModelClass, normalizedPayload, id, requestType)
    },

    normalizeFindBelongsToResponse (store, primaryModelClass, payload, id, requestType) {
        console.log('hey');
    },

    keyForLink (key, kind) {
        return this._super('_links', kind);
    }

});
