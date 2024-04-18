import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'super-rentals/config/environment';

export default class ApplicationRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'SuperRentals';
    this.headData.ogTitle = 'SuperRentals Ember Tutorial';

    if (ENV.environment == 'production') {
      this.headData.faviconType = 'prod';
      this.headData.envTitle = 'prod';
    } else {
      this.headData.faviconType = 'dev';
      this.headData.envTitle = 'dev';
    }
  }
}
