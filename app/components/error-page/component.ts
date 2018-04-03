import Component from '@ember/component';
import { computed } from '@ember/object';

const MESSAGES = {
    notFound: 'components.errorPage.details.notFound',
};
const TITLES = {
    notFound: 'components.errorPage.title.notFound',
};

export default Component.extend({
    classNames: ['CollectionsErrorPage', 'FlexContent'],
    supportEmail: 'support@osf.io',

    errorMessage: computed('error', function() {
        return MESSAGES[this.get('error')];
    }),

    title: computed('error', function() {
        return TITLES[this.get('error')];
    }),
});
