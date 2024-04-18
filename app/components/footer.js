import Component from '@glimmer/component';

export default class FooterComponent extends Component {
  get links() {
    const links = [];

    links.push({
      url: 'https://github.com/michaelchadwick/ember-super-rentals',
      title: 'Github Source',
      target: '_blank',
    });

    return links;
  }
}
