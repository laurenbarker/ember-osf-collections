import Route from '@ember/routing/route';

import { service } from '@ember-decorators/service';

import OSFAgnosticAuthRouteMixin from 'ember-osf/mixins/osf-agnostic-auth-route';

export default class Application extends Route.extend(OSFAgnosticAuthRouteMixin) {
    @service i18n;

    afterModel(this: Application) {
        this.i18n.set('locale', 'en');
    }
}
