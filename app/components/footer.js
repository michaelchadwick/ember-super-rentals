import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

export default class FooterComponent extends Component {
  get links() {
    const links = [];

    links.push({
      url: 'https://michaelchadwick.info',
      route: 'author',
      title: 'Author',
      target: '_blank',
    });

    links.push({
      url: 'https://github.com/michaelchadwick/ember-super-rentals',
      route: 'source',
      title: 'Github Source',
      target: '_blank',
    });

    links.push({
      url: 'https://guides.emberjs.com/release/tutorial',
      route: 'tutorial',
      title: 'Ember Tutorial',
      target: '_blank',
    });

    if (ENV.environment != 'production') {
      links.push({
        route: 'tests',
        title: '[Tests]',
        target: '_blank',
      });
    }

    return links;
  }
}
