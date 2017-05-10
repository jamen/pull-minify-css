
const csso = require('csso')
const pull = require('pull-stream')
const { filter, map, through } = pull
const replace = require('pull-prop')
const { extname } = require('path')

module.exports = minify
minify.buffer = buffer

function minify (options) {
  if (!options) options = {}

  // Do restructure by default
  if (options.restructure === undefined) {
    options.restructure = true
  }

  // Minify `file.data` using the buffer stream
  return pull(
    filter(file => extname(file.path) === '.css'),
    replace('data', _ => buffer(options))

  )
}

function buffer (options) {
  return map(buf => Buffer.from(csso.minify(buf.toString('utf8'), options).css))
}

