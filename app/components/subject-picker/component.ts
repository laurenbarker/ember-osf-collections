import { A } from '@ember/array';
import Component from '@ember/component';
import EmberObject from '@ember/object';

import { computed, action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

import $ from 'jquery';

function arrayEquals(arr1, arr2) {
    return arr1.length === arr2.length && arr1.reduce((acc, val, i) => acc && val === arr2[i], true);
}

function arrayStartsWith(arr, prefix) {
    return prefix.reduce((acc, val, i) => acc && val && arr[i] && val.id === arr[i].id, true);
}

const Column = EmberObject.extend({
    sortDefinition: ['text:asc'],
    filterText: '',
    selection: null,
    subjects: [],
    subjectsFiltered: Ember.computed('subjects.[]', 'filterText', function() {
        const filterTextLowerCase = this.get('filterText').toLowerCase();
        const subjects = this.get('subjects');

        if (!filterTextLowerCase) {
            return subjects;
        }

        return subjects.filter(item => item.get('text').toLowerCase().includes(filterTextLowerCase));
    }),
    subjectsSorted: Ember.computed.sort('subjectsFiltered', 'sortDefinition')
});


export default class SubjectPicker extends Component.extend({
    init() {
        this._super(...arguments);

        this.setProperties({
            initialSubjects: [],
            currentSubjects: [],
            hasChanged: false,
            columns: A(new Array(3).fill(null).map(() => Column.create())),
        });
    },

    didReceiveAttrs() {
        // this.querySubjects();
    },
}) {
    @service store;
    @service theme;

    // isValid: Ember.computed.notEmpty('currentSubjects'),

    querySubjects(parents = 'null', tier = 0) {
        const column = this.get('columns').objectAt(tier);

        if (this.get('provider')) {
            this.get('provider').queryHasMany('taxonomies', {
                filter: {
                    parents,
                },
                page: {
                    size: 150, // Law category has 117 (Jan 2018)
                }
            })
            .then(results => column.set('subjects', results ? results.toArray() : []));
        }
    }

    resetColumnSelections() {
        const columns = this.get('columns');

        columns.objectAt(0).set('selection', null);

        for (let i = 1; i < columns.length; i++) {
            const column = columns.objectAt(i);

            column.set('subjects', null);
            column.set('selection', null);
        }
    }

    @action
    deselect(index) {
        const allSelections = this.get('currentSubjects');

        this.set('hasChanged', true);
        this.resetColumnSelections();

        allSelections.removeAt(index);
    }

    // @action
    // select(selected, tier) {
    //     this.set('hasChanged', true);
    //     const columns = this.get('columns');
    //     const column = columns.objectAt(tier);

    //     // Bail out if the subject is already selected
    //     if (column.get('selection') === selected) {
    //         return;
    //     }

    //     column.set('selection', selected);

    //     const totalColumns = columns.length;
    //     const nextTier = tier + 1;
    //     const allSelections = this.get('currentSubjects');

    //     const currentSelection = columns
    //         .slice(0, nextTier)
    //         .map(column => column.get('selection'));

    //     // An existing tag has this prefix, and this is the lowest level of the taxonomy, so no need to fetch child results
    //     if (nextTier === totalColumns || !allSelections.some(item => arrayStartsWith(item, currentSelection))) {
    //         let existingParent;

    //         for (let i = 1; i <= currentSelection.length; i++) {
    //             const sub = currentSelection.slice(0, i);
    //             existingParent = allSelections.find(item => arrayEquals(item, sub)); // jshint ignore:line

    //             // The parent exists, append the subject to it
    //             if (existingParent) {
    //                 existingParent.pushObjects(currentSelection.slice(i));
    //                 break;
    //             }
    //         }

    //         if (!existingParent) {
    //             allSelections.pushObject(currentSelection);
    //         }
    //     }

    //     // Bail out if we're at the last column.
    //     if (nextTier === totalColumns) {
    //         return;
    //     }

    //     for (let i = nextTier; i < totalColumns; i++) {
    //         columns.objectAt(i).set('subjects', null);
    //     }

    //     // TODO: Fires a network request every time clicking here, instead of only when needed?
    //     this.querySubjects(selected.id, nextTier);
    // }

}
