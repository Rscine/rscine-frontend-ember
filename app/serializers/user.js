import DS from 'ember-data';
import ApplicationSerializer from '../serializers/application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    profiles: { embedded: 'always' },
    genres: { embedded: 'always' },
  }
});
