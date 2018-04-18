/**
 * Type declarations for
 *    import config from './config/environment'
 *
 * For now these need to be managed by the developer
 * since different ember addons can materialize new entries.
 */
declare const config: {
    environment: any;
    modulePrefix: string;
    podModulePrefix: string;
    locationType: string;
    rootURL: string;
    authorizationType: string;
    sentryDSN: string | null;
    sentryOptions: {
        release: string;
        ignoreErrors: string[];
    };
    'ember-simple-auth': {
        authorizer: string;
        authenticator: string;
    };
    EmberENV: {
        FEATURES: {};
        EXTEND_PROTOTYPES: {
            Date: boolean;
        };
    };
    APP: {};
    i18n: {
        defaultLocale: string;
    };
    moment: {
        includeTimezone: string;
        outputFormat: string;
    };
    metricsAdapters: Array<{
        name: string;
        environments: string[];
        config: {
            id: string;
        };
        dimensions: {
            string: string;
        };
    }>;
};

export default config;
