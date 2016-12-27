import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    namespace: 'api/v1',
    host: 'http://api.rscine.dev',
    authorizer: 'authorizer:api'
});
