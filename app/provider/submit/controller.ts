import { A } from '@ember/array';
import Controller from '@ember/controller';

import { classNames } from '@ember-decorators/component';
import { action, computed} from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

import { task } from 'ember-concurrency';
import $ from 'jquery';

@classNames('FlexContent')
export default class Submit extends Controller.extend({
    init() {
        this._super(...arguments);
        this.get('loadOSFProvider').perform();
    },

    loadOSFProvider: task(function*(this: Submit) {
        const provider = yield this.store.findRecord('preprint-provider', 'osf');
        this.set('osfProvider', provider);
    }),
}) {
    @service store;

    @action
    nodeSelected(this: Submit) {
        return '';
    }

    @computed('model.subjects.@each')
    get subjectsList(this: Submit): [] {
        return this.get('model.subjects') ? $.extend(true, [], this.get('model.subjects')) : A();
    }
}
