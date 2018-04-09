import Controller from '@ember/controller';

import OSFAgnosticAuthControllerMixin from 'ember-osf/mixins/osf-agnostic-auth-controller';

export default class Application extends Controller.extend(OSFAgnosticAuthControllerMixin) { }

declare module '@ember/controller' {
    interface ControllerRegistry {
        application: Application;
    }
}
