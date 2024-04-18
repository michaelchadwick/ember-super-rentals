import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

export default class NavBarComponent extends Component {
  get links() {
    const links = [];

    links.push({
      route: 'about',
      title: 'About',
      target: '_self',
    });
    links.push({
      route: 'contact',
      title: 'Contact',
      target: '_self',
    });

    if (ENV.environment != 'production') {
      links.push({
        route: 'tests',
        title: 'Tests',
        target: '_blank',
      });
    }

    return links;
  }
}
