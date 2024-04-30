import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | radio-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a RadioButtonInput', async function (assert) {
    await render(hbs`<RadioButton
      @name="foo"
      @value="bar"
      @groupValue={{this.type}}
      @changed={{this.typeChanged}}
    >
      Standalone
    </RadioButton>`);

    assert
      .dom('input')
      .exists()
      .hasAttribute('type', 'radio')
      .hasAttribute('name', 'foo')
      .hasAttribute('value', 'bar');
  });
});
