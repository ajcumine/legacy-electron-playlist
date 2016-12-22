# Technology

This document will aim to explain the reasoning behind the technology decisions that were made for this project.

## Electron
[Electron](http://electron.atom.io/) is platform that would allow someone with web a web development background to develop a native application using web technologies. At a base level Electron runs on [Node.js](https://nodejs.org) and allows you to use just HTML, CSS, and JavaScript to build a native application. This simplicity lends itself very well to experimentation by a larger community of developers.

Picking Electron as the application framework forces the project into the Node.js development environment and allows the creation of a modern web development environment.

## Yarn
[Yarn](https://yarnpkg.com/) is the chosen package manager over NPM itself. This is due to the speed and reliability advantages Yarn has over NPM, both ensuring a more productive development environment but also a more stable one as dependencies are cached and fixed at a base level.

## Babel
[Babel](https://babeljs.io/) allows the use of the next generation of JavaScript. As we are in the Node.js development environment we are forced into using JavaScript, which is old and needs better functionality.

## Webpack
[Webpack](https://webpack.github.io/) to use babel we need to transpile the fancy new JavaScript into something that can be read by older technologies. This is where webpack comes in. Webpack is used to transpile ES6 to ES5. There is hot module reloading on the development environment for the application code inside `/app`. Hot Module Reloading means that any change you make in the `/app` directory get automatically rebuilt into the bundle and do not require a application restart.

## ESLint
[ESLint](http://eslint.org/) creates a common style across the project. Linting with ESLint ensures higher code readability and productivity as common coding styles and practices emerge across the development environment.
