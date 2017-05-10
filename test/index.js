
const test = require('tape')
const pull = require('pull-stream')
const { drain } = pull
const { read } = require('pull-files')
const minify = require('../')

test('minify css', t => {
  t.plan(2)

  pull(
    read(__dirname + '/foo.css'),
    minify(),
    drain(file => {
      t.true(file, 'got file')
      console.log(file)
      console.log(file.data.toString())
    }, t.false)
  )
})
