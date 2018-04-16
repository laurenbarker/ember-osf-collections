import Controller from '@ember/controller';

import { service } from '@ember-decorators/service';

import OSFAgnosticAuthControllerMixin from 'ember-osf/mixins/osf-agnostic-auth-controller';

export default class Application extends Controller.extend(OSFAgnosticAuthControllerMixin) {
    @service theme;
}

declare module '@ember/controller' {
    interface ControllerRegistry {
        application: Application;
    }
}
