## Setup

Clone the project and run `npm i` to install dependencies

### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Runs the `jest` tests in watch mode, waiting for file changes.

#### npm run test:integration

Runs the `jest` integration test once

#### `npm run lint`

Fix linting issues
