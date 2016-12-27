import BaseAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default BaseAuthenticator.extend({
    serverTokenEndpoint: 'http://api.rscine.dev/api/v1/login'
});
