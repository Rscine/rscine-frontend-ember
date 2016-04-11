import DS from 'ember-data';
import ApplicationSerializer from '../serializers/application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        addresses: { embedded: 'always' },
        emails: { embedded: 'always' },
        phones: { embedded: 'always' },
    }
});
