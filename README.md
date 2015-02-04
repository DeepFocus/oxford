# Oxford

Oxford is a front-end skeleton framework for rapid website development,
created by John Kreitlow and maintained by the Dev Team at [Deep Focus](http://deepfocus.github.io/).

The main purpose of Oxford is to provide a set of useful tools and libraries in a consistent structure that promotes healthy code style and unbiased flexibility while making as few assumptions as possible.

## First Steps

To use Oxford, clone the repository or pull it into your existing project. We usually do this with a git subtree, which squashes the commit history and places it neatly into your project:

```bash
$ git subtree add --prefix ./assets https://github.com/DeepFocus/oxford.git master --squash
```

[More information on git subtree can be found here](http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/).

Then, simply navigate to the newly-grabbed folder and run `npm install`. This will ensure all the expected grunt tasks are available.

Then `grunt dev` to get to work!

## Up and Running

### A Few Assumptions

The initial release of Oxford uses these languages and libraries, since we use them frequently in our projects. Future variants of Oxford may have different requirements and dependencies.

#### Tools
 * [Grunt](http://gruntjs.com/)
 * [Less](http://lesscss.org/)
 * [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)

#### Javascript libraries
 * [Modernizr](http://modernizr.com/)
 * [JQuery](http://jquery.com/)
 * [Require.js](http://requirejs.org/)

#### Less
 * [Font Awesome](http://fontawesome.io/)
 * [normalize.css](http://necolas.github.io/normalize.css/)

### A Few Gotchas
There are some key quirks in this project that may be overlooked, so here they are upfront, in list form.

 * Our JavaScript modules use tabs instead of spaces. You can change this in your own project if you see fit. Our projects enforce tabs and other style requirements with [jscs](http://jscs.info/). This only applies to scripts in `js/main.js` and the `js/app` directory.
 * The `bower.json` file is mainly intended for use with the [grunt-bowercopy](https://github.com/timmywil/grunt-bowercopy) task.
 * There is one entry point for Less compilation, which is `less/style.less`. This is not to be confused with `less/styles/_styles.less`.
 * The Less output is currently not minified or compressed. You may want to use [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) in the meantime.

## License

By contributing your code, you agree to license your contribution under the [MIT License](LICENSE).
