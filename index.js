
const csso = require('csso')
const { pull, filter, map } = require('pull-stream')
const replace = require('pull-prop')
const { extname } = require('path')

module.exports = minify
minify.buffer = buffer

function minify (options) {
  // Minify `file.data` using the buffer stream
  return pull(
    filter(file => extname(file.path) === '.css'),
    replace('data', _ => buffer(options))

  )
}

function buffer (options) {
  return map(buf => Buffer.from(csso.minify(buf.toString('utf8'), options).css))
}

