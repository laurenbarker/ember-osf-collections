import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
    this.route('page-not-found', { path: '/*bad_url' });

    // if (window.isProviderDomain) {
    //     this.route('submit');
    // } else {
    this.route('collections', function() {
        this.route('page-not-found', { path: '/' });
        this.route('provider', { path: ':provider_id' }, function() {
            this.route('submit');
        });
    });
    // }
});

export default Router;
