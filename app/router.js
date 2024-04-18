import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';
import ENV from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });

  if (ENV.environment != 'production') {
    this.route('tests', { path: '/tests?nocontainer' });
  }

  this.route('rental', { path: '/rentals/:rental_id' });
});
