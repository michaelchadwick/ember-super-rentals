# EmberJS Super Rentals Tutorial Site

This is my version of the [EmberJS Super Rentals tutorial](https://guides.emberjs.com/release/tutorial). It has all the features of the original, plus some additional stuff to show that I _might_ know what I'm doing in EmberJS.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://cli.emberjs.com/release/)
  - [Ember CLI Dotenv](https://www.npmjs.com/package/ember-cli-dotenv)
  - [Ember CLI Head](https://www.npmjs.com/package/ember-cli-head)
- [PNPM](https://pnpm.io/installation)
- [Web browser](https://browser-update.org/browsers.html)
- [MapBox Access Token](https://account.mapbox.com/access-tokens/)

## Installation

- `git clone <repository-url>` this repository
- `cd ember-super-rentals`
- `pnpm install`

## Running / Development

- `pnpm start`
- Visit your app at [http://localhost:4210](http://localhost:4210).
- Visit your tests at [http://localhost:4210/tests](http://localhost:4210/tests).

### Running Tests

- `ember test` - run tests once in terminal
- `ember t -s` - run tests continuously in a browser

### Linting

- `pnpm lint`
- `pnpm lint:fix`

### Building

- `ember build` (development)
- `ember build --environment=production` (production)

### Deploying

Currently being built on [Netlify](https://mc-emberjs-super-rentals.netlify.app). Re-deploys on pushes to master.
