import DS from 'ember-data';
import App from 'ember-application';

App.ApplicationSerializer =  DS.RESTSerializer.extend({

    /**
     * @{inheritdoc}
     */
    normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
        let normalizedPayload = {};
        normalizedPayload[primaryModelClass.modelName] = payload;
        return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    },

    /**
     * @{inheritdoc}
     */
    normalizeSingleResponse (store, primaryModelClass, payload, id, requestType) {
        let normalizedPayload = {};
        normalizedPayload[primaryModelClass.modelName] = payload;
        return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    },

    /**
     * @{inheritdoc}
     */
    extractRelationships (modelClass, resourceHash) {
        let resource = {};
        // extraction des relations embedded
        resource = this._extractSingleEmbeddedRelationships(resourceHash);
        // extraction des relations _links
        resource = this._extractSingleLinkedRelationships(resourceHash);

        return this._super(modelClass, resource);
    },

    /**
     * @desc Extrait les relations ancrées dans _embedded (HATEOAS)
     * @param  {Object} resource
     * @return {Object}
     */
    _extractSingleEmbeddedRelationships (resource) {
        for (let relationship in resource._embedded) {
            resource[relationship] = resource._embedded[relationship];
        }

        return resource;
    },

    /**
     * @desc Extrait les relations ancrées dans _links (HATEOAS)
     * @param  {Object} resource
     * @return {Object}
     */
    _extractSingleLinkedRelationships (resource) {
        for (let relationship in resource._links) {
            let link = resource._links[relationship];
            // Plusieurs liens
            if (link instanceof Array) {
                let normalizedLinks = [];
                for(let singleLink of resource._links[relationship]) {
                    normalizedLinks.push(singleLink.id);
                }
                resource[relationship] = normalizedLinks;
            } else { // Un seul lien
                resource[relationship] = link.id;
            }
        }

        return resource;
    }

});

export default App.ApplicationSerializer;
