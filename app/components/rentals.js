import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RentalsComponent extends Component {
  @tracked query = '';
  @tracked type = '';

  @action typeChanged(type) {
    this.type = type;
    console.log(`Type changed to ${type}`);
  }
}
