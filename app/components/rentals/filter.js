import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      const q = query.toLowerCase();

      rentals = rentals.filter(
        (rental) =>
          rental.title.toLowerCase().includes(q) ||
          rental.city.toLowerCase().includes(q),
      );
    }

    return rentals;
  }
}
