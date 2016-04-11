import DS from 'ember-data';
import ApplicationSerializer from '../serializers/application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        type: 'phone_type'
    }
});
