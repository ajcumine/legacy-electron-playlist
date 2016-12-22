# Development

## Dependencies
- [Node.js](https://nodejs.org/) preferably installed with [NVM](https://github.com/creationix/nvm) to take advantage of `.nvmrc` version management.
- [Yarn](https://yarnpkg.com/)

## Setup
With the dependencies installed run the following commands in the project root directory to start the application in development mode:

```
$ yarn install
```
This installs the required node dependencies.
> If there is an error during the installation of an `eslint` package, see [Linting](#Linting)

```
$ yarn run hot-server
```
This starts a webpack development server on port 3000 with hot module reloading. This builds a `bundle.js` file containing all the transpiled ES6 from `/app` and serves it at `localhost:3000/dist/bundle.js`. Changes to

```
$ yarn start
```
This runs the electron application in development mode. This requires the application bundle to be build and stored at `localhost:3000/dist/bundle.js` by the command above.

## Testing
`$ yarn test`

COMING SOON

## Linting
`$ yarn run lint`

ESLint is using the default [AirBnB JavaScript config](https://github.com/airbnb/javascript) to lint all JavaScript files.

In order to ensure `eslint-config-airbnb` dependencies are the correct versions you may need to run the following script:
```
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn upgrade "$PKG@latest" -D
)
```
