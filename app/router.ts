import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
    this.route('page-not-found', { path: '/*bad_url' });

    // for branding
    // if (window.isProviderDomain) {
    //     this.route('submit');
    // } else {
    // }

    this.route('provider', { path: ':provider_id' }, function() {
        this.route('discover');
        this.route('submit');
    });

});

export default Router;
