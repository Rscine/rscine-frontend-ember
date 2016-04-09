import DS from 'ember-data';
import App from 'ember-application';

App.ApplicationSerializer =  DS.RESTSerializer.extend({

    /**
     * @{inheritdoc}
     */
    normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
        let normalizedPayload = {};
        normalizedPayload[primaryModelClass.modelName] = payload;
        // extraction des relations embedded
        normalizedPayload[primaryModelClass.modelName] = this._extractArrayEmbeddedRelationships(normalizedPayload[primaryModelClass.modelName]);
        // extraction des relations _links
        normalizedPayload[primaryModelClass.modelName]  = this._extractArrayLinkedRelationships(normalizedPayload[primaryModelClass.modelName]);
        console.log(normalizedPayload);
        return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    },

    /**
     * @{inheritdoc}
     */
    normalizeSingleResponse (store, primaryModelClass, payload, id, requestType) {
        let normalizedPayload = {};
        normalizedPayload[primaryModelClass.modelName] = payload;
        // extraction des relations embedded
        normalizedPayload[primaryModelClass.modelName] = this._extractSingleEmbeddedRelationships(normalizedPayload[primaryModelClass.modelName]);
        // extraction des relations _links
        normalizedPayload[primaryModelClass.modelName]  = this._extractSingleLinkedRelationships(normalizedPayload[primaryModelClass.modelName] );
        return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
    },

    /**
     * @desc Extrait les relations ancrées dans _embedded dans le cas où originalPaylaod est un array (HATEOAS)
     * @param  {Object} payload
     * @return {Object}
     */
    _extractArrayEmbeddedRelationships (originalPayload) {
        for (let resource of originalPayload) {
            resource = this._extractSingleEmbeddedRelationships(resource);
        }
        return originalPayload;
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
     * @desc Extrait les relations ancrées dans _links dans le cas où originalPayload est un array (HATEOAS)
     * @param  {Object} originalPayload
     * @return {Object}
     */
    _extractArrayLinkedRelationships (originalPayload) {
        for (let resource of originalPayload) {
            resource = this._extractSingleLinkedRelationships(resource);
        }
        return originalPayload;
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
