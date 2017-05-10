
# pull-minify-css

> Minify CSS files or buffers inside a pull-stream

Minifies [streamed CSS files](https://github.com/jamen/pull-files) with [`csso`](https://github.com/css/csso)

```js
const pull = require('pull-stream')
const { read, write } = require('pull-files')
const minify = require('pull-minify-css')

pull(
  read(__dirname + 'src/css/**/*.css'),
  minify({ restructure: true }),
  write(__dirname + '/out/css', err => {
    // done
  })
)
```

## Install

```sh
npm install --save pull-minify-css
```

```sh
yarn add pull-minify-css
```

## Usage

### `minify(options?)`

Minifies [streamed files](https://github.com/jamen/pull-files). See [`csso`'s options](https://github.com/css/csso#minifysource-options) to use here

```js
pull(
  read([ 'index.js', 'foo.js' ], { cwd: __dirname }),
  minify({ ...options }),
  write(__dirname + '/out', err => {
    // done
  })
)
```

#### `minify.buffer(options?)`

Minifies buffers instead of files.  Options the same

```js
pull(
  readFile(__dirname + '/foo.css'),
  minify.buffer({ ...options }),
  writeFile(__dirname + '/out.css')
)
```

### Also see

 - [`pull-files`](https://github.com/jamen/pull-files) for reading and writing files
 - [`pull-minify-js`](https://github.com/jamen/pull-minify-js) for minifying JS

---

Maintained by [Jamen Marz](https://git.io/jamen) (See on [Twitter](https://twitter.com/jamenmarz) and [GitHub](https://github.com/jamen) for questions & updates)

