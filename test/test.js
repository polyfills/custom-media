
var fs = require('fs')
var path = require('path')
var assert = require('assert')

var customMedia = require('..')

describe('Custom Media', function () {
  ;[
    '1',
    '2',
    '3',
    '4',
    '5',
  ].forEach(function (name) {
    it(name, function () {
      var input = fixture(name + '.css')
      var output = fixture(name + '.out.css')
      assert.equal(customMedia(input).trim(), output.trim())
    })
  })
})

function fixture(name) {
  return fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8')
}
