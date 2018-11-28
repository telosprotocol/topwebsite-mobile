!(function (e, t) {
  function i () {
    var t = n.getBoundingClientRect().width
        t / m > 540 && (t = 540 * m)
        var i = t / 10
        n.style.fontSize = i + 'px', s.rem = e.rem = i
  }
  var a, r = e.document,
    n = r.documentElement,
    o = r.querySelector('meta[name="viewport"]'),
    l = r.querySelector('meta[name="flexible"]'),
    m = 0,
    d = 0,
    s = t.flexible || (t.flexible = {})
    if (o) {
    console.warn('将根据已有的meta标签来设置缩放比例')
        var p = o.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
        p && (d = parseFloat(p[1]), m = parseInt(1 / d))
  } else if (l) {
    var c = l.getAttribute('content')
        if (c) {
      var u = c.match(/initial\-dpr=([\d\.]+)/),
        f = c.match(/maximum\-dpr=([\d\.]+)/)
            u && (m = parseFloat(u[1]), d = parseFloat((1 / m).toFixed(2))), f && (m = parseFloat(f[1]), d = parseFloat((1 / m).toFixed(2)))
    }
  }
  if (!m && !d) {
    var v = e.navigator.appVersion.match(/android/gi),
      h = e.chrome,
      x = e.navigator.appVersion.match(/iphone|ipad/gi),
      b = e.devicePixelRatio,
      w = (v || x) && h
        m = x || w ? b >= 3 && (!m || m >= 3) ? 3 : b >= 2 && (!m || m >= 2) ? 2 : 1 : 1, d = 1 / m
  }
  if (n.setAttribute('data-dpr', m), !o)
    {if (o = r.createElement("meta"), o.setAttribute("name", "viewport"), o.setAttribute("content", "initial-scale=" + d + ", maximum-scale=" + d + ", minimum-scale=" + d + ", user-scalable=no"), n.firstElementChild) n.firstElementChild.appendChild(o);
        else {
            var g = r.createElement("div");
            g.appendChild(o), r.write(g.innerHTML)
        }}
  e.addEventListener('resize', function () { clearTimeout(a), a = setTimeout(i, 300) }, !1), e.addEventListener('pageshow', function (e) { e.persisted && (clearTimeout(a), a = setTimeout(i, 300)) }, !1), 'complete' === r.readyState ? r.body.style.fontSize = 12 * m + 'px' : r.addEventListener('DOMContentLoaded', function (e) { r.body.style.fontSize = 12 * m + 'px' }, !1), i(), s.dpr = e.dpr = m, s.refreshRem = i, s.rem2px = function (e) {
    var t = parseFloat(e) * this.rem
        return 'string' === typeof e && e.match(/rem$/) && (t += 'px'), t
  }, s.px2rem = function (e) {
    var t = parseFloat(e) / this.rem
        return 'string' === typeof e && e.match(/px$/) && (t += 'rem'), t
  }
}(window, window.lib || (window.lib = {})))
