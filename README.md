[![CircleCI](https://circleci.com/gh/ajcumine/electron-playlist/tree/master.svg?style=svg)](https://circleci.com/gh/ajcumine/electron-playlist/tree/master)

# Electron Playlist

Application built using Electron.

## Development

Webpack is used to transpile ES6 to ES5. There is hot module reloading on the development environment for the application code inside `/app`.

`$ npm install` to install required dependencies.

`$ npm start` will run the electron application in development mode. This requires the application bundle to be build and stored at `localhost:3000/dist/bundle.js`.

`$ npm run hot-server` will start a webpack development server on port 3000 with hot module reloading. This will build the required `bundle.js` file.

## Linting

Eslint is using the default [AirBnB JavaScript config](https://github.com/airbnb/javascript) to lint all JavaScript files.
`$ npm run lint`

## Resources used while building this project

https://github.com/chentsulin/electron-react-boilerplate
