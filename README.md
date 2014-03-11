# GitHub Flavored Markdown Stylesheet

Stylesheet for rendering GitHub Flavored Markdown.



## Sass and CSS

The GitHub Flavored Markdown Stylesheet ships in two formats:

* `github-markdown.scss` — Source Sass file that gets compiled and minified into regular CSS.
* `github-markdown.css` — Compiled CSS file ready to drop into any environent.



## Local development

The GitHub Flavored Markdown Stylesheet is written in Sass and compiled to regular CSS via [Gruntfile](Gruntfile.js). To compile on your own, you need Grunt and our project's dependencies installed.

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/gfm-stylesheet` directory, then run `npm install` to install the necessary dependencies.
3. Done! Now you can run `grunt` from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.



## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, the GitHub Flavored Markdown Stylesheet is maintained under the Semantic Versioning guidelines.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

- Breaking backward compatibility **bumps the major** while resetting minor and patch
- New additions without breaking backward compatibility **bumps the minor** while resetting the patch
- Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.



## License

Copyright 2014 GitHub, Inc. Released under [MIT license](LICENSE.md).
