import { service } from '@ember-decorators/service';
import Route from '@ember/routing/route';

export default class Provider extends Route {
    @service theme;

    model(params) {
        return this.theme.loadProvider(params.provider_id)
            .then(provider => {
                if (!provider.get('allowSubmissions')) {
                    this.replaceWith('page-not-found');
                }
            })
            .catch(() => this.replaceWith('page-not-found'));
    }
}
