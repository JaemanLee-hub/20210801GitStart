;(() => {
  'use strict'
  function e(e, n) {
    for (var o = 0; o < n.length; o++) {
      var t = n[o]
      ;(t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        'value' in t && (t.writable = !0),
        Object.defineProperty(e, t.key, t)
    }
  }
  var n = 10 + 20,
    o = new ((function () {
      function n(e, o) {
        !(function (e, n) {
          if (!(e instanceof n))
            throw new TypeError('Cannot call a class as a function')
        })(this, n),
          (this.name = e),
          (this.age = o)
      }
      var o, t
      return (
        (o = n),
        (t = [
          {
            key: 'getName',
            value: function () {
              return this.name
            },
          },
        ]) && e(o.prototype, t),
        n
      )
    })())('김자맨', 5)
  console.log(n),
    console.log('hello이재만'),
    console.log('FOO'),
    console.log(void 0),
    console.log(o.name)
})()
