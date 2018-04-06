import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class Application extends Route.extend({
    // anything which *must* be merged to prototype here
    i18n: service(),

    afterModel() {
        this.set('i18n.locale', 'en');
    },
}) {
    // normal class body definition here
}
