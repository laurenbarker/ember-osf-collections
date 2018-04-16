import Component from '@ember/component';

import { classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';

const MESSAGES = {
    notFound: 'components.errorPage.details.notFound',
};
const TITLES = {
    notFound: 'components.errorPage.title.notFound',
};

@classNames('FlexContent')
export default class ErrorPage extends Component {
    error = this.error;
    supportEmail = 'support@osf.io';

    @computed('error')
    get errorMessage(this: ErrorPage): string {
        return MESSAGES[this.get('error')];
    }

    @computed('error')
    get title(this: ErrorPage): string {
        return TITLES[this.get('error')];
    }
}
