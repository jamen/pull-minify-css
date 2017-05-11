
const csso = require('csso')
const { pull, map } = require('pull-stream')
const replace = require('pull-prop')
const { extname } = require('path')

module.exports = minify
minify.buffer = buffer

function minify (options) {
  if (!options) options = {}

  const strict = options.strict !== undefined ? options.strict : true

  // Minify `file.data` using the buffer stream
  return pull(
    map(file => {
      if (!strict || extname(file.path) === '.css') {
        return file
      } else {
        throw new Error(`Can only minify CSS files (got ${file.path})`)
      }
    }),
    replace('data', _ => buffer(options))
  )
}

function buffer (options) {
  return map(buf => Buffer.from(csso.minify(buf.toString('utf8'), options).css))
}

