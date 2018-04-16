import Resolver from 'ember-osf-collections/resolver';
import config from '../../config/environment';

const resolver = Resolver.create();

resolver.namespace = {
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
};

export default resolver;
