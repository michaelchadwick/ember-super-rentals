import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | radio-button-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an input of type radio', async function (assert) {
    await render(hbs`<RadioButtonInput />`);

    assert.dom('input').exists().hasAttribute('type', 'radio');
  });
});
