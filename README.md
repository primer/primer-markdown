# Primer user content styles

Stylesheets for rendering GitHub Flavored Markdown and syntax highlighted code snippets (powered by Pygments). Built to be used with [Primer](/primer/primer).

## SCSS and CSS

The GitHub user content stylesheets ship in two formats, CSS and SCSS.

### CSS

* `user-content.css` — Compiled CSS file ready to drop into any environment. Contains both Markdown and syntax stylesheets.
* `user-content.min.css` — Minified version of `user-content.css`

### SCSS

* `markdown.scss` — Source SCSS file for rendering markdown
* `user-content.scss` — `@imports` both of the above. If you import this file, you do not need to import the others.

## Development

The stylesheets are written in SCSS and compiled to regular CSS. Also included is a [Gruntfile](Gruntfile.js) for local project development.

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/user-content` directory, then run `npm install` to install the necessary dependencies.
3. Done! Now you can run `grunt` from the command line to compile SCSS to CSS.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

## Contributing

Please read through our [contributing guidelines](https://github.com/primer/user-content/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

All HTML and CSS should conform to the [style guidelines](http://primercss.io/guidelines).

Editor preferences are available in the [editor config](https://github.com/primer/user-content/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Primer is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

## License

Created by and copyright GitHub, Inc. Released under the [MIT license](LICENSE.md).
