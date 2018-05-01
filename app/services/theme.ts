import Service from '@ember/service';
import DS from 'ember-data';

import { computed } from '@ember-decorators/object';
import { alias, empty, equal, not } from '@ember-decorators/object/computed';
import { service } from '@ember-decorators/service';

import config from 'ember-get-config';
import Session from 'ember-simple-auth/services/session';
import $ from 'jquery';

export default class Theme extends Service {
    @service store!: DS.Store;
    @service session!: Session;

    provider = null;

    @alias('provider.id') id;
    @alias('provider.domain') domain;
    @empty('provider') isLoaded;
    @not('isNotProvider') isProvider;
    @equal('provider.id', 'OSF') isNotProvider;

    @computed('id')
    get signupUrl(this: Theme) {
        const query = $.param({
            campaign: `${this.get('id')}-collections`,
            next: window.location.href,
        });

        return `${config.OSF.url}register?${query}`;
    }

    @computed('isProvider', 'domain', 'id')
    get baseServiceUrl(this: Theme) {
        let baseURL = '/';

        if (!this.get('domain')) {
            baseURL += 'collections/';
            if (this.get('provider.id')) {
                baseURL += `${this.get('provider.id')}/`;
            }
        } else {
            baseURL = this.get('domain').replace(/\/?$/, '/');
        }
        return baseURL;
    }

    loadProvider(id) {
        return this.store.findRecord(
            'collection-provider',
            id.toLowerCase(),
            {},
        ).then(this._onProviderLoad.bind(this));
    }

    _onProviderLoad(provider) {
        this.set('provider', provider);
        // this.get('i18n').addGlobals({
        //     provider: {
        //         id: this.get('provider.id'),
        //         name: this.get('provider.name'),
        //     },
        // });
        return provider;
    }

    // @computed('id')
    // get provider(this: Theme): {} {
    //     const id = this.id;

    //     // Check if redirect is enabled for the current provider
    //     if (!window.isProviderDomain && this.isProvider) {
    //         this.store.findRecord('collection-provider', id)
    //             .then(provider => {
    //                 if (provider.get('domainRedirectEnabled')) {
    //                     const domain = provider.get('domain');
    //                     const {href, origin} = window.location;
    //                     const url = href.replace(new RegExp(`^${origin}/collections/${id}/?`), domain);

    //                     window.location.replace(url);
    //                 }
    //             });
    //     }

    //     return this.store.findRecord('collection-provider', id);
    // },
}
