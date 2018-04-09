import Computed from '@ember/object/computed';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import OSFAgnosticAuthRouteMixin from 'ember-osf/mixins/osf-agnostic-auth-route';

export default class Application extends Route.extend(OSFAgnosticAuthRouteMixin) {
    i18n: Computed<any> = service();

    afterModel(this: Application) {
        this.get('i18n').set('locale', 'en');
    }
}
