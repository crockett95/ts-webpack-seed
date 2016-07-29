Development Notes
===

## Features

- [X] Integration tests
- [ ] Typedoc
- [X] Handlebars _NB: Override `handlebars/runtime` with query option_
- [X] I18n
- [X] Auto watch
  - [X] Karma runs (unit)
  - [X] Browsersync
  - [X] Linting
- [X] Browser test runner
  - [X] Unit
  - [X] Integration
- [X] Full Server configuration
- [ ] Eslint for JavaScript files
  - `gulpfile.babel.js`
  - `webpack.*.config.js`
  - `karma.conf.js`
- [X] Sass support
  - [X] Basic
  - [X] Sassdoc _NB: Move to build?_
  - [X] Scsslint
  - [X] Bourbon
- [ ] Galen Framework for layout testing / Quixote ?
  - [ ] Basic
  - [ ] File watching
  - [ ] Javascript tests
    - [ ] Linting
- [ ] Build config
  - [ ] Declaration (`*.d.ts`) files
  - [ ] Minified and unminified
  - [ ] with/without style bundling ?
  - [ ] strip console
- [ ] Settings files
  - [ ] `tslint.json`
  - [ ] scss-lint
  - [ ] `.editorconfig`
  - [ ] `.sassdocrc`


## Commands

1. `watch`
  * Autowatch file compilation
  * Auto run tests
    * Unit tests on file change
    * Integration tests on start
  * Lint on file change
2. `serve`
  * `gulp watch` plus test server
3. `build`
  * Lint
  * Compile all TS files minified
    * strip console statements
  * Compile all SCSS files minified
  * Write `.d.ts` files
  * Build docs
    * typedoc
    * sassdoc
4. `test`
  * Lint files
  * Run all tests once
    * Unit
    * Integration
    * Layout?

