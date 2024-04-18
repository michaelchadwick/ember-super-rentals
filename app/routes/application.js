import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'super-rentals/config/environment';

export default class ApplicationRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.ogTitle = 'SuperRentals Ember Tutorial';

    if (ENV.environment == 'production') {
      this.headData.faviconType = 'prod';
    } else {
      this.headData.faviconType = 'dev';
    }
  }
}
