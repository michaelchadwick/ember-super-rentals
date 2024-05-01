import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query, type } = this.args;

    const q = query.toLowerCase();
    const t = type.toLowerCase();

    if (type) {
      rentals = rentals.filter(
        (rental) =>
          (rental.title.toLowerCase().includes(q) ||
            rental.city.toLowerCase().includes(q) ||
            rental.description.toLowerCase().includes(q)) &&
          rental.type.toLowerCase() == t,
      );
    } else if (query) {
      rentals = rentals.filter(
        (rental) =>
          rental.title.toLowerCase().includes(q) ||
          rental.city.toLowerCase().includes(q) ||
          rental.description.toLowerCase().includes(q),
      );
    }

    return rentals;
  }
}
