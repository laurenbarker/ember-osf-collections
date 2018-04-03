import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
    intl: service(),
    beforeModel() {
        return this.get('intl').setLocale('en-us');
    }
}) {
  // normal class body definition here
}
