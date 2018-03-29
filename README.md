# insureon-cx

Zeolite is a convention and collection of React for Web components that is compatible with React Native. Unlike react-native-web and similar projects, it uses CSS Modules instead of JavaScript styles to unleash the full power of CSS. React Native is becoming the de-facto standard for defining the interface for fundamental components.

To install and run:

1. Type "npm run install" to initialize the 3 separate projects.
2. Type "cd insureon-portal && npm start" to start the server.
3. Go to "http://0.0.0.0:3000" in your favorite browser.
4. Profit!

## Project Goals

* The framework should be junior-developer friendly, and even non-developer friendly up to a point. By providing layout and styling components, creating and prototyping pages should be easy. CSS is still the core styling mechanism for components, but page layout should not require in-depth knowledge of CSS.

* The build system should be simple and straightforward, from both a usability and implementation perspective. For example, create-react-app is easy to use, but the underlying scripts are not simple. Understanding the build system is critical to managing, updating, and adding new modules and plugins.

* Abstraction should be used to isolate features such as styles, REST calls, and state management using dependency injection and other techniques. For example, fetch() or axios.get() could be abstracted to Zeolite.getJSON().

## Project Direction

* Use CSS Modules and module aliasing to allow components to be platform-agnostic. React Native styles and CSS Modules both use the same style property syntax, and because you can omit the filename extension when importing modules, it's easy to be portable.

* Separate item styling from container styling, using Dividers, Spacers, etc. Adding margins and border to items directly forces you to use CSS to to style everything. Composing views with containers allows you to add styles external to the item, increasing the potential for component re-use.

## Benefits of React Native

* Cross-platform interface, abstracting over low level HTML elements
* Styles can be passed in as an array, simplifying conditionals and style combinations
* Styling via modules reduces conflicts caused by component injection

## References and Related Projects

* React Native Component Documentation
* React Native Elements Component Documentation
* React Native NativeBase Component Documentation
* Material-UI Component Documentation
* React Bootstrap Component Documentation
* React Sketch.app Component Documentation
* React Primitives — React cross-platform interface

## Dependencies

### Babel

| Dependency | Description |
| ------------- | ------------- |
| babel-core | Babel compiler core. |
| babel-loader | Allows transpiling JavaScript files using Babel and webpack. |
| babel-preset-env | A Babel preset that compiles ES2015+ down to ES5 by automatically. |
| babel-preset-react | Babel preset for all React plugins. |
| babel-plugin-transform-class-properties | Allows arrow function that capture this to be defined in classes. |

### ESLint

| Dependency | Description |
| ------------- | ------------- |
| eslint | Identifies reportis on patterns found in ECMAScript/JavaScript code. |
| eslint-loader | Webpack loader that runs eslint during compilation. |
| eslint-plugin-react | React specific linting rules for ESLint. |
| babel-eslint | Allows you to lint ALL valid Babel code with the fantastic ESLint. |

### CSS

| Dependency | Description |
| ------------- | ------------- |
| css-loader | Allows you to use CSS Modules, the same convention used in React Native. |
| style-loader | Injects styles. Use ExtractText plugin for production builds. |

### Webpack

| Dependency | Description |
| ------------- | ------------- |
| webpack | |
| webpack-dev-server | |
