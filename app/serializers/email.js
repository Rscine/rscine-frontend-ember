import DS from 'ember-data';
import ApplicationSerializer from '../serializers/application';

export default ApplicationSerializer.extend({
    attrs: {
        type: 'email_type'
    }
});
