# A reference implementation of RESTful Node.js based API Server

## Prerequisites for developing api in local environment

Node js version `^14.17.3` required. You can find Node js installable [here](https://nodejs.org/en/download/)

Install Yarn from [here](https://classic.yarnpkg.com/en/docs/install)

## Running locally

Install the dependencies:

```bash
yarn install
```

Once all the dependancies are installed, you are all set for local development.

By default, server runs on port `3000`. Make sure port is free and not used by any other application on your local machine. However you can change this port value in environment [config file](https://github.com/maulik887/nodejs-api/blob/master/.env) to use different port. For example-

```
# Port number
PORT=8080
LOG_LEVEL=error
```

## Commands

Running locally in dev mode:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run test coverage
yarn coverage
```

`------------------- OR -------------------`

In case you are familiar with Docker and wish to develop & run application using Docker container then follow bellow instructions. (Make sure you have [Docker](https://docs.docker.com/get-docker/) installed on machine before running these commands)

Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

Once local server is up and running, you can test endpoints using `curl` commands.

```bash

# call Hello World api, this will respond with an HTML response from server
curl --location --request GET 'http://localhost:3000/'

# call Hello World api with Accept header, this will respond with JSON response from server
curl --location --request GET 'http://localhost:3000/' --header 'Accept: application/json'

```

Or you can visit above url in browser or use [Postman](https://www.postman.com/) for testing these apis. Once you have Postman on your local machine, you can use [postman collection](https://github.com/maulik887/nodejs-api/blob/main/Hello-World-Api.postman_collection.json) to get the list of apis.

## Logging

*In development mode by default logging is set to `error`, no debug logs will be printed in console. 
To change the log level open [config file](https://github.com/maulik887/nodejs-api/blob/master/.env) and set the desired log level. Start the server after changing config and you will see logs as per the log level.*

For example below config file will enable `debug` level logging.

```
# Port number
PORT=3000
LOG_LEVEL=debug
```

*How to use logging in code?*

Import the logger from `src/config/logger.js`. It is using the [Winston](https://github.com/winstonjs/winston) logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):

```javascript
const logger = require('<path to src>/config/logger');

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.debug('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.info('message'); // level 5
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**HelloWorld routes**:\
`GET http://localhost:3000/` or `GET http://localhost:3000/v1/` - Hello world api

`POST http://localhost:3000/` or `GET http://localhost:3000/v1/` - Hello world api

`GET http://localhost:3000/docs` or `GET http://localhost:3000/v1/docs` - Hello world api documentation

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--app.js          # Express app
 |--index.js        # App entry point
```

## License

[MIT](LICENSE)
