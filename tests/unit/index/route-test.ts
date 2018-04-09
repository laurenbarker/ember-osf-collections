import { expect } from 'chai';
import { setupTest } from 'ember-mocha';
import { describe, it } from 'mocha';

import Route from '@ember/routing/route';

describe('Unit | Route | index', () => {
  setupTest('route:index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
