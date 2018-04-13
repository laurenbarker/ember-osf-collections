import Component from '@ember/component';
import { computed } from '@ember/object';

const MESSAGES = {
    notFound: 'components.errorPage.details.notFound',
};
const TITLES = {
    notFound: 'components.errorPage.title.notFound',
};

export default class ErrorPage extends Component {
    classNames = ['FlexContent'];
    supportEmail = 'support@osf.io';

    errorMessage = computed('error', function(): string {
        return MESSAGES[this.get('error')];
    });

    title = computed('error', function(): string {
        return TITLES[this.get('error')];
    });
}
