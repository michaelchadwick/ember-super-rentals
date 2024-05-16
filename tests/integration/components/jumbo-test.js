import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-super-rentals/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello World');
    assert.dom('.jumbo .tomster').exists();
  });

  test('it renders an EmberPopover when tomster is clicked', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    await click('.jumbo .tomster');
    assert.dom('.ember-popover').exists();
    assert.dom('.ember-popover .ember-popover-inner div').hasText('Tomster says: You are alive!');
  });
});
