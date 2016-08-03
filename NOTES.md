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
- [ ] Travis CI integration
  
  This probably won't be too useful at work, but for other projects, it could be a major benefit. Will probably require some custom configurations and possibly gulp tasks.

  - [ ] GH pages deployment

    See [gist for deployment](https://gist.github.com/domenic/ec8b0fc8ab45f39403dd) for starting point on
    getting this up and running. This will probably require some additional work to make it only deploy from master changes. Travis [seems to have that capability](https://docs.travis-ci.com/user/customizing-the-build/#Safelisting-or-blocklisting-branches) but it will probably require some fiddling. Found more information in the [deployment script documentation](https://docs.travis-ci.com/user/deployment/script/).

  - [ ] SauceLabs testing

    There's a possibility that the [karma-saucelabs-launcher](https://github.com/karma-runner/karma-sauce-launcher) will be the most straight forward way to do this, but I don't know yet. Found [an article](https://blog.codecentric.de/en/2014/11/testing-javascript-karma-and-saucelabs/) that seems to cover it.
    
  - [ ] basic testing

    I'm not yet sure what the best way to handle this is. Look further into the capabilities of Travis to get this up and running.


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

