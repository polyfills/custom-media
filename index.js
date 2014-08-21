
module.exports = customMedia

function customMedia(string, map) {
  return customMedia.replace(string, customMedia.parse(string, map))
}

customMedia.parse = function (string, map) {
  map = map || {}
  var RE_CM = /(?:^|\}|\s)@custom-media\s+--([\w-]+)\s+\((.*)\)\s*;/g
  var m
  while (m = RE_CM.exec(string)) map[m[1]] = m[2]
  return map
}

customMedia.replace = function (string, map) {
  var RE_MQ = /(?:^|\}|\s)@media[^\{]*\((\s*--([\w-]+\s*))\)[^\{]*\{/g
  var i = 0
  var _prev
  while (string !== _prev) {
    string = (_prev = string).replace(RE_MQ, replacer)
  }
  return string
  function replacer(str, p1, p2, idx) {
    if (idx < i) return str
    var query = map[p2]
    if (query) return str.replace(p1, query)
    i = idx
    return str
  }
}
