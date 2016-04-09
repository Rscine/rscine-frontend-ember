import DS from 'ember-data';
import App from 'ember-application';

App.ApplicationSerializer =  DS.RESTSerializer.extend({

    /**
     * @{inheritdoc}
     */
    normalizeResponse (store, primaryModelClass, payload, id, requestType) {
        let normalizedPayload = {};
        normalizedPayload[primaryModelClass.modelName] = payload;
        // extraction des relations embedded
        normalizedPayload[primaryModelClass.modelName] = this._extractEmbeddedRelationships(normalizedPayload[primaryModelClass.modelName]);
        // extraction des relations _links
        // normalizedPayload = this._extractLinkedRelationships(payload);
        return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    },

    /**
     * @desc Extrait les relations ancrées dans _embedded (HATEOAS)
     * @param  {Object} payload
     * @return {Object}
     */
    _extractEmbeddedRelationships (originalPayload) {
        for (let resource of originalPayload) {
            for (var relationship in resource._embedded) {
                resource[relationship] = resource._embedded[relationship];
            }
        }
        return originalPayload;
    },

    /**
     * @desc Extrait les relations ancrées dans _links (HATEOAS)
     * @param  {Object} payload
     * @return {Object}
     */
    // _extractLinkedRelationships (payload) {
    //     for (var resource of payload) {
    //         for (var relationship in resource._links) {
    //             resource[relationship] = resource._links[relationship];
    //         }
    //     }
    //     return payload;
    // }

});

export default App.ApplicationSerializer;
