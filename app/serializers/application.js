import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    extractRelationships(modelClass, resourceHash) {let relationships = {};

    modelClass.eachRelationship((key, relationshipMeta) => {
      let relationship = null;
      let relationshipKey = this.keyForRelationship(key, relationshipMeta.kind, 'deserialize');
      console.log(relationshipKey);
      console.log(resourceHash);
      if (resourceHash.hasOwnProperty(relationshipKey)) {
        let data = null;
        let relationshipHash = resourceHash[relationshipKey];
        if (relationshipMeta.kind === 'belongsTo') {
          if (relationshipMeta.options.polymorphic) {
            // extracting a polymorphic belongsTo may need more information
            // than the type and the hash (which might only be an id) for the
            // relationship, hence we pass the key, resource and
            // relationshipMeta too
            data = this.extractPolymorphicRelationship(relationshipMeta.type, relationshipHash, { key, resourceHash, relationshipMeta });
          } else {
            data = this.extractRelationship(relationshipMeta.type, relationshipHash);
          }
        } else if (relationshipMeta.kind === 'hasMany') {
          if (!Ember.isNone(relationshipHash)) {
            data = new Array(relationshipHash.length);
            for (let i = 0, l = relationshipHash.length; i < l; i++) {
              let item = relationshipHash[i];
              data[i] = this.extractRelationship(relationshipMeta.type, item);
            }
          }
        }
        relationship = { data };
      }

      let linkKey = this.keyForLink(key, relationshipMeta.kind);
      if (resourceHash.links && resourceHash.links.hasOwnProperty(linkKey)) {
        let related = resourceHash.links[linkKey];
        relationship = relationship || {};
        relationship.links = { related };
      }

      if (relationship) {
        relationships[key] = relationship;
      }
    });

    return relationships;
    }
});
