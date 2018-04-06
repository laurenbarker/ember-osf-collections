import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import OSFAgnosticAuthRouteMixin from 'ember-osf/mixins/osf-agnostic-auth-route';

export default class Application extends Route.extend(OSFAgnosticAuthRouteMixin, {
    // anything which *must* be merged to prototype here
    i18n: service(),

    afterModel() {
        this.set('i18n.locale', 'en');
    },
}) {
    // normal class body definition here
}
