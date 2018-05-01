import { A } from '@ember/array';
import Controller from '@ember/controller';

import { classNames } from '@ember-decorators/component';
import { action, computed} from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

import { task } from 'ember-concurrency';
import $ from 'jquery';

@classNames('FlexContent')
export default class Submit extends Controller {
    @service store;
    @service theme;

    selectedSubjects: MutableArray<any> = A([]);

    @action
    nodeSelected(this: Submit) {
        return '';
    }
}
