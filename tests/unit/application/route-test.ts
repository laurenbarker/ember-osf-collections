import { expect } from 'chai';
import { setupTest } from 'ember-mocha';
import { describe, it } from 'mocha';

describe('Unit | Route | application', () => {
  setupTest('route:application', {
    // Specify the other units that are required for this test.
    needs: [
        'service:i18n',
        'service:session',
    ],
  });

  it('exists', function() {
    const route = this.subject();
    expect(route).to.be.ok;
  });
});
