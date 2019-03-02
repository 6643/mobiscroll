/* eslint-disable */
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.mobiscroll = t()
}(this, function() {
	"use strict";
	function e(e) {
		return "function" == typeof e
	}
	function t(e) {
		return "object" === (void 0 === e ? "undefined" : ge(e))
	}
	function a(e) {
		return "number" == typeof e.length
	}
	function n(e) {
		return e.replace(/-+(.)?/g, function(e, t) {
			return t ? t.toUpperCase() : ""
		})
	}
	function s(e, t, a) {
		for (var n in t) a && (Ne.isPlainObject(t[n]) || Ne.isArray(t[n])) ? ((Ne.isPlainObject(t[n]) && !Ne.isPlainObject(e[n]) || Ne.isArray(t[n]) && !Ne.isArray(e[n])) && (e[n] = {}), s(e[n], t[n], a)) : void 0 !== t[n] && (e[n] = t[n])
	}
	function i(e) {
		return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}
	function r(e, t) {
		return "number" != typeof t || Me[i(e)] ? t : t + "px"
	}
	function o(e, t, a) {
		ve[e] = function(n, s) {
			var i, r, o = {}, l = s || {};
			return !1 !== a && (l.preset = e), Ne(n).each(function() {
				i = new t(this, l), o[this.id] = i
			}), r = Object.keys(o), 1 == r.length ? o[r[0]] : o
		}
	}
	function l() {}
	function c(e) {
		var t, a = [];
		for (t in e) a.push(e[t]);
		return a
	}
	function d(e) {
		var t, a = {};
		if (e) for (t = 0; t < e.length; t++) a[e[t]] = e[t];
		return a
	}
	function m(e) {
		return e - parseFloat(e) >= 0
	}
	function u(e) {
		return "string" == typeof e
	}
	function h(e, t, a) {
		return Math.max(t, Math.min(e, a))
	}
	function f(e, t) {
		var a, n;
		return t = t || 100,
		function() {
			var s = this,
				i = +new Date,
				r = arguments;
			a && i < a + t ? (clearTimeout(n), n = setTimeout(function() {
				a = i, e.apply(s, r)
			}, t)) : (a = i, e.apply(s, r))
		}
	}
	function p(e) {
		"vibrate" in navigator && navigator.vibrate(e || 50)
	}
	function b(e, t, a) {
		return 100 * (e - t) / (a - t)
	}
	function v(e, t, a) {
		var n = a.attr(e);
		return void 0 === n || "" === n ? t : "true" === n
	}
	function g() {
		je++, setTimeout(function() {
			je--
		}, 500)
	}
	function x(e, t) {
		var a = (e.originalEvent || e).changedTouches[0],
			n = document.createEvent("MouseEvents");
		n.initMouseEvent("click", !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), n.tap = !0, t.mbscChange = !0, t.dispatchEvent(n), g()
	}
	function T(e, t, a) {
		var n = e.originalEvent || e,
			s = (a ? "page" : "client") + t;
		return n.targetTouches && n.targetTouches[0] ? n.targetTouches[0][s] : n.changedTouches && n.changedTouches[0] ? n.changedTouches[0][s] : e[s]
	}
	function y(e, t, a, n, s, i) {
		function r(e) {
			u || (n && e.preventDefault(), u = this, d = T(e, "X"), m = T(e, "Y"), h = !1, f = new Date)
		}
		function o(e) {
			u && !h && (Math.abs(T(e, "X") - d) > s || Math.abs(T(e, "Y") - m) > s) && (h = !0)
		}
		function l(t) {
			u && ((i && new Date - f < 100 || !h) && (t.preventDefault(), a.call(u, t, e)), u = !1, g())
		}
		function c() {
			u = !1
		}
		var d, m, u, h, f, p = ve.$,
			b = p(t);
		s = s || 9, e.settings.tap && b.on("touchstart.mbsc", r).on("touchcancel.mbsc", c).on("touchmove.mbsc", o).on("touchend.mbsc", l), b.on("click.mbsc", function(t) {
			n && t.preventDefault(), a.call(this, t, e)
		})
	}
	function _(e) {
		if (je && !e.tap && ("TEXTAREA" != e.target.nodeName || "mousedown" != e.type)) return e.stopPropagation(), e.preventDefault(), !1
	}
	function w(e, t, a) {
		Pe && $e(function() {
			$e(e).each(function() {
				new t(this)
			}), $e(document).on("mbsc-enhance", function(a, n) {
				$e(a.target).is(e) ? new t(a.target, n) : $e(e, a.target).each(function() {
					new t(this, n)
				})
			}), a && $e(document).on("mbsc-refresh", function(t) {
				var a;
				$e(t.target).is(e) ? (a = Re[t.target.id]) && a.refresh() : $e(e, t.target).each(function() {
					(a = Re[this.id]) && a.refresh()
				})
			})
		})
	}
	function M() {
		var e = document.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
		document.cookie = "mobiscrollClientError=1; expires=" + new Date((new Date).getTime() + 864e5).toUTCString() + "; path=/";
		try {
			window.name = (window.name || "") + ";mobiscrollClientError"
		} catch (e) {}
		C("error", {
			trialCode: ze.apiKey,
			sessionID: e
		}, function() {
			document.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
			try {
				window.name = (window.name || "").replace(/;mobiscrollClientError/g, "")
			} catch (e) {}
		})
	}
	
	function S(e, t, a, n, s, i, r) {
		var o = new Date(e, t, a, n || 0, s || 0, i || 0, r || 0);
		return 23 == o.getHours() && 0 === (n || 0) && o.setHours(o.getHours() + 2), o
	}
	function k(e, t, a) {
		if (!t) return null;
		var n, s, i = Ke({}, Ue, a),
			r = function(t) {
				for (var a = 0; n + 1 < e.length && e.charAt(n + 1) == t;) a++, n++;
				return a
			}, o = function(e, t, a) {
				var n = "" + t;
				if (r(e)) for (; n.length < a;) n = "0" + n;
				return n
			}, l = function(e, t, a, n) {
				return r(e) ? n[t] : a[t]
			}, c = "",
			d = !1;
		for (n = 0; n < e.length; n++) if (d) "'" != e.charAt(n) || r("'") ? c += e.charAt(n) : d = !1;
		else switch (e.charAt(n)) {
			case "d":
				c += o("d", i.getDay(t), 2);
				break;
			case "D":
				c += l("D", t.getDay(), i.dayNamesShort, i.dayNames);
				break;
			case "o":
				c += o("o", (t.getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5, 3);
				break;
			case "m":
				c += o("m", i.getMonth(t) + 1, 2);
				break;
			case "M":
				c += l("M", i.getMonth(t), i.monthNamesShort, i.monthNames);
				break;
			case "y":
				s = i.getYear(t), c += r("y") ? s:
					(s % 100 < 10 ? "0" : "") + s % 100;
					break;
				case "h":
					var m = t.getHours();
					c += o("h", m > 12 ? m - 12 : 0 === m ? 12 : m, 2);
					break;
				case "H":
					c += o("H", t.getHours(), 2);
					break;
				case "i":
					c += o("i", t.getMinutes(), 2);
					break;
				case "s":
					c += o("s", t.getSeconds(), 2);
					break;
				case "a":
					c += t.getHours() > 11 ? i.pmText:
						i.amText;
						break;
					case "A":
						c += t.getHours() > 11 ? i.pmText.toUpperCase():
							i.amText.toUpperCase();
							break;
						case "'":
							r("'") ? c += "'":
								d = !0;
								break;
							default:
								c += e.charAt(n)
		}
		return c
	}
	function D(e, t, a) {
		var n = Ke({}, Ue, a),
			s = n.defaultValue && n.defaultValue.getTime ? n.defaultValue : new Date;
		if (!e || !t) return s;
		if (t.getTime) return t;
		t = "object" == (void 0 === t ? "undefined" : ge(t)) ? t.toString() : t + "";
		var i, r = n.shortYearCutoff,
			o = n.getYear(s),
			l = n.getMonth(s) + 1,
			c = n.getDay(s),
			d = -1,
			m = s.getHours(),
			u = s.getMinutes(),
			h = 0,
			f = -1,
			p = !1,
			b = function(t) {
				var a = i + 1 < e.length && e.charAt(i + 1) == t;
				return a && i++, a
			}, v = function(e) {
				b(e);
				var a = "@" == e ? 14 : "!" == e ? 20 : "y" == e ? 4 : "o" == e ? 3 : 2,
					n = new RegExp("^\\d{1," + a + "}"),
					s = t.substr(T).match(n);
				return s ? (T += s[0].length, parseInt(s[0], 10)) : 0
			}, g = function(e, a, n) {
				var s, i = b(e) ? n : a;
				for (s = 0; s < i.length; s++) if (t.substr(T, i[s].length).toLowerCase() == i[s].toLowerCase()) return T += i[s].length, s + 1;
				return 0
			}, x = function() {
				T++
			}, T = 0;
		for (i = 0; i < e.length; i++) if (p) "'" != e.charAt(i) || b("'") ? x() : p = !1;
		else switch (e.charAt(i)) {
			case "d":
				c = v("d");
				break;
			case "D":
				g("D", n.dayNamesShort, n.dayNames);
				break;
			case "o":
				d = v("o");
				break;
			case "m":
				l = v("m");
				break;
			case "M":
				l = g("M", n.monthNamesShort, n.monthNames);
				break;
			case "y":
				o = v("y");
				break;
			case "H":
				m = v("H");
				break;
			case "h":
				m = v("h");
				break;
			case "i":
				u = v("i");
				break;
			case "s":
				h = v("s");
				break;
			case "a":
				f = g("a", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
				break;
			case "A":
				f = g("A", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
				break;
			case "'":
				b("'") ? x():
					p = !0;
					break;
				default:
					x()
		}
		if (o < 100 && (o += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (o <= ("string" != typeof r ? r : (new Date).getFullYear() % 100 + parseInt(r, 10)) ? 0 : -100)), d > -1) {
			l = 1, c = d;
			do {
				var y = 32 - new Date(o, l - 1, 32, 12).getDate();
				c > y && (l++, c -= y)
			} while (c > y)
		}
		m = -1 == f ? m : f && m < 12 ? m + 12 : f || 12 != m ? m : 0;
		var _ = n.getDate(o, l - 1, c, m, u, h);
		return n.getYear(_) != o || n.getMonth(_) + 1 != l || n.getDay(_) != c ? s : _
	}
	function N(e) {
		var t;
		for (t in e) if (void 0 !== Xe[e[t]]) return !0;
		return !1
	}
	function A(e, t) {
		if ("touchstart" == e.type) $e(t).attr("data-touch", "1");
		else if ($e(t).attr("data-touch")) return $e(t).removeAttr("data-touch"), !1;
		return !0
	}
	function V(e, t) {
		var a, n = getComputedStyle(e[0]);
		return $e.each(["t", "webkitT", "MozT", "OT", "msT"], function(e, t) {
			if (void 0 !== n[t + "ransform"]) return a = n[t + "ransform"], !1
		}), a = a.split(")")[0].split(", "), t ? a[13] || a[5] : a[12] || a[4]
	}
	function I(e) {
		if (e) {
			if (et[e]) return et[e];
			var t = $e('<div style="background-color:' + e + ';"></div>').appendTo("body"),
				a = getComputedStyle(t[0]),
				n = a.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
				s = .299 * n[0] + .587 * n[1] + .114 * n[2],
				i = s < 130 ? "#fff" : "#000";
			return t.remove(), et[e] = i, i
		}
	}
	function F(e, t, a, n, s, i) {
		function r(e) {
			var t;
			f = $e(this), y = +f.attr("data-step"), b = +f.attr("data-index"), p = !0, s && e.stopPropagation(), "mousedown" == e.type && e.preventDefault(), "keydown" != e.type ? (g = T(e, "X"), x = T(e, "Y"), t = A(e, this)) : t = 32 === e.keyCode, v || !t || f.hasClass("mbsc-disabled") || (m(b, y) && (f.addClass("mbsc-active"), i && i.addRipple(f.find(".mbsc-segmented-content"), e)), "mousedown" == e.type && $e(document).on("mousemove", o).on("mouseup", c))
		}
		function o(e) {
			(Math.abs(g - T(e, "X")) > 7 || Math.abs(x - T(e, "Y")) > 7) && (p = !0, d())
		}
		function c(e) {
			"touchend" == e.type && e.preventDefault(), d(), "mouseup" == e.type && $e(document).off("mousemove", o).off("mouseup", c)
		}
		function d() {
			v = !1, clearInterval(_), f && (f.removeClass("mbsc-active"), i && setTimeout(function() {
				i.removeRipple()
			}, 100))
		}
		function m(e, t) {
			return v || w(e) || (b = e, y = t, v = !0, p = !1, setTimeout(u, 100)), v
		}
		function u() {
			if (f && f.hasClass("mbsc-disabled")) return void d();
			!v && p || (p = !0, t(b, y, u)), v && a && (clearInterval(_), _ = setInterval(function() {
				t(b, y)
			}, a))
		}
		function h() {
			e.off("touchstart mousedown keydown", r).off("touchmove", o).off("touchend touchcancel keyup", c)
		}
		var f, p, b, v, g, x, y, _, w = n || l;
		return e.on("touchstart mousedown keydown", r).on("touchmove", o).on("touchend touchcancel keyup", c), {
			start: m,
			stop: d,
			destroy: h
		}
	}
	function H(e) {
		return e[0].innerWidth || e.innerWidth()
	}
	function P(e) {
		var t = e[0],
			a = e.attr("data-role"),
			n = e.attr("type") || t.nodeName.toLowerCase();
		return /(switch|range|rating|segmented|stepper)/.test(a) && (n = a), n
	}
	function L(e) {
		var t = ve.themes.form[e];
		return t && t.addRipple ? t : null
	}
	function O() {
		clearTimeout(Ft), Ft = setTimeout(function() {
			$e("textarea.mbsc-control").each(function() {
				E(this)
			})
		}, 100)
	}
	function E(e) {
		var t = void 0,
			a = void 0,
			n = void 0,
			s = $e(e).attr("rows") || 6;
		e.offsetHeight && (e.style.height = "", n = e.scrollHeight - e.offsetHeight, t = e.offsetHeight + (n > 0 ? n : 0), a = Math.round(t / 24), a > s ? (e.scrollTop = t, t = 24 * s + (t - 24 * a), $e(e).addClass("mbsc-textarea-scroll")) : $e(e).removeClass("mbsc-textarea-scroll"), t && (e.style.height = t + "px"))
	}
	function Y(e) {
		if (!$e(e).hasClass("mbsc-textarea-scroll")) {
			var t = e.scrollHeight - e.offsetHeight,
				a = e.offsetHeight + t;
			e.scrollTop = 0, e.style.height = a + "px"
		}
	}
	function j(e, t) {
		var a = {}, n = e.parent(),
			s = n.find(".mbsc-err-msg"),
			i = e.attr("data-icon-align") || "left",
			r = e.attr("data-icon");
		n.hasClass(Rt) ? n = n.parent() : $e('<span class="' + Rt + '"></span>').insertAfter(e).append(e), s && n.find("." + Rt).append(s), r && (-1 !== r.indexOf("{") ? a = JSON.parse(r) : a[i] = r), (r || t) && (Ke(a, t), n.addClass((a.right ? "mbsc-ic-right " : "") + (a.left ? " mbsc-ic-left" : "")).find("." + Rt).append(a.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + a.left + '"></span>' : "").append(a.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + a.right + '"></span>' : ""))
	}
	function z(e, t, a) {
		var n = {}, s = a[0],
			i = a.attr("data-password-toggle"),
			r = a.attr("data-icon-show") || "eye",
			o = a.attr("data-icon-hide") || "eye-blocked";
		i && (n.right = "password" == s.type ? r : o), j(a, n), i && y(e, t.find(".mbsc-right-ic").addClass("mbsc-input-toggle"), function() {
			"text" == s.type ? (s.type = "password", $e(this).addClass("mbsc-ic-" + r).removeClass("mbsc-ic-" + o)) : (s.type = "text", $e(this).removeClass("mbsc-ic-" + r).addClass("mbsc-ic-" + o))
		})
	}
	function $(e, t) {
		"button" != t && "submit" != t && "segmented" != t && (e.addClass("mbsc-control-w").find("label").addClass("mbsc-label"), e.contents().filter(function() {
			return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue)
		}).each(function() {
			$e('<span class="mbsc-label"></span>').insertAfter(this).append(this)
		}))
	}
	function W(e, t, a, n) {
		$e("input,select,textarea,progress,button", e).each(function() {
			var e = this,
				n = $e(e),
				s = P(n);
			if ("false" != n.attr("data-enhance")) if (n.hasClass("mbsc-control")) e.mbscInst && e.mbscInst.option({
				theme: a.theme,
				lang: a.lang,
				rtl: a.rtl,
				onText: a.onText,
				offText: a.offText,
				stopProp: a.stopProp
			});
			else switch (e.id || (e.id = "mbsc-form-control-" + ++Wt), s) {
				case "button":
				case "submit":
					t[e.id] = new Dt(e, {
						theme: a.theme,
						tap: a.tap
					});
					break;
				case "switch":
					t[e.id] = new Yt(e, {
						theme: a.theme,
						lang: a.lang,
						rtl: a.rtl,
						tap: a.tap,
						onText: a.onText,
						offText: a.offText,
						stopProp: a.stopProp
					});
					break;
				case "checkbox":
					t[e.id] = new Nt(e, {
						tap: a.tap
					});
					break;
				case "range":
					$e(e).parent().hasClass("mbsc-slider") || (t[e.id] = new zt(e, {
						theme: a.theme,
						lang: a.lang,
						rtl: a.rtl,
						stopProp: a.stopProp
					}));
					break;
				case "rating":
					t[e.id] = new $t(e, {
						theme: a.theme,
						lang: a.lang,
						rtl: a.rtl,
						stopProp: a.stopProp
					});
					break;
				case "progress":
					t[e.id] = new jt(e, {
						theme: a.theme,
						lang: a.lang,
						rtl: a.rtl
					});
					break;
				case "radio":
					t[e.id] = new At(e, {
						tap: a.tap
					});
					break;
				case "select":
				case "select-one":
				case "select-multiple":
					t[e.id] = new Vt(e, {
						tap: a.tap
					});
					break;
				case "textarea":
					t[e.id] = new Ht(e, {
						tap: a.tap
					});
					break;
				case "segmented":
					t[e.id] = new Pt(e, {
						theme: a.theme,
						tap: a.tap
					});
					break;
				case "stepper":
					t[e.id] = new Lt(e, {
						theme: a.theme
					});
					break;
				case "hidden":
					return;
				default:
					t[e.id] = new kt(e, {
						tap: a.tap
					})
			}
		}), n || O()
	}
	function R(e) {
		var t = [Math.round(e.r).toString(16), Math.round(e.g).toString(16), Math.round(e.b).toString(16)];
		return $e.each(t, function(e, a) {
			1 == a.length && (t[e] = "0" + a)
		}), "#" + t.join("")
	}
	function J(e) {
		return e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16), {
			r: e >> 16,
			g: (65280 & e) >> 8,
			b: 255 & e,
			toString: function() {
				return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
			}
		}
	}
	function B(e) {
		var t, a, n, s = e.h,
			i = 255 * e.s / 100,
			r = 255 * e.v / 100;
		if (0 === i) t = a = n = r;
		else {
			var o = r,
				l = (255 - i) * r / 255,
				c = s % 60 * (o - l) / 60;
			360 == s && (s = 0), s < 60 ? (t = o, n = l, a = l + c) : s < 120 ? (a = o, n = l, t = o - c) : s < 180 ? (a = o, t = l, n = l + c) : s < 240 ? (n = o, t = l, a = o - c) : s < 300 ? (n = o, a = l, t = l + c) : s < 360 ? (t = o, a = l, n = o - c) : t = a = n = 0
		}
		return {
			r: t,
			g: a,
			b: n,
			toString: function() {
				return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
			}
		}
	}
	function K(e) {
		var t, a, n = 0,
			s = Math.min(e.r, e.g, e.b),
			i = Math.max(e.r, e.g, e.b),
			r = i - s;
		return a = i, t = i ? 255 * r / i : 0, n = t ? e.r == i ? (e.g - e.b) / r : e.g == i ? 2 + (e.b - e.r) / r : 4 + (e.r - e.g) / r : -1, n *= 60, n < 0 && (n += 360), t *= 100 / 255, a *= 100 / 255, {
			h: n,
			s: t,
			v: a,
			toString: function() {
				return "hsv(" + Math.round(this.h) + "," + Math.round(this.s) + "%," + Math.round(this.v) + "%)"
			}
		}
	}
	function q(e) {
		var t, a, n = e.r / 255,
			s = e.g / 255,
			i = e.b / 255,
			r = Math.max(n, s, i),
			o = Math.min(n, s, i),
			l = (r + o) / 2;
		if (r == o) t = a = 0;
		else {
			var c = r - o;
			switch (a = l > .5 ? c / (2 - r - o) : c / (r + o), r) {
				case n:
					t = (s - i) / c + (s < i ? 6 : 0);
					break;
				case s:
					t = (i - n) / c + 2;
					break;
				case i:
					t = (n - s) / c + 4
			}
			t /= 6
		}
		return {
			h: Math.round(360 * t),
			s: Math.round(100 * a),
			l: Math.round(100 * l),
			toString: function() {
				return "hsl(" + this.h + "," + this.s + "%," + this.l + "%)"
			}
		}
	}
	function U(e) {
		var t, a, n, s, i, r, o = e.h,
			l = e.s,
			c = e.l;
		return isFinite(o) || (o = 0), isFinite(l) || (l = 0), isFinite(c) || (c = 0), o /= 60, o < 0 && (o = 6 - -o % 6), o %= 6, l = Math.max(0, Math.min(1, l / 100)), c = Math.max(0, Math.min(1, c / 100)), i = (1 - Math.abs(2 * c - 1)) * l, r = i * (1 - Math.abs(o % 2 - 1)), o < 1 ? (t = i, a = r, n = 0) : o < 2 ? (t = r, a = i, n = 0) : o < 3 ? (t = 0, a = i, n = r) : o < 4 ? (t = 0, a = r, n = i) : o < 5 ? (t = r, a = 0, n = i) : (t = i, a = 0, n = r), s = c - i / 2, {
			r: Math.round(255 * (t + s)),
			g: Math.round(255 * (a + s)),
			b: Math.round(255 * (n + s)),
			toString: function() {
				return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
			}
		}
	}
	function G(e) {
		return q(J(e))
	}
	function X(e) {
		return R(U(e))
	}
	function Z(e) {
		return R(B(e))
	}
	function Q(e) {
		return K(J(e))
	}
	function ee(e) {
		Gt.length || e.show(), Gt.push(e)
	}
	function te(e) {
		var t = Xt.length;
		Xt.push(e), Gt.length || (t ? Xt[0].hide() : e.show(!1, !0))
	}
	function ae(e, t, a, n) {
		return Ke({
			display: t.display || "center",
			cssClass: "mbsc-alert",
			okText: t.okText,
			cancelText: t.cancelText,
			context: t.context,
			theme: t.theme,
			closeOnOverlayTap: !1,
			onBeforeClose: function() {
				e.shift()
			},
			onBeforeShow: function() {
				ve.activeInstance = null
			},
			onHide: function(e, n) {
				a && a(n._resolve), t.callback && t.callback(n._resolve), n && n.destroy(), Gt.length ? Gt[0].show() : Xt.length && Xt[0].show(!1, !0)
			}
		}, n)
	}
	function ne(e) {
		return (e.title ? "<h2>" + e.title + "</h2>" : "") + "<p>" + (e.message || "") + "</p>"
	}
	function se(e, t, a) {
		ee(new qt(e, ae(Gt, t, a)))
	}
	function ie(e, t, a) {
		var n = new qt(e, ae(Gt, t, a, {
			buttons: ["cancel", "ok"],
			onSet: function() {
				n._resolve = !0
			}
		}));
		n._resolve = !1, ee(n)
	}
	function re(e, t, a) {
		var n = void 0,
			s = new qt(e, ae(Gt, t, a, {
				buttons: ["cancel", "ok"],
				onMarkupReady: function(e, t) {
					n = t._markup.find("input")[0], setTimeout(function() {
						n.focus(), n.setSelectionRange(0, n.value.length)
					}, 300)
				},
				onSet: function() {
					s._resolve = n.value
				}
			}));
		s._resolve = null, ee(s)
	}
	function oe(e, t, a, n, s) {
		var i = void 0;
		te(new qt(e, ae(Xt, t, a, {
			display: "bottom",
			animate: s,
			cssClass: n || "mbsc-snackbar",
			scrollLock: !1,
			focusTrap: !1,
			buttons: [],
			onShow: function(e, a) {
				!1 !== t.duration && (i = setTimeout(function() {
					a && a.hide()
				}, t.duration || 3e3)), t.button && a.tap($e(".mbsc-snackbar-btn", e.target), function() {
					a.hide(), t.button.action && t.button.action.call(this)
				})
			},
			onClose: function() {
				clearTimeout(i)
			}
		})))
	}
	function le(e, t, a) {
		oe(e, t, a, "mbsc-toast", "fade")
	}
	function ce(e, t, a) {
		var n = void 0;
		return Ut ? n = new Promise(function(n) {
			e(t, a, n)
		}) : e(t, a), n
	}
	function de(e) {
		for (var t = 0, a = 1, n = 0; e.length;) t > 3 ? a = 3600 : t > 1 && (a = 60), n += e.pop() * a * (t % 2 ? 10 : 1), t++;
		return n
	}
	
	function he(e, t, a) {
		"jsonp" == a ? me(e, t) : ue(e, t)
	}
	function fe(e, t) {
		var a = T(t, "X", !0),
			n = T(t, "Y", !0),
			s = e.offset(),
			i = a - s.left,
			r = n - s.top,
			o = Math.max(i, e[0].offsetWidth - i),
			l = Math.max(r, e[0].offsetHeight - r),
			c = 2 * Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2));
		pe(Ya), Ya = $e('<span class="mbsc-ripple"></span>').css({
			width: c,
			height: c,
			top: n - s.top - c / 2,
			left: a - s.left - c / 2
		}).appendTo(e), setTimeout(function() {
			Ya.addClass("mbsc-ripple-scaled mbsc-ripple-visible")
		}, 10)
	}
	function pe(e) {
		setTimeout(function() {
			e && (e.removeClass("mbsc-ripple-visible"), setTimeout(function() {
				e.remove()
			}, 2e3))
		}, 100)
	}
	function be(e, t, a, n) {
		var s, i;
		e.off(".mbsc-ripple").on("touchstart.mbsc-ripple mousedown.mbsc-ripple", t, function(e) {
			A(e, this) && (s = T(e, "X"), i = T(e, "Y"), Ea = $e(this), Ea.hasClass(a) || Ea.hasClass(n) ? Ea = null : fe(Ea, e))
		}).on("touchmove.mbsc-ripple mousemove.mbsc-ripple", t, function(e) {
			(Ea && Math.abs(T(e, "X") - s) > 9 || Math.abs(T(e, "Y") - i) > 9) && (pe(Ya), Ea = null)
		}).on("touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple", t, function() {
			Ea && (setTimeout(function() {
				pe(Ya)
			}, 100), Ea = null)
		})
	}
	var ve = ve || {}, ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, xe = function(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}, Te = function() {
			function e(e, t) {
				for (var a = 0; a < t.length; a++) {
					var n = t[a];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, a, n) {
				return a && e(t.prototype, a), n && e(t, n), t
			}
		}(),
		ye = function e(t, a, n) {
			null === t && (t = Function.prototype);
			var s = Object.getOwnPropertyDescriptor(t, a);
			if (void 0 === s) {
				var i = Object.getPrototypeOf(t);
				return null === i ? void 0 : e(i, a, n)
			}
			if ("value" in s) return s.value;
			var r = s.get;
			if (void 0 !== r) return r.call(n)
		}, _e = function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}, we = function(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}, Me = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		}, Ce = {
			readonly: "readOnly"
		}, Se = [],
		ke = Array.prototype.slice,
		De = function() {
			var s = function(e) {
				var t = this,
					a = 0;
				for (a = 0; a < e.length; a++) t[a] = e[a];
				return t.length = e.length, o(this)
			}, o = function t(a, n) {
				var i = [],
					r = 0;
				if (a && !n && a instanceof s) return a;
				if (e(a)) return t(document).ready(a);
				if (a) if ("string" == typeof a) {
					var o, l, c;
					if (a = c = a.trim(), c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
						var d = "div";
						for (0 === c.indexOf("<li") && (d = "ul"), 0 === c.indexOf("<tr") && (d = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (d = "tr"), 0 === c.indexOf("<tbody") && (d = "table"), 0 === c.indexOf("<option") && (d = "select"), l = document.createElement(d), l.innerHTML = c, r = 0; r < l.childNodes.length; r++) i.push(l.childNodes[r])
					} else for (n || "#" !== a[0] || a.match(/[ .<>:~]/) ? (n instanceof s && (n = n[0]), o = (n || document).querySelectorAll(a)) : o = [document.getElementById(a.split("#")[1])], r = 0; r < o.length; r++) o[r] && i.push(o[r])
				} else if (a.nodeType || a === window || a === document) i.push(a);
				else if (a.length > 0 && a[0].nodeType) for (r = 0; r < a.length; r++) i.push(a[r]);
				else t.isArray(a) && (i = a);
				return new s(i)
			};
			return s.prototype = {
				ready: function(e) {
					return (document.attachEvent ? "complete" == document.readyState : "loading" != document.readyState) ? e(o) : document.addEventListener("DOMContentLoaded", function() {
						e(o)
					}, !1), this
				},
				concat: Se.concat,
				empty: function() {
					return this.each(function() {
						this.innerHTML = ""
					})
				},
				map: function(e) {
					return o(o.map(this, function(t, a) {
						return e.call(t, a, t)
					}))
				},
				slice: function() {
					return o(ke.apply(this, arguments))
				},
				addClass: function(e) {
					if (void 0 === e) return this;
					for (var t = e.split(" "), a = 0; a < t.length; a++) for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && "" !== t[a] && this[n].classList.add(t[a]);
					return this
				},
				removeClass: function(e) {
					if (void 0 === e) return this;
					for (var t = e.split(" "), a = 0; a < t.length; a++) for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && "" !== t[a] && this[n].classList.remove(t[a]);
					return this
				},
				hasClass: function(e) {
					return !!this[0] && this[0].classList.contains(e)
				},
				toggleClass: function(e) {
					for (var t = e.split(" "), a = 0; a < t.length; a++) for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && this[n].classList.toggle(t[a]);
					return this
				},
				closest: function(e, a) {
					var n = this[0],
						s = !1;
					for (t(e) && (s = o(e)); n && !(s ? s.indexOf(n) >= 0 : o.matches(n, e));) n = n !== a && n.nodeType !== n.DOCUMENT_NODE && n.parentNode;
					return o(n)
				},
				attr: function(e, t) {
					var a;
					if (1 !== arguments.length || "string" != typeof e) {
						for (var n = 0; n < this.length; n++) if (2 === arguments.length) this[n].setAttribute(e, t);
						else for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
						return this
					}
					if (this.length) return a = this[0].getAttribute(e), a || "" === a ? a : void 0
				},
				removeAttr: function(e) {
					for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
					return this
				},
				prop: function(e, t) {
					if (e = Ce[e] || e, 1 === arguments.length && "string" == typeof e) return this[0] ? this[0][e] : void 0;
					for (var a = 0; a < this.length; a++) this[a][e] = t;
					return this
				},
				val: function(e) {
					if (void 0 === e) return this.length && this[0].multiple ? o.map(this.find("option:checked"), function(e) {
						return e.value
					}) : this[0] ? this[0].value : void 0;
					if (this.length && this[0].multiple) o.each(this[0].options, function() {
						this.selected = -1 != e.indexOf(this.value)
					});
					else for (var t = 0; t < this.length; t++) this[t].value = e;
					return this
				},
				on: function(t, a, n, s) {
					function i(e) {
						var t, s, i = e.target;
						if (o(i).is(a)) n.call(i, e);
						else for (s = o(i).parents(), t = 0; t < s.length; t++) o(s[t]).is(a) && n.call(s[t], e)
					}
					function r(e, t, a, n) {
						var s = t.split(".");
						e.DomNameSpaces || (e.DomNameSpaces = []), e.DomNameSpaces.push({
							namespace: s[1],
							event: s[0],
							listener: a,
							capture: n
						}), e.addEventListener(s[0], a, n)
					}
					var l, c, d = t.split(" ");
					for (l = 0; l < this.length; l++) if (e(a) || !1 === a) for (e(a) && (s = n || !1, n = a), c = 0; c < d.length; c++) - 1 != d[c].indexOf(".") ? r(this[l], d[c], n, s) : this[l].addEventListener(d[c], n, s);
					else for (c = 0; c < d.length; c++) this[l].DomLiveListeners || (this[l].DomLiveListeners = []), this[l].DomLiveListeners.push({
						listener: n,
						liveListener: i
					}), -1 != d[c].indexOf(".") ? r(this[l], d[c], i, s) : this[l].addEventListener(d[c], i, s);
					return this
				},
				off: function(t, a, n, s) {
					function i(e) {
						var t, a, n, s = e.split("."),
							i = s[0],
							r = s[1];
						for (t = 0; t < d.length; ++t) if (d[t].DomNameSpaces) {
							for (a = 0; a < d[t].DomNameSpaces.length; ++a) n = d[t].DomNameSpaces[a], n.namespace != r || n.event != i && i || (d[t].removeEventListener(n.event, n.listener, n.capture), n.removed = !0);
							for (a = d[t].DomNameSpaces.length - 1; a >= 0; --a) d[t].DomNameSpaces[a].removed && d[t].DomNameSpaces.splice(a, 1)
						}
					}
					var r, o, l, c, d = this;
					for (r = t.split(" "), o = 0; o < r.length; o++) for (l = 0; l < this.length; l++) if (e(a) || !1 === a) e(a) && (s = n || !1, n = a), 0 === r[o].indexOf(".") ? i(r[o].substr(1)) : this[l].removeEventListener(r[o], n, s);
					else {
						if (this[l].DomLiveListeners) for (c = 0; c < this[l].DomLiveListeners.length; c++) this[l].DomLiveListeners[c].listener === n && this[l].removeEventListener(r[o], this[l].DomLiveListeners[c].liveListener, s);
						this[l].DomNameSpaces && this[l].DomNameSpaces.length && r[o] && i(r[o])
					}
					return this
				},
				trigger: function(e, t) {
					for (var a = e.split(" "), n = 0; n < a.length; n++) for (var s = 0; s < this.length; s++) {
						var i;
						try {
							i = new CustomEvent(a[n], {
								detail: t,
								bubbles: !0,
								cancelable: !0
							})
						} catch (e) {
							i = document.createEvent("Event"), i.initEvent(a[n], !0, !0), i.detail = t
						}
						this[s].dispatchEvent(i)
					}
					return this
				},
				width: function(e) {
					return void 0 !== e ? this.css("width", e) : this[0] === window ? window.innerWidth : this[0] === document ? document.documentElement.scrollWidth : this.length > 0 ? parseFloat(this.css("width")) : null
				},
				height: function(e) {
					if (void 0 !== e) return this.css("height", e);
					if (this[0] === window) return window.innerHeight;
					if (this[0] === document) {
						var t = document.body,
							a = document.documentElement;
						return Math.max(t.scrollHeight, t.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight)
					}
					return this.length > 0 ? parseFloat(this.css("height")) : null
				},
				innerWidth: function() {
					var e = this;
					if (this.length > 0) {
						if (this[0].innerWidth) return this[0].innerWidth;
						var t = this[0].offsetWidth;
						return ["left", "right"].forEach(function(a) {
							t -= parseInt(e.css(n("border-" + a + "-width")) || 0, 10)
						}), t
					}
				},
				innerHeight: function() {
					var e = this;
					if (this.length > 0) {
						if (this[0].innerHeight) return this[0].innerHeight;
						var t = this[0].offsetHeight;
						return ["top", "bottom"].forEach(function(a) {
							t -= parseInt(e.css(n("border-" + a + "-width")) || 0, 10)
						}), t
					}
				},
				offset: function() {
					if (this.length > 0) {
						var e = this[0],
							t = e.getBoundingClientRect(),
							a = document.documentElement;
						return {
							top: t.top + window.pageYOffset - a.clientTop,
							left: t.left + window.pageXOffset - a.clientLeft
						}
					}
				},
				hide: function() {
					for (var e = 0; e < this.length; e++) this[e].style.display = "none";
					return this
				},
				show: function() {
					for (var e = 0; e < this.length; e++) "none" == this[e].style.display && (this[e].style.display = ""), "none" == getComputedStyle(this[e], "").getPropertyValue("display") && (this[e].style.display = "block");
					return this
				},
				clone: function() {
					return this.map(function() {
						return this.cloneNode(!0)
					})
				},
				styles: function() {
					return this[0] ? window.getComputedStyle(this[0], null) : void 0
				},
				css: function(e, t) {
					var a, n, s = this[0],
						o = "";
					if (arguments.length < 2) {
						if (!s) return;
						if ("string" == typeof e) return s.style[e] || getComputedStyle(s, "").getPropertyValue(e)
					}
					if ("string" == typeof e) t || 0 === t ? o = i(e) + ":" + r(e, t) : this.each(function() {
						this.style.removeProperty(i(e))
					});
					else for (n in e) if (e[n] || 0 === e[n]) o += i(n) + ":" + r(n, e[n]) + ";";
					else for (a = 0; a < this.length; a++) this[a].style.removeProperty(i(n));
					return this.each(function() {
						this.style.cssText += ";" + o
					})
				},
				each: function(e) {
					for (var t = 0; t < this.length && !1 !== e.apply(this[t], [t, this[t]]); t++);
					return this
				},
				filter: function(t) {
					for (var a = [], n = 0; n < this.length; n++) e(t) ? t.call(this[n], n, this[n]) && a.push(this[n]) : o.matches(this[n], t) && a.push(this[n]);
					return new s(a)
				},
				html: function(e) {
					if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
					this.empty();
					for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
					return this
				},
				text: function(e) {
					if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
					for (var t = 0; t < this.length; t++) this[t].textContent = e;
					return this
				},
				is: function(e) {
					return this.length > 0 && o.matches(this[0], e)
				},
				not: function(n) {
					var s = [];
					if (e(n) && void 0 !== n.call) this.each(function(e) {
						n.call(this, e) || s.push(this)
					});
					else {
						var i = "string" == typeof n ? this.filter(n) : a(n) && e(n.item) ? ke.call(n) : o(n);
						t(i) && (i = o.map(i, function(e) {
							return e
						})), this.each(function(e, t) {
							i.indexOf(t) < 0 && s.push(t)
						})
					}
					return o(s)
				},
				indexOf: function(e) {
					for (var t = 0; t < this.length; t++) if (this[t] === e) return t
				},
				index: function(e) {
					return e ? this.indexOf(o(e)[0]) : this.parent().children().indexOf(this[0])
				},
				get: function(e) {
					return void 0 === e ? ke.call(this) : this[e >= 0 ? e : e + this.length]
				},
				eq: function(e) {
					if (void 0 === e) return this;
					var t, a = this.length;
					return e > a - 1 ? new s([]) : e < 0 ? (t = a + e, new s(t < 0 ? [] : [this[t]])) : new s([this[e]])
				},
				append: function(e) {
					var t, a;
					for (t = 0; t < this.length; t++) if ("string" == typeof e) {
						var n = document.createElement("div");
						for (n.innerHTML = e; n.firstChild;) this[t].appendChild(n.firstChild)
					} else if (e instanceof s) for (a = 0; a < e.length; a++) this[t].appendChild(e[a]);
					else this[t].appendChild(e);
					return this
				},
				appendTo: function(e) {
					return o(e).append(this), this
				},
				prepend: function(e) {
					var t, a;
					for (t = 0; t < this.length; t++) if ("string" == typeof e) {
						var n = document.createElement("div");
						for (n.innerHTML = e, a = n.childNodes.length - 1; a >= 0; a--) this[t].insertBefore(n.childNodes[a], this[t].childNodes[0])
					} else if (e instanceof s) for (a = 0; a < e.length; a++) this[t].insertBefore(e[a], this[t].childNodes[0]);
					else this[t].insertBefore(e, this[t].childNodes[0]);
					return this
				},
				prependTo: function(e) {
					return o(e).prepend(this), this
				},
				insertBefore: function(e) {
					for (var t = o(e), a = 0; a < this.length; a++) if (1 === t.length) t[0].parentNode.insertBefore(this[a], t[0]);
					else if (t.length > 1) for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[a].cloneNode(!0), t[n]);
					return this
				},
				insertAfter: function(e) {
					for (var t = o(e), a = 0; a < this.length; a++) if (1 === t.length) t[0].parentNode.insertBefore(this[a], t[0].nextSibling);
					else if (t.length > 1) for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[a].cloneNode(!0), t[n].nextSibling);
					return this
				},
				next: function(e) {
					return new s(this.length > 0 ? e ? this[0].nextElementSibling && o(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
				},
				nextAll: function(e) {
					var t = [],
						a = this[0];
					if (!a) return new s([]);
					for (; a.nextElementSibling;) {
						var n = a.nextElementSibling;
						e ? o(n).is(e) && t.push(n) : t.push(n), a = n
					}
					return new s(t)
				},
				prev: function(e) {
					return new s(this.length > 0 ? e ? this[0].previousElementSibling && o(this[0].previousElementSibling).is(e) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
				},
				prevAll: function(e) {
					var t = [],
						a = this[0];
					if (!a) return new s([]);
					for (; a.previousElementSibling;) {
						var n = a.previousElementSibling;
						e ? o(n).is(e) && t.push(n) : t.push(n), a = n
					}
					return new s(t)
				},
				parent: function(e) {
					for (var t = [], a = 0; a < this.length; a++) null !== this[a].parentNode && (e ? o(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
					return o(o.unique(t))
				},
				parents: function(e) {
					for (var t = [], a = 0; a < this.length; a++) for (var n = this[a].parentNode; n;) e ? o(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
					return o(o.unique(t))
				},
				find: function(e) {
					for (var t = [], a = 0; a < this.length; a++) for (var n = this[a].querySelectorAll(e), i = 0; i < n.length; i++) t.push(n[i]);
					return new s(t)
				},
				children: function(e) {
					for (var t = [], a = 0; a < this.length; a++) for (var n = this[a].childNodes, i = 0; i < n.length; i++) e ? 1 === n[i].nodeType && o(n[i]).is(e) && t.push(n[i]) : 1 === n[i].nodeType && t.push(n[i]);
					return new s(o.unique(t))
				},
				remove: function() {
					for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
					return this
				},
				add: function() {
					var e, t, a = this;
					for (e = 0; e < arguments.length; e++) {
						var n = o(arguments[e]);
						for (t = 0; t < n.length; t++) a[a.length] = n[t], a.length++
					}
					return a
				},
				before: function(e) {
					return o(e).insertBefore(this), this
				},
				after: function(e) {
					return o(e).insertAfter(this), this
				},
				scrollTop: function(e) {
					if (this.length) {
						var t = "scrollTop" in this[0];
						return void 0 === e ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function() {
							this.scrollTop = e
						} : function() {
							this.scrollTo(this.scrollX, e)
						})
					}
				},
				scrollLeft: function(e) {
					if (this.length) {
						var t = "scrollLeft" in this[0];
						return void 0 === e ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function() {
							this.scrollLeft = e
						} : function() {
							this.scrollTo(e, this.scrollY)
						})
					}
				},
				contents: function() {
					return this.map(function(e, t) {
						return ke.call(t.childNodes)
					})
				},
				nextUntil: function(e) {
					for (var t = this, a = []; t.length && !t.filter(e).length;) a.push(t[0]), t = t.next();
					return o(a)
				},
				prevUntil: function(e) {
					for (var t = this, a = []; t.length && !o(t).filter(e).length;) a.push(t[0]), t = t.prev();
					return o(a)
				},
				detach: function() {
					return this.remove()
				}
			}, o.fn = s.prototype, o
		}(),
		Ne = De;
	ve.$ = De, Ne.inArray = function(e, t, a) {
		return Se.indexOf.call(t, e, a)
	}, Ne.extend = function(e) {
		var t, a = ke.call(arguments, 1);
		return "boolean" == typeof e && (t = e, e = a.shift()), e = e || {}, a.forEach(function(a) {
			s(e, a, t)
		}), e
	}, Ne.isFunction = e,
	Ne.isArray = function(e) {
		return "[object Array]" === Object.prototype.toString.apply(e)
	}, Ne.isPlainObject = function(e) {
		return t(e) && null !== e && e !== e.window && Object.getPrototypeOf(e) == Object.prototype
	}, Ne.each = function(e, a) {
		var n, s;
		if (t(e) && a) {
			if (Ne.isArray(e) || e instanceof De) for (n = 0; n < e.length && !1 !== a.call(e[n], n, e[n]); n++);
			else for (s in e) if (e.hasOwnProperty(s) && "length" !== s && !1 === a.call(e[s], s, e[s])) break;
			return this
		}
	}, Ne.unique = function(e) {
		for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
		return t
	}, Ne.map = function(e, t) {
		var n, s, i, r = [];
		if (a(e)) for (s = 0; s < e.length; s++) null !== (n = t(e[s], s)) && r.push(n);
		else for (i in e) null !== (n = t(e[i], i)) && r.push(n);
		return r.length > 0 ? Ne.fn.concat.apply([], r) : r
	}, Ne.matches = function(e, t) {
		return !(!t || !e || 1 !== e.nodeType) && (e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector).call(e, t)
	};
	var Ae, Ve, Ie, Fe, He = [],
		Pe = "undefined" != typeof window,
		Le = Pe ? navigator.userAgent : "",
		Oe = Le.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
		Ee = Pe && window.requestAnimationFrame || function(e) {
			e()
		}, Ye = Pe && window.cancelAnimationFrame || function() {};
	/Android/i.test(Oe) ? (Ae = "android", (Ve = Le.match(/Android\s+([\d\.]+)/i)) && (He = Ve[0].replace("Android ", "").split("."))) : /iPhone|iPad|iPod/i.test(Oe) ? (Ae = "ios", (Ve = Le.match(/OS\s+([\d\_]+)/i)) && (He = Ve[0].replace(/_/g, ".").replace("OS ", "").split("."))) : /Windows Phone/i.test(Oe) ? Ae = "wp" : /Windows|MSIE/i.test(Oe) && (Ae = "windows"), Ie = He[0], Fe = He[1];
	var je = 0;
	Pe && (["mouseover", "mousedown", "mouseup", "click"].forEach(function(e) {
		document.addEventListener(e, _, !0)
	}), "android" == Ae && Ie < 5 && document.addEventListener("change", function(e) {
		je && "checkbox" == e.target.type && !e.target.mbscChange && (e.stopPropagation(), e.preventDefault()), delete e.target.mbscChange
	}, !0));
	var ze, $e = ve.$,
		We = +new Date,
		Re = {}, Je = {}, Be = {
			getCoord: T,
			preventClick: g,
			vibrate: p
		}, Ke = $e.extend;
	ze = Ke(ve, {
		$: $e,
		version: "4.0.0",
		SYcKw : true,
		autoTheme: "mobiscroll",
		themes: {
			form: {},
			page: {},
			frame: {},
			scroller: {},
			listview: {},
			navigation: {},
			progress: {},
			card: {}
		},
		platform: {
			name: Ae,
			majorVersion: Ie,
			minorVersion: Fe
		},
		i18n: {},
		instances: Re,
		classes: Je,
		util: Be,
		settings: {},
		setDefaults: function(e) {
			Ke(this.settings, e)
		},
		customTheme: function(e, t) {
			var a, n = ve.themes,
				s = ["frame", "scroller", "listview", "navigation", "form", "page", "progress", "card"];
			for (a = 0; a < s.length; a++) n[s[a]][e] = Ke({}, n[s[a]][t], {
				baseTheme: t
			})
		}
	});
	var qe = function(e, t) {
		var a, n, s, i, r, o, c, d = this;
		d.settings = {}, d._getText = new Function("mobiscroll, p", function() {
			function e(e) {
				var t, a = e[0];
				for (t = 0; t < 16; ++t) if (a * t % 16 == 1) return [t, e[1]]
			}
			function t(e, t, a, n) {
				var s, i = "0123456789abcdef",
					r = "",
					o = t.length;
				for (s = 0; s < o; ++s) r += e ? i[(a * i.indexOf(t[s]) + n) % 16] : i[((a * i.indexOf(t[s]) - a * n) % 16 + 16) % 16];
				return r
			}
			var a, n = function(a, n) {
				var s, i = e(n),
					r = t(0, a, i[0], i[1]),
					o = r.length,
					l = [];
				for (s = 0; s < o; s += 2) l.push(r[s] + r[s + 1]);
				return l
			}("9a90939d474140439545904142420cf5f345ad99575b5d904f9a9f904c0ea74b9a4e0c904b4c4a41470e0352a74b9a4e0c474b9e0e560c56540296035109524a439406959a93424f5700090d449f4c459a43414c0e4f039d944b90069a574f0c424f4c499a4e024c02905d994e43424f0e560b57579a039d9057a74b9a4e0c44424141900ea74b9a4e0c904b4c4a41470e03089a035d9a07575b5d4c574ffd9af75d4ffd9af7574ffd90f75d4ffd90f7574c97904f9a9f904c064f970efd094a439596424b9358404241454d0b43479641909a4b4c9a090209964195439a43414c584b409541429f9a4f0902099807434c4a4f9e58075b0902099a41965856090209424f449a585609020940419a9a414758560902099043494e9a585609020944414c9a079543984f585e969e09020942434c4f074e4f43494e9a585b50969e0902099a4f9e9a074b4243494c58454f4c9a4f9009020941964b45439a9358090d0ea74b9a4e0c44424141900ea74b9a4e0c904b4c4a41470e0308505603015b56560d560c5e03f7030c4841434c0e095d09030d09005cf29f56565f5af29f56565f50f29f56565a53f29f56565a5bf29f56565a4552014a43945c095809090397454b9a454e0e4f039d904f9a9f904c0609099778", [5, 6]),
				s = "",
				i = n.length;
			for (a = 0; a < i; a++) s += String.fromCharCode(parseInt(n[a], 16));
			return s
		}()), d._init = l, d._destroy = l, d._processSettings = l, d.init = function(l) {
			var m;
			for (m in d.settings) delete d.settings[m];
			s = d.settings, Ke(t, l), d._hasDef && (c = ze.settings), Ke(s, d._defaults, c, t), d._hasTheme && (r = s.theme, "auto" != r && r || (r = ze.autoTheme), "default" == r && (r = "mobiscroll"), t.theme = r, i = ze.themes[d._class] ? ze.themes[d._class][r] : {}), d._hasLang && (a = ze.i18n[s.lang]), Ke(s, i, a, c, t), d._processSettings();
			var u = {
				form: !0,
				page: !0,
				progress: !0,
				switch: !0,
				slider: !0,
				stepper: !0
			};
			if (!d._class || u[d._class]) d._init(l), o("onInit");
			else {
				var h, f, p = {
					className: d._class,
					buttons: d.buttons,
					platform: ze.platform,
					userAgent: navigator.userAgent,
					defSortHandle: $e(e).find(s.listSelector || "ul,ol").length ? "left" : "right",
					settings: {
						activeClass: s.activeClass,
						ampmText: s.ampmText,
						amText: s.amText,
						animateIcons: s.animateIcons,
						backText: s.backText,
						baseTheme: s.baseTheme,
						buttons: s.buttons,
						btnClass: s.btnClass,
						btnWidth: s.btnWidth,
						btnReverse: s.btnReverse,
						closeIcon: s.closeIcon,
						context: "body" == s.context ? "body" : "",
						controls: s.controls,
						cssClass: s.cssClass,
						dateDisplay: s.dateDisplay,
						dateFormat: s.dateFormat,
						dateWheels: s.dateWheels,
						dayNames: s.dayNames,
						dayNamesShort: s.dayNamesShort,
						daySuffix: s.daySuffix,
						display: s.display,
						dayText: s.dayText,
						endYear: s.endYear,
						fixedHeader: s.fixedHeader,
						handleClass: s.handleClass,
						handleMarkup: s.handleMarkup,
						hideText: s.hideText,
						hourText: s.hourText,
						itemNode: s.itemNode,
						itemWidth: s.itemWidth,
						lang: s.lang,
						lapIcon: s.lapIcon,
						lapText: s.lapText,
						layout: s.layout,
						leftArrowClass: s.leftArrowClass,
						max: s.max,
						min: s.min,
						minuteText: s.minuteText,
						monthNames: s.monthNames,
						monthNamesShort: s.monthNamesShort,
						monthSuffix: s.monthSuffix,
						monthText: s.monthText,
						nowIcon: s.nowIcon,
						nowText: s.nowText,
						pmText: s.pmText,
						preset: s.preset,
						resetIcon: s.resetIcon,
						resetText: s.resetText,
						rightArrowClass: s.rightArrowClass,
						rtl: s.rtl,
						secText: s.secText,
						select: s.select,
						snap: s.snap,
						sort: s.sort,
						sortable: s.sortable,
						sortHandle: s.sortHandle,
						startIcon: s.startIcon,
						startText: s.startText,
						startYear: s.startYear,
						stepHour: s.stepHour,
						stepMinute: s.stepMinute,
						stepSecond: s.stepSecond,
						steps: s.steps,
						stopIcon: s.stopIcon,
						stopText: s.stopText,
						striped: s.striped,
						theme: s.theme,
						timeFormat: s.timeFormat,
						timeWheels: s.timeWheels,
						todayText: s.todayText,
						type: s.type,
						variant: s.variant,
						wrapperClass: s.wrapperClass,
						yearSuffix: s.yearSuffix,
						yearText: s.yearText
					}
				}, b = [],
					v = {}, g = ["refresh", "redraw", "navigate", "changeTab", "getDate", "setDate", "addEvent", "removeEvent", "getEvents", "setEvents", "setActiveDate", "start", "stop", "reset", "lap", "resetlap", "getTime", "setTime", "getEllapsedTime", "setEllapsedTime"],
					x = {
						jsonp: 1,
						getInst: 1,
						init: 1,
						destroy: 1
					}, T = function(e) {
						d[e] = function() {
							b.push({
								func: e,
								args: arguments
							})
						}
					};
				for (f in d) "function" != typeof d[f] || x[f] || (v[f] = d[f], T(f));
				for (h = 0; h < g.length; h++) T(g[h]);
				"timer" != s.preset || t.buttons || (p.settings.buttons = ["resetlap", "toggle"], "inline" !== s.display && p.settings.buttons.unshift("hide")), "eventcalendar" != s.preset || t.buttons || "inline" == s.display || (p.settings.buttons = ["close"]),
					d.zone.run(function() {
						if (d) {
						
							for (f in v) d[f] = v[f];
							var i = Ke({}, t);
							for (delete i.data, d._presets && (n = d._presets[s.preset]) && (n = n.call(e, d), Ke(s, n, i)), d._init(l), o("onInit"), h = 0; h < b.length; h++) d[b[h].func].apply(d, b[h].args);
							b = null, v = null
						}
			
				})
			}
		}, d.destroy = function() {
			d && (d._destroy(), o("onDestroy"), delete Re[e.id], d = null)
		}, d.tap = function(e, t, a, n, s) {
			y(d, e, t, a, n, s)
		}, d.trigger = function(a, s) {
			var r, o, l, m = [c, i, n, t];
			for (o = 0; o < 4; o++)(l = m[o]) && l[a] && (r = l[a].call(e, s || {}, d));
			return r
		}, d.option = function(e, a) {
			var n = {}, i = ["data", "invalid", "valid", "marked", "labels", "colors", "readonly"];
			"object" === (void 0 === e ? "undefined" : ge(e)) ? n = e : n[e] = a, i.forEach(function(e) {
				t[e] = s[e]
			}), d.init(n)
		}, d.getInst = function() {
			return d
		}, d.zone = {
			run: function(e) {
				e()
			}
		}, t = t || {}, o = d.trigger, d.__ready || function() {
			$e(e).addClass("mbsc-comp"), e.id ? Re[e.id] && Re[e.id].destroy() : e.id = "mobiscroll" + ++We, Re[e.id] = d, d.__ready = !0
		}()
	};
	var Ue = {
		shortYearCutoff: "+10",
		monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
		amText: "am",
		pmText: "pm",
		getYear: function(e) {
			return e.getFullYear()
		},
		getMonth: function(e) {
			return e.getMonth()
		},
		getDay: function(e) {
			return e.getDate()
		},
		getDate: S,
		getMaxDayOfMonth: function(e, t) {
			return 32 - new Date(e, t, 32, 12).getDate()
		},
		getWeekNumber: function(e) {
			e = new Date(e), e.setHours(0, 0, 0), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
			var t = new Date(e.getFullYear(), 0, 1);
			return Math.ceil(((e - t) / 864e5 + 1) / 7)
		}
	};
	Be.datetime = {
		formatDate: k,
		parseDate: D
	};
	var Ge, Xe, Ze, Qe, et = {};
	Pe && (Xe = document.createElement("modernizr").style, Ze = function() {
		var e, t = ["Webkit", "Moz", "O", "ms"];
		for (e in t) if (N([t[e] + "Transform"])) return "-" + t[e].toLowerCase() + "-";
		return ""
	}(), Qe = Ze.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz"), Ge = void 0 !== Xe.animation ? "animationend" : "webkitAnimationEnd");
	var tt, at, nt = ve.themes,
		st = /(iphone|ipod)/i.test(Le) && Ie >= 7,
		it = "android" == Ae,
		rt = "ios" == Ae,
		ot = rt && 8 == Ie,
		lt = rt && Ie > 7,
		ct = function(e) {
			e.preventDefault()
		}, dt = function(e, t, a) {
			function n(e) {
				A && A.removeClass("mbsc-active"), A = $e(this), A.hasClass("mbsc-disabled") || A.hasClass("mbsc-fr-btn-nhl") || A.addClass("mbsc-active"), "mousedown" === e.type ? $e(document).on("mouseup", s) : "pointerdown" === e.type && $e(document).on("pointerup", s)
			}
			function s(e) {
				A && (A.removeClass("mbsc-active"), A = null), "mouseup" === e.type ? $e(document).off("mouseup", s) : "pointerup" === e.type && $e(document).off("pointerup", s)
			}
			function i(e) {
				13 == e.keyCode ? ee.select() : 27 == e.keyCode && ee.cancel()
			}
			function r(e) {
				e || it || ee._activeElm.focus()
			}
			function o(e) {
				var t = tt,
					a = B.focusOnClose;
				ee._markupRemove(), w.remove(), H && (V.mbscModals--, B.scrollLock && V.mbscLock--, V.mbscLock || _.removeClass("mbsc-fr-lock"), V.mbscModals || (_.removeClass("mbsc-fr-lock-ios mbsc-fr-lock-ctx"), j && (x.css({
					top: "",
					left: ""
				}), k.scrollLeft(K), k.scrollTop(U)), e || (t || (t = te), setTimeout(function() {
					void 0 === a || !0 === a ? (at = !0, t[0].focus()) : a && $e(a)[0].focus()
				}, 200)))), ee._isVisible = !1, P = !1, X("onHide")
			}
			function c(e) {
				clearTimeout(W), W = setTimeout(function() {
					ee.position(!0), "orientationchange" == e.type && ($.style.display = "none", $.offsetHeight, $.style.display = "")
				}, 200)
			}
			function d(e) {
				e.target.nodeType && !z.contains(e.target) && ne - new Date > 100 && (z.focus(), ne = new Date)
			}
			function m(e, t) {
				function a() {
					w.off(Ge, a).removeClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + I).find(".mbsc-fr-popup").removeClass("mbsc-anim-" + I), r(t)
				}
				if (H) w.appendTo(x);
				else if (te.is("div") && !ee._hasContent) te.empty().append(w);
				else if (te.hasClass("mbsc-control")) {
					var i = te.closest(".mbsc-control-w");
					w.insertAfter(i), i.hasClass("mbsc-select") && i.addClass("mbsc-select-inline")
				} else w.insertAfter(te);
				P = !0, ee._markupInserted(w), X("onMarkupInserted", {
					target: L
				}), w.on("selectstart mousedown", ct).on("click", ".mbsc-fr-btn-e", ct).on("keydown", ".mbsc-fr-btn-e", function(e) {
					32 == e.keyCode && (e.preventDefault(), e.stopPropagation(), this.click())
				}).on("keydown", function(e) {
					if (32 == e.keyCode) e.preventDefault();
					else if (9 == e.keyCode && H && B.focusTrap) {
						var t = w.find('[tabindex="0"]').filter(function() {
							return this.offsetWidth > 0 || this.offsetHeight > 0
						}),
							a = t.index($e(":focus", w)),
							n = t.length - 1,
							s = 0;
						e.shiftKey && (n = 0, s = -1), a === n && (t.eq(s)[0].focus(), e.preventDefault())
					}
				}).on("touchstart mousedown pointerdown", ".mbsc-fr-btn-e", n).on("touchend", ".mbsc-fr-btn-e", s), $e("input,select,textarea", w).on("selectstart mousedown", function(e) {
					e.stopPropagation()
				}).on("keydown", function(e) {
					32 == e.keyCode && e.stopPropagation()
				}), L.addEventListener("touchstart", function() {
					G || (G = !0, x.find(".mbsc-no-touch").removeClass("mbsc-no-touch"))
				}, !0), $e.each(N, function(e, t) {
					ee.tap($e(".mbsc-fr-btn" + e, w), function(e) {
						t = u(t) ? ee.buttons[t] : t, (u(t.handler) ? ee.handlers[t.handler] : t.handler).call(this, e, ee)
					}, !0)
				}), ee._attachEvents(w), ee.position(), k.on(R, c), H && (I && !e ? w.addClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + I).on(Ge, a).find(".mbsc-fr-popup").addClass("mbsc-anim-" + I) : r(t)), X("onShow", {
					target: L,
					valueText: ee._tempValue
				})
			}
			function f(e, t) {
				e && e(), !1 !== ee.show() && (tt = t)
			}
			function p() {
				ee._fillValue(), X("onSet", {
					valueText: ee._value
				})
			}
			function b() {
				X("onCancel", {
					valueText: ee._value
				})
			}
			function v() {
				ee.setVal(null, !0)
			}
			var x, y, _, w, M, C, S, k, D, N, A, V, I, F, H, P, L, O, E, Y, j, z, $, W, R, J, B, K, q, U, G, X, Z, Q, ee = this,
				te = $e(e),
				ae = [],
				ne = new Date;
			qe.call(this, e, t, !0), ee.position = function(e) {
				var t, a, n, s, i, r, o, l, c, d, m, u, f, p, b, v, g, T = {}, y = 0,
					_ = 0,
					M = 0,
					N = 0;
				!J && P && (ee._position(w), f = L.offsetHeight, p = L.offsetWidth, Z === p && Q === f && e || (ee._isFullScreen || /top|bottom/.test(B.display) ? S.width(p) : H && D.addClass("mbsc-fr-pos").width(""), $e(".mbsc-comp", w).each(function() {
					var e = Re[this.id];
					e && e !== ee && e.position && e.position()
				}), !ee._isFullScreen && /center|bubble/.test(B.display) && ($e(".mbsc-w-p", w).each(function() {
					b = this.getBoundingClientRect().width, N += b, M = b > M ? b : M
				}), u = N > p - 16 || !0 === B.tabs, D.removeClass("mbsc-fr-pos").css({
					width: ee._isLiquid ? Math.min(B.maxPopupWidth, p - 16) : Math.ceil(u ? M : N),
					"white-space": u ? "" : "nowrap"
				})), !1 !== X("onPosition", {
					target: L,
					popup: $,
					hasTabs: u,
					windowWidth: p,
					windowHeight: f
				}) && H && (O = $.offsetWidth, E = $.offsetHeight, q = E <= f && O <= p, Y && (y = k.scrollLeft(), _ = k.scrollTop()), "center" == B.display ? (g = Math.max(0, y + (p - O) / 2), v = Math.max(0, _ + (f - E) / 2)) : "bubble" == B.display ? (t = void 0 === B.anchor ? te : $e(B.anchor), o = $e(".mbsc-fr-arr-i", w)[0], s = t.offset(), i = s.top + (F ? _ - x.offset().top : 0), r = s.left + (F ? y - x.offset().left : 0), a = t[0].offsetWidth, n = t[0].offsetHeight, l = o.offsetWidth, c = o.offsetHeight, g = h(r - (O - a) / 2, y + 3, y + p - O - 3), v = i - E - c / 2, v < _ || i > _ + f ? (S.removeClass("mbsc-fr-bubble-top").addClass("mbsc-fr-bubble-bottom"), v = i + n + c / 2) : S.removeClass("mbsc-fr-bubble-bottom").addClass("mbsc-fr-bubble-top"), $e(".mbsc-fr-arr", w).css({
					left: h(r + a / 2 - (g + (O - l) / 2), 0, l)
				}), q = v > _ && g > y && v + E <= _ + f && g + O <= y + p) : (g = y, v = "top" == B.display ? _ : Math.max(0, _ + f - E)), Y && (d = Math.max(v + E, F ? V.scrollHeight : $e(document).height()), m = Math.max(g + O, F ? V.scrollWidth : $e(document).width()), C.css({
					width: m,
					height: d
				}), B.scroll && "bubble" == B.display && (v + E + 8 > _ + f || i > _ + f || i + n < _) && (J = !0, setTimeout(function() {
					J = !1
				}, 300), k.scrollTop(Math.min(i, v + E - f + 8, d - f)))), T.top = Math.floor(v), T.left = Math.floor(g), S.css(T), Z = p, Q = f)))
			}, ee.attachShow = function(e, t) {
				var a, n = $e(e),
					s = n.prop("readonly");
				if ("inline" !== B.display) {
					if ((B.showOnFocus || B.showOnTap) && n.is("input,select") && (n.prop("readonly", !0).on("mousedown.mbsc", function(e) {
						e.preventDefault()
					}).on("focus.mbsc", function() {
						ee._isVisible && this.blur()
					}), a = $e('label[for="' + n.attr("id") + '"]'), a.length || (a = n.closest("label"))), n.is("select")) return;
					B.showOnFocus && n.on("focus.mbsc", function() {
						at ? at = !1 : f(t, n)
					}), B.showOnTap && (n.on("keydown.mbsc", function(e) {
						32 != e.keyCode && 13 != e.keyCode || (e.preventDefault(), e.stopPropagation(), f(t, n))
					}), ee.tap(n, function(e) {
						"touchend" == e.type && (G = !0), f(t, n)
					}), a && a.length && ee.tap(a, function() {
						f(t, n)
					})), ae.push({
						readOnly: s,
						el: n,
						lbl: a
					})
				}
			}, ee.select = function() {
				H ? ee.hide(!1, "set", !1, p) : p()
			}, ee.cancel = function() {
				H ? ee.hide(!1, "cancel", !1, b) : b()
			}, ee.clear = function() {
				ee._clearValue(), X("onClear"), H && ee._isVisible && !ee.live ? ee.hide(!1, "clear", !1, v) : v()
			}, ee.enable = function() {
				B.disabled = !1, ee._isInput && te.prop("disabled", !1)
			}, ee.disable = function() {
				B.disabled = !0, ee._isInput && te.prop("disabled", !0)
			}, ee.show = function(e, t) {
				var a;
				function html4(){
					var html = "",
						buttons = N,
						s = B,
						hasButtons = buttons.length > 0;
					if(hasButtons) {
						var b,
							i,
							j,
							l = buttons.length;
					
						html += '<div class="mbsc-fr-btn-cont">';
						for(i = 0; i < buttons.length; i++) {
							j = s.btnReverse ? l - i - 1 : i;
							b = buttons[j];
							b = u(b) ? ee.buttons[b] : b;
					
							if(b.handler === 'set') {
								b.parentClass = 'mbsc-fr-btn-s';
							}
					
							if(b.handler === 'cancel') {
								b.parentClass = 'mbsc-fr-btn-c';
							}
					
							html += '<div' + (s.btnWidth ? ' style="width:' + (100 / buttons.length) + '%"' : '') +
								' class="mbsc-fr-btn-w ' + (b.parentClass || '') + '">' +
								'<div tabindex="0" role="button" class="mbsc-fr-btn' + j + ' mbsc-fr-btn-e ' +
								(b.cssClass === undefined ? s.btnClass : b.cssClass) +
								(b.icon ? ' mbsc-ic mbsc-ic-' + b.icon : '') + '">' + (b.text || '') + '</div></div>';
						}
						html += '</div>';
					}
					html += '</div></div></div></div>' + (H ? '</div></div>' : '');
					return html;
				}
				if (!B.disabled && !ee._isVisible) {
					if (ee._readValue(), !1 === X("onBeforeShow")) return !1;
					if (tt = null, I = B.animate, N = B.buttons || [], Y = F || "bubble" == B.display, j = st && !Y && B.scrollLock, N.length > 0, !1 !== I && ("top" == B.display ? I = I || "slidedown" : "bottom" == B.display ? I = I || "slideup" : "center" != B.display && "bubble" != B.display || (I = I || "pop")), H && (U = Math.max(0, k.scrollTop()), K = Math.max(0, k.scrollLeft()), Z = 0, Q = 0, j && !_.hasClass("mbsc-fr-lock-ios") && x.css({
						top: -U + "px",
						left: -K + "px"
					}), _.addClass((B.scrollLock ? "mbsc-fr-lock" : "") + (j ? " mbsc-fr-lock-ios" : "") + (F ? " mbsc-fr-lock-ctx" : "")), $e(document.activeElement).is("input,textarea") && document.activeElement.blur(), ve.activeInstance && ve.activeInstance.hide(), ve.activeInstance = ee, V.mbscModals = V.mbscModals || 0, V.mbscLock = V.mbscLock || 0, V.mbscModals++, B.scrollLock && V.mbscLock++), 
					
					a = '<div lang="' + B.lang + '" class="mbsc-fr mbsc-' + B.theme + (B.baseTheme ? " mbsc-" + B.baseTheme : "") + " mbsc-fr-" + B.display + " " + (B.cssClass || "") + " " + (B.compClass || "") + (ee._isLiquid ? " mbsc-fr-liq" : "") + (lt ? " mbsc-fr-hb" : "") + (G ? "" : " mbsc-no-touch") + (j ? " mbsc-platform-ios" : "") + (N.length > 0 ? N.length >= 3 ? " mbsc-fr-btn-block " : "" : " mbsc-fr-nobtn") + '">' + (H ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : "") + '<div class="mbsc-fr-popup' + (B.rtl ? " mbsc-rtl" : " mbsc-ltr") + (B.headerText ? " mbsc-fr-has-hdr" : "") + '">' + ("bubble" === B.display ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : "") + '<div class="mbsc-fr-w">' + (B.headerText ? '<div class="mbsc-fr-hdr">' + (u(B.headerText) ? B.headerText : "") + "</div>" : "") + '<div class="mbsc-fr-c">',
					a += ee._generateContent(),
					a += "</div>",
					a += html4(),
                    w = $e(a),
                    C = $e(".mbsc-fr-persp", w), M = $e(".mbsc-fr-scroll", w), D = $e(".mbsc-fr-w", w), S = $e(".mbsc-fr-popup", w), y = $e(".mbsc-fr-hdr", w), L = w[0], z = M[0], $ = S[0], ee._activeElm = z, ee._markup = w, ee._isVisible = !0, R = "orientationchange resize", ee._markupReady(w), X("onMarkupReady", {
                        target: L
                    }), H && ($e(window).on("keydown", i), B.scrollLock && w.on("touchmove mousewheel wheel", function(e) {
                        q && e.preventDefault()
                    }), B.focusTrap && k.on("focusin", d), B.closeOnOverlayTap)) {
                        var n, s, r, o;
                        M.on("touchstart mousedown", function(e) {
                            s || e.target != M[0] || (s = !0, n = !1, r = T(e, "X"), o = T(e, "Y"))
                        }).on("touchmove mousemove", function(e) {
                            s && !n && (Math.abs(T(e, "X") - r) > 9 || Math.abs(T(e, "Y") - o) > 9) && (n = !0)
                        }).on("touchcancel", function() {
                            s = !1
                        }).on("touchend touchcancel mouseup", function(e) {
                            s && !n && (ee.cancel(), "mouseup" != e.type && g()), s = !1
                        })
                    }
                    H && j ? setTimeout(function() {
                        m(e, t)
                    }, 100) : m(e, t)
                }
            }, ee.hide = function(e, t, a, n) {
                function s() {
                    w.off(Ge, s), o(e)
                }
                if (!ee._isVisible || !a && !ee._isValid && "set" == t || !a && !1 === X("onBeforeClose", {
                    valueText: ee._tempValue,
                    button: t
                })) return !1;
                H && ($e(document.activeElement).is("input,textarea") && $.contains(document.activeElement) && document.activeElement.blur(), $e(window).off("keydown", i), delete ve.activeInstance), w && (H && I && !e ? w.addClass("mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-" + I).on(Ge, s).find(".mbsc-fr-popup").addClass("mbsc-anim-" + I) : o(e), ee._detachEvents(w), k.off(R, c).off("focusin", d)), n && n(), te.trigger("blur"), X("onClose", {
                    valueText: ee._value
                })
            }, ee.isVisible = function() {
                return ee._isVisible
            }, ee.setVal = l, ee.getVal = l, ee._generateContent = l, ee._attachEvents = l, ee._detachEvents = l, ee._readValue = l, ee._clearValue = l, ee._fillValue = l, ee._markupReady = l, ee._markupInserted = l, ee._markupRemove = l, ee._position = l, ee.__processSettings = l, ee.__init = l, ee.__destroy = l, ee._destroy = function() {
                ee.hide(!0, !1, !0), te.off(".mbsc"), $e.each(ae, function(e, t) {
                    t.el.off(".mbsc").prop("readonly", t.readOnly), t.lbl && t.lbl.off(".mbsc")
                }), ee.__destroy()
            }, ee._updateHeader = function() {
                var t = B.headerText;
                y.html(t ? "function" == typeof t ? t.call(e, ee._tempValue) : t.replace(/\{value\}/i, ee._tempValue) : "")
            }, ee._processSettings = function() {
                var e, t;
                for (ee.__processSettings(), B.buttons = B.buttons || ("inline" !== B.display ? ["cancel", "set"] : []), B.headerText = void 0 === B.headerText ? "inline" !== B.display && "{value}" : B.headerText, N = B.buttons || [], H = "inline" !== B.display, F = "body" != B.context, x = $e(B.context), _ = F ? x : $e("body,html"), V = x[0], ee._$window = k = $e(F ? B.context : window), ee.live = !0, t = 0; t < N.length; t++) "ok" != (e = N[t]) && "set" != e && "set" != e.handler || (ee.live = !1);
                ee.buttons.set = {
                    text: B.setText,
                    icon: B.setIcon,
                    handler: "set"
                }, ee.buttons.cancel = {
                    text: B.cancelText,
                    icon: B.cancelIcon,
                    handler: "cancel"
                }, ee.buttons.close = {
                    text: B.closeText,
                    icon: B.closeIcon,
                    handler: "cancel"
                }, ee.buttons.clear = {
                    text: B.clearText,
                    icon: B.clearIcon,
                    handler: "clear"
                }, ee._isInput = te.is("input")
            }, ee._init = function() {
                ee._isVisible && ee.hide(!0, !1, !0), te.off(".mbsc"), ee.__init(), ee._isLiquid = "liquid" == B.layout, H ? (ee._readValue(), ee._hasContent || ee.attachShow(te)) : ee.show(), te.on("change.mbsc", function() {
                    ee._preventChange || ee.setVal(te.val(), !0, !1), ee._preventChange = !1
                }).removeClass("mbsc-cloak")
            }, ee.buttons = {}, ee.handlers = {
                set: ee.select,
                cancel: ee.cancel,
                clear: ee.clear
            }, ee._value = null, ee._isValid = !0, ee._isVisible = !1, B = ee.settings, X = ee.trigger, a || ee.init(t)
        };
    dt.prototype._defaults = {
        lang: "en",
        setText: "Set",
        selectedText: "{count} selected",
        closeText: "Close",
        cancelText: "Cancel",
        clearText: "Clear",
        context: "body",
        maxPopupWidth: 600,
        disabled: !1,
        closeOnOverlayTap: !0,
        showOnFocus: it || rt,
        showOnTap: !0,
        display: "center",
        scroll: !0,
        scrollLock: !0,
        tap: !0,
        btnClass: "mbsc-fr-btn",
        btnWidth: !0,
        focusTrap: !0,
        focusOnClose: !ot
    }, Je.Frame = dt, nt.frame.mobiscroll = {
        headerText: !1,
        btnWidth: !1
    }, nt.scroller.mobiscroll = Ke({}, nt.frame.mobiscroll, {
        rows: 5,
        showLabel: !1,
        selectedLineBorder: 1,
        weekDays: "min",
        checkIcon: "ion-ios7-checkmark-empty",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    }), Pe && $e(window).on("focus", function() {
        tt && (at = !0)
    }); /* eslint-disable no-unused-vars */
    var mt = "ios" == Ae,
        ut = function(e, t, a) {
            function n(e) {
                G("onStart", {
                    domEvent: e
                }), ae.stopProp && e.stopPropagation(), ae.prevDef && e.preventDefault(), ae.readonly || ae.lock && F || A(e, this) && !I && ve.SYcKw && (d && d.removeClass("mbsc-active"), S = !1, F || (d = $e(e.target).closest(".mbsc-btn-e", this), d.length && !d.hasClass("mbsc-disabled") && (S = !0, f = setTimeout(function() {
                    d.addClass("mbsc-active")
                }, 100))), I = !0, O = !1, H = !1, Q.scrolled = F, R = T(e, "X"), J = T(e, "Y"), w = R, b = 0, v = 0, g = 0, W = new Date, $ = +V(K, X) || 0, F && c($, mt ? 0 : 1), "mousedown" === e.type && $e(document).on("mousemove", s).on("mouseup", r))
            }
            function s(e) {
                I && (ae.stopProp && e.stopPropagation(), w = T(e, "X"), M = T(e, "Y"), b = w - R, v = M - J, g = X ? v : b, S && (Math.abs(v) > ae.thresholdY || Math.abs(b) > ae.thresholdX) && (clearTimeout(f), d.removeClass("mbsc-active"), S = !1), (Q.scrolled || !H && Math.abs(g) > U) && (O || G("onGestureStart", C), Q.scrolled = O = !0, L || (L = !0, P = Ee(i))), X || ae.scrollLock ? e.preventDefault() : Q.scrolled ? e.preventDefault() : Math.abs(v) > 7 && (H = !0, Q.scrolled = !0, ne.trigger("touchend")))
            }
            function i() {
                D && (g = h(g, -j * D, j * D)), c(h($ + g, N - _, k + _)), L = !1
            }
            function r(e) {
                if (I) {
                    var t, a = new Date - W;
                    ae.stopProp && e.stopPropagation(), Ye(P), L = !1, !H && Q.scrolled && (ae.momentum && a < 300 && (t = g / a, g = Math.max(Math.abs(g), t * t / ae.speedUnit) * (g < 0 ? -1 : 1)), l(g)), S && (clearTimeout(f), d.addClass("mbsc-active"), setTimeout(function() {
                        d.removeClass("mbsc-active")
                    }, 100), H || Q.scrolled || G("onBtnTap", {
                        target: d[0],
                        domEvent: e
                    })), "mouseup" == e.type && $e(document).off("mousemove", s).off("mouseup", r), I = !1
                }
            }
            function o(e) {
                if (e = e.originalEvent || e, g = X ? e.deltaY || e.wheelDelta || e.detail : e.deltaX, G("onStart", {
                    domEvent: e
                }), ae.stopProp && e.stopPropagation(), g && ve.SYcKw) {
                    if (e.preventDefault(), e.deltaMode && 1 == e.deltaMode && (g *= 5), g = h(-g, -20, 20), $ = Z, ae.readonly || $ + g < N || $ + g > k) return;
                    O || (C = {
                        posX: X ? 0 : Z,
                        posY: X ? Z : 0,
                        originX: X ? 0 : $,
                        originY: X ? $ : 0,
                        direction: g > 0 ? X ? 270 : 360 : X ? 90 : 180
                    }, G("onGestureStart", C)), L || (L = !0, P = Ee(i)), O = !0, clearTimeout(E), E = setTimeout(function() {
                        Ye(P), L = !1, O = !1, l(g)
                    }, 200)
                }
            }
            function l(e) {
                var t, a, n;
                if (D && (e = h(e, -j * D, j * D)), n = h(Math.round(($ + e) / j) * j, N, k), ee = Math.round(n / j), z) {
                    if (e < 0) {
                        for (t = z.length - 1; t >= 0; t--) if (Math.abs(n) + p >= z[t].breakpoint) {
                            ee = t, te = 2, n = z[t].snap2;
                            break
                        }
                    } else if (e >= 0) for (t = 0; t < z.length; t++) if (Math.abs(n) <= z[t].breakpoint) {
                        ee = t, te = 1, n = z[t].snap1;
                        break
                    }
                    n = h(n, N, k)
                }
                a = ae.time || (Z < N || Z > k ? 1e3 : Math.max(1e3, Math.abs(n - Z) * ae.timeUnit)), C.destinationX = X ? 0 : n, C.destinationY = X ? n : 0, C.duration = a, C.transitionTiming = y, G("onGestureEnd", C), c(n, a)
            }
            function c(e, t, a, n) {
                var s = e != Z,
                    i = t > 1,
                    r = function() {
                        clearInterval(Y), clearTimeout(q), F = !1, Z = e, C.posX = X ? 0 : e, C.posY = X ? e : 0, s && G("onMove", C), i && G("onAnimationEnd", C), n && n()
                    };
                C = {
                    posX: X ? 0 : Z,
                    posY: X ? Z : 0,
                    originX: X ? 0 : $,
                    originY: X ? $ : 0,
                    direction: e - Z > 0 ? X ? 270 : 360 : X ? 90 : 180
                }, Z = e, i && (C.destinationX = X ? 0 : e, C.destinationY = X ? e : 0, C.duration = t, C.transitionTiming = y, G("onAnimationStart", C)), B[Qe + "Transition"] = t ? Ze + "transform " + Math.round(t) + "ms " + y : "", B[Qe + "Transform"] = "translate3d(" + (X ? "0," + e + "px," : e + "px,0,") + "0)", !s && !F || !t || t <= 1 ? r() : t && (F = !a, clearInterval(Y), Y = setInterval(function() {
                    var t = +V(K, X) || 0;
                    C.posX = X ? 0 : t, C.posY = X ? t : 0, G("onMove", C), Math.abs(t - e) < 2 && r()
                }, 100), clearTimeout(q), q = setTimeout(function() {
                    r()
                }, t)), ae.sync && ae.sync(e, t, y)
            }
            var d, f, p, b, v, g, x, y, _, w, M, C, S, k, D, N, I, F, H, P, L, O, E, Y, j, z, $, W, R, J, B, K, q, U, G, X, Z, Q = this,
                ee = 0,
                te = 1,
                ae = t,
                ne = $e(e);
            qe.call(this, e, t, !0), Q.scrolled = !1, Q.scroll = function(t, a, n, s) {
                t = m(t) ? Math.round(t / j) * j : Math.ceil(($e(t, e).length ? Math.round(K.offset()[x] - $e(t, e).offset()[x]) : Z) / j) * j, t = h(t, N, k), ee = Math.round(t / j), $ = Z, c(t, a, n, s)
            }, Q.refresh = function(e) {
                var t;
                p = void 0 === ae.contSize ? X ? ne.height() : ne.width() : ae.contSize, N = void 0 === ae.minScroll ? Math.min(0, X ? p - K.height() : p - K.width()) : ae.minScroll, k = void 0 === ae.maxScroll ? 0 : ae.maxScroll, z = null, !X && ae.rtl && (t = k, k = -N, N = -t), u(ae.snap) && (z = [], K.find(ae.snap).each(function() {
                    var e = X ? this.offsetTop : this.offsetLeft,
                        t = X ? this.offsetHeight : this.offsetWidth;
                    z.push({
                        breakpoint: e + t / 2,
                        snap1: -e,
                        snap2: p - e - t
                    })
                })), j = m(ae.snap) ? ae.snap : 1, D = ae.snap ? ae.maxSnapScroll : 0, y = ae.easing, _ = ae.elastic ? m(ae.snap) ? j : m(ae.elastic) ? ae.elastic : 0 : 0, void 0 === Z && (Z = ae.initialPos, ee = Math.round(Z / j)), e || Q.scroll(ae.snap ? z ? z[ee]["snap" + te] : ee * j : Z)
            }, Q._processSettings = function() {
                X = "Y" == ae.axis, x = X ? "top" : "left", K = ae.moveElement || ne.children().eq(0), B = K[0].style, U = X ? ae.thresholdY : ae.thresholdX
            }, Q._init = function() {
                Q.refresh(), ne.on("touchstart mousedown", n).on("touchmove", s).on("touchend touchcancel", r), ae.mousewheel && ne.on("wheel mousewheel", o), e.addEventListener && e.addEventListener("click", function(e) {
                    Q.scrolled && (Q.scrolled = !1, e.stopPropagation(), e.preventDefault())
                }, !0)
            }, Q._destroy = function() {
                clearInterval(Y), ne.off("touchstart mousedown", n).off("touchmove", s).off("touchend touchcancel", r).off("wheel mousewheel", o)
            }, ae = Q.settings, G = Q.trigger, a || Q.init(t)
        };
    ut.prototype = {
        _defaults: {
            speedUnit: .0022,
            timeUnit: 3,
            initialPos: 0,
            axis: "Y",
            thresholdX: 10,
            thresholdY: 5,
            easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
            stopProp: !0,
            momentum: !0,
            mousewheel: !0,
            elastic: !0
        }
    }; /* eslint-disable no-unused-vars */
    var ht = {}, ft = Pe ? window.CSS : null,
        pt = ft && ft.supports && ft.supports("(transform-style: preserve-3d)"),
        bt = !pt || "wp" == Ae || "android" == Ae,
        vt = function(e, t, a) {
            function n(e) {
                var t, a, n = $e(this).attr("data-index");
                38 == e.keyCode ? (t = !0, a = -1) : 40 == e.keyCode ? (t = !0, a = 1) : 32 == e.keyCode && (t = !0, i(n, O[n]._$markup.find('.mbsc-sc-itm[data-val="' + N[n] + '"]'))), t && (e.stopPropagation(), e.preventDefault(), a && D.start(n, a))
            }
            function s() {
                D.stop()
            }
            function i(e, t) {
                var a = O[e],
                    n = +t.attr("data-index"),
                    s = u(a, n),
                    i = z._tempSelected[e],
                    r = m(a.multiple) ? a.multiple : 1 / 0;
                !1 !== P("onItemTap", {
                    target: t[0],
                    index: e,
                    value: s,
                    selected: t.hasClass("mbsc-sc-itm-sel")
                }) && (a.multiple && !a._disabled[s] && (void 0 !== i[s] ? (t.removeClass(S).removeAttr("aria-selected"), delete i[s]) : (1 == r && (z._tempSelected[e] = i = {}, a._$markup.find(".mbsc-sc-itm-sel").removeClass(S).removeAttr("aria-selected")), c(i).length < r && (t.addClass(S).attr("aria-selected", "true"), i[s] = s))), T(a, e, n, j, !0, !0, a.multiple), !z.live || a.multiple || !0 !== H.setOnTap && !H.setOnTap[e] || setTimeout(function() {
                    z.select()
                }, 200))
            }
            function r(e, t) {
                return (e._array ? e._map[t] : e.getIndex(t, z)) || 0
            }
            function o(e, t) {
                var a = e.data;
                if (t >= e.min && t <= e.max) return e._array ? e.circular ? $e(a).get(t % e._length) : a[t] : $e.isFunction(a) ? a(t, z) : ""
            }
            function l(e) {
                return $e.isPlainObject(e) ? void 0 !== e.value ? e.value : e.display : e
            }
            function d(e) {
                var t = $e.isPlainObject(e) ? e.display : e;
                return void 0 === t ? "" : t
            }
            function u(e, t) {
                return l(o(e, t))
            }
            function h(e, t) {
                var a = O[e];
                T(a, e, a._current + t, j, 1 == t ? 1 : 2)
            }
            function f(e) {
                return $e.isArray(H.readonly) ? H.readonly[e] : H.readonly
            }
            function p(e, t, a) {
                var n = e._index - e._batch;
                return e.data = e.data || [], e.key = void 0 !== e.key ? e.key : t, e.label = void 0 !== e.label ? e.label : t, e._map = {}, e._array = $e.isArray(e.data), e._array && (e._length = e.data.length, $e.each(e.data, function(t, a) {
                    e._map[l(a)] = t
                })), e.circular = void 0 === H.circular ? void 0 === e.circular ? e._array && e._length > H.rows : e.circular : $e.isArray(H.circular) ? H.circular[t] : H.circular, e.min = e._array ? e.circular ? -1 / 0 : 0 : void 0 === e.min ? -1 / 0 : e.min, e.max = e._array ? e.circular ? 1 / 0 : e._length - 1 : void 0 === e.max ? 1 / 0 : e.max, e._nr = t, e._index = r(e, N[t]), e._disabled = {}, e._batch = 0, e._current = e._index, e._first = e._index - Y, e._last = e._index + Y, e._offset = e._first, a ? (e._offset -= e._margin / A + (e._index - n), e._margin += (e._index - n) * A) : e._margin = 0, e._refresh = function(t) {
                    var a = -(e.min - e._offset + (e.multiple && !C ? Math.floor(H.rows / 2) : 0)) * A,
                        n = Math.min(a, -(e.max - e._offset - (e.multiple && !C ? Math.floor(H.rows / 2) : 0)) * A);
                    Ke(e._scroller.settings, {
                        minScroll: n,
                        maxScroll: a
                    }), e._scroller.refresh(t)
                }, E[e.key] = e, e
            }
            function b(e, t, a, n, s) {
                var i, r, c, m, u, h, f, p, b = "",
                    v = z._tempSelected[t],
                    g = e._disabled || {};
                for (i = a; i <= n; i++) c = o(e, i), u = d(c), m = l(c), r = c && void 0 !== c.cssClass ? c.cssClass : "", h = c && void 0 !== c.label ? c.label : "", f = c && c.invalid, p = void 0 !== m && m == N[t] && !e.multiple, b += '<div role="option" aria-selected="' + !! v[m] + '" class="mbsc-sc-itm ' + (s ? "mbsc-sc-itm-3d " : "") + r + " " + (p ? "mbsc-sc-itm-sel " : "") + (v[m] ? S : "") + (void 0 === m ? " mbsc-sc-itm-ph" : " mbsc-btn-e") + (f ? " mbsc-sc-itm-inv-h mbsc-disabled" : "") + (g[m] ? " mbsc-sc-itm-inv mbsc-disabled" : "") + '" data-index="' + i + '" data-val="' + m + '"' + (h ? ' aria-label="' + h + '"' : "") + (p ? ' aria-selected="true"' : "") + ' style="height:' + A + "px;line-height:" + A + "px;" + (s ? Ze + "transform:rotateX(" + (e._offset - i) * M % 360 + "deg) translateZ(" + A * H.rows / 2 + "px);" : "") + '">' + (L > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(A / L) + "px;font-size:" + Math.round(A / L * .8) + 'px;">' : "") + u + (L > 1 ? "</div>" : "") + "</div>";
                return b
            }
            function v(e, t, a) {
                var n = Math.round(-a / A) + e._offset,
                    s = n - e._current,
                    i = e._first,
                    r = e._last,
                    o = i + Y - w + 1,
                    l = r - Y + w;
                s && (e._first += s, e._last += s, e._current = n, s > 0 ? (e._$scroller.append(b(e, t, Math.max(r + 1, i + s), r + s)), $e(".mbsc-sc-itm", e._$scroller).slice(0, Math.min(s, r - i + 1)).remove(), C && (e._$3d.append(b(e, t, Math.max(l + 1, o + s), l + s, !0)), $e(".mbsc-sc-itm", e._$3d).slice(0, Math.min(s, l - o + 1)).attr("class", "mbsc-sc-itm-del"))) : s < 0 && (e._$scroller.prepend(b(e, t, i + s, Math.min(i - 1, r + s))), $e(".mbsc-sc-itm", e._$scroller).slice(Math.max(s, i - r - 1)).remove(), C && (e._$3d.prepend(b(e, t, o + s, Math.min(o - 1, l + s), !0)), $e(".mbsc-sc-itm", e._$3d).slice(Math.max(s, o - l - 1)).attr("class", "mbsc-sc-itm-del"))), e._margin += s * A, e._$scroller.css("margin-top", e._margin + "px"))
            }
            function g(e, t, a, n) {
                var s, i = O[e],
                    o = n || i._disabled,
                    l = r(i, t),
                    c = t,
                    d = t,
                    m = 0,
                    h = 0;
                if (void 0 === t && (t = u(i, l)), !0 === o[t]) {
                    for (s = 0; l - m >= i.min && o[c] && s < 100;) s++, m++, c = u(i, l - m);
                    for (s = 0; l + h < i.max && o[d] && s < 100;) s++, h++, d = u(i, l + h);
                    t = (h < m && h && 2 !== a || !m || l - m < 0 || 1 == a) && !o[d] ? d : c
                }
                return t
            }
            function x(t, a, n, s, i, o) {
                var l, c, d, m, u = z._isVisible;
                I = !0, m = H.validate.call(e, {
                    values: N.slice(0),
                    index: a,
                    direction: n
                }, z) || {}, I = !1, m.valid && (z._tempWheelArray = N = m.valid.slice(0)), o || $e.each(O, function(e, s) {
                    if (u && s._$markup.find(".mbsc-sc-itm-inv").removeClass("mbsc-sc-itm-inv mbsc-disabled"), s._disabled = {}, m.disabled && m.disabled[e] && $e.each(m.disabled[e], function(e, t) {
                        s._disabled[t] = !0, u && s._$markup.find('.mbsc-sc-itm[data-val="' + t + '"]').addClass("mbsc-sc-itm-inv mbsc-disabled")
                    }), N[e] = s.multiple ? N[e] : g(e, N[e], n), u) {
                        if (s.multiple && void 0 !== a || s._$markup.find(".mbsc-sc-itm-sel").removeClass(S).removeAttr("aria-selected"), s.multiple) {
                            if (void 0 === a) for (var o in z._tempSelected[e]) s._$markup.find('.mbsc-sc-itm[data-val="' + o + '"]').addClass(S).attr("aria-selected", "true")
                        } else s._$markup.find('.mbsc-sc-itm[data-val="' + N[e] + '"]').addClass("mbsc-sc-itm-sel").attr("aria-selected", "true");
                        c = r(s, N[e]), l = c - s._index + s._batch, Math.abs(l) > 2 * Y + 1 && (d = l + (2 * Y + 1) * (l > 0 ? -1 : 1), s._offset += d, s._margin -= d * A, s._refresh()), s._index = c + s._batch, s._scroller.scroll(-(c - s._offset + s._batch) * A, a === e || void 0 === a ? t : j, i)
                    }
                }), P("onValidated", {
                    index: a,
                    time: t
                }), z._tempValue = H.formatValue.call(e, N, z), u && z._updateHeader(), z.live && (z._hasValue = s || z._hasValue, y(s, s, 0, !0), s && P("onSet", {
                    valueText: z._value
                })), s && P("onChange", {
                    index: a,
                    valueText: z._tempValue
                })
            }
            function T(e, t, a, n, s, i, r) {
                var o = u(e, a);
                void 0 !== o && (N[t] = o, e._batch = e._array ? Math.floor(a / e._length) * e._length : 0, e._index = a, setTimeout(function() {
                    x(n, t, s, !0, i, r)
                }, 10))
            }
            function y(t, a, n, s, i) {
                if (s ? z._tempValue = H.formatValue.call(e, z._tempWheelArray, z) : x(n), !i) {
                    z._wheelArray = [];
                    for (var r = 0; r < N.length; r++) z._wheelArray[r] = O[r] && O[r].multiple ? Object.keys(z._tempSelected[r])[0] : N[r];
                    z._value = z._hasValue ? z._tempValue : null, z._selected = Ke(!0, {}, z._tempSelected)
                }
                t && (z._isInput && $.val(z._hasValue ? z._tempValue : ""), P("onFill", {
                    valueText: z._hasValue ? z._tempValue : "",
                    change: a
                }), a && (z._preventChange = !0, $.trigger("change")))
            }
            var _, w, M, C, S, k, D, N, A, V, I, H, P, L, O, E, Y = 40,
                j = 1e3,
                z = this,
                $ = $e(e);
            dt.call(this, e, t, !0), z.setVal = z._setVal = function(t, a, n, s, i) {
                z._hasValue = null !== t && void 0 !== t, z._tempWheelArray = N = $e.isArray(t) ? t.slice(0) : H.parseValue.call(e, t, z) || [], y(a, void 0 === n ? a : n, i, !1, s)
            }, z.getVal = z._getVal = function(e) {
                var t = z._hasValue || e ? z[e ? "_tempValue" : "_value"] : null;
                return m(t) ? +t : t
            }, z.setArrayVal = z.setVal, z.getArrayVal = function(e) {
                return e ? z._tempWheelArray : z._wheelArray
            }, z.changeWheel = function(e, t, a) {
                var n, s;
                $e.each(e, function(e, t) {
                    (s = E[e]) && (n = s._nr, Ke(s, t), p(s, n, !0), z._isVisible && (C && s._$3d.html(b(s, n, s._first + Y - w + 1, s._last - Y + w, !0)), s._$scroller.html(b(s, n, s._first, s._last)).css("margin-top", s._margin + "px"), s._refresh(I)))
                }), !z._isVisible || z._isLiquid || I || z.position(), I || x(t, void 0, void 0, a)
            }, z.getValidValue = g, z._generateContent = function() {
                var e, t = 0,
                    a = "",
                    n = C ? Ze + "transform: translateZ(" + (A * H.rows / 2 + 3) + "px);" : "",
                    s = '<div class="mbsc-sc-whl-l" style="' + n + "height:" + A + "px;margin-top:-" + (A / 2 + (H.selectedLineBorder || 0)) + 'px;"></div>',
                    i = 0;
                return $e.each(H.wheels, function(r, o) {
                    a += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (C ? " mbsc-sc-whl-gr-3d-c" : "") + (H.showLabel ? " mbsc-sc-lbl-v" : "") + '">' + s + '<div class="mbsc-sc-whl-gr' + (C ? " mbsc-sc-whl-gr-3d" : "") + (k ? " mbsc-sc-cp" : "") + (H.width || H.maxWidth ? '"' : '" style="max-width:' + H.maxPopupWidth + 'px;"') + ">", $e.each(o, function(r, o) {
                        z._tempSelected[i] = Ke({}, z._selected[i]), O[i] = p(o, i), t += H.maxWidth ? H.maxWidth[i] || H.maxWidth : H.width ? H.width[i] || H.width : 0, e = void 0 !== o.label ? o.label : r, a += '<div class="mbsc-sc-whl-w ' + (o.cssClass || "") + (o.multiple ? " mbsc-sc-whl-multi" : "") + '" style="' + (H.width ? "width:" + (H.width[i] || H.width) + "px;" : (H.minWidth ? "min-width:" + (H.minWidth[i] || H.minWidth) + "px;" : "") + (H.maxWidth ? "max-width:" + (H.maxWidth[i] || H.maxWidth) + "px;" : "")) + '"><div class="mbsc-sc-whl-o" style="' + n + '"></div>' + s + '<div tabindex="0" aria-live="off" aria-label="' + e + '"' + (o.multiple ? ' aria-multiselectable="true"' : "") + ' role="listbox" data-index="' + i + '" class="mbsc-sc-whl" style="height:' + H.rows * A * (C ? 1.1 : 1) + 'px;">' + (k ? '<div data-index="' + i + '" data-step="1" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (H.btnPlusClass || "") + '" style="height:' + A + "px;line-height:" + A + 'px;"></div><div data-index="' + i + '" data-step="-1" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (H.btnMinusClass || "") + '" style="height:' + A + "px;line-height:" + A + 'px;"></div>' : "") + '<div class="mbsc-sc-lbl">' + e + '</div><div class="mbsc-sc-whl-c" style="height:' + V + "px;margin-top:-" + (V / 2 + 1) + "px;" + n + '"><div class="mbsc-sc-whl-sc" style="top:' + (V - A) / 2 + 'px;">', a += b(o, i, o._first, o._last) + "</div></div>", C && (a += '<div class="mbsc-sc-whl-3d" style="height:' + A + "px;margin-top:-" + A / 2 + 'px;">', a += b(o, i, o._first + Y - w + 1, o._last - Y + w, !0), a += "</div>"), a += "</div></div>", i++
                    }), a += "</div></div>"
                }), t && (H.maxPopupWidth = t), a
            }, z._attachEvents = function(e) {
                D = F($e(".mbsc-sc-btn", e), h, H.delay, f, !0), $e(".mbsc-sc-whl", e).on("keydown", n).on("keyup", s)
            }, z._detachEvents = function() {
                for (var e = 0; e < O.length; e++) O[e]._scroller.destroy()
            }, z._markupReady = function(e) {
                _ = e, $e(".mbsc-sc-whl-w", _).each(function(e) {
                    var t, a = $e(this),
                        n = O[e],
                        s = -(n.min - n._offset + (n.multiple && !C ? Math.floor(H.rows / 2) : 0)) * A,
                        r = Math.min(s, -(n.max - n._offset - (n.multiple && !C ? Math.floor(H.rows / 2) : 0)) * A);
                    n._$markup = a, n._$scroller = $e(".mbsc-sc-whl-sc", this), n._$3d = $e(".mbsc-sc-whl-3d", this), n._scroller = new ut(this, {
                        mousewheel: H.mousewheel,
                        moveElement: n._$scroller,
                        initialPos: (n._first - n._index) * A,
                        contSize: 0,
                        snap: A,
                        minScroll: r,
                        maxScroll: s,
                        maxSnapScroll: Y,
                        prevDef: !0,
                        stopProp: !0,
                        timeUnit: 3,
                        easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                        sync: function(e, t, a) {
                            C && (n._$3d[0].style[Qe + "Transition"] = t ? Ze + "transform " + Math.round(t) + "ms " + a : "", n._$3d[0].style[Qe + "Transform"] = "rotateX(" + -e / A * M + "deg)")
                        },
                        onStart: function(t, a) {
                            a.settings.readonly = f(e)
                        },
                        onGestureStart: function() {
                            a.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), P("onWheelGestureStart", {
                                index: e
                            })
                        },
                        onGestureEnd: function(a) {
                            var s = 90 == a.direction ? 1 : 2,
                                i = a.duration,
                                r = a.destinationY;
                            t = Math.round(-r / A) + n._offset, T(n, e, t, i, s)
                        },
                        onAnimationStart: function() {
                            a.addClass("mbsc-sc-whl-anim")
                        },
                        onAnimationEnd: function() {
                            a.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), P("onWheelAnimationEnd", {
                                index: e
                            }), n._$3d.find(".mbsc-sc-itm-del").remove()
                        },
                        onMove: function(t) {
                            v(n, e, t.posY)
                        },
                        onBtnTap: function(t) {
                            i(e, $e(t.target))
                        }
                    })
                }), x()
            }, z._fillValue = function() {
                z._hasValue = !0, y(!0, !0, 0, !0)
            }, z._clearValue = function() {
                $e(".mbsc-sc-whl-multi .mbsc-sc-itm-sel", _).removeClass(S).removeAttr("aria-selected")
            }, z._readValue = function() {
                var t = $.val() || "",
                    a = 0;
                "" !== t && (z._hasValue = !0), z._tempWheelArray = N = z._hasValue && z._wheelArray ? z._wheelArray.slice(0) : H.parseValue.call(e, t, z) || [], z._tempSelected = Ke(!0, {}, z._selected), $e.each(H.wheels, function(e, t) {
                    $e.each(t, function(e, t) {
                        O[a] = p(t, a), a++
                    })
                }), y(!1, !1, 0, !0), P("onRead")
            }, z.__processSettings = function() {
                H = z.settings, P = z.trigger, L = H.multiline, S = "mbsc-sc-itm-sel mbsc-ic mbsc-ic-" + H.checkIcon
            }, z.__init = function() {
                O = [], E = {}, k = H.showScrollArrows, C = H.scroll3d && !bt && !k, A = H.height, V = C ? 2 * Math.round((A - .03 * (A * H.rows / 2 + 3)) / 2) : A, w = Math.round(1.8 * H.rows), M = 360 / (2 * w), k && (H.rows = Math.max(3, H.rows)), H.cssClass = (H.cssClass || "") + " mbsc-sc"
            }, z._getItemValue = l, z._tempSelected = {}, z._selected = {}, a || z.init(t)
        };
    vt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "scroller",
        _presets: ht,
        _defaults: Ke({}, dt.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 300,
            readonly: !1,
            showLabel: !0,
            setOnTap: !1,
            wheels: [],
            preset: "",
            speedUnit: .0012,
            timeUnit: .08,
            checkIcon: "checkmark",
            validate: function() {},
            formatValue: function(e) {
                return e.join(" ")
            },
            parseValue: function(e, t) {
                var a, n, s = [],
                    i = [],
                    r = 0;
                return null !== e && void 0 !== e && (s = (e + "").split(" ")), $e.each(t.settings.wheels, function(e, o) {
                    $e.each(o, function(e, o) {
                        n = o.data, a = t._getItemValue(n[0]), $e.each(n, function(e, n) {
                            if (s[r] == t._getItemValue(n)) return a = t._getItemValue(n), !1
                        }), i.push(a), r++
                    })
                }), i
            }
        })
    }, Je.Scroller = vt;
    var gt = {
        separator: " ",
        dateFormat: "mm/dd/yy",
        dateDisplay: "MMddyy",
        timeFormat: "h:ii A",
        dayText: "Day",
        monthText: "Month",
        yearText: "Year",
        hourText: "Hours",
        minuteText: "Minutes",
        ampmText: "&nbsp;",
        secText: "Seconds",
        nowText: "Now",
        todayText: "Today"
    }, xt = function(e) {
        function t(e) {
            return e < 10 ? "0" + e : e
        }
        function a(e) {
            var t, a, n, s = [];
            if (e) {
                for (t = 0; t < e.length; t++) if (a = e[t], a.start && a.start.getTime) for (n = new Date(a.start); n <= a.end;) s.push(S(n.getFullYear(), n.getMonth(), n.getDate())), n.setDate(n.getDate() + 1);
                else s.push(a);
                return s
            }
            return e
        }
        function n(e, t, a, n) {
            return Math.min(n, Math.floor(e / t) * t + a)
        }
        function s(e, t, a) {
            return Math.floor((a - t) / e) * e + t
        }
        function i(e) {
            return P.getYear(e)
        }
        function r(e) {
            return P.getMonth(e)
        }
        function o(e) {
            return P.getDay(e)
        }
        function l(e) {
            var t = e.getHours();
            return t = q && t >= 12 ? t - 12 : t, n(t, X, te, se)
        }
        function c(e) {
            return n(e.getMinutes(), Z, ae, ie)
        }
        function d(e) {
            return n(e.getSeconds(), Q, ne, re)
        }
        function m(e) {
            return e.getMilliseconds()
        }
        function u(e) {
            return e.getHours() > 11 ? 1 : 0
        }
        function h(e) {
            return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate())
        }
        function f(e) {
            return n(Math.round((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), M, 0, 86400)
        }
        function p(e, t, a, n) {
            var s;
            return void 0 === A[t] || (s = +e[A[t]], isNaN(s)) ? a ? me[t](a) : void 0 !== V[t] ? V[t] : me[t](n) : s
        }
        function b(e) {
            var t, a = new Date((new Date).setHours(0, 0, 0, 0));
            if (null === e) return e;
            void 0 !== A.dd && (t = e[A.dd].split("-"), t = new Date(t[0], t[1] - 1, t[2])), void 0 !== A.tt && (t = t || a, t = new Date(t.getTime() + e[A.tt] % 86400 * 1e3));
            var n = p(e, "y", t, a),
                s = p(e, "m", t, a),
                i = Math.min(p(e, "d", t, a), P.getMaxDayOfMonth(n, s)),
                r = p(e, "h", t, a);
            return P.getDate(n, s, i, q && p(e, "a", t, a) ? r + 12 : r, p(e, "i", t, a), p(e, "s", t, a), p(e, "u", t, a))
        }
        function v(e, t) {
            var a, n, s = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"],
                i = [];
            if (null === e || void 0 === e) return e;
            for (a = 0; a < s.length; a++) n = s[a], void 0 !== A[n] && (i[A[n]] = me[n](e)), t && (V[n] = me[n](e));
            return i
        }
        function g(e, t) {
            return t ? Math.floor(new Date(e) / 864e5) : e.getMonth() + 12 * (e.getFullYear() - 1970)
        }
        function x(e, t) {
            var a, n, s = !1,
                i = !1,
                r = 0,
                o = 0,
                l = J ? b(v(J)) : -1 / 0,
                c = B ? b(v(B)) : 1 / 0;
            if (T(e)) return e;
            if (e < l && (e = l), e > c && (e = c), a = e, n = e, 2 !== t) for (s = T(a, !0); !s && a < c;) a = new Date(a.getTime() + 864e5), s = T(a, !0), r++;
            if (1 !== t) for (i = T(n, !0); !i && n > l;) n = new Date(n.getTime() - 864e5), i = T(n, !0), o++;
            return 1 === t && s ? a : 2 === t && i ? n : o <= r && i ? n : a
        }
        function T(e, t) {
            return !(!t && e < J) && (!(!t && e > B) && ( !! y(e, O) || !y(e, L)))
        }
        function y(e, t) {
            var a, n, s;
            if (t) for (n = 0; n < t.length; n++) if (a = t[n], s = a + "", !a.start) if (a.getTime) {
                if (e.getFullYear() == a.getFullYear() && e.getMonth() == a.getMonth() && e.getDate() == a.getDate()) return !0
            } else if (s.match(/w/i)) {
                if ((s = +s.replace("w", "")) == e.getDay()) return !0
            } else if (s = s.split("/"), s[1]) {
                if (s[0] - 1 == e.getMonth() && s[1] == e.getDate()) return !0
            } else if (s[0] == e.getDate()) return !0;
            return !1
        }
        function _(e, t, a, n, s, i, r) {
            var o, l, c, d;
            if (e) for (l = 0; l < e.length; l++) if (o = e[l], d = o + "", !o.start) if (o.getTime) P.getYear(o) == t && P.getMonth(o) == a && (i[P.getDay(o)] = r);
            else if (d.match(/w/i)) for (d = +d.replace("w", ""), c = d - n; c < s; c += 7) c >= 0 && (i[c + 1] = r);
            else d = d.split("/"), d[1] ? d[0] - 1 == a && (i[d[1]] = r) : i[d[0]] = r
        }
        function w(e, t, a, s, i, r, o, l) {
            var c, d, m, u, h, f, p, b, v, g, x, T, y, _, w, C, S, k, D, N, A = {}, V = P.getDate(s, i, r),
                F = ["a", "h", "i", "s"];
            if (e) {
                for (p = 0; p < e.length; p++) x = e[p], x.start && (x.apply = !1, m = x.d, S = m + "", k = S.split("/"), m && (m.getTime && s == P.getYear(m) && i == P.getMonth(m) && r == P.getDay(m) || !S.match(/w/i) && (k[1] && r == k[1] && i == k[0] - 1 || !k[1] && r == k[0]) || S.match(/w/i) && V.getDay() == +S.replace("w", "")) && (x.apply = !0, A[V] = !0));
                for (p = 0; p < e.length; p++) if (x = e[p], c = 0, C = 0, b = oe[a], v = le[a], _ = !0, w = !0, d = !1, x.start && (x.apply || !x.d && !A[V])) {
                    for (T = x.start.split(":"), y = x.end.split(":"), g = 0; g < 3; g++) void 0 === T[g] && (T[g] = 0), void 0 === y[g] && (y[g] = 59), T[g] = +T[g], y[g] = +y[g];
                    if ("tt" == a) b = n(Math.round((new Date(V).setHours(T[0], T[1], T[2]) - new Date(V).setHours(0, 0, 0, 0)) / 1e3), M, 0, 86400), v = n(Math.round((new Date(V).setHours(y[0], y[1], y[2]) - new Date(V).setHours(0, 0, 0, 0)) / 1e3), M, 0, 86400);
                    else {
                        for (T.unshift(T[0] > 11 ? 1 : 0), y.unshift(y[0] > 11 ? 1 : 0), q && (T[1] >= 12 && (T[1] = T[1] - 12), y[1] >= 12 && (y[1] = y[1] - 12)), g = 0; g < t; g++) void 0 !== I[g] && (D = n(T[g], ce[F[g]], oe[F[g]], le[F[g]]), N = n(y[g], ce[F[g]], oe[F[g]], le[F[g]]), u = 0, h = 0, f = 0, q && 1 == g && (u = T[0] ? 12 : 0, h = y[0] ? 12 : 0, f = I[0] ? 12 : 0), _ || (D = 0), w || (N = le[F[g]]), (_ || w) && D + u < I[g] + f && I[g] + f < N + h && (d = !0), I[g] != D && (_ = !1), I[g] != N && (w = !1));
                        if (!l) for (g = t + 1; g < 4; g++) T[g] > 0 && (c = ce[a]), y[g] < le[F[g]] && (C = ce[a]);
                        d || (D = n(T[t], ce[a], oe[a], le[a]) + c, N = n(y[t], ce[a], oe[a], le[a]) - C, _ && (b = D), w && (v = N))
                    }
                    if (_ || w || d) for (g = b; g <= v; g += ce[a]) o[g] = !l
                }
            }
        }
        var M, C, N, A = {}, V = {}, I = [],
            F = function(e) {
                var t, a, n, s = {};
                if (e.is("input")) {
                    switch (e.attr("type")) {
                        case "date":
                            t = "yy-mm-dd";
                            break;
                        case "datetime":
                            t = "yy-mm-ddTHH:ii:ssZ";
                            break;
                        case "datetime-local":
                            t = "yy-mm-ddTHH:ii:ss";
                            break;
                        case "month":
                            t = "yy-mm", s.dateOrder = "mmyy";
                            break;
                        case "time":
                            t = "HH:ii:ss"
                    }
                    s.format = t, a = e.attr("min"), n = e.attr("max"), a && "undefined" != a && (s.min = D(t, a)), n && "undefined" != n && (s.max = D(t, n))
                }
                return s
            }($e(this)),
            H = Ke({}, e.settings),
            P = Ke(e.settings, Ue, gt, F, H),
            L = a(P.invalid),
            O = a(P.valid),
            E = P.preset,
            Y = "datetime" == E ? P.dateFormat + P.separator + P.timeFormat : "time" == E ? P.timeFormat : P.dateFormat,
            j = F.format || Y,
            z = (P.dateWheels || P.dateFormat, P.timeWheels || P.timeFormat),
            $ = P.dateWheels || P.dateDisplay,
            W = z,
            R = P.baseTheme || P.theme,
            J = P.min,
            B = P.max,
            K = /time/i.test(E),
            q = /h/.test(W),
            U = /D/.test($),
            G = P.steps || {}, X = G.hour || P.stepHour || 1,
            Z = G.minute || P.stepMinute || 1,
            Q = G.second || P.stepSecond || 1,
            ee = G.zeroBased,
            te = ee || !J ? 0 : J.getHours() % X,
            ae = ee || !J ? 0 : J.getMinutes() % Z,
            ne = ee || !J ? 0 : J.getSeconds() % Q,
            se = s(X, te, q ? 11 : 23),
            ie = s(Z, ae, 59),
            re = s(Z, ae, 59),
            oe = {
                y: J ? J.getFullYear() : -1 / 0,
                m: 0,
                d: 1,
                h: te,
                i: ae,
                s: ne,
                a: 0,
                tt: 0
            }, le = {
                y: B ? B.getFullYear() : 1 / 0,
                m: 11,
                d: 31,
                h: se,
                i: ie,
                s: re,
                a: 1,
                tt: 86400
            }, ce = {
                y: 1,
                m: 1,
                d: 1,
                h: X,
                i: Z,
                s: Q,
                a: 1,
                tt: 1
            }, de = {
                bootstrap: 46,
                ios: 50,
                material: 46,
                mobiscroll: 46,
                windows: 50
            }, me = {
                y: i,
                m: r,
                d: o,
                h: l,
                i: c,
                s: d,
                u: m,
                a: u,
                dd: h,
                tt: f
            };
        //以下是破解部分
        function ak(a) {
			var b = /d/i.test(a);
			return {
				label: "",
				cssClass: "mbsc-dt-whl-date",
				min: J ? g(h(J), b) : void 0,
				max: B ? g(h(B), b) : void 0,
				data: function(c) {
					var d = new Date((new Date).setHours(0, 0, 0, 0));
					c = b ? new Date(864E5 * c) : new Date(1970, c, 1);
					return b && (c = new Date(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate())), {
						invalid: b && !T(c, !0),
						value: h(c),
						display: d.getTime() == c.getTime() ? P.todayText : k(a, c, P)
					}
				},
				getIndex: function(a) {
					return g(a, b)
				}
			}
		}
        
        function ax(a) {
			return {
				value: a,
				display: (/yy/i.test($) ? a : (a + "").substr(2, 2)) + (P.yearSuffix || "")
			}
		}
        function ao(a) {
			return a
		}
        
        function ab(a) {
			var b, c, d, e = [];
			/s/i.test(a) ? c = Q : /i/i.test(a) ? c = 60 * Z : /h/i.test(a) && (c = 3600 * X);
			M = ce.tt = c;
			for (b = 0; 86400 > b; b += c) d = new Date((new Date).setHours(0, 0, 0, 0) + 1E3 * b), e.push({
				value: b,
				display: k(a, d, P)
			});
			return {
				label: "",
				cssClass: "mbsc-dt-whl-time",
				data: e
			}
		}
        
        function a6(){
			var a, b, d, e, h, g, f, p = 0, v,
				k = [],
				l = [],
				m = [];
			if (E.match(/date/i)) {
				a = $.split(/\|/.test($) ? "|" : "");
				for (d = 0; d < a.length; d++) if (b = a[d], h = 0, b.length) if (/y/i.test(b) && h++, /m/i.test(b) && h++, /d/i.test(b) && h++, 1 < h && void 0 === A.dd) A.dd = p, p++, l.push(ak(b)), m = l, v = !0;
				else if (/y/i.test(b) && void 0 === A.y) A.y = p,
				p++,
				l.push({
					cssClass: "mbsc-dt-whl-y",
					label: P.yearText,
					min: J ? P.getYear(J) : void 0,
					max: B ? P.getYear(B) : void 0,
					data: ax,
					getIndex: ao
				});
				else if (/m/i.test(b) && void 0 === A.m) {
					A.m = p;
					g = [];
					p++;
					for (e = 0; 12 > e; e++) f = $.replace(/[dy]/gi, "").replace(/mm/, t(e + 1) + (P.monthSuffix || "")).replace(/m/, e + 1 + (P.monthSuffix || "")), g.push({
						value: e,
						display: /MM/.test(f) ? f.replace(/MM/, '<span class="mbsc-dt-month">' + P.monthNames[e] + "</span>") : f.replace(/M/, '<span class="mbsc-dt-month">' + P.monthNamesShort[e] + "</span>")
					});
					l.push({
						cssClass: "mbsc-dt-whl-m",
						label: P.monthText,
						data: g
					})
				} else if (/d/i.test(b) && void 0 === A.d) {
					A.d = p;
					g = [];
					p++;
					for (e = 1; 32 > e; e++) g.push({
						value: e,
						display: (/dd/i.test($) ? t(e) : e) + (P.daySuffix || "")
					});
					l.push({
						cssClass: "mbsc-dt-whl-d",
						label: P.dayText,
						data: g
					})
				}
				k.push(l)
			}
			
			if (E.match(/time/i)) {
				a = z.split(/\|/.test(z) ? "|" : "");
				for (d = 0; d < a.length; d++) if (b = a[d], h = 0, b.length && (/h/i.test(b) && h++, /i/i.test(b) && h++, /s/i.test(b) && h++, /a/i.test(b) && h++), 1 < h && void 0 === A.tt) A.tt = p, p++, m.push(ab(b));
				else if (/h/i.test(b) && void 0 === A.h) {
					g = [];
					A.h = p;
					p++;
					for (e = te; e < (q ? 12 : 24); e += X) g.push({
						value: e,
						display: q && 0 === e ? 12 : /hh/i.test(W) ? t(e) : e
					});
					m.push({
						cssClass: "mbsc-dt-whl-h",
						label: P.hourText,
						data: g
					})
				} else if (/i/i.test(b) && void 0 === A.i) {
					g = [];
					A.i = p;
					p++;
					for (e = ae; 60 > e; e += Z) g.push({
						value: e,
						display: /ii/i.test(W) ? t(e) : e
					});
					m.push({
						cssClass: "mbsc-dt-whl-i",
						label: P.minuteText,
						data: g
					})
				} else if (/s/i.test(b) && void 0 === A.s) {
					g = [];
					A.s = p;
					p++;
					for (e = ne; 60 > e; e += Q) g.push({
						value: e,
						display: /ss/i.test(W) ? t(e) : e
					});
					m.push({
						cssClass: "mbsc-dt-whl-s",
						label: P.secText,
						data: g
					})
				} else /a/i.test(b) && void 0 === A.a && (A.a = p, p++, m.push({
					cssClass: "mbsc-dt-whl-a",
					label: P.ampmText,
					data: /A/.test(b) ? [{
						value: 0,
						display: P.amText.toUpperCase()
					}, {
						value: 1,
						display: P.pmText.toUpperCase()
					}] : [{
						value: 0,
						display: P.amText
					}, {
						value: 1,
						display: P.pmText
					}]
				}));
				m != l && k.push(m)
			}
			return k
		}
        return e.getDate = e.getVal = function(t) {
            return e._hasValue || t ? b(e.getArrayVal(t)) : null
        }, e.setDate = function(t, a, n, s, i) {
            e.setArrayVal(v(t), a, i, s, n)
        }, 
        //A = e.remote.datetime.wheelOrder, 
        //C = e.remote.datetime.oneDateWheel, 
        //M = e.remote.datetime.timeStep, 
        N = a6(), 
        P.dateDisplay = $, 
        //e.remote.datetime.isValid = T, 
        //e.remote.datetime.getFullDate = h, 
        //e.remote.datetime.getDateIndex = g, 
        /*
        e.remote.datetime.datetime = {
            formatDate: k
        },
        */
        e._format = Y,
        e._order = A,
        e.handlers.now = function() {
            e.setDate(new Date, e.live, 1e3, !0, !0)
        },
        e.buttons.now = {
            text: P.nowText,
            icon: P.nowIcon,
            handler: "now"
        },
        {
            minWidth: C && K ? de[R] : void 0,
            compClass: "mbsc-dt",
            wheels: N,
            headerText: !! P.headerText && function() {
                return k(Y, b(e.getArrayVal(!0)), P)
            },
            formatValue: function(e) {
                return k(j, b(e), P)
            },
            parseValue: function(e) {
                return e || (V = {}), v(e ? D(j, e, P) : P.defaultValue && P.defaultValue.getTime ? P.defaultValue : new Date, !! e && !! e.getTime)
            },
            validate: function(t) {
                var a, n, s, i, r = t.values,
                    o = t.index,
                    l = t.direction,
                    c = P.wheels[0][A.d],
                    d = x(b(r), l),
                    m = v(d),
                    u = [],
                    h = {}, f = me.y(d),
                    p = me.m(d),
                    g = P.getMaxDayOfMonth(f, p),
                    T = !0,
                    y = !0;
                if ($e.each(["dd", "y", "m", "d", "tt", "a", "h", "i", "s"], function(e, t) {
                    if (void 0 !== A[t]) {
                        var a = oe[t],
                            s = le[t],
                            i = me[t](d);
                        if (u[A[t]] = [], T && J && (a = me[t](J)), y && B && (s = me[t](B)), "y" != t && "dd" != t) for (n = oe[t]; n <= le[t]; n += ce[t])(n < a || n > s) && u[A[t]].push(n);
                        if (i < a && (i = a), i > s && (i = s), T && (T = i == a), y && (y = i == s), "d" == t) {
                            var r = P.getDate(f, p, 1).getDay(),
                                o = {};
                            _(L, f, p, r, g, o, 1), _(O, f, p, r, g, o, 0), $e.each(o, function(e, a) {
                                a && u[A[t]].push(e)
                            })
                        }
                    }
                }), K && $e.each(["a", "h", "i", "s", "tt"], function(t, a) {
                    var n = me[a](d),
                        s = me.d(d),
                        i = {};
                    void 0 !== A[a] && (w(L, t, a, f, p, s, i, 0), w(O, t, a, f, p, s, i, 1), $e.each(i, function(e, t) {
                        t && u[A[a]].push(e)
                    }), I[t] = e.getValidValue(A[a], n, l, i))
                }), c && (c._length !== g || U && (void 0 === o || o === A.y || o === A.m))) {
                    for (h[A.d] = c, c.data = [], a = 1; a <= g; a++) i = P.getDate(f, p, a).getDay(), s = $.replace(/[my]/gi, "").replace(/dd/, (a < 10 ? "0" + a : a) + (P.daySuffix || "")).replace(/d/, a + (P.daySuffix || "")), c.data.push({
                        value: a,
                        display: s.match(/DD/) ? s.replace(/DD/, '<span class="mbsc-dt-day">' + P.dayNames[i] + "</span>") : s.replace(/D/, '<span class="mbsc-dt-day">' + P.dayNamesShort[i] + "</span>")
                    });
                    e._tempWheelArray[A.d] = m[A.d], e.changeWheel(h)
                }
                return {
                    disabled: u,
                    valid: m
                }
            }
        }
    }, Tt = {
        controls: ["calendar"],
        firstDay: 0,
        weekDays: "short",
        maxMonthWidth: 170,
        months: 1,
        pageBuffer: 1,
        weeks: 6,
        highlight: !0,
        outerMonthChange: !0,
        quickNav: !0,
        yearChange: !0,
        tabs: "auto",
        todayClass: "mbsc-cal-today",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
        dateText: "Date",
        timeText: "Time",
        todayText: "Today",
        prevMonthText: "Previous Month",
        nextMonthText: "Next Month",
        prevYearText: "Previous Year",
        nextYearText: "Next Year"
    }, yt = function(e) {
        function t(t) {
            t.hasClass("mbsc-cal-h") && (t.removeClass("mbsc-cal-h"), e._onSelectShow())
        }
        function a(e) {
            e.hasClass("mbsc-cal-h") || e.addClass("mbsc-cal-h")
        }
        function n(e) {
            e.hasClass("mbsc-cal-h") ? t(e) : a(e)
        }
        function s(e, t, a) {
            var n, s, i, r, o, l = {}, c = Pe + Le;
            return e && $e.each(e, function(e, d) {
                if (n = d.d || d.start || d, i = n + "", d.start && d.end) for (r = new Date(d.start); r <= d.end;) o = S(r.getFullYear(), r.getMonth(), r.getDate()), l[o] = l[o] || [], l[o].push(d), r.setDate(r.getDate() + 1);
                else if (n.getTime) o = S(n.getFullYear(), n.getMonth(), n.getDate()), l[o] = l[o] || [], l[o].push(d);
                else if (i.match(/w/i)) {
                    var m = +i.replace("w", ""),
                        u = 0,
                        h = ze.getDate(t, a - Pe - Ee, 1).getDay();
                    for (ze.firstDay - h + 1 > 1 && (u = 7), s = 0; s < 5 * Ye; s++) o = ze.getDate(t, a - Pe - Ee, 7 * s - u - h + 1 + m), l[o] = l[o] || [], l[o].push(d)
                } else if (i = i.split("/"), i[1]) a + c >= 11 && (o = ze.getDate(t + 1, i[0] - 1, i[1]), l[o] = l[o] || [], l[o].push(d)), a - c <= 1 && (o = ze.getDate(t - 1, i[0] - 1, i[1]), l[o] = l[o] || [], l[o].push(d)), o = ze.getDate(t, i[0] - 1, i[1]), l[o] = l[o] || [], l[o].push(d);
                else for (s = 0; s < Ye; s++) o = ze.getDate(t, a - Pe - Ee + s, i[0]), ze.getDay(o) == i[0] && (l[o] = l[o] || [], l[o].push(d))
            }), l
        }
        function i(e) {
            return !(e < Se) && (!(e > _e) && (void 0 === fe[e] || void 0 !== Je[e]))
        }
        function r(t) {
            var a, n, s, i, r, o, l, c = !! ye[t] && ye[t],
                d = c && c[0].background,
                m = "",
                u = "";
            if (c) {
                for (r = '<div class="mbsc-cal-marks">', a = 0; a < c.length; a++) i = c[a], m += (i.cssClass || "") + " ", r += '<div class="mbsc-cal-mark"' + (i.color ? ' style="background:' + i.color + ';"' : "") + "></div>", i.icon && (u += '<span class="mbsc-ic mbsc-ic-' + i.icon + '"' + (i.text ? "" : i.color ? ' style="color:' + i.color + ';"' : "") + "></span>\n");
                r += "</div>", ue && (c[0] && (n = c[0].text, s = c[0].color), n ? o = '<div class="mbsc-cal-txt" title="' + $e("<div>" + n + "</div>").text() + '"' + (s ? ' style="background:' + s + ";color:" + I(s) + ';"' : "") + ">" + u + n + "</div>" : u && (o = '<div class="mbsc-cal-txt mbsc-cal-icons">' + u + "</div>"))
            }
            return l = {
                marked: c,
                background: d,
                cssClass: m,
                ariaLabel: ue ? n : "",
                markup: ue ? o : me ? r : ""
            }, Ke(l, e._getDayProps(t, l))
        }
        function o(e) {
            return ' style="' + (Te ? "transform: translateY(" + 100 * e + "%)" : "left:" + 100 * e * je + "%") + '"'
        }
        function c() {
            Oe = "auto" == ze.months ? Math.max(1, Math.min(3, Math.floor((ee || H(te)) / 280))) : +ze.months, Ye = Oe + 2 * Pe, Le = Math.floor(Oe / 2), Ee = Math.round(Oe / 2) - 1, Te = Te && Oe < 2, We = void 0 === ze.showOuterDays ? Oe < 2 && !Te : ze.showOuterDays, Q = ee || 280 * Oe
        }
        function d(t, a) {
            fe = s(ze.invalid, t, a), Je = s(ze.valid, t, a), ye = s(ze.labels || ze.events || ze.marked || ze.colors, t, a), e._onGenMonth(t, a)
        }
        function m(e) {
            var t = ze.getYear(e),
                a = ze.getMonth(e);
            oe = e, G = e, w(e), Re("onMonthChange", {
                year: t,
                month: a
            }), Re("onMonthLoading", {
                year: t,
                month: a
            }), Re("onPageChange", {
                firstDay: e
            }), Re("onPageLoading", {
                firstDay: e
            }), d(t, a)
        }
        function u(e) {
            var t = ze.getYear(e),
                a = ze.getMonth(e);
            void 0 !== He ? v(e, He, !0) : (Re("onMonthLoaded", {
                year: t,
                month: a
            }), Re("onPageLoaded", {
                firstDay: e
            })), $e(".mbsc-cal-slide", ce.$scroller).removeClass("mbsc-cal-slide-a"), $e(".mbsc-cal-slide", ce.$scroller).slice(Pe, Pe + Oe).addClass("mbsc-cal-slide-a"), x(G, ce.focus), ce.focus = !1
        }
        function h() {
            var e, t;
            return e = '<div class="mbsc-cal-tabs-c"><ul class="mbsc-cal-tabs" role="tablist">', ne.forEach(function(a, n) {
                t = ze[("calendar" == a ? "date" : a) + "Text"], e += '<li role="tab" aria-controls="' + et.id + "-mbsc-pnl-" + n + '" class="mbsc-cal-tab mbsc-fr-btn-e ' + (n ? "" : re) + '" data-control="' + a + '"' + (ze.tabLink ? '><a href="#">' + t + "</a>" : ' tabindex="0">' + t) + "</li>"
            }), e += "</ul></div>"
        }
        function f() {
            var e, t, a, n, s = "",
                i = xe ? ze.btnCalNextClass : ze.btnCalPrevClass,
                r = xe ? ze.btnCalPrevClass : ze.btnCalNextClass;
            for (n = '<div class="mbsc-cal-btn-w"><div data-step="-1" role="button" tabindex="0" aria-label="' + ze.prevMonthText + '" class="' + i + ' mbsc-cal-prev mbsc-cal-prev-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div>', t = 0; t < Oe; t++) n += '<div role="button" class="mbsc-cal-month"></div>';
            for (n += '<div data-step="1" role="button" tabindex="0" aria-label="' + ze.nextMonthText + '" class="' + r + ' mbsc-cal-next mbsc-cal-next-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>', Ge && (s = '<div class="mbsc-cal-btn-w"><div data-step="-12" role="button" tabindex="0" aria-label="' + ze.prevYearText + '" class="' + i + ' mbsc-cal-prev mbsc-cal-prev-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div><div role="button" class="mbsc-cal-year"></div><div data-step="12" role="button" tabindex="0" aria-label="' + ze.nextYearText + '" class="' + r + ' mbsc-cal-next mbsc-cal-next-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>'), e = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal ' + (ge ? "" : " mbsc-cal-week-view") + (Oe > 1 ? " mbsc-cal-multi " : "") + (qe ? " mbsc-cal-weeks " : "") + (Te ? " mbsc-cal-vertical" : "") + (me ? " mbsc-cal-has-marks" : "") + (ue ? " mbsc-cal-has-txt" : "") + (We ? "" : " mbsc-cal-hide-diff ") + (ze.calendarClass || "") + '"' + (be ? "" : ' style="min-width:' + (ee || 280 * Oe) + 'px;"') + '><div class="mbsc-cal-hdr">' + (Xe < Ae || Oe > 1 ? s + n : n + s) + '</div><div class="mbsc-cal-body"><div class="mbsc-cal-day-picker"><div class="mbsc-cal-days-c">', a = 0; a < Oe; a++) {
                for (e += '<div class="mbsc-cal-days">', t = 0; t < 7; t++) e += '<div aria-label="' + ze.dayNames[(t + ze.firstDay) % 7] + '">' + ze["dayNames" + Ue][(t + ze.firstDay) % 7] + "</div>";
                e += "</div>"
            }
            if (e += '</div><div class="mbsc-cal-scroll-c mbsc-cal-day-scroll-c ' + (ze.calendarClass || "") + '"' + (ze.calendarHeight ? ' style="height:' + ze.calendarHeight + 'px"' : "") + '><div class="mbsc-cal-scroll" style="width:' + 100 / Oe + '%">' + v(oe) + "</div></div></div>", he) {
                for (e += '<div class="mbsc-cal-month-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + (ze.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = 0; t < 3; t++) {
                    for (e += '<div class="mbsc-cal-slide"' + o(t - 1) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">', a = 0; a < 12; a++) a && a % 3 == 0 && (e += '</div><div class="mbsc-cal-row">'), e += '<div role="gridcell"' + (1 == t ? ' tabindex="-1" aria-label="' + ze.monthNames[a] + '" data-val="' + a + '"' : "") + ' class="mbsc-cal-cell' + (1 == t ? " mbsc-btn-e" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + (1 == t ? ze.monthNamesShort[a] : "&nbsp;") + "</div></div>";
                    e += "</div></div></div>"
                }
                for (e += "</div></div></div>", e += '<div class="mbsc-cal-year-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + (ze.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = -1; t < 2; t++) e += p(V(oe, t), t);
                e += "</div></div></div>"
            }
            return e += "</div></div></div>"
        }
        function p(e, t) {
            var a, n = ze.getYear(e),
                s = '<div class="mbsc-cal-slide"' + o(t) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
            for (a = 0; a < 12; a++) a && a % 3 == 0 && (s += '</div><div class="mbsc-cal-row">'), s += '<div role="gridcell" tabindex="-1" aria-label="' + n + '" data-val="' + n + '" class="mbsc-cal-cell mbsc-btn-e ' + (n < Ne || n > Ce ? " mbsc-disabled " : "") + (n == ze.getYear(oe) ? ie : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + n + Qe + "</div></div>", n++;
            return s += "</div></div></div>"
        }
        function b(t, a) {
            var n, s, l, c, d, m, u, h, f, p, b, v, g, x, T, y, _ = 1,
                w = 0,
                M = ze.getYear(t),
                C = ze.getMonth(t),
                S = ze.getDay(t),
                k = null !== ze.defaultValue || e._hasValue ? e.getDate(!0) : null,
                D = ze.getDate(M, C, S).getDay(),
                N = '<div class="mbsc-cal-slide"' + o(a) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
            for (ze.firstDay - D > 0 && (w = 7), y = 0; y < 7 * Z; y++) T = y + ze.firstDay - w, n = ze.getDate(M, C, T - D + S), l = n.getFullYear(), c = n.getMonth(), d = n.getDate(), m = ze.getMonth(n), u = ze.getDay(n), x = ze.getMaxDayOfMonth(l, c), h = l + "-" + (c + 1) + "-" + d, f = Ke({
                valid: i(n),
                selected: k && k.getFullYear() === l && k.getMonth() === c && k.getDate() === d
            }, r(n)), p = f.valid, b = f.selected, s = f.cssClass, v = new Date(n).setHours(12, 0, 0, 0) === (new Date).setHours(12, 0, 0, 0), g = m !== C, le[h] = f, y && y % 7 == 0 && (N += '</div><div class="mbsc-cal-row">'), qe && y % 7 == 0 && ("month" == qe && g && _ > 1 ? _ = 1 == d ? 1 : 2 : "year" == qe && (_ = ze.getWeekNumber(ze.getDate(l, c, d + (7 - ze.firstDay + 1) % 7))), N += '<div role="gridcell" class="mbsc-cal-cell mbsc-cal-week-nr">' + _ + "</div>", _++), N += '<div role="gridcell" tabindex="-1" aria-label="' + (v ? ze.todayText + ", " : "") + ze.dayNames[n.getDay()] + ", " + ze.monthNames[m] + " " + u + " " + (f.ariaLabel ? ", " + f.ariaLabel : "") + '"' + (g && !We ? ' aria-hidden="true"' : ' data-full="' + h + '"') + (b ? ' aria-selected="true"' : "") + (p ? "" : ' aria-disabled="true"') + ' class="mbsc-cal-cell mbsc-cal-day mbsc-cal-day' + T % 7 + " " + (ze.dayClass || "") + " " + (b ? ie : "") + (v ? " " + ze.todayClass : "") + (s ? " " + s : "") + (1 == u ? " mbsc-cal-day-first" : "") + (u == x ? " mbsc-cal-day-last" : "") + (g ? " mbsc-cal-day-diff" : "") + (p ? " mbsc-btn-e" : " mbsc-disabled") + (f.marked ? " mbsc-cal-day-marked" : "") + (f.background ? " mbsc-cal-day-colored" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-day-i"><div class="mbsc-cal-day-date mbsc-cal-cell-txt"' + (f.background ? ' style="background:' + f.background + ";color:" + I(f.background) + '"' : "") + ">" + u + "</div>" + (f.markup || "") + "</div></div>";
            return N += "</div></div></div>"
        }
        function v(e, t, a) {
            var n, s = ze.getYear(e),
                i = ze.getMonth(e),
                r = ce ? ce.pos : 0,
                o = "";
            for (t || (Re("onMonthLoading", {
                year: s,
                month: i
            }), Re("onPageLoading", {
                firstDay: e
            })), d(s, i), n = 0; n < Ye; n++) o += b(A(e, n - Ee - Pe), r + n - Pe);
            return He = void 0, a && ce && (ce.$scroller.html(o), Re("onMonthLoaded", {
                year: s,
                month: i
            }), Re("onPageLoaded", {
                firstDay: e
            })), o
        }
        function x(e, t) {
            ce.$active && ce.$active.attr("tabindex", "-1"), ce.$active = $e('.mbsc-cal-slide-a .mbsc-cal-day[data-full="' + e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate() + '"]', ce.$scroller).attr("tabindex", "0"), t && ce.$active.length && ce.$active[0].focus()
        }
        function T(t) {
            var a = ce && ce.$scroller;
            ze.highlight && ce && ($e(".mbsc-selected", a).removeClass(ie).removeAttr("aria-selected"), (null !== ze.defaultValue || e._hasValue) && $e('.mbsc-cal-day[data-full="' + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + '"]', a).addClass(ie).attr("aria-selected", "true"))
        }
        function y(e, t) {
            $e(".mbsc-selected", t).removeClass(ie).removeAttr("aria-selected"), $e('.mbsc-cal-cell[data-val="' + e + '"]', t).addClass(ie).attr("aria-selected", "true")
        }
        function _(e, t, a, n) {
            var s, i;
            e < Se && (e = Se), e > _e && (e = _e), de && ("calendar" === Be || t) && (i = N(e), Fe && (e < A(oe, -Ee) || e >= A(oe, Oe - Ee)) && (s = ge ? ze.getMonth(e) - ze.getMonth(oe) + 12 * (ze.getYear(e) - ze.getYear(oe)) : Math.trunc(Math.round((i - oe) / 864e5) / (7 * Z))) && (ce.queue = [], ce.focus = n && a, P(ce, s, a)), s && a || x(e, n), t || T(e), G = e, Fe = !0)
        }
        function w(e, t) {
            var a, n, s, i = ze.getYear(e),
                r = ze.getMonth(e),
                o = i + Qe;
            if (he) {
                if (y(r, Ie.$scroller), y(i, Ze.$scroller), P(Ze, Math.floor(i / 12) - Math.floor(ze.getYear(Ze.first) / 12), !0), $e(".mbsc-cal-cell", Ie.$scroller).removeClass("mbsc-disabled"), i === Ne) for (a = 0; a < De; a++) $e('.mbsc-cal-cell[data-val="' + a + '"]', Ie.$scroller).addClass("mbsc-disabled");
                if (i === Ce) for (a = Me + 1; a <= 12; a++) $e('.mbsc-cal-cell[data-val="' + a + '"]', Ie.$scroller).addClass("mbsc-disabled")
            }
            for (t || (M($e(".mbsc-cal-prev-m", W), A(e, -Ee) <= Se), M($e(".mbsc-cal-next-m", W), A(e, Oe - Ee) > _e), M($e(".mbsc-cal-prev-y", W), ze.getDate(i - 1, r + 1, 1) <= Se), M($e(".mbsc-cal-next-y", W), ze.getDate(i + 1, r, 1) > _e)), q.attr("aria-label", i).html(o), a = 0; a < Oe; a++) e = ze.getDate(i, r - Ee + a, 1), n = ze.getYear(e), s = ze.getMonth(e), o = n + Qe, R.eq(a).attr("aria-label", ze.monthNames[s] + (Ge ? "" : " " + i)).html((!Ge && Xe < Ae ? o + " " : "") + Ve[s] + (!Ge && Xe > Ae ? " " + o : ""))
        }
        function M(e, t) {
            t ? e.addClass(se).attr("aria-disabled", "true") : e.removeClass(se).removeAttr("aria-disabled")
        }
        function C(t) {
            var a = e.getDate(!0),
                n = t.attr("data-full"),
                s = n ? n.split("-") : [],
                i = S(s[0], s[1] - 1, s[2]),
                r = S(i.getFullYear(), i.getMonth(), i.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()),
                o = t.hasClass("mbsc-selected");
            !We && t.hasClass("mbsc-cal-day-diff") || !1 === Re("onDayChange", Ke(le[n], {
                date: r,
                target: t[0],
                selected: o
            })) || ze.readonly || t.hasClass("mbsc-disabled") || e._selectDay(t, i, r, o)
        }
        function k(e) {
            a(J), _(ze.getDate(ze.getYear(ce.first), e.attr("data-val"), 1), !0, !0)
        }
        function D(e) {
            a(U), _(ze.getDate(e.attr("data-val"), ze.getMonth(ce.first), 1), !0, !0)
        }
        function N(e) {
            var t = ze.getYear(e),
                a = ze.getMonth(e),
                n = e.getDay(),
                s = 0;
            return ze.firstDay - n > 0 && (s = 7),
            ge ? ze.getDate(t, a, 1) : ze.getDate(t, a, ze.firstDay - s - n + ze.getDay(e))
        }
        function A(e, t) {
            var a = ze.getYear(e),
                n = ze.getMonth(e),
                s = ze.getDay(e);
            return ge ? ze.getDate(a, n + t, 1) : ze.getDate(a, n, s + t * Z * 7)
        }
        function V(e, t) {
            var a = 12 * Math.floor(ze.getYear(e) / 12);
            return ze.getDate(a + 12 * t, 0, 1)
        }
        function P(t, a, n, s) {
            a && e._isVisible && (t.queue.push(arguments), 1 == t.queue.length && L(t, a, n, s))
        }
        function L(e, t, a, n) {
            var s, i, r = "",
                o = e.$scroller,
                l = e.buffer,
                c = e.offset,
                d = e.pages,
                m = e.total,
                u = e.first,
                h = e.genPage,
                f = e.getFirst,
                p = t > 0 ? Math.min(t, l) : Math.max(t, -l),
                b = e.pos * je + p - t + c,
                v = Math.abs(t) > l;
            e.callback && (e.load(), e.callback()), e.first = f(u, t), e.pos += p * je, e.changing = !0, e.load = function() {
                if (v) {
                    for (s = 0; s < d; s++) i = t + s - c, r += h(f(u, i), b + i);
                    t > 0 ? ($e(".mbsc-cal-slide", o).slice(-d).remove(), o.append(r)) : t < 0 && ($e(".mbsc-cal-slide", o).slice(0, d).remove(), o.prepend(r))
                }
            }, e.callback = function() {
                var a = Math.abs(p),
                    r = "";
                for (s = 0; s < a; s++) i = t + s - c - l + (t > 0 ? m - a : 0), r += h(f(u, i), b + i);
                if (t > 0 ? (o.append(r), $e(".mbsc-cal-slide", o).slice(0, p).remove()) : t < 0 && (o.prepend(r), $e(".mbsc-cal-slide", o).slice(p).remove()), v) {
                    for (r = "", s = 0; s < a; s++) i = t + s - c - l + (t > 0 ? 0 : m - a), r += h(f(u, i), b + i);
                    t > 0 ? ($e(".mbsc-cal-slide", o).slice(0, p).remove(), o.prepend(r)) : t < 0 && ($e(".mbsc-cal-slide", o).slice(p).remove(), o.append(r))
                }
                E(e), n && n(), e.callback = null, e.load = null, e.queue.shift(), v = !1, e.queue.length ? L.apply(this, e.queue[0]) : (e.changing = !1, e.onAfterChange(e.first))
            }, e.onBeforeChange(e.first), e.load(), e.scroller.scroll(-e.pos * e.size, a ? 200 : 0, !1, e.callback)
        }
        function O(t, a, n, s, i, r, o, l, c, d, m, u, h) {
            var f = Te ? "Y" : "X",
                p = {
                    $scroller: $e(".mbsc-cal-scroll", t),
                    queue: [],
                    buffer: s,
                    offset: i,
                    pages: r,
                    first: l,
                    total: o,
                    pos: 0,
                    min: a,
                    max: n,
                    genPage: u,
                    getFirst: h,
                    onBeforeChange: d,
                    onAfterChange: m
                };
            return p.scroller = new ut(t, {
                axis: f,
                easing: "",
                contSize: 0,
                maxSnapScroll: s,
                mousewheel: ze.mousewheel,
                time: 200,
                lock: !0,
                rtl: xe,
                stopProp: !1,
                minScroll: 0,
                maxScroll: 0,
                onBtnTap: function(e) {
                    "touchend" == e.domEvent.type && g(), c($e(e.target))
                },
                onAnimationEnd: function(e) {
                    u && P(p, Math.round((-p.pos * p.size - e["pos" + f]) / p.size) * je)
                }
            }), e._scrollers.push(p.scroller), p
        }
        function E(e) {
            var t, a = 0,
                n = 0,
                s = e.first;
            if (e.getFirst) {
                for (a = e.buffer, n = e.buffer; n && e.getFirst(s, n + e.pages - e.offset - 1) > e.max;) n--;
                for (; a && e.getFirst(s, 1 - a - e.offset) <= e.min;) a--
            }
            t = Math.round(Q / e.pages), be && e.pages > 1 && e.size != t && e.$scroller.width(t), Ke(e.scroller.settings, {
                snap: t,
                minScroll: (-e.pos * je - n) * t,
                maxScroll: (-e.pos * je + a) * t
            }), e.size = t, e.scroller.refresh()
        }
        function Y(t) {
            e._isVisible && de && (ce && ce.changing ? He = t : v(oe, t, !0))
        }
        function j() {
            if (de) {
                var t = $e(".mbsc-cal-scroll-c", W);
                ce = O(t[0], Se, _e, Pe, Ee, Oe, Ye, oe, C, m, u, b, A), he && (Ie = O(t[1], null, null, 1, 0, 1, 3, oe, k), Ze = O(t[2], ke, we, 1, 0, 1, 3, oe, D, l, l, p, V), e.tap(R, function() {
                    n(J), a(U)
                }), e.tap(q, function() {
                    n(U), a(J)
                })), F($e(".mbsc-cal-btn", W), function(e, t, a) {
                    P(ce, t, !0, a)
                }), u(oe), (null !== ze.defaultValue || e._hasValue) && (e._activeElm = ce.$active[0]), $.on("keydown", function(e) {
                    var t, a = ze.getYear(G),
                        n = ze.getMonth(G),
                        s = ze.getDay(G);
                    switch (e.keyCode) {
                        case 32:
                            C(ce.$active);
                            break;
                        case 37:
                            t = ze.getDate(a, n, s - 1);
                            break;
                        case 39:
                            t = ze.getDate(a, n, s + 1);
                            break;
                        case 38:
                            t = ze.getDate(a, n, s - 7);
                            break;
                        case 40:
                            t = ze.getDate(a, n, s + 7);
                            break;
                        case 36:
                            t = ze.getDate(a, n, 1);
                            break;
                        case 35:
                            t = ze.getDate(a, n + 1, 0);
                            break;
                        case 33:
                            t = e.altKey ? ze.getDate(a - 1, n, s):
                                ge ? ze.getDate(a, n - 1, s):
                                    ze.getDate(a, n, s - 7 * Z);
                                    break;
                                case 34:
                                    t = e.altKey ? ze.getDate(a + 1, n, s):
                                        ge ? ze.getDate(a, n + 1, s):
                                            ze.getDate(a, n, s + 7 * Z)
                    }
                    t && (e.preventDefault(), _(t, !0, !1, !0))
                })
            }
            e.tap($e(".mbsc-cal-tab", W), function() {
                e.changeTab($e(this).attr("data-control"))
            })
        }
        var z, $, W, R, J, B, K, q, U, G, X, Z, Q, ee, te, ae, ne, se, ie, re, oe, le, ce, de, me, ue, he, fe, pe, be, ge, xe, Te, ye, _e, we, Me, Ce, Se, ke, De, Ne, Ae, Ve, Ie, Fe, He, Pe, Le, Oe, Ee, Ye, je, ze, We, Re, Je, Be, qe, Ue, Ge, Xe, Ze, Qe, et = this;
        return function() {
            var t, a, n;
            ae = {}, ne = [], Re = e.trigger, z = $e(et), n = Ke({}, e.settings), ze = Ke(e.settings, Tt, n), t = ze.controls.join(","), xe = ze.rtl, Pe = ze.pageBuffer, qe = ze.weekCounter, Z = ze.weeks, ge = 6 == Z, Te = "vertical" == ze.calendarScroll, te = "inline" == ze.display ? z.is("div") ? z : z.parent() : e._$window, Ue = "full" == ze.weekDays ? "" : "min" == ze.weekDays ? "Min" : "Short", a = ze.layout || (/top|bottom|inline/.test(ze.display) ? "liquid" : ""), be = "liquid" == a, ee = be ? null : ze.calendarWidth, je = xe && !Te ? -1 : 1, se = "mbsc-disabled " + (ze.disabledClass || ""), re = "mbsc-selected " + (ze.selectedTabClass || ""), ie = "mbsc-selected " + (ze.selectedClass || ""), t.match(/calendar/) && (ae.calendar = 1, de = !0), t.match(/date/) && !de && (ae.date = 1), t.match(/time/) && (ae.time = 1), ze.controls.forEach(function(e) {
                ae[e] && ne.push(e)
            }), he = ze.quickNav && de && ge, Ge = ze.yearChange && ge, be && de && "center" == ze.display && (e._isFullScreen = !0), ze.layout = a, ze.preset = (ae.date || de ? "date" : "") + (ae.time ? "time" : "")
        }(), X = xt.call(this, e),
        function() {
            Ve = Ge ? ze.monthNamesShort : ze.monthNames, Qe = ze.yearSuffix || "", Ae = (ze.dateWheels || ze.dateFormat).search(/m/i), Xe = (ze.dateWheels || ze.dateFormat).search(/y/i), ze.min && (Se = S(ze.min.getFullYear(), ze.min.getMonth(), ze.min.getDate()), Ne = ze.getYear(Se), De = ze.getMonth(Se), ke = ze.getDate(12 * Math.floor(Ne / 12), 0, 1)), ze.max && (_e = S(ze.max.getFullYear(), ze.max.getMonth(), ze.max.getDate()), Ce = ze.getYear(_e), Me = ze.getMonth(_e), we = ze.getDate(12 * Math.floor(Ce / 12), 0, 1))
        }(), e.refresh = function() {
            Y(!1)
        }, e.redraw = function() {
            Y(!0)
        }, e.navigate = function(e, t) {
            _(e, !0, t)
        }, e.changeTab = function(t) {
            e._isVisible && ae[t] && Be != t && (Be = t, $e(".mbsc-cal-tab", W).removeClass(re).removeAttr("aria-selected"), $e('.mbsc-cal-tab[data-control="' + t + '"]', W).addClass(re).attr("aria-selected", "true"), K.addClass("mbsc-cal-h"), ae[Be].removeClass("mbsc-cal-h"), "calendar" == Be && _(e.getDate(!0), !1, !0), e._showDayPicker(), e.trigger("onTabChange", {
                tab: Be
            }))
        }, e._onGenMonth = l, e._onSelectShow = l, e._getDayProps = l, e._prepareObj = s, e._showDayPicker = function() {
            he && (a(U, !0), a(J, !0))
        }, e._selectDay = e.__selectDay = function(t, a, n) {
            var s = e.live;
            Fe = ze.outerMonthChange, pe = !0, e.setDate(n, s, 1e3, !s, !0), ge || w(a, !0), s && Re("onSet", {
                valueText: e._value
            })
        }, Ke(X, {
            labels: null,
            compClass: "mbsc-calendar mbsc-dt",
            onMarkupReady: function(t) {
                var a = 0;
                W = $e(t.target), B = $e(".mbsc-fr-c", W), le = {}, G = e.getDate(!0), oe = N(G), de && (me = !(!ze.marked && !ze.data), ue = ze.showEventCount || !(!ze.events && !ze.labels), Fe = !0, Be = "calendar", c(), B.append(f()), R = $e(".mbsc-cal-month", W), q = $e(".mbsc-cal-year", W), $ = $e(".mbsc-cal-day-scroll-c", W)), he && (U = $e(".mbsc-cal-year-picker", W), J = $e(".mbsc-cal-month-picker", W)), K = $e(".mbsc-w-p", W), ne.length > 1 && B.before(h()), ["date", "time", "calendar"].forEach(function(e) {
                    ae[e] ? (ae[e] = K.eq(a).addClass("mbsc-cal-h"), a++) : "date" == e && !ae.date && de && (K.eq(a).remove(), a++)
                }), ne.forEach(function(e) {
                    B.append(ae[e])
                }), !de && ae.date && ae.date.css("position", "relative"), e._scrollers = [], j()
            },
            onShow: function() {
                de && w(oe)
            },
            onHide: function() {
                e._scrollers.forEach(function(e) {
                    e.destroy()
                }), ce = null, Ie = null, Ze = null, Be = null
            },
            onValidated: function(t) {
                var a, n, s = t.index,
                    i = e._order;
                n = e.getDate(!0), pe ? a = "calendar" : void 0 !== s && (a = i.dd == s || i.d == s || i.m == s || i.y == s ? "date" : "time"), Re("onSetDate", {
                    date: n,
                    control: a
                }), _(n, !1, !! t.time, pe), pe = !1
            },
            onPosition: function(t) {
                var a, n, s, i, r = t.windowHeight,
                    o = (t.hasTabs || !0 === ze.tabs || !1 !== ze.tabs && be) && ne.length > 1;
                if (o ? (W.addClass("mbsc-cal-tabbed"), Be = $e(".mbsc-cal-tab.mbsc-selected", W).attr("data-control"), K.addClass("mbsc-cal-h"), ae[Be].removeClass("mbsc-cal-h")) : (Be = "calendar", W.removeClass("mbsc-cal-tabbed"), K.removeClass("mbsc-cal-h")), e._isFullScreen && ($.height(""), i = t.popup.offsetHeight, r >= i && $.height(r - i + $[0].offsetHeight)), de) {
                    if ((be || Te || o) && (Q = $[0][Te ? "offsetHeight" : "offsetWidth"]), be && Ge) for (Ve = ze.maxMonthWidth > (Oe > 1 ? (Q - 80) / Oe : Q / 2 - 80) ? ze.monthNamesShort : ze.monthNames, n = ze.getYear(oe), s = ze.getMonth(oe), a = 0; a < Oe; a++) R.eq(a).text(Ve[ze.getMonth(ze.getDate(n, s - Ee + a, 1))]);
                    E(ce)
                }
                he && (E(Ie), E(Ze))
            }
        })
    }, _t = {};
    ht.calendar = function(e) {
        function t(e) {
            return S(e.getFullYear(), e.getMonth(), e.getDate())
        }
        function a(e) {
            if (b = {}, e && e.length) for (o = 0; o < e.length; o++) b[t(e[o])] = e[o]
        }
        function n() {
            e.redraw()
        }
        var s, i, r, o, l, d = Ke({}, e.settings),
            u = Ke(e.settings, _t, d),
            h = u.defaultValue,
            f = "multiple" == u.select || u.select > 1 || "week" == u.selectType,
            p = m(u.select) ? u.select : 1 / 0,
            b = {};
        if (s = yt.call(this, e), r = void 0 === u.firstSelectDay ? u.firstDay : u.firstSelectDay, f && h && h.length) for (o = 0; o < h.length; o++) b[t(h[o])] = h[o];
        return e._getDayProps = function(e) {
            return {
                selected: f ? void 0 !== b[e] : void 0
            }
        }, e._selectDay = function(t, a, s, o) {
            if (u.setOnDayTap && "multiple" != u.select && "inline" != u.display) return e.setDate(s), void e.select();
            if (f) if ("week" == u.selectType) {
                var l, d, m = a.getDay() - r;
                for (m = m < 0 ? 7 + m : m, "multiple" != u.select && (b = {}), l = 0; l < 7; l++) d = S(a.getFullYear(), a.getMonth(), a.getDate() - m + l), o ? delete b[d] : c(b).length / 7 < p && (b[d] = d);
                n()
            } else {
                var h = $e('.mbsc-cal-day[data-full="' + t.attr("data-full") + '"]', i);
                o ? (h.removeClass("mbsc-selected").removeAttr("aria-selected"), delete b[a]) : c(b).length < p && (h.addClass("mbsc-selected").attr("aria-selected", "true"), b[a] = a)
            }
            e.__selectDay(t, a, s)
        }, e.setVal = function(t, s, i, r, o) {
            f && (a(t), t = t ? t[0] : null), e._setVal(t, s, i, r, o), f && n()
        }, e.getVal = function(t) {
            return f ? c(b) : e.getDate(t)
        }, Ke({}, s, {
            highlight: !f,
            outerMonthChange: !f,
            parseValue: function(a) {
                var n, i;
                if (f && a && "string" == typeof a) {
                    for (b = {}, a = a.split(","), n = 0; n < a.length; n++) i = D(e._format, a[n].replace(/^\s+|\s+$/g, ""), u), b[t(i)] = i;
                    a = a[0]
                }
                return f && h && h.length && (u.defaultValue = h[0]), s.parseValue.call(this, a)
            },
            formatValue: function(t) {
                var a, n = [];
                if (f) {
                    for (a in b) n.push(k(e._format, b[a], u));
                    return n.join(", ")
                }
                return s.formatValue.call(this, t, e)
            },
            onClear: function() {
                f && (b = {}, n())
            },
            onBeforeShow: function() {
                void 0 !== u.setOnDayTap || u.buttons && u.buttons.length || (u.setOnDayTap = !0), u.setOnDayTap && "inline" != u.display && (u.outerMonthChange = !1), u.counter && f && (u.headerText = function() {
                    var e = 0,
                        t = "week" == u.selectType ? 7 : 1;
                    return $e.each(b, function() {
                        e++
                    }), e = Math.round(e / t), (e > 1 ? u.selectedPluralText || u.selectedText : u.selectedText).replace(/{count}/, e)
                })
            },
            onMarkupReady: function(e) {
                s.onMarkupReady.call(this, e), i = $e(e.target), f && ($e(".mbsc-fr-hdr", i).attr("aria-live", "off"), l = Ke({}, b))
            },
            onCancel: function() {
                !e.live && f && (b = Ke({}, l))
            }
        })
    }, o("calendar", vt);
    var wt = ["touchstart", "touchmove", "touchend", "touchcancel", "mousedown", "mousemove", "mouseup", "mouseleave"],
        Mt = {
            tap: !0
        }, Ct = void 0,
        St = function() {
            function e(t, a) {
                var n = this;
                xe(this, e);
                var s = Ke({}, Mt, ve.settings, a),
                    i = $e(t),
                    r = i.parent(),
                    o = r.hasClass("mbsc-input-wrap") ? r.parent() : r,
                    l = i.next().hasClass("mbsc-fr") ? i.next() : null,
                    c = P(i);
                l && l.insertAfter(o), $(o, c), i.addClass("mbsc-control"), wt.forEach(function(e) {
                    t.addEventListener(e, n)
                }), this.settings = s, this._type = c, this._elm = t, this._$elm = i, this._$parent = o, this._$frame = l, this._ripple = L(s.theme), t.mbscInst = this
            }
            return Te(e, [{
                key: "destroy",
                value: function() {
                    var e = this;
                    this._$elm.removeClass("mbsc-control"), wt.forEach(function(t) {
                        e._elm.removeEventListener(t, e)
                    }), delete this._elm.mbscInst
                }
            }, {
                key: "option",
                value: function(e) {
                    Ke(this.settings, e), this._ripple = L(this.settings.theme)
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    switch (e.type) {
                        case "touchstart":
                        case "mousedown":
                            this._onStart(e);
                            break;
                        case "touchmove":
                        case "mousemove":
                            this._onMove(e);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "mouseup":
                        case "mouseleave":
                            this._onEnd(e)
                    }
                }
            }, {
                key: "_addRipple",
                value: function(e) {
                    this._ripple && this._$rippleElm && this._ripple.addRipple(this._$rippleElm, e)
                }
            }, {
                key: "_removeRipple",
                value: function() {
                    this._ripple && this._$rippleElm && this._ripple.removeRipple()
                }
            }, {
                key: "_onStart",
                value: function(e) {
                    var t = this._elm;
                    A(e, t) && (this._startX = T(e, "X"), this._startY = T(e, "Y"), Ct && Ct.removeClass("mbsc-active"), t.disabled || (this._isActive = !0, Ct = this._$elm, Ct.addClass("mbsc-active"), this._addRipple(e)))
                }
            }, {
                key: "_onMove",
                value: function(e) {
                    (this._isActive && Math.abs(T(e, "X") - this._startX) > 9 || Math.abs(T(e, "Y") - this._startY) > 9) && (this._$elm.removeClass("mbsc-active"), this._removeRipple(), this._isActive = !1)
                }
            }, {
                key: "_onEnd",
                value: function(e) {
                    var t = this,
                        a = this._elm,
                        n = this._type;
                    this._isActive && this.settings.tap && "touchend" == e.type && !a.readOnly && (a.focus(), /(button|submit|checkbox|switch|radio)/.test(n) && e.preventDefault(), /select/.test(n) || x(e, a)), this._isActive && setTimeout(function() {
                        t._$elm.removeClass("mbsc-active"), t._removeRipple()
                    }, 100), this._isActive = !1, Ct = null
                }
            }]), e
        }(),
        kt = function(e) {
            function t(e, a) {
                xe(this, t);
                var n = we(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return z(n, n._$parent, n._$elm), n._$parent.addClass("mbsc-input"), n
            }
            return _e(t, e), Te(t, [{
                key: "destroy",
                value: function() {
                    ye(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._$parent.removeClass("mbsc-ic-left mbsc-ic-right").find(".mbsc-input-ic").remove()
                }
            }]), t
        }(St),
        Dt = function(e) {
            function t(e, a) {
                xe(this, t);
                var n = we(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    s = n._$elm,
                    i = s.attr("data-icon");
                return s.addClass("mbsc-btn").find(".mbsc-btn-ic").remove(), i && (s.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + i + '"></span>'), "" === s.text() && s.addClass("mbsc-btn-icon-only")), n._$rippleElm = s, n
            }
            return _e(t, e), t
        }(St),
        Nt = function(e) {
            function t(e, a) {
                xe(this, t);
                var n = we(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return n._$parent.prepend(n._$elm).addClass("mbsc-checkbox mbsc-control-w").find(".mbsc-checkbox-box").remove(), n._$elm.after('<span class="mbsc-checkbox-box"></span>'), n
            }
            return _e(t, e), t
        }(St),
        At = function(e) {
            function t(e, a) {
                xe(this, t);
                var n = we(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
                return n._$parent.addClass("mbsc-radio mbsc-control-w").find(".mbsc-radio-box").remove(), n._$elm.after('<span class="mbsc-radio-box"><span></span></span>'), n
            }
            return _e(t, e), t
        }(St),
        Vt = function(e) {
            function t(e, a) {
                xe(this, t);
                var n = we(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    s = n._$elm,
                    i = n._$parent,
                    r = i.find("input.mbsc-control"),
                    o = r.length ? r : $e('<input tabindex="-1" class="mbsc-control" readonly>');
                return n._$input = o, i.addClass("mbsc-select" + (n._$frame ? " mbsc-select-inline" : "")), s.after(o), o.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>'), s.hasClass("mbsc-comp") || (e.addEventListener("change", n), n._setText()), n
            }
            return _e(t, e), Te(t, [{
                key: "destroy",
                value: function() {
                    ye(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this._$parent.find(".mbsc-select-ic").remove(), this._elm.removeEventListener("change", this)
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    ye(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleEvent", this).call(this, e), "change" == e.type && this._setText()
                }
            }, {
                key: "_setText",
                value: function() {
                    var e = this._elm;
                    this._$elm.hasClass("mbsc-comp") || this._$input.val(-1 != e.selectedIndex ? e.options[e.selectedIndex].text : "")
                }
            }]), t
        }(kt),
        It = ["keydown", "input", "scroll"],
        Ft = void 0;
    Pe && $e(window).on("resize orientationchange", O);
    var Ht = function(e) {
        function t(e, a) {
            xe(this, t);
            var n = we(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
            return n._$parent.addClass("mbsc-textarea"), It.forEach(function(e) {
                n._elm.addEventListener(e, n)
            }), E(e), n
        }
        return _e(t, e), Te(t, [{
            key: "destroy",
            value: function() {
                var e = this;
                ye(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), It.forEach(function(t) {
                    e._elm.removeEventListener(t, e)
                })
            }
        }, {
            key: "handleEvent",
            value: function(e) {
                switch (ye(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleEvent", this).call(this, e), e.type) {
                    case "keydown":
                    case "input":
                        this._onInput(e);
                        break;
                    case "scroll":
                        Y(this._elm)
                }
            }
        }, {
            key: "_onInput",
            value: function() {
                var e = this;
                clearTimeout(this._debounce), this._debounce = setTimeout(function() {
                    E(e._elm)
                }, 100)
            }
        }]), t
    }(kt),
        Pt = function(e) {
            function t(e, a) {
                xe(this, t);
                var n = we(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a)),
                    s = void 0,
                    i = void 0,
                    r = n._$elm,
                    o = n._$parent;
                return o.hasClass("mbsc-segmented-item-ready") || (s = $e('<div class="mbsc-segmented"></div>'), o.after(s), o.parent().find('input[name="' + r.attr("name") + '"]').each(function() {
                    var e = $e(this);
                    i = e.parent().addClass("mbsc-segmented-item mbsc-segmented-item-ready"), $e('<span class="mbsc-segmented-content">' + (e.attr("data-icon") ? '<span class="mbsc-ic mbsc-ic-' + e.attr("data-icon") + '"></span>' : "") + "</span>").append(i.contents()).appendTo(i), i.prepend(e), s.append(i)
                })), n._$rippleElm = r.next(), n
            }
            return _e(t, e), t
        }(St),
        Lt = function(e, t) {
            function a() {
                var t;
                e.disabled || (t = parseFloat($e(this).val()), i(isNaN(t) ? g : t))
            }
            function n() {
                return e.disabled
            }
            function s(e, t) {
                i(g + t * f)
            }
            function i(e, t, a) {
                w = g, void 0 === t && (t = !0), void 0 === a && (a = t), g = Math.min(m, Math.max(Math.round(e / f) * f, u)), c.removeClass("mbsc-disabled"), t && _.val(g), g == u ? l.addClass("mbsc-disabled") : g == m && o.addClass("mbsc-disabled"), g !== w && a && _.trigger("change")
            }
            function r(e, t) {
                var a = _.attr(e);
                return void 0 === a || "" === a ? t : +a
            }
            var o, l, c, d, m, u, h, f, p, b, v, g, x, T, y = this,
                _ = $e(e),
                w = g;
            qe.call(this, e, t, !0), y.getVal = function() {
                var e = parseFloat(_.val());
                return e = isNaN(e) ? g : e, Math.min(m, Math.max(Math.round(e / f) * f, u))
            }, y.setVal = function(e, t, a) {
                e = parseFloat(e), i(isNaN(e) ? g : e, t, a)
            }, y._init = function(t) {
                x = _.parent().hasClass("mbsc-stepper"), T = x ? _.closest(".mbsc-stepper-cont") : _.parent(), b = y.settings, u = void 0 === t.min ? r("min", b.min) : t.min, m = void 0 === t.max ? r("max", b.max) : t.max, f = void 0 === t.step ? r("step", b.step) : t.step, d = _.attr("data-val") || b.val, g = Math.min(m, Math.max(Math.round(+e.value / f) * f || 0, u)), v = ve.themes.form[b.theme], h = v && v.addRipple ? v : null, x || T.addClass("mbsc-stepper-cont mbsc-control-w").append('<span class="mbsc-segmented mbsc-stepper"></span>').find(".mbsc-stepper").append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (g == u ? "mbsc-disabled" : "") + '" data-step="-1" tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (g == m ? "mbsc-disabled" : "") + '"  data-step="1" tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span></span></span>').prepend(_), l = $e(".mbsc-stepper-minus", T), o = $e(".mbsc-stepper-plus", T), c = $e(".mbsc-stepper-control", T), x || ("left" == d ? (T.addClass("mbsc-stepper-val-left"), _.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == d ? (T.addClass("mbsc-stepper-val-right"), o.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : l.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>')), p || (_.on("change", a), p = F(c, s, 150, n, !1, h)), _.val(g).attr("data-role", "stepper").attr("min", u).attr("max", m).attr("step", f).addClass("mbsc-control"), e.mbscInst = y
            }, y._destroy = function() {
                _.removeClass("mbsc-control").off("change", a), p.destroy(), delete e.mbscInst
            }, y.init(t)
        };
    Lt.prototype = {
        _class: "stepper",
        _hasDef: !0,
        _defaults: {
            min: 0,
            max: 100,
            step: 1
        }
    }, Je.Stepper = Lt;
    var Ot = function(e, t, a) {
        var n, s, i, r, o = this;
        qe.call(this, e, t, !0), o.__init = l, o.__destroy = l, o._init = function(t) {
            var a;
            r = o.settings, n = $e(e), a = !! s, s = n.parent(), s = s.hasClass("mbsc-input-wrap") ? s.parent() : s, o._$parent = s, i && s.removeClass(i), i = o._css + " mbsc-progress-w mbsc-control-w mbsc-" + r.theme + (r.baseTheme ? " mbsc-" + r.baseTheme : "") + (r.rtl ? " mbsc-rtl" : " mbsc-ltr"), s.addClass(i), n.addClass("mbsc-control"), o.__init(t), a || o._attachChange(), o.refresh(), e.mbscInst = o
        }, o._destroy = function() {
            o.__destroy(), s.removeClass(i), n.removeClass("mbsc-control"), delete e.mbscInst
        }, a || o.init(t)
    }, Et = function(e, t, a) {
        function n(t) {
            "mousedown" === t.type && t.preventDefault(), !A(t, this) || S && !L || e.disabled || e.readOnly || (B.stopProp && t.stopPropagation(), S = !0, $ = !1, D = !1, q = T(t, "X"), U = T(t, "Y"), F = q, C.removeClass("mbsc-progress-anim"), x = W ? $e(".mbsc-slider-handle", this) : _, y && y.removeClass("mbsc-handle-curr"), y = x.parent().addClass("mbsc-active mbsc-handle-curr"), v.addClass("mbsc-active"), P = +x.attr("data-index"), Z = C[0].offsetWidth, I = C[0].getBoundingClientRect().left, "mousedown" === t.type && (O = !0, $e(document).on("mousemove", s).on("mouseup", i)), "mouseenter" === t.type && (L = !0, $e(document).on("mousemove", s)))
        }
        function s(e) {
            S && (F = T(e, "X"), H = T(e, "Y"), N = F - q, V = H - U, Math.abs(N) > 5 && ($ = !0), ($ || O || L) && Math.abs(te - new Date) > 50 && (te = new Date, f(F, B.round, Y && (!L || O))), $ ? e.preventDefault() : Math.abs(V) > 7 && "touchmove" == e.type && h())
        }
        function i(e) {
            S && (e.preventDefault(), W || C.addClass("mbsc-progress-anim"), L && !O ? p(Q[P], P, !1, !1, !0) : f(F, !0, !0), $ || D || ("touchend" == e.type && g(), ee._onTap(Q[P])), "mouseup" == e.type && (O = !1), "mouseleave" == e.type && (L = !1), L || h())
        }
        function r() {
            S && h()
        }
        function o() {
            var e = ee._readValue($e(this)),
                t = +$e(this).attr("data-index");
            e !== Q[t] && (Q[t] = e, R[t] = e, p(e, t))
        }
        function c(e) {
            e.stopPropagation()
        }
        function d(e) {
            e.preventDefault()
        }
        function m(t) {
            var a;
            if (!e.disabled) {
                switch (t.keyCode) {
                    case 38:
                    case 39:
                        a = 1;
                        break;
                    case 40:
                    case 37:
                        a = -1
                }
                a && (t.preventDefault(), X || (P = +$e(this).attr("data-index"), p(Q[P] + J * a, P, !0), X = setInterval(function() {
                    p(Q[P] + J * a, P, !0)
                }, 200)))
            }
        }
        function u(e) {
            e.preventDefault(), clearInterval(X), X = null
        }
        function h() {
            S = !1, y.removeClass("mbsc-active"), v.removeClass("mbsc-active"), $e(document).off("mousemove", s).off("mouseup", i)
        }
        function f(e, t, a) {
            var n = t ? Math.min(Math[ee._rounding || "round"](Math.max(100 * (e - I) / Z, 0) / K / J) * J * 100 / (j - z + k), 100) : Math.max(0, Math.min(100 * (e - I) / Z, 100));
            E && (n = 100 - n), p(Math.round((z - k + n / K) * G) / G, P, a, n)
        }
        function p(e, t, a, n, s, i) {
            var r = _.eq(t),
                o = r.parent();
            e = Math.min(j, Math.max(e, z)), void 0 === i && (i = a), ee._update ? e = ee._update(e, Q, t, n, W, s, o) : o.css({
                left: E ? "auto" : (n || b(e, z, j)) + "%",
                right: E ? (n || b(e, z, j)) + "%" : "auto"
            }), e > z ? o.removeClass("mbsc-slider-start") : (Q[t] > z || s) && o.addClass("mbsc-slider-start"), a && R[t] != e && (D = !0, R[t] = e, Q[t] = e, ee._fillValue(e, t, i)), r.attr("aria-valuenow", e)
        }
        var v, x, y, _, w, M, C, S, k, D, N, V, I, F, H, P, L, O, E, Y, j, z, $, W, R, J, B, K, q, U, G, X, Z, Q, ee = this,
            te = new Date;
        Ot.call(this, e, t, !0), ee._onTap = l, ee.___init = l, ee.___destroy = l, ee._attachChange = function() {
            v.on(B.changeEvent, o)
        }, ee.__init = function(e) {
            var t;
            _ && (t = !0, _.parent().remove()), ee.___init(e), M = ee._$parent, C = ee._$track, v = M.find("input"), B = ee.settings, z = ee._min, j = ee._max, k = ee._base || 0, J = ee._step, Y = ee._live, G = J % 1 != 0 ? 100 / (100 * +(J % 1).toFixed(2)) : 1, K = 100 / (j - z + k) || 100, W = v.length > 1, E = B.rtl, Q = [], R = [], v.each(function(e) {
                Q[e] = ee._readValue($e(this)), $e(this).attr("data-index", e)
            }), _ = M.find(".mbsc-slider-handle"), w = M.find(W ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont"), _.on("keydown", m).on("keyup", u).on("blur", u), w.on("touchstart mousedown" + (B.hover ? " mouseenter" : ""), n).on("touchmove", s).on("touchend touchcancel" + (B.hover ? " mouseleave" : ""), i).on("pointercancel", r), t || (v.on("click", c), M.on("click", d))
        }, ee.__destroy = function() {
            M.off("click", d), v.off(B.changeEvent, o).off("click", c), _.off("keydown", m).off("keyup", u).off("blur", u), w.off("touchstart mousedown mouseenter", n).off("touchmove", s).off("touchend touchcancel mouseleave", i).off("pointercancel", r), ee.___destroy()
        }, ee.refresh = function() {
            v.each(function(e) {
                p(ee._readValue($e(this)), e, !0, !1, !0, !1)
            })
        }, ee.getVal = function() {
            return W ? Q.slice(0) : Q[0]
        }, ee.setVal = ee._setVal = function(e, t, a) {
            $e.isArray(e) || (e = [e]), $e.each(e, function(e, t) {
                Q[e] = t
            }), $e.each(e, function(e, t) {
                p(t, e, !0, !1, !0, a)
            })
        }, a || ee.init(t)
    }, Yt = function(e, t) {
        var a, n, s, i, r = this;
        t = t || {}, Ke(t, {
            changeEvent: "click",
            round: !1
        }), Et.call(this, e, t, !0), r._readValue = function() {
            return e.checked ? 1 : 0
        }, r._fillValue = function(e, t, n) {
            a.prop("checked", !! e), n && a.trigger("change")
        }, r._onTap = function(e) {
            r._setVal(e ? 0 : 1)
        }, r.___init = function() {
            s = r.settings, a = $e(e), n = a.parent(), n.find(".mbsc-switch-track").remove(), n.prepend(a), a.attr("data-role", "switch").after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' + s.offText + '</span><span class="mbsc-switch-txt-on">' + s.onText + "</span></span></span></span></span>"), i && i.destroy(), i = new St(e, s), r._$track = n.find(".mbsc-progress-track"), r._min = 0, r._max = 1, r._step = 1
        }, r.___destroy = function() {
            i.destroy()
        }, r.getVal = function() {
            return e.checked
        }, r.setVal = function(e, t, a) {
            r._setVal(e ? 1 : 0, t, a)
        }, r.init(t)
    };
    Yt.prototype = {
        _class: "switch",
        _css: "mbsc-switch",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            stopProp: !0,
            offText: "Off",
            onText: "On"
        }
    }, Je.Switch = Yt; /* eslint-disable no-unused-vars */
    var jt = function(e, t, a) {
        function n() {
            var e = s("value", u);
            e !== b && i(e)
        }
        function s(e, t) {
            var a = o.attr(e);
            return void 0 === a || "" === a ? t : +a
        }
        function i(e, t, a, n) {
            e = Math.min(h, Math.max(e, u)), c.css("width", 100 * (e - u) / (h - u) + "%"), void 0 === a && (a = !0), void 0 === n && (n = a), (e !== b || t) && g._display(e), e !== b && (b = e, a && o.attr("value", b), n && o.trigger("change"))
        }
        var r, o, l, c, d, m, u, h, f, p, b, v, g = this;
        Ot.call(this, e, t, !0), g._display = function(e) {
            v = p && f.returnAffix ? p.replace(/\{value\}/, e).replace(/\{max\}/, h) : e, d && d.html(v), r && r.html(v)
        }, g._attachChange = function() {
            o.on("change", n)
        }, g.__init = function(t) {
            var a, n, i, v;
            if (f = g.settings, o = $e(e), v = !! l, l = g._$parent, u = g._min = void 0 === t.min ? s("min", f.min) : t.min, h = g._max = void 0 === t.max ? s("max", f.max) : t.max, b = s("value", u), a = o.attr("data-val") || f.val, i = o.attr("data-step-labels"), i = i ? JSON.parse(i) : f.stepLabels, p = o.attr("data-template") || (100 != h || f.template ? f.template : "{value}%"), v ? (a && (r.remove(), l.removeClass("mbsc-progress-value-" + ("right" == a ? "right" : "left"))), i && $e(".mbsc-progress-step-label", m).remove()) : ($(l), j(o), l.find(".mbsc-input-wrap").append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>'), c = g._$progress = l.find(".mbsc-progress-bar"), m = g._$track = l.find(".mbsc-progress-track")), o.attr("min", u).attr("max", h), a && (r = $e('<span class="mbsc-progress-value"></span>'), l.addClass("mbsc-progress-value-" + ("right" == a ? "right" : "left")).find(".mbsc-input-wrap").append(r)), i) for (n = 0; n < i.length; ++n) m.append('<span class="mbsc-progress-step-label" style="' + (f.rtl ? "right" : "left") + ": " + 100 * (i[n] - u) / (h - u) + '%" >' + i[n] + "</span>");
            d = $e(o.attr("data-target") || f.target)
        }, g.__destroy = function() {
            l.removeClass("mbsc-ic-left mbsc-ic-right").find(".mbsc-progress-cont").remove(), l.find(".mbsc-input-ic").remove(), o.off("change", n)
        }, g.refresh = function() {
            i(s("value", u), !0, !1)
        }, g.getVal = function() {
            return b
        }, g.setVal = function(e, t, a) {
            i(e, !0, t, a)
        }, a || g.init(t)
    };
    jt.prototype = {
        _class: "progress",
        _css: "mbsc-progress",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            min: 0,
            max: 100,
            returnAffix: !0
        }
    }, Je.Progress = jt;
    var zt = function(e, t, a) {
        var n, s, i, r, o, l, c, d, m, u, h, f, p, g = this;
        jt.call(this, e, t, !0);
        var x = g.__init,
            T = g.__destroy;
        Et.call(this, e, t, !0);
        var y = g.__init,
            _ = g.__destroy;
        g.__init = function(e) {
            x(e), y(e)
        }, g.__destroy = function() {
            T(), _()
        }, g._update = function(e, t, a, n, s, o, f) {
            return d ? 0 === a ? (e = Math.min(e, t[1]), i.css({
                width: b(t[1], h, u) - b(e, h, u) + "%",
                left: m ? "auto" : b(e, h, u) + "%",
                right: m ? b(e, h, u) + "%" : "auto"
            })) : (e = Math.max(e, t[0]), i.css({
                width: b(e, h, u) - b(t[0], h, u) + "%"
            })) : s || !l ? f.css({
                left: m ? "auto" : (n || b(e, h, u)) + "%",
                right: m ? (n || b(e, h, u)) + "%" : "auto"
            }) : i.css("width", (n || b(e, h, u)) + "%"), c && r.eq(a).html(e), s || t[a] == e && !o || g._display(e), e
        }, g._readValue = function(e) {
            return +e.val()
        }, g._fillValue = function(e, t, a) {
            n.eq(t).val(e), a && n.eq(t).trigger("change")
        }, g._markupReady = function() {
            var e, t;
            if (c && s.addClass("mbsc-slider-has-tooltip"), 1 != f) for (t = (u - h) / f, e = 0; e <= t; ++e) o.append('<span class="mbsc-slider-step" style="' + (m ? "right" : "left") + ":" + 100 / t * e + '%"></span>');
            n.each(function(e) {
                "range" == this.type && $e(this).attr("min", h).attr("max", u).attr("step", f), (l ? i : o).append('<span class="mbsc-slider-handle-cont' + (d && !e ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + h + '" aria-valuemax="' + u + '" data-index="' + e + '"></span>' + (c ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>")
            }), r = s.find(".mbsc-slider-tooltip")
        }, g.___init = function(e) {
            s && (s.removeClass("mbsc-slider-has-tooltip"), 1 != f && $e(".mbsc-slider-step", o).remove()), s = g._$parent, o = g._$track, i = g._$progress, n = s.find("input"), p = g.settings, h = g._min, u = g._max, g._step = f = void 0 === e.step ? +n.attr("step") || p.step : e.step, g._live = v("data-live", p.live, n), c = v("data-tooltip", p.tooltip, n), l = v("data-highlight", p.highlight, n) && n.length < 3, d = l && 2 == n.length, m = p.rtl, g._markupReady()
        }, a || g.init(t)
    };
    zt.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-slider",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            changeEvent: "change",
            stopProp: !0,
            min: 0,
            max: 100,
            step: 1,
            live: !0,
            highlight: !0,
            round: !0,
            returnAffix: !0
        }
    }, Je.Slider = zt;
    var $t = function(e, t, a) {
        var n, s, i, r, o, l, c, d = this,
            m = $e(e);
        zt.call(this, e, t, !0), d._update = function(e, t, a, s, r, o) {
            return n.css("width", b(e, 0, i) + "%"), r || t[a] == e && !o || d._display(e), e
        }, d._markupReady = function() {
            var e, t = "",
                a = "";
            for (s = d._$track, n = d._$progress, c = d.settings, r = d._min, i = d._max, d._base = r, d._rounding = c.rtl ? "floor" : "ceil", o = m.attr("data-empty") || c.empty, l = m.attr("data-filled") || c.filled, e = 0; e < i; ++e) t += '<span class="mbsc-ic mbsc-ic-' + o + '"></span>', a += '<span class="mbsc-ic mbsc-ic-' + l + '"></span>';
            s.html(t), s.append(n), n.html(a), s.append('<span class="mbsc-rating-handle-cont"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + r + '" aria-valuemax="' + i + '" data-index="0"></span></span>')
        }, a || d.init(t)
    };
    $t.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-rating",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            changeEvent: "change",
            stopProp: !0,
            min: 1,
            max: 5,
            step: 1,
            live: !0,
            round: !0,
            hover: !0,
            highlight: !0,
            returnAffix: !0,
            empty: "star",
            filled: "star3"
        }
    }, Je.Rating = $t;
    var Wt = 0,
        Rt = "mbsc-input-wrap",
        Jt = function(e, t) {
            function a() {
                i.removeClass("mbsc-no-touch")
            }
            var n, s = "",
                i = $e(e),
                r = {}, o = this;
            qe.call(this, e, t, !0), o.refresh = function(e) {
                W(i, r, n, e)
            }, o._init = function() {
                i.hasClass("mbsc-card") || i.on("touchstart", a).show(), s && i.removeClass(s), 
                s = "mbsc-card mbsc-form mbsc-no-touch mbsc-" + n.theme + (Zt ? " mbsc-form-hb" : "") + (n.baseTheme ? " mbsc-" + n.baseTheme : "") + (n.rtl ? " mbsc-rtl" : " mbsc-ltr"),
                i.addClass(s).removeClass("mbsc-cloak"), 
                o.refresh()
            }, o._destroy = function() {
                i.removeClass(s).off("touchstart", a);
                for (var e in r) r[e].destroy()
            }, n = o.settings, o.init(t)
        };
    Jt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "card",
        _defaults: {
            tap: !0,
            stopProp: !0,
            lang: "en"
        }
    }, Je.Card = Jt, w("[mbsc-card]", Jt, !0), o("card", Jt, !1);
    var Bt = function(e, t, a) {
        function n(e, t, a) {
            if (!a) {
                B._value = B._hasValue ? B._tempValue.slice(0) : null;
                for (var n = 0; n < y.length; ++n) y[n].tempChangedColor && B._value && -1 != B._value.indexOf(y[n].tempChangedColor) && (y[n].changedColor = y[n].tempChangedColor), delete y[n].tempChangedColor
            }
            e && (B._isInput && K.val(B._hasValue ? B._tempValue : ""), _("onFill", {
                valueText: B._hasValue ? B._tempValue : "",
                change: t
            }), t && (U = Ke(!0, {}, ee), B._preventChange = !0, K.trigger("change")), u(B._value, !0))
        }
        function s(e, t) {
            return t = void 0 !== t ? t : r(e), '<div class="mbsc-color-input-item" data-color="' + (void 0 !== t ? t : e) + '" style="background: ' + e + ';">' + (L ? "" : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + "</div>"
        }
        function i(e) {
            A[0].style.background = e ? Ze + "linear-gradient(left, " + (x.rtl ? "#000000" : "#FFFFFF") + " 0%, " + e + " 50%, " + (x.rtl ? "#FFFFFF" : "#000000") + " 100%)" : ""
        }
        function r(e) {
            if (Object.keys(ee).length && !isNaN(e)) return e;
            for (var t in y) if (e == y[t].color || e == y[t].changedColor) return t
        }
        function o() {
            if (P) {
                var e, t = "";
                if (Y.empty(), B._value) {
                    if (L) t += s(B._value, H);
                    else for (e = 0; e < B._value.length; ++e) t += s(B._value[e], Object.keys(ee).length && ee[e].colorIndex ? ee[e].colorIndex : r(B._value[e]));
                    Y.append(t), B.tap($e(".mbsc-color-input-item", Y), function(e) {
                        if ($e(e.target).hasClass("mbsc-color-input-item-close")) {
                            var t = $e(this).index();
                            e.stopPropagation(), e.preventDefault(), void 0 === H && (H = $e(e.target).parent().attr("data-color")), N && (q = y[H].previewInd, z.eq(q).parent().removeClass("mbsc-color-active"), U[t] = {}, ee[t] = {}), B._value.splice(t, 1), B.setVal(B._value, !0, !0)
                        } else V && "inline" !== x.display && (H = $e(e.target).attr("data-color"), isNaN(H) && (H = r(H)), H && (y[H].selected = !0, q = y[H].previewInd, setTimeout(function() {
                            w.scroll(j.eq(H), 400), N && M.scroll(z.eq(q), 400)
                        }, 200)))
                    })
                }
            }
        }
        function l(e, t) {
            var a, n = e.match(/\d+/gim);
            switch (!0) {
                case e.indexOf("rgb") > -1:
                    a = R({
                        r: n[0],
                        g: n[1],
                        b: n[2]
                    });
                    break;
                case e.indexOf("hsl") > -1:
                    a = X({
                        h: n[0],
                        s: n[1],
                        l: n[2]
                    });
                    break;
                case e.indexOf("hsv") > -1:
                    a = Z({
                        h: n[0],
                        s: n[1],
                        v: n[2]
                    });
                    break;
                case e.indexOf("#") > -1:
                    a = e
            }
            return c(a, t || x.format)
        }
        function c(e, t) {
            switch (t) {
                case "rgb":
                    return J(e);
                case "hsl":
                    return G(e);
                case "hsv":
                    return Q(e);
                default:
                    return e
            }
        }
        function d() {
            var e;
            for (e = 0; e < x.select; ++e) if (void 0 === ee[e].colorIndex) return e
        }
        function m(e, t) {
            $e(".mbsc-color-active", t).removeClass("mbsc-color-active"), V && (e.parent().addClass("mbsc-color-active"), N && e && void 0 !== q && z.eq(q).parent().addClass("mbsc-color-active"))
        }
        function u(e, t) {
            var a, n, s = [],
                i = 0,
                r = $e.map(y, function(e) {
                    return e.changedColor || e.color
                });
            if (L) {
                if (e = $e.isArray(e) ? e[0] : e, n = r.indexOf(e), n > -1 && s.push(n), e && !s.length) {
                    var l = +$e(".mbsc-color-input-item", Y).attr("data-color");
                    isNaN(l) || s.push(l), H = l
                }
            } else if (e) if (N && V) for (var c in U) void 0 !== U[c].colorIndex && s.push(+U[c].colorIndex);
            else for (a = 0; a < e.length; ++a)(n = r.indexOf(e[a])) > -1 && (s.push(n), r[n] = "temp" + a);
            for (a = 0; a < s.length; ++a) h(!0, s[a], i++, y[s[a]].changedColor || y[s[a]].color, !0);
            for (a = 0; a < y.length; ++a) - 1 == s.indexOf(a) && h(!1, a, void 0, y[a].changedColor || y[a].color, !1);
            if (N) for (a = i; a < x.select; ++a) ee[a] = {}, z && z.eq(a).addClass("mbsc-color-preview-item-empty").css({
                background: "transparent"
            });
            U = Ke(!0, {}, ee), !1 !== t && o()
        }
        function h(e, t, a, n, s, i) {
            if (N && s && (ee[a].colorIndex = e ? t : void 0, ee[a].color = e ? n : void 0, z)) {
                var r = z.eq(a);
                r.removeClass("mbsc-color-preview-item-empty").css({
                    background: e ? n : "transparent"
                }), e || r.addClass("mbsc-color-preview-item-empty").parent().removeClass("mbsc-color-active")
            }
            i && (e ? B._tempValue.splice(a, 0, n) : B._tempValue.splice(B._tempValue.indexOf(n), 1)), j && (e ? j.eq(t).addClass("mbsc-color-selected") : j.eq(t).removeClass("mbsc-color-selected").parent().removeClass("mbsc-color-active")), y[t].previewInd = e ? a : void 0, y[t].selected = e
        }
        function p(e, t) {
            void 0 !== e && (L || y[e].selected) ? (H = e, S = y[e].changedColor || y[e].color, $ = j.eq(e), V && (m(j.eq(e), t || ""), k = l(y[e].color, "hsl"), k.l = l(S, "hsl").l, i(y[e].color), F.setVal(100 - k.l, !1, !1))) : V && i()
        }
        function b() {
            var e, t = [];
            for (e = 0; e < y.length; ++e) y[e].selected && t.push(y[e]);
            return t
        }
        function v(e, t) {
            var a = $e(e.target).index();
            H = ee[a].colorIndex, $ = j.eq(H), q = a, p(H, t), w.scroll($, 250), _("onPreviewItemTap", {
                target: e.target,
                value: ee[a].color,
                index: a
            })
        }
        function g(e, t) {
            var a = !1,
                n = $e(".mbsc-color-selected", t);
            if ($ = $e(e.target), $.hasClass("mbsc-color-clear-item")) return S = "", void B.clear();
            (L || O > +n.length || $.hasClass("mbsc-color-selected")) && ve.SYcKw && (H = $.attr("data-index"), N && (q = void 0 !== y[H].previewInd ? y[H].previewInd : d(), a = V && $.hasClass("mbsc-color-selected") && !$.parent().hasClass("mbsc-color-active"), z.length > 6 && M.scroll(z.eq(q))), S = y[H].changedColor || y[H].color, L ? (n.removeClass("mbsc-color-selected"), B._tempValue = S, S && $.toggleClass("mbsc-color-selected"), m($, t)) : (m($, t), a || h(!y[H].selected, H, q, S, !0, !0)), p(H, t), B.live && (B._fillValue(), _("onSet", {
                value: B._value
            })), _("onItemTap", {
                target: e.target,
                value: S,
                selected: y[H].selected,
                index: H
            }), B._updateHeader())
        }
        var x, T, y, _, w, M, C, S, k, D, N, A, V, I, F, H, P, L, O, E, Y, j, z, $, W, B = this,
            K = $e(e),
            q = 0,
            U = {}, ee = {};
        dt.call(this, e, t, !0), B.setVal = B._setVal = function(e, t, a, s) {
            B._hasValue = null !== e && void 0 !== e, B._tempValue = L ? $e.isArray(e) ? e[0] : e : $e.isArray(e) ? e : e ? [e] : [], n(t, void 0 === a ? t : a, s)
        }, B.getVal = B._getVal = function(e) {
            return B._hasValue || e ? E ? b() : B[e ? "_tempValue" : "_value"] : null
        }, B._readValue = function() {
            var e = K.val() || "";
            B._hasValue = !1, 0 !== e.length && "" !== e && (B._hasValue = !0), B._hasValue ? (B._tempValue = L ? e : "hex" == x.format ? e.split(",") : e.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gim), n(!0)) : B._tempValue = [], u(B._tempValue, B._hasValue)
        }, B._fillValue = function() {
            B._hasValue = !0, n(!0, !0)
        }, B._generateContent = function() {
            var e, t, a, n = C ? 1 : 0;
            for (I = D ? Math.ceil((y.length + n) / x.rows) : x.rows, t = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (D ? "" : "mbsc-color-vertical") + '"><div class="mbsc-color-cont">' + (D ? '<div class="mbsc-color-row">' : ""), e = 0; e < y.length; ++e) a = y[e].changedColor || y[e].color, C && 0 === e && (t += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>'), 0 !== e && (e + n) % I == 0 && (t += D ? '</div><div class="mbsc-color-row">' : ""), t += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + e + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (y[e].selected ? "mbsc-color-selected" : "") + '"  style="background:' + a + '"></div>' + "</div>";
            if (t += "</div></div>" + (D ? "</div>" : ""), V && (t += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>'), N) {
                t += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">';
                for (var s in U) t += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (U[s].color ? "" : "mbsc-color-preview-item-empty") + '" style="background: ' + (U[s].color || "initial") + ';"></div></div>';
                t += "</div></div>"
            }
            return t
        }, B._position = function(e) {
            var t, a;
            D || (t = e.find(".mbsc-color-cont"), a = Math.ceil(t.find(".mbsc-color-item-c")[0].offsetWidth), t.width(Math.min(Math.floor(e.find(".mbsc-fr-c").width() / a), Math.round(y.length / x.rows)) * a + 1)), w && w.refresh(), M && M.refresh()
        }, B._markupInserted = function(e) {
            D || e.find(".mbsc-color-scroll-cont").css("max-height", e.find(".mbsc-color-item-c")[0].offsetHeight * x.rows), w = new ut(e.find(".mbsc-color-scroll-cont")[0], {
                axis: D ? "X" : "Y",
                rtl: x.rtl,
                elastic: 60,
                stopProp: !1,
                mousewheel: x.mousewheel,
                onBtnTap: function(t) {
                    g(t, e)
                }
            })
        }, B._attachEvents = function(e) {
            var t;
            j = $e(".mbsc-color-item", e), e.on("keydown", ".mbsc-color-btn-e", function(t) {
                t.stopPropagation(), 32 == t.keyCode && (t.target.classList.contains("mbsc-color-item") ? g(t, e) : v(t, e))
            }), N && (z = $e(".mbsc-color-preview-item", e)), V && (e.addClass("mbsc-color-refine"), W = $e(".mbsc-color-slider", e), F = new zt(W[0], {
                theme: x.theme,
                rtl: x.rtl
            }), A = e.find(".mbsc-progress-track"), H && B._value && p(H, e), W.on("change", function() {
                void 0 !== H && (L || y[H].selected) && (k.l = 100 - this.value, t = l(k.toString()).toString(), L ? B._tempValue = t : B._tempValue[void 0 !== q ? q : B._tempValue.length] = t, y[H].tempChangedColor = t, j.eq(H).css("background", t), N && (ee[q].color = t, z.eq(q).removeClass("mbsc-color-preview-item-empty").css({
                    background: t
                })), B.live && f(B._fillValue()))
            })), N && (M = new ut(e.find(".mbsc-color-preview-cont")[0], {
                axis: "X",
                rtl: x.rtl,
                mousewheel: x.mousewheel,
                onBtnTap: function(t) {
                    v(t, e)
                }
            })), B._updateHeader()
        }, B._markupRemove = function() {
            w && w.destroy(), F && F.destroy(), M && M.destroy()
        }, B.__processSettings = function() {
            var t, a;
            if (x = B.settings, _ = B.trigger, D = "horizontal" == x.navigation, B._value = [], B._tempValue = [], L = "single" == x.select, C = void 0 !== x.clear ? x.clear : L, a = x.data || [], !a.length) switch (x.format) {
                case "rgb":
                    a = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"], C && a.splice(10, 0, "rgb(83, 71, 65)");
                    break;
                case "hsl":
                    a = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"], C && a.splice(10, 0, "hsl(20, 12%, 29%)");
                    break;
                default:
                    a = ["#ffeb3c", "#ff9900", "#f44437", "#ea1e63", "#9c26b0", "#683ab7", "#3f51b5", "#2196f3", "#009788", "#4baf4f", "#7e5d4e", "#9e9e9e"], C && a.splice(10, 0, "#534741")
            }
            if (V = "refine" == x.mode, N = !isNaN(x.select), O = isNaN(x.select) ? L ? 2 : a.length : x.select, E = $e.isPlainObject(a[0]), N && !Object.keys(U).length) for (t = 0; t < x.select; ++t) U[t] = {}, ee[t] = {};
            if (!y) for (y = a.slice(0), t = 0; t < y.length; ++t) $e.isPlainObject(a[t]) ? y[t].color = a[t].color : (a[t] = a[t].toLowerCase(), y[t] = {
                key: t,
                name: a[t],
                color: a[t]
            });
            T = x.defaultValue || y[0].color, S = T, k = l(S, "hsl"), (P = x.enhance && K.is("input")) && (K.hasClass("mbsc-color-input-hdn") ? Y = K.prev() : (Y = $e("<div " + (e.placeholder ? 'data-placeholder="' + e.placeholder + '"' : "") + ' class="mbsc-control mbsc-color-input ' + (x.inputClass || "") + '" readonly ></div>'), Y.insertBefore(K), K.addClass("mbsc-color-input-hdn").attr("tabindex", -1)), x.anchor = Y, B.attachShow(Y))
        }, B.__init = function() {
            x.cssClass = (x.cssClass || "") + " mbsc-color"
        }, B.__destroy = function() {
            P && (K.removeClass("mbsc-color-input-hdn"), Y.remove())
        }, a || B.init(t)
    };
    Bt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "color",
        _defaults: Ke({}, dt.prototype._defaults, {
            headerText: !1,
            validate: l,
            parseValue: l,
            enhance: !0,
            rows: 2,
            select: "single",
            format: "hex",
            navigation: "horizontal"
        })
    }, Je.Color = Bt, ve.themes.color = ve.themes.frame, Be.color = {
        hsv2hex: Z,
        hsv2rgb: B,
        rgb2hsv: K,
        rgb2hex: R,
        rgb2hsl: q,
        hex2rgb: J,
        hex2hsv: Q,
        hex2hsl: G
    }, o("color", Bt, !1), ht.date = xt, ht.time = xt, ht.datetime = xt, o("date", vt), o("time", vt), o("datetime", vt);
    var Kt = {
        eventBubble: !0,
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"],
        eventText: "event",
        eventsText: "events"
    };
    ht.eventcalendar = function(e) {
        function t(e) {
            var t = g.labelsShort,
                a = Math.abs(e) / 1e3,
                n = a / 60,
                s = n / 60,
                i = s / 24,
                r = i / 365;
            return a < 45 && Math.round(a) + " " + t[5].toLowerCase() || n < 45 && Math.round(n) + " " + t[4].toLowerCase() || s < 24 && Math.round(s) + " " + t[3].toLowerCase() || i < 30 && Math.round(i) + " " + t[2].toLowerCase() || i < 365 && Math.round(i / 30) + " " + t[1].toLowerCase() || Math.round(r) + " " + t[0].toLowerCase()
        }
        function a(e) {
            return e.sort(function(e, t) {
                var a = e.d || e.start,
                    n = t.d || t.start,
                    s = a.getTime ? e.start && e.end && e.start.toDateString() !== e.end.toDateString() ? 1 : a.getTime() : 0,
                    i = n.getTime ? t.start && t.end && t.start.toDateString() !== t.end.toDateString() ? 1 : n.getTime() : 0;
                return s == i ? e.text > t.text ? 1 : -1 : s - i
            })
        }
        function n(e) {
            var t, a = $e(".mbsc-cal-c", c)[0].offsetHeight,
                n = $e(e),
                s = e.offsetHeight,
                i = e.offsetWidth,
                r = n.offset().top - $e(".mbsc-cal-c", c).offset().top,
                o = n.closest(".mbsc-cal-row").index() < 2;
            t = getComputedStyle(d.addClass("mbsc-cal-events-t").css({
                top: o ? r + s : "0",
                bottom: o ? "0" : a - r
            }).addClass("mbsc-cal-events-v")[0]).height, d.css(o ? "bottom" : "top", "auto").removeClass("mbsc-cal-events-t"), m.css("max-height", t), f.refresh(), f.scroll(0), o ? d.addClass("mbsc-cal-events-b") : d.removeClass("mbsc-cal-events-b"), $e(".mbsc-cal-events-arr", d).css("left", n.offset().left - d.offset().left + i / 2)
        }
        function s(a, s, i) {
            if (a) {
                var r, o, l, c, m, b = '<ul class="mbsc-cal-event-list">';
                h = i, $e.each(a, function(e, a) {
                    c = a.d || a.start, m = a.start && a.end && a.start.toDateString() !== a.end.toDateString(), l = a.color, r = "", o = "", c.getTime && (r = k((m ? "MM d yy " : "") + g.timeFormat, c)), a.end && (o = k((m ? "MM d yy " : "") + g.timeFormat, a.end)), b += '<li role="button" aria-label="' + a.text + (r ? ", " + g.fromText + " " + r : "") + (o ? ", " + g.toText + " " + o : "") + '" class="mbsc-cal-event"><div class="mbsc-cal-event-color" style="' + (l ? "background:" + l + ";" : "") + '"></div><div class="mbsc-cal-event-text">' + (!c.getTime || m || a.allDay ? "" : '<div class="mbsc-cal-event-time">' + k(g.timeFormat, c) + "</div>") + a.text + "</div>" + (a.start && a.end ? '<div class="mbsc-cal-event-dur">' + t(a.end - a.start) + "</div>" : "") + "</li>"
                }), b += "</ul>", u.html(b), e.trigger("onEventBubbleShow", {
                    target: h,
                    eventList: d[0]
                }), n(h), e.tap($e(".mbsc-cal-event", u), function(t) {
                    f.scrolled || e.trigger("onEventSelect", {
                        domEvent: t,
                        event: a[$e(this).index()],
                        date: s
                    })
                }), p = !0
            }
        }
        function i() {
            d && d.removeClass("mbsc-cal-events-v"), h = null, p = !1
        }
        function r() {
            i(), e.redraw()
        }
        function o(e) {
            return S(e.getFullYear(), e.getMonth(), e.getDate())
        }
        var l, c, d, m, u, h, f, p, b, v = Ke({}, e.settings),
            g = Ke(e.settings, Kt, v),
            x = 0,
            T = Ke(!0, [], g.data);
        return g.data = T, $e.each(T, function(e, t) {
            void 0 === t._id && (t._id = x++)
        }), l = yt.call(this, e), e._onSelectShow = function() {
            i()
        }, e._onGenMonth = function(t, a) {
            b = e._prepareObj(T, t, a)
        }, e._getDayProps = function(e) {
            var t = b[e],
                a = {
                    events: t
                };
            return g.marked || g.labels || (t ? (a.background = t[0] && t[0].background, a.marked = t, a.markup = g.showEventCount ? '<div class="mbsc-cal-txt">' + t.length + " " + (t.length > 1 ? g.eventsText : g.eventText) + "</div>" : '<div class="mbsc-cal-marks"><div class="mbsc-cal-mark"></div></div>') : a.markup = ""), a
        }, e.addEvent = function(e) {
            var t = [];
            return e = Ke(!0, [], $e.isArray(e) ? e : [e]), $e.each(e, function(e, a) {
                void 0 === a._id && (a._id = x++), T.push(a), t.push(a._id)
            }), r(), t
        }, e.removeEvent = function(e) {
            e = $e.isArray(e) ? e : [e], $e.each(e, function(e, t) {
                $e.each(T, function(e, a) {
                    if (a._id === t) return T.splice(e, 1), !1
                })
            }), r()
        }, e.getEvents = function(t) {
            var n;
            return t ? (t.setHours(0, 0, 0, 0), n = e._prepareObj(T, t.getFullYear(), t.getMonth()), n[t] ? a(n[t]) : []) : Ke(!0, [], T)
        }, e.setEvents = function(e) {
            var t = [];
            return g.data = T = Ke(!0, [], e), $e.each(T, function(e, a) {
                void 0 === a._id && (a._id = x++), t.push(a._id)
            }), r(), t
        }, Ke({}, l, {
            outerMonthChange: !1,
            headerText: !1,
            buttons: "inline" !== g.display ? ["close"] : g.buttons,
            onMarkupReady: function(t) {
                l.onMarkupReady.call(this, t), c = $e(t.target), d = $e('<div class="mbsc-cal-events ' + (g.eventBubbleClass || "") + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo($e(".mbsc-cal-c", c)), m = $e(".mbsc-cal-events-i", d), u = $e(".mbsc-cal-events-sc", d), f = new ut(m[0]), p = !1, e.tap(m, function() {
                    f.scrolled || i()
                })
            },
            onMonthChange: function() {
                i()
            },
            onDayChange: function(e) {
                var t = o(e.date),
                    n = e.target,
                    r = e.events,
                    l = g.eventBubble && h !== n;
                i(), r && a(r), l && s(r, t, n)
            },
            onPosition: function(e) {
                l.onPosition.call(this, e), p && n(h)
            },
            onHide: function() {
                l.onHide.call(this), f && f.destroy()
            }
        })
    }, o("eventcalendar", vt);
    var qt = function(e, t, a) {
        function n(e) {
            !$e(".mbsc-fr-c", e).hasClass("mbsc-wdg-c") && ve.SYcKw && ($e(".mbsc-fr-c", e).addClass("mbsc-wdg-c").append(o.show()), $e(".mbsc-w-p", e).length || $e(".mbsc-fr-c", e).addClass("mbsc-w-p"))
        }
        var s, i, r, o = $e(e),
            l = this;
        dt.call(this, e, t, !0), l._generateContent = function() {
            return ""
        }, l._markupReady = function(e) {
            "inline" != s.display && n(e)
        }, l._markupInserted = function(e) {
            "inline" == s.display && n(e), e.trigger("mbsc-enhance", [{
                theme: s.theme,
                lang: s.lang
            }])
        }, l._markupRemove = function() {
            o.hide(), i ? i.prepend(o) : r.after(o)
        }, l.__processSettings = function() {
            s = l.settings, l.buttons.ok = {
                text: s.okText,
                icon: s.okIcon,
                handler: "set"
            }, s.buttons = s.buttons || ("inline" == s.display ? [] : ["ok"]), i || r || (r = o.prev(), r.length || (i = o.parent())), o.hide()
        }, l.__init = function() {
            s.cssClass = (s.cssClass || "") + " mbsc-wdg"
        }, a || l.init(t)
    };
    qt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasContent: !0,
        _hasLang: !0,
        _class: "widget",
        _defaults: Ke({}, dt.prototype._defaults, {
            okText: "OK",
            headerText: !1
        })
    }, Je.Widget = qt, ve.themes.widget = ve.themes.frame;
    var Ut = Pe && !! window.Promise,
        Gt = [],
        Xt = [];
    ve.alert = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = ne(e), ce(se, t, e)
    }, ve.confirm = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = ne(e), ce(ie, t, e)
    }, ve.prompt = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = ne(e) + '<label class="mbsc-input">' + (e.label ? '<span class="mbsc-label">' + e.label + "</span>" : "") + '<input tabindex="0" type="' + (e.inputType || "text") + '" placeholder="' + (e.placeholder || "") + '" value="' + (e.value || "") + '"></label>', ce(re, t, e)
    }, ve.snackbar = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' + (e.message || "") + "</div>" + (e.button ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' + (e.button.text || "") + "</button>" : "") + "</div>", ce(oe, t, e)
    }, ve.toast = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = '<div class="mbsc-toast-msg">' + (e.message || "") + "</div>", ce(le, t, e)
    };
    var Zt = "ios" == Ae && Ie > 7,
        Qt = function(e, t) {
            function a() {
                i.removeClass("mbsc-no-touch")
            }
            var n, s = "",
                i = $e(e),
                r = {}, o = this;
            qe.call(this, e, t, !0), o.refresh = function(e) {
                W(i, r, n, e)
            }, o._init = function() {
                ve.themes.form[n.theme] || (n.theme = "mobiscroll"), i.hasClass("mbsc-form") || i.on("touchstart", a).show(), s && i.removeClass(s), s = "mbsc-form mbsc-no-touch mbsc-" + n.theme + (Zt ? " mbsc-form-hb" : "") + (n.baseTheme ? " mbsc-" + n.baseTheme : "") + (n.rtl ? " mbsc-rtl" : " mbsc-ltr"), i.addClass(s).removeClass("mbsc-cloak"), o.refresh()
            }, o._destroy = function() {
                i.removeClass(s).off("touchstart", a);
                for (var e in r) r[e].destroy()
            }, n = o.settings, o.init(t)
        };
    Qt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "form",
        _defaults: {
            tap: !0,
            stopProp: !0,
            lang: "en"
        }
    }, ve.themes.form.mobiscroll = {}, Je.Form = Qt, w("[mbsc-enhance],[mbsc-form]", Qt, !0);
    var ea = function(e, t) {
        var a = "",
            n = $e(e),
            s = this,
            i = s.settings;
        qe.call(this, e, t, !0), s._init = function() {
            var e = i.context,
                t = $e(e),
                s = t.find(".mbsc-ms-top .mbsc-ms"),
                r = t.find(".mbsc-ms-bottom .mbsc-ms"),
                o = {};
            "body" == e ? $e("body,html").addClass("mbsc-page-ctx") : t.addClass("mbsc-page-ctx"), a && n.removeClass(a), s.length && (o.paddingTop = s[0].offsetHeight), r.length && (o.paddingBottom = r[0].offsetHeight), a = "mbsc-page mbsc-" + i.theme + (i.baseTheme ? " mbsc-" + i.baseTheme : "") + (i.rtl ? " mbsc-rtl" : " mbsc-ltr"), n.addClass(a).removeClass("mbsc-cloak").css(o)
        }, s._destroy = function() {
            n.removeClass(a)
        }, i = s.settings, s.init(t)
    };
    ea.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "page",
        _defaults: {
            context: "body"
        }
    }, Je.Page = ea, ve.themes.page.mobiscroll = {}, w("[mbsc-page]", ea), o("page", ea, !1), o("form", Qt, !1), o("progress", jt, !1), o("slider", zt, !1), o("stepper", Lt, !1), o("switch", Yt, !1), o("rating", $t, !1);
    var ta = {
        invalid: [],
        showInput: !0,
        inputClass: "",
        itemSelector: "li"
    }, aa = function(e) {
        function t(e, t, n) {
            for (var s = 0, i = []; s < e;) i[s] = a(n, s, t), s++;
            return i
        }
        function a(e, t, a) {
            for (var n, s = 0, i = a, r = []; s < t;) {
                var o = e[s];
                for (n in i) if (i[n].key == o) {
                    i = i[n].children;
                    break
                }
                s++
            }
            for (s = 0; s < i.length;) i[s].invalid && r.push(i[s].key), s++;
            return r
        }
        function n(e, t) {
            for (var a = []; e;) a[--e] = !0;
            return a[t] = !1, a
        }
        function s(e, t, a) {
            var n, s, o, l = 0,
                c = [
                    []
                ],
                d = M;
            if (t) for (n = 0; n < t; n++) v ? c[0][n] = {} : c[n] = [{}];
            for (; l < e.length;) {
                for (v ? c[0][l] = r(d, C[l]) : c[l] = [r(d, C[l])], n = 0, o = void 0; n < d.length && void 0 === o;) d[n].key == e[l] && (void 0 !== a && l <= a || void 0 === a) && (o = n), n++;
                if (void 0 !== o && d[o].children) l++, d = d[o].children;
                else {
                    if (!(s = i(d)) || !s.children) return c;
                    l++, d = s.children
                }
            }
            return c
        }
        function i(e, t) {
            if (!e) return !1;
            for (var a, n = 0; n < e.length;) if (!(a = e[n++]).invalid) return t ? n - 1 : a;
            return !1
        }
        function r(e, t) {
            for (var a = {
                data: [],
                label: t
            }, n = 0; n < e.length;) a.data.push({
                value: e[n].key,
                display: e[n].value
            }), n++;
            return a
        }
        function o(t) {
            e._isVisible && $e(".mbsc-sc-whl-w", e._markup).css("display", "").slice(t).hide()
        }
        function l(e, t) {
            var a, n, s, r = [],
                o = M,
                l = 0,
                c = !1;
            if (void 0 !== e[l] && l <= t) for (a = 0, n = e[l], s = void 0; a < o.length && void 0 === s;) o[a].key != e[l] || o[a].invalid || (s = a), a++;
            else s = i(o, !0), n = o[s].key;
            for (c = void 0 !== s && o[s].children, r[l] = n; c;) {
                if (o = o[s].children, l++, c = !1, s = void 0, void 0 !== e[l] && l <= t) for (a = 0, n = e[l], s = void 0; a < o.length && void 0 === s;) o[a].key != e[l] || o[a].invalid || (s = a), a++;
                else s = i(o, !0), s = !1 === s ? void 0 : s, n = o[s].key;
                c = !(void 0 === s || !i(o[s].children)) && o[s].children, r[l] = n
            }
            return {
                lvl: l + 1,
                nVector: r
            }
        }
        function c(t) {
            var a = [];
            return y = y > _++ ? y : _, (t.length > 1 ? t : t.children(p.itemSelector)).each(function(t) {
                var n = $e(this),
                    s = n.clone();
                s.children("ul,ol").remove(), s.children(p.itemSelector).remove();
                var i = e._processMarkup ? e._processMarkup(s) : s.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                    r = !! n.attr("data-invalid"),
                    o = {
                        key: void 0 === n.attr("data-val") || null === n.attr("data-val") ? t : n.attr("data-val"),
                        value: i,
                        invalid: r,
                        children: null
                    }, l = "li" === p.itemSelector ? n.children("ul,ol") : n.children(p.itemSelector);
                l.length && (o.children = c(l)), a.push(o)
            }), _--, a
        }
        function d(t, a, n) {
            var i, r = (a || 0) + 1,
                l = [],
                c = {}, d = {};
            for (c = s(t, null, a), i = 0; i < t.length; i++) e._tempWheelArray[i] = t[i] = n.nVector[i] || 0;
            for (; r < n.lvl;) d[r] = v ? c[0][r] : c[r][0], l.push(r++);
            o(n.lvl), w = t.slice(0), l.length && (u = !0, e.changeWheel(d))
        }
        var m, u, h, f = Ke({}, e.settings),
            p = Ke(e.settings, ta, f),
            b = p.layout || (/top|bottom/.test(p.display) ? "liquid" : ""),
            v = "liquid" == b,
            g = p.readonly,
            x = $e(this),
            T = this.id + "_dummy",
            y = 0,
            _ = 0,
            w = [],
            M = p.wheelArray || c(x),
            C = function(e) {
                var t, a = [];
                for (t = 0; t < e; t++) a[t] = p.labels && p.labels[t] ? p.labels[t] : t;
                return a
            }(y),
            S = function(e) {
                for (var t, a = [], n = e, s = !0, r = 0; s;) t = i(n), a[r++] = t.key, (s = t.children) && (n = s);
                return a
            }(M),
            k = s(S, y);
        return $e("#" + T).remove(), p.input ? m = $e(p.input) : p.showInput && (m = $e('<input type="text" id="' + T + '" value="" class="' + p.inputClass + '" placeholder="' + (p.placeholder || "") + '" readonly />').insertBefore(x)), m && e.attachShow(m), p.wheelArray || x.hide(), {
            wheels: k,
            anchor: m,
            layout: b,
            headerText: !1,
            setOnTap: 1 == y,
            formatValue: function(e) {
                return void 0 === h && (h = l(e, e.length).lvl), e.slice(0, h).join(" ")
            },
            parseValue: function(e) {
                return e ? (e + "").split(" ") : (p.defaultValue || S).slice(0)
            },
            onBeforeShow: function() {
                var t = e.getArrayVal(!0);
                w = t.slice(0), p.wheels = s(t, y, y), u = !0
            },
            onWheelGestureStart: function(e) {
                p.readonly = n(y, e.index)
            },
            onWheelAnimationEnd: function(t) {
                var a = t.index,
                    n = e.getArrayVal(!0),
                    s = l(n, a);
                h = s.lvl, p.readonly = g, n[a] != w[a] && d(n, a, s)
            },
            onFill: function(e) {
                h = void 0, m && m.val(e.valueText)
            },
            validate: function(e) {
                var a = e.values,
                    n = e.index,
                    s = l(a, a.length);
                return h = s.lvl, void 0 === n && (o(s.lvl), u || d(a, n, s)), u = !1, {
                    disabled: t(h, M, a)
                }
            },
            onDestroy: function() {
                m && $e("#" + T).remove(), x.show()
            }
        }
    };
    ht.image = function(e) {
        return e.settings.enhance && (e._processMarkup = function(e) {
            var t = e.attr("data-icon");
            return e.children().each(function(e, t) {
                t = $e(t), t.is("img") ? $e('<div class="mbsc-img-c"></div>').insertAfter(t).append(t.addClass("mbsc-img")) : t.is("p") && t.addClass("mbsc-img-txt")
            }), t && e.prepend('<div class="mbsc-ic mbsc-ic-' + t + '"></div'), e.html('<div class="mbsc-img-w">' + e.html() + "</div>"), e.html()
        }), aa.call(this, e)
    }, o("image", vt);
    var na, sa = 1,
        ia = "transparent",
        ra = function(e, t) {
            function a() {
                Ct = !1, vt = !1, ee = 0, Ht = 0, Pt = new Date, et = re.width(), ce = E(re), nt = ce.index(tt), at = tt[0].offsetHeight, oa = tt[0].offsetTop, Jt = Bt[tt.attr("data-type") || "defaults"], Ft = Jt.stages
            }
            function n(e) {
                var t;
                "touchstart" === e.type && (gt = !0, clearTimeout(xt)), !A(e, this) || X || aa || na || ma || !ve.SYcKw || (X = !0, te = !0, Lt = T(e, "X"), Ot = T(e, "Y"), pe = 0, be = 0, tt = $e(this), t = tt, a(), $t = Dt.onItemTap || Jt.tap || tt.hasClass("mbsc-lv-parent") || tt.hasClass("mbsc-lv-back"), rt = tt.offset().top, $t && (Q = setTimeout(function() {
                    t.addClass("mbsc-lv-item-active"), Se("onItemActivate", {
                        target: t[0],
                        domEvent: e
                    })
                }, 120)), Qt.sortable && !tt.hasClass("mbsc-lv-back") && (Qt.sortable.group || (pt = tt.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), Tt = tt.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")), dt = (Qt.sortable.group ? re.children(it).eq(0) : Tt.length ? Tt.eq(-1) : tt)[0].offsetTop - oa, ct = (Qt.sortable.group ? re.children(it).eq(-1) : pt.length ? pt.eq(-1) : tt)[0].offsetTop - oa, Qt.sortable.handle ? $e(e.target).hasClass("mbsc-lv-handle") && (clearTimeout(Q), "Moz" === Qe ? (e.preventDefault(), d()) : Rt = setTimeout(function() {
                    d()
                }, 100)) : Rt = setTimeout(function() {
                    ke.appendTo(tt), ke[0].style[Qe + "Animation"] = "mbsc-lv-fill " + (Dt.sortDelay - 100) + "ms linear", clearTimeout(we), clearTimeout(Q), te = !1, Rt = setTimeout(function() {
                        ke[0].style[Qe + "Animation"] = "", d()
                    }, Dt.sortDelay - 80)
                }, 80)), "mousedown" == e.type && $e(document).on("mousemove", s).on("mouseup", i))
            }
            function s(e) {
                var t = !1,
                    a = !0;
                if (X) if (Me = T(e, "X"), Ce = T(e, "Y"), pe = Me - Lt, be = Ce - Ot, clearTimeout(we), ye || Yt || Nt || tt.hasClass("mbsc-lv-back") || (Math.abs(be) > 10 ? (Nt = !0, i(Ke({}, e, {
                    type: "mousemove" == e.type ? "mouseup" : "touchend"
                })), clearTimeout(Q)) : Math.abs(pe) > 7 && r()), Yt) e.preventDefault(), ee = pe / et * 100, o();
                else if (ye) {
                    e.preventDefault();
                    var n, s = Ut.scrollTop(),
                        l = Math.max(dt, Math.min(be + Xt, ct)),
                        c = Ie ? rt - Zt + s - Xt : rt;
                    Gt + s < c + l + at ? (Ut.scrollTop(c + l - Gt + at), n = !0) : c + l < s && (Ut.scrollTop(c + l), n = !0), n && (Xt += Ut.scrollTop() - s), ht && (Qt.sortable.multiLevel && ut.hasClass("mbsc-lv-parent") ? oa + at / 4 + l > ht ? t = !0 : oa + at - at / 4 + l > ht && (xe = ut.addClass("mbsc-lv-item-hl"), a = !1) : oa + at / 2 + l > ht && (ut.hasClass("mbsc-lv-back") ? Qt.sortable.multiLevel && (Te = ut.addClass("mbsc-lv-item-hl"), a = !1) : t = !0), t && (yt.insertAfter(ut), _t = ut, ut = z(ut, "next"), wt = ht, ht = ut.length && ut[0].offsetTop, ie++)), !t && wt && (Qt.sortable.multiLevel && _t.hasClass("mbsc-lv-parent") ? oa + at - at / 4 + l < wt ? t = !0 : oa + at / 4 + l < wt && (xe = _t.addClass("mbsc-lv-item-hl"), a = !1) : oa + at / 2 + l < wt && (_t.hasClass("mbsc-lv-back") ? Qt.sortable.multiLevel && (Te = _t.addClass("mbsc-lv-item-hl"), a = !1) : t = !0), t && (yt.insertBefore(_t), ut = _t, _t = z(_t, "prev"), ht = wt, wt = _t.length && _t[0].offsetTop + _t[0].offsetHeight, ie--)), a && (xe && (xe.removeClass("mbsc-lv-item-hl"), xe = !1), Te && (Te.removeClass("mbsc-lv-item-hl"), Te = !1)), t && Se("onSortChange", [tt, ie]), k(tt, l), Se("onSort", [tt, ie])
                } else(Math.abs(pe) > 5 || Math.abs(be) > 5) && D()
            }
            function i(e) {
                var t, a, n, r = tt;
                X && (X = !1, D(), "mouseup" == e.type && $e(document).off("mousemove", s).off("mouseup", i), Nt || (xt = setTimeout(function() {
                    gt = !1
                }, 300)), (Yt || Nt || ye) && (vt = !0), Yt ? c() : ye ? (n = re, xe ? (H(tt.detach()), a = da[xe.attr("data-ref")], ie = E(a.child).length, xe.removeClass("mbsc-lv-item-hl"), Dt.navigateOnDrop ? K(xe, function() {
                    Qt.add(null, tt, null, null, xe, !0), J(tt), u(tt, nt, n, !0)
                }) : (Qt.add(null, tt, null, null, xe, !0), u(tt, nt, n, !0))) : Te ? (H(tt.detach()), a = da[Te.attr("data-back")], ie = E(a.parent).index(a.item) + 1, Te.removeClass("mbsc-lv-item-hl"), Dt.navigateOnDrop ? K(Te, function() {
                    Qt.add(null, tt, ie, null, re, !0), J(tt), u(tt, nt, n, !0)
                }) : (Qt.add(null, tt, ie, null, a.parent, !0), u(tt, nt, n, !0))) : (t = yt[0].offsetTop - oa, k(tt, t, 6 * Math.abs(t - Math.max(dt, Math.min(be + Xt, ct))), function() {
                    H(tt), tt.insertBefore(yt), u(tt, nt, n, ie !== nt)
                })), ye = !1) : !Nt && Math.abs(pe) < 5 && Math.abs(be) < 5 && (Jt.tap && Jt.tap.call(ea, {
                    target: tt,
                    index: nt,
                    domEvent: e
                }, Qt), $t && ("touchend" === e.type && g(), tt.addClass("mbsc-lv-item-active"), Se("onItemActivate", {
                    target: tt[0],
                    domEvent: e
                })), !1 !== Se("onItemTap", {
                    target: tt[0],
                    index: nt,
                    domEvent: e
                }) && K(tt)), clearTimeout(Q), setTimeout(function() {
                    r.removeClass("mbsc-lv-item-active"), Se("onItemDeactivate", {
                        target: r[0]
                    })
                }, 100), Nt = !1, de = null)
            }
            function r() {
                (Yt = P(Jt.swipe, {
                    target: tt[0],
                    index: nt,
                    direction: pe > 0 ? "right" : "left"
                })) && (D(), clearTimeout(Q), Jt.actions ? (Z = R(Jt, pe), mt.html(Jt.icons).show().children().css("width", Z + "%"), Ue.hide(), $e(".mbsc-lv-ic-m", Xe).removeClass("mbsc-lv-ic-disabled"), $e(Jt.leftMenu).each(y), $e(Jt.rightMenu).each(y)) : (Ue.show(), mt.hide(), me = Jt.start + (pe > 0 ? 0 : 1), Mt = Ft[me - 1], ft = Ft[me]), tt.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), Wt.css("line-height", at + "px"), Xe.css({
                    top: oa,
                    height: at,
                    backgroundColor: $(pe)
                }).addClass("mbsc-lv-stage-c-v").appendTo(re.parent()), Dt.iconSlide && tt.append(Ue), Se("onSlideStart", {
                    target: tt[0],
                    index: nt
                }))
            }
            function o() {
                var e = !1;
                kt || (Jt.actions ? Xe.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (ee < 0 ? "right" : "left")) : (Mt && ee <= Mt.percent ? (me--, ft = Mt, Mt = Ft[me], e = !0) : ft && ee >= ft.percent && (me++, Mt = ft, ft = Ft[me], e = !0), e && (de = ee > 0 ? Mt : ft) && (N(de, Dt.iconSlide), Se("onStageChange", {
                    target: tt[0],
                    index: nt,
                    stage: de
                }))), At || (kt = !0, St = Ee(M)))
            }
            function c(e) {
                var t, a, n, s = !1;
                Ye(St), kt = !1, At || M(), Jt.actions ? Math.abs(ee) > 10 && Z && (S(tt, ee < 0 ? -Z : Z, 200), s = !0, na = !0, ae = tt, ne = nt, $e(document).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(t) {
                    t.preventDefault(), C(tt, !0, e)
                })) : ee && (Dt.quickSwipe && !At && (n = new Date - Pt, t = n < 300 && pe < -50, a = n < 300 && pe > 50, t ? (Ct = !0, de = Jt.left, N(de, Dt.iconSlide)) : a && (Ct = !0, de = Jt.right, N(de, Dt.iconSlide))), de && de.action && ((fe = P(de.disabled, {
                    target: tt[0],
                    index: nt
                })) || (s = !0, na = At || P(de.confirm, {
                    target: tt[0],
                    index: nt
                }), na ? (S(tt, (ee < 0 ? -1 : 1) * Ue[0].offsetWidth * 100 / et, 200, !0), w(de, tt, nt, !1, e)) : _(de, tt, nt, e)))), s || C(tt, !0, e), Yt = !1
            }
            function d() {
                ye = !0, xe = !1, Te = !1, Xt = 0, ie = nt, Dt.vibrate && p(), ut = z(tt, "next"), ht = ut.length && ut[0].offsetTop, _t = z(tt, "prev"), wt = _t.length && _t[0].offsetTop + _t[0].offsetHeight, yt.height(at).insertAfter(tt), tt.css({
                    top: oa
                }).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(_e), Se("onSortStart", {
                    target: tt[0],
                    index: ie
                })
            }
            function u(e, t, a, n) {
                e.removeClass("mbsc-lv-item-dragging"), yt.remove(), Se("onSortEnd", {
                    target: e[0],
                    index: ie
                }), Dt.vibrate && p(), n && (Qt.addUndoAction(function(n) {
                    Qt.move(e, t, null, n, a, !0)
                }, !0), Se("onSortUpdate", {
                    target: e[0],
                    index: ie
                }))
            }
            function h() {
                gt || (clearTimeout(ze), na && $e(document).trigger("touchstart"), Le && (Qt.close(Pe, Oe), Le = !1, Pe = null))
            }
            function b() {
                clearTimeout(ue), ue = setTimeout(function() {
                    Gt = Ut[0].innerHeight || Ut.innerHeight(), Zt = Ie ? Ut.offset().top : 0, X && (oa = tt[0].offsetTop, at = tt[0].offsetHeight, Xe.css({
                        top: oa,
                        height: at
                    }))
                }, 200)
            }
            function v(e) {
                vt && (e.stopPropagation(), e.preventDefault(), vt = !1)
            }
            function x() {
                if (ye || !X) {
                    var e, t = Ut.scrollTop(),
                        a = ta.offset().top,
                        n = ta[0].offsetHeight,
                        s = Ie ? Ut.offset().top : t;
                    $e(".mbsc-lv-gr-title", ta).each(function(t, a) {
                        $e(a).offset().top < s && (e = a)
                    }), a < s && a + n > s ? Ne.show().empty().append($e(e).clone()) : Ne.hide()
                }
            }
            function y(e, t) {
                P(t.disabled, {
                    target: tt[0],
                    index: nt
                }) && $e(".mbsc-ic-" + t.icon, Xe).addClass("mbsc-lv-ic-disabled")
            }
            function _(e, t, a, n) {
                var s, i = {
                    icon: "undo2",
                    text: Dt.undoText,
                    color: "#b1b1b1",
                    action: function() {
                        Qt.undo()
                    }
                };
                e.undo && (Qt.startActionTrack(), $e.isFunction(e.undo) && Qt.addUndoAction(function() {
                    e.undo.call(ea, {
                        target: t[0],
                        index: a
                    }, Qt)
                }), Kt = t.attr("data-ref")), s = e.action.call(ea, {
                    target: t[0],
                    index: a
                }, Qt), e.undo ? (Qt.endActionTrack(), !1 !== s && S(t, +t.attr("data-pos") < 0 ? -100 : 100, 200), yt.height(at).insertAfter(t), t.css("top", oa).addClass("mbsc-lv-item-undo"), mt.hide(), Ue.show(), Xe.append(Ue), N(i), w(i, t, a, !0, n)) : C(t, s, n)
            }
            function w(e, t, a, n, s) {
                var i, r;
                na = !0, $e(document).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(e) {
                    e.preventDefault(), n && F(t), C(t, !0, s)
                }), he || Ue.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function(e) {
                    e.stopPropagation(), i = T(e, "X"), r = T(e, "Y")
                }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function(o) {
                    o.preventDefault(), "touchend" === o.type && g(), Math.abs(T(o, "X") - i) < 10 && Math.abs(T(o, "Y") - r) < 10 && (_(e, t, a, s), n && (qt = null, F(t)))
                })
            }
            function M() {
                S(tt, Ht + 100 * pe / et), kt = !1
            }
            function C(e, t, a) {
                $e(document).off(".mbsc-lv-conf"), Ue.off(".mbsc-lv-conf"), !1 !== t ? S(e, 0, "0" !== e.attr("data-pos") ? 200 : 0, !1, function() {
                    I(e, a), H(e)
                }) : I(e, a), na = !1
            }
            function S(e, t, a, n, s) {
                t = Math.max("right" == Yt ? 0 : -100, Math.min(t, "left" == Yt ? 0 : 100)), Et = e[0].style, e.attr("data-pos", t), Et[Qe + "Transform"] = "translate3d(" + (n ? et * t / 100 + "px" : t + "%") + ",0,0)", Et[Qe + "Transition"] = Ze + "transform " + (a || 0) + "ms", s && (aa++, setTimeout(function() {
                    s(), aa--
                }, a)), ee = t
            }
            function k(e, t, a, n) {
                t = Math.max(dt, Math.min(t, ct)), Et = e[0].style, Et[Qe + "Transform"] = "translate3d(0," + t + "px,0)", Et[Qe + "Transition"] = Ze + "transform " + (a || 0) + "ms ease-out", n && (aa++, setTimeout(function() {
                    n(), aa--
                }, a))
            }
            function D() {
                clearTimeout(Rt), !te && Qt.sortable && (te = !0, ke.remove())
            }
            function N(e, t) {
                var a = P(e.text, {
                    target: tt[0],
                    index: nt
                }) || "";
                P(e.disabled, {
                    target: tt[0],
                    index: nt
                }) ? Xe.addClass("mbsc-lv-ic-disabled") : Xe.removeClass("mbsc-lv-ic-disabled"), Xe.css("background-color", e.color || (0 === e.percent ? $(ee) : ia)), Ue.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (t ? "move-" : "") + (ee < 0 ? "right" : "left")), Be.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (e.icon || "none")), Wt.attr("class", "mbsc-lv-ic-text" + (e.icon ? "" : " mbsc-lv-ic-text-only") + (a ? "" : " mbsc-lv-ic-only")).html(a || "&nbsp;"), Dt.animateIcons && (Ct ? Be.addClass("mbsc-lv-ic-v") : setTimeout(function() {
                    Be.addClass("mbsc-lv-ic-a")
                }, 10))
            }
            function I(e, t) {
                X || (Be.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), Xe.attr("style", "").removeClass("mbsc-lv-stage-c-v"), Wt.html("")), Xe.removeClass("mbsc-lv-left mbsc-lv-right"), e && (Se("onSlideEnd", {
                    target: e[0],
                    index: nt
                }), t && t())
            }
            function F(e) {
                e.css("top", "").removeClass("mbsc-lv-item-undo"), qt ? Qt.animate(yt, "collapse", function() {
                    yt.remove()
                }) : yt.remove(), I(), Kt = null, qt = null
            }
            function H(e) {
                Et = e[0].style, Et[Qe + "Transform"] = "", Et[Qe + "Transition"] = "", Et.top = "", e.removeClass("mbsc-lv-item-swiping")
            }
            function P(e, t) {
                return $e.isFunction(e) ? e.call(this, t, Qt) : e
            }
            function L(e) {
                var t, a = e.attr("data-role");
                if (e.attr("data-ref") || (t = sa++, e.attr("data-ref", t), da[t] = {
                    item: e,
                    child: e.children(lt),
                    parent: e.parent(),
                    ref: e.parent()[0] === ea ? null : e.parent().parent().attr("data-ref")
                }), e.addClass("list-divider" == a ? "mbsc-lv-gr-title" : "mbsc-lv-item"), Qt.sortable.handle && "list-divider" != a && !e.children(".mbsc-lv-handle-c").length && e.append(Fe), Dt.enhance && !e.hasClass("mbsc-lv-item-enhanced")) {
                    var n = e.attr("data-icon"),
                        s = e.find("img").eq(0).addClass("mbsc-lv-img");
                    s.is(":first-child") ? e.addClass("mbsc-lv-img-" + (Dt.rtl ? "right" : "left")) : s.length && e.addClass("mbsc-lv-img-" + (Dt.rtl ? "left" : "right")), e.addClass("mbsc-lv-item-enhanced").children().each(function(e, t) {
                        t = $e(t), t.is("p, h1, h2, h3, h4, h5, h6") && t.addClass("mbsc-lv-txt")
                    }), n && e.addClass("mbsc-lv-item-ic-" + (e.attr("data-icon-align") || (Dt.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + n + '"></div>')
                }
            }
            function O(e) {
                $e(it, e).not(".mbsc-lv-item").each(function() {
                    L($e(this))
                }), $e(lt, e).not(".mbsc-lv").addClass("mbsc-lv").prepend(We).parent().addClass("mbsc-lv-parent").prepend(Je), $e(".mbsc-lv-back", e).each(function() {
                    $e(this).attr("data-back", $e(this).parent().parent().attr("data-ref"))
                })
            }
            function E(e) {
                return e.children(it).not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph")
            }
            function Y(e) {
                return "object" !== (void 0 === e ? "undefined" : ge(e)) && (e = $e(it, se).filter('[data-id="' + e + '"]')), $e(e)
            }
            function j(e) {
                for (var t = 0, a = da[e.attr("data-ref")]; a && a.ref;) t++, a = da[a.ref];
                return t
            }
            function z(e, t) {
                for (e = e[t](); e.length && (!e.hasClass("mbsc-lv-item") || e.hasClass("mbsc-lv-ph") || e.hasClass("mbsc-lv-item-dragging"));) {
                    if (!Qt.sortable.group && e.hasClass("mbsc-lv-gr-title")) return !1;
                    e = e[t]()
                }
                return e
            }
            function $(e) {
                return (e > 0 ? Jt.right : Jt.left).color || ia
            }
            function W(e) {
                return m(e) ? e + "" : 0
            }
            function R(e, t) {
                return +(t < 0 ? W((e.actionsWidth || 0).right) || W(e.actionsWidth) || W(Dt.actionsWidth.right) || W(Dt.actionsWidth) : W((e.actionsWidth || 0).left) || W(e.actionsWidth) || W(Dt.actionsWidth.left) || W(Dt.actionsWidth))
            }
            function J(e, t) {
                if (e) {
                    var a = Ut.scrollTop(),
                        n = e.is(".mbsc-lv-item") ? e[0].offsetHeight : 0,
                        s = e.offset().top + (Ie ? a - Zt : 0);
                    t ? (s < a || s + n > a + Gt) && Ut.scrollTop(s) : s < a ? Ut.scrollTop(s) : s + n > a + Gt && Ut.scrollTop(Math.min(s, s + n - Gt / 2))
                }
            }
            function B(e, t, a, n, s) {
                var i = t.parent(),
                    r = t.prev();
                n = n || l, r[0] === Ue[0] && (r = Ue.prev()), re[0] !== t[0] ? (Se("onNavStart", {
                    level: ra,
                    direction: e,
                    list: t[0]
                }), Vt.prepend(t.addClass("mbsc-lv-v mbsc-lv-sl-new")), J(se), q(Vt, "mbsc-lv-sl-" + e, function() {
                    re.removeClass("mbsc-lv-sl-curr"), t.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr"), oe && oe.length ? re.removeClass("mbsc-lv-v").insertAfter(oe) : le.append(re.removeClass("mbsc-lv-v")), oe = r, le = i, re = t, J(a, s), n.call(ea, a), Se("onNavEnd", {
                        level: ra,
                        direction: e,
                        list: t[0]
                    })
                })) : (J(a, s), n.call(ea, a))
            }
            function K(e, t) {
                aa || (e.hasClass("mbsc-lv-parent") ? (ra++, B("r", da[e.attr("data-ref")].child, null, t)) : e.hasClass("mbsc-lv-back") && (ra--, B("l", da[e.attr("data-back")].parent, da[e.attr("data-back")].item, t)))
            }
            function q(e, t, a) {
                function n() {
                    clearTimeout(s), aa--, e.off(Ge, n).removeClass(t), a.call(ea, e)
                }
                var s;
                a = a || l, Dt.animation && "mbsc-lv-item-none" !== t ? (aa++, e.on(Ge, n).addClass(t), s = setTimeout(n, 500)) : a.call(ea, e)
            }
            function U(e, t) {
                var a, n = e.attr("data-ref");
                a = ca[n] = ca[n] || [], t && a.push(t), e.attr("data-action") || (t = a.shift(), e.attr("data-action", 1), t(function() {
                    e.removeAttr("data-action"), a.length ? U(e) : delete ca[n]
                }))
            }
            function G(e, t, a) {
                var n, s;
                e && e.length && (n = 100 / (e.length + 2), $e.each(e, function(i, r) {
                    void 0 === r.key && (r.key = It++), void 0 === r.percent && (r.percent = t * n * (i + 1), a && (s = Ke({}, r), s.key = It++, s.percent = -n * (i + 1), e.push(s), la[s.key] = s)), la[r.key] = r
                }))
            }
            var X, Z, Q, ee, te, ae, ne, se, ie, re, oe, le, ce, de, me, ue, he, fe, pe, be, xe, Te, ye, _e, we, Me, Ce, Se, ke, De, Ne, Ae, Ve, Ie, Fe, He, Pe, Le, Oe, je, ze, We, Je, Be, Ue, Xe, et, tt, at, nt, st, it, rt, ot, lt, ct, dt, mt, ut, ht, ft, pt, bt, vt, gt, xt, Tt, yt, _t, wt, Mt, Ct, St, kt, Dt, Nt, At, Vt, It, Ft, Ht, Pt, Lt, Ot, Et, Yt, jt, zt, $t, Wt, Rt, Jt, Bt, Kt, qt, Ut, Gt, Xt, Zt, Qt = this,
                ea = e,
                ta = $e(ea),
                aa = 0,
                ra = 0,
                oa = 0,
                la = {}, ca = {}, da = {};
            qe.call(this, e, t, !0), Qt.animate = function(e, t, a) {
                q(e, "mbsc-lv-item-" + t, a)
            }, Qt.add = function(e, t, a, n, s, i) {
                var r, o, c, d, m, u, h = "",
                    f = void 0 === s ? ta : Y(s),
                    p = f,
                    b = $e("object" !== (void 0 === t ? "undefined" : ge(t)) ? "<" + st + ' data-ref="' + sa+++'" data-id="' + e + '">' + t + "</" + st + ">" : t),
                    v = b.attr("data-pos") < 0 ? "left" : "right",
                    g = b.attr("data-ref");
                n = n || l, g || (g = sa++, b.attr("data-ref", g)), L(b), i || Qt.addUndoAction(function(e) {
                    d ? Qt.navigate(f, function() {
                        p.remove(), f.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove(), m.child = f.children(lt), Qt.remove(b, null, e, !0)
                    }) : Qt.remove(b, null, e, !0)
                }, !0), U(b, function(e) {
                    H(b.css("top", "").removeClass("mbsc-lv-item-undo")), f.is(it) ? (u = f.attr("data-ref"), f.children(lt).length || (d = !0, f.append("<" + ot + "></" + ot + ">"))) : u = f.children(".mbsc-lv-back").attr("data-back"), m = da[u], m && (m.child.length ? p = m.child : (f.addClass("mbsc-lv-parent").prepend(Je), p = f.children(lt).prepend(We).addClass("mbsc-lv"), m.child = p, $e(".mbsc-lv-back", f).attr("data-back", u))), da[g] = {
                        item: b,
                        child: b.children(lt),
                        parent: p,
                        ref: u
                    }, c = E(p), o = c.length, void 0 !== a && null !== a || (a = o), i && (h = "mbsc-lv-item-new-" + (i ? v : "")), O(b.addClass(h)), !1 !== a && (o ? a < o ? b.insertBefore(c.eq(a)) : b.insertAfter(c.eq(o - 1)) : (r = $e(".mbsc-lv-back", p), r.length ? b.insertAfter(r) : p.append(b))), p.hasClass("mbsc-lv-v") ? Qt.animate(b.height(b[0].offsetHeight), i && Kt === g ? "none" : "expand", function(t) {
                        Qt.animate(t.height(""), i ? "add-" + v : "pop-in", function(t) {
                            n.call(ea, t.removeClass(h)), e()
                        })
                    }) : (n.call(ea, b.removeClass(h)), e()), se.trigger("mbsc-refresh"), Se("onItemAdd", {
                        target: b[0]
                    })
                })
            }, Qt.swipe = function(e, t, n, s, i) {
                e = Y(e), tt = e, he = s, At = !0, X = !0, n = void 0 === n ? 300 : n, pe = t > 0 ? 1 : -1, a(), r(), S(e, t, n), clearTimeout(zt), clearInterval(jt), jt = setInterval(function() {
                    ee = V(e) / et * 100, o()
                }, 10), zt = setTimeout(function() {
                    clearInterval(jt), ee = t, o(), c(i), he = !1, At = !1, X = !1
                }, n)
            }, Qt.openStage = function(e, t, a, n) {
                la[t] && Qt.swipe(e, la[t].percent, a, n)
            }, Qt.openActions = function(e, t, a, n) {
                e = Y(e);
                var s = R(Bt[e.attr("data-type") || "defaults"], "left" == t ? -1 : 1);
                Qt.swipe(e, "left" == t ? -s : s, a, n)
            }, Qt.close = function(e, t) {
                Qt.swipe(e, 0, t)
            }, Qt.remove = function(e, t, a, n) {
                var s, i, r;
                a = a || l, e = Y(e), e.length && (i = e.parent(), s = E(i).index(e), r = e[0].style, n || (e.attr("data-ref") === Kt && (qt = !0), Qt.addUndoAction(function(t) {
                    Qt.add(null, e, s, t, i, !0)
                }, !0)), U(e, function(s) {
                    t = t || (e.attr("data-pos") < 0 ? "left" : "right"), i.hasClass("mbsc-lv-v") ? Qt.animate(e.addClass("mbsc-lv-removed"), n ? "pop-out" : "remove-" + t, function(e) {
                        r.height = e[0].offsetHeight + "px", Qt.animate(e, "collapse", function(e) {
                            r.height = "", H(e.removeClass("mbsc-lv-removed")), !1 !== a.call(ea, e) && e.remove(), s()
                        })
                    }) : (!1 !== a.call(ea, e) && e.remove(), s()), Se("onItemRemove", {
                        target: e[0]
                    })
                }))
            }, Qt.move = function(e, t, a, n, s, i) {
                e = Y(e), i || Qt.startActionTrack(), Xe.append(Ue), Qt.remove(e, a, null, i), Qt.add(null, e, t, n, s, i), i || Qt.endActionTrack()
            }, Qt.navigate = function(e, t) {
                var a, n;
                e = Y(e), a = da[e.attr("data-ref")], n = j(e), a && (B(n >= ra ? "r" : "l", a.parent, e, t, !0), ra = n)
            }, Qt._processSettings = function() {
                ta.is("[mbsc-enhance]") && (Ae = !0, ta.removeAttr("mbsc-enhance"))
            }, Qt._init = function() {
                var e, t, a, r = 0,
                	fl = ta.find(lt).length ? "left" : "right",
                    o = "",
                    l = "",
                    c = "";
                ot = Dt.listNode, lt = Dt.listSelector, st = Dt.itemNode, it = Dt.itemSelector, 
                a = Dt.sort || Dt.sortable || !1, "group" === a && (a = {
					group: !1,
					multiLevel: !0
				}), a === !0 && (a = {
					group: !0,
					multiLevel: !0,
					handle: Dt.sortHandle
				}), a && void 0 === a.handle && (a.handle = Dt.sortHandle), a.handle && (Ve = a.handle === !0 ? fl : a.handle, Fe = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + Ve + ' mbsc-lv-handle"><div class="' + Dt.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + Dt.handleMarkup + "</div></div>"), We = "<" + st + ' class="mbsc-lv-item mbsc-lv-back">' + Dt.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + Dt.leftArrowClass + '"></div></' + st + ">", Je = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + Dt.rightArrowClass + '"></div>', e = "mbsc-lv-cont mbsc-lv-" + Dt.theme + (Fe ? " mbsc-lv-hb" : "") + (Dt.rtl ? " mbsc-lv-rtl" : "") + (Dt.baseTheme ? " mbsc-lv-" + Dt.baseTheme : "") + (Dt.animateIcons ? " mbsc-lv-ic-anim" : "") + (Dt.striped ? " mbsc-lv-alt-row" : "") + (Dt.fixedHeader ? " mbsc-lv-has-fixed-header" : "") + (a.handle ? " mbsc-lv-handle-" + Ve : ""),
                Qt.sortable = a || !1, se ? (se.attr("class", e), a.handle && $e(".mbsc-lv-handle-c", se).remove(), $e(it, se).not(".mbsc-lv-back").removeClass("mbsc-lv-item")) : (o += '<div class="mbsc-lv-multi-c"></div>', o += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>', ta.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").removeClass("mbsc-cloak").show(), Xe = $e('<div class="mbsc-lv-stage-c">' + o + "</div>"), Ue = $e(".mbsc-lv-ic-c", Xe), mt = $e(".mbsc-lv-multi-c", Xe), Be = $e(".mbsc-lv-ic-s", Xe), Wt = $e(".mbsc-lv-ic-text", Xe), yt = $e("<" + st + ' class="mbsc-lv-item mbsc-lv-ph"></' + st + ">"), ke = $e('<div class="mbsc-lv-fill-item"></div>'), se = $e('<div class="' + e + '"><' + ot + ' class="mbsc-lv mbsc-lv-dummy"></' + ot + '><div class="mbsc-lv-sl-c"></div></div>'), Ie = "body" !== Dt.context, Ut = $e(Ie ? Dt.context : window), _e = $e(".mbsc-lv-dummy", se), se.insertAfter(ta), Ut.on("orientationchange resize", b), b(), se.on("touchstart mousedown", ".mbsc-lv-item", n).on("touchmove", ".mbsc-lv-item", s).on("touchend touchcancel", ".mbsc-lv-item", i), ea.addEventListener("click", v, !0), se.on("touchstart mousedown", ".mbsc-lv-ic-m", function(e) {
                    he || (e.stopPropagation(), e.preventDefault()), Lt = T(e, "X"), Ot = T(e, "Y")
                }).on("touchend mouseup", ".mbsc-lv-ic-m", function(e) {
                    he || ("touchend" === e.type && g(), na && !$e(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(T(e, "X") - Lt) < 10 && Math.abs(T(e, "Y") - Ot) < 10 && _((ee < 0 ? Jt.rightMenu : Jt.leftMenu)[$e(this).index()], ae, ne))
                }), Vt = $e(".mbsc-lv-sl-c", se).append(ta.addClass("mbsc-lv-sl-curr")).attr("data-ref", sa++), re = ta, le = se), O(ta), It = 0, Bt = Dt.itemGroups || {}, Bt.defaults = {
                    swipeleft: Dt.swipeleft,
                    swiperight: Dt.swiperight,
                    stages: Dt.stages,
                    actions: Dt.actions,
                    actionsWidth: Dt.actionsWidth
                }, $e.each(Bt, function(e, t) {
                    if (t.swipe = void 0 !== t.swipe ? t.swipe : Dt.swipe, t.stages = t.stages || [], G(t.stages, 1, !0), G(t.stages.left, 1), G(t.stages.right, -1), (t.stages.left || t.stages.right) && (t.stages = [].concat(t.stages.left || [], t.stages.right || [])), De = !1, t.stages.length || (t.swipeleft && t.stages.push({
                        percent: -30,
                        action: t.swipeleft
                    }), t.swiperight && t.stages.push({
                        percent: 30,
                        action: t.swiperight
                    })), $e.each(t.stages, function(e, t) {
                        if (0 === t.percent) return De = !0, !1
                    }), De || t.stages.push({
                        percent: 0
                    }), t.stages.sort(function(e, t) {
                        return e.percent - t.percent
                    }), $e.each(t.stages, function(e, a) {
                        if (0 === a.percent) return t.start = e, !1
                    }), De ? t.left = t.right = t.stages[t.start] : (t.left = t.stages[t.start - 1] || {}, t.right = t.stages[t.start + 1] || {}), t.actions) {
                        for (t.leftMenu = t.actions.left || t.actions, t.rightMenu = t.actions.right || t.leftMenu, l = "", c = "", r = 0; r < t.leftMenu.length; r++) l += "<div " + (t.leftMenu[r].color ? 'style="background-color: ' + t.leftMenu[r].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.leftMenu[r].icon + '">' + (t.leftMenu[r].text || "") + "</div>";
                        for (r = 0; r < t.rightMenu.length; ++r) c += "<div " + (t.rightMenu[r].color ? 'style="background-color: ' + t.rightMenu[r].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.rightMenu[r].icon + '">' + (t.rightMenu[r].text || "") + "</div>";
                        t.actions.left && (t.swipe = t.actions.right ? t.swipe : "right"), t.actions.right && (t.swipe = t.actions.left ? t.swipe : "left"), t.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + l + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + c + "</div>"
                    }
                }), Dt.fixedHeader && (t = "mbsc-lv-fixed-header" + (Ie ? " mbsc-lv-fixed-header-ctx mbsc-lv-" + Dt.theme + (Dt.baseTheme ? " mbsc-lv-" + Dt.baseTheme : "") : ""), Ne ? Ne.attr("class", t) : (Ne = $e('<div class="' + t + '"></div>'), Ie ? Ut.before(Ne) : se.prepend(Ne), bt = f(x, 200), Ut.on("scroll touchmove", bt))), Dt.hover && (Oe || se.on("mouseover.mbsc-lv", ".mbsc-lv-item", function() {
                    Pe && Pe[0] == this || (h(), Pe = $e(this), Bt[Pe.attr("data-type") || "defaults"].actions && (ze = setTimeout(function() {
                        gt ? Pe = null : (Le = !0, Qt.openActions(Pe, He, Oe, !1))
                    }, je)))
                }).on("mouseleave.mbsc-lv", h), Oe = Dt.hover.time || 200, je = Dt.hover.timeout || 200, He = Dt.hover.direction || Dt.hover || "right"), Ae && se.attr("mbsc-enhance", ""), se.trigger("mbsc-enhance", [{
                    theme: Dt.theme,
                    lang: Dt.lang
                }])
            }, Qt._destroy = function() {
                var e;
                le.append(re), Ie && Ne && Ne.remove(), Ae && (ta.attr("mbsc-enhance", ""), (e = Re[se[0].id]) && e.destroy()), ea.removeEventListener("click", v, !0), se.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img"), se.find(lt).removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find(it).removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref"), $e(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", se).remove(), ta.insertAfter(se), se.remove(), Xe.remove(), Ut.off("orientationchange resize", b), bt && Ut.off("scroll touchmove", bt)
            };
            var ma, ua = [],
                ha = [],
                fa = [],
                pa = 0;
            Qt.startActionTrack = function() {
                pa || (fa = []), pa++
            }, Qt.endActionTrack = function() {
                --pa || ha.push(fa)
            }, Qt.addUndoAction = function(e, t) {
                var a = {
                    action: e,
                    async: t
                };
                pa ? fa.push(a) : (ha.push([a]), ha.length > Dt.undoLimit && ha.shift())
            }, Qt.undo = function() {
                function e() {
                    n < 0 ? (ma = !1, t()) : (a = s[n], n--, a.async ? a.action(e) : (a.action(), e()))
                }
                function t() {
                    (s = ua.shift()) && (ma = !0, n = s.length - 1, e())
                }
                var a, n, s;
                ha.length && ua.push(ha.pop()), ma || t()
            }, Dt = Qt.settings, Se = Qt.trigger, Qt.init(t)
        };
    ra.prototype = {
        _class: "listview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: {
            context: "body",
            actionsWidth: 90,
            sortDelay: 250,
            undoLimit: 10,
            swipe: !0,
            quickSwipe: !0,
            animateIcons: !0,
            animation: !0,
            revert: !0,
            vibrate: !0,
            handleClass: "",
            handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
            listNode: "ul",
            listSelector: "ul,ol",
            itemNode: "li",
            itemSelector: "li",
            leftArrowClass: "mbsc-ic-arrow-left4",
            rightArrowClass: "mbsc-ic-arrow-right4",
            backText: "Back",
            undoText: "Undo",
            stages: []
        }
    }, Je.ListView = ra, ve.themes.listview.mobiscroll = {
        leftArrowClass: "mbsc-ic-arrow-left5",
        rightArrowClass: "mbsc-ic-arrow-right5"
    }, o("listview", ra, !1);
    var oa = {
        batch: 50,
        min: 0,
        max: 100,
        defaultUnit: "",
        units: null,
        unitNames: null,
        invalid: [],
        sign: !1,
        step: .05,
        scale: 2,
        convert: function(e) {
            return e
        },
        signText: "&nbsp;",
        wholeText: "Whole",
        fractionText: "Fraction",
        unitText: "Unit"
    };
    ht.measurement = function(e) {
        function t(e) {
            return Math.max(g, Math.min(x, L ? e < 0 ? Math.ceil(e) : Math.floor(e) : i(Math.round(e - z), j) + z))
        }
        function a(e) {
            return L ? i((Math.abs(e) - Math.abs(t(e))) * Y - $, j) + $ : 0
        }
        function n(e) {
            var n = t(e),
                s = a(e),
                i = e < 0 ? "-" : "+";
            return s >= Y && (e < 0 ? n-- : n++, s = 0), [i, n, s]
        }
        function s(e) {
            var t = +e[f],
                a = L ? e[u] / Y * (t < 0 ? -1 : 1) : 0;
            return (I && "-" == e[0] ? -1 : 1) * (t + a)
        }
        function i(e, t) {
            return Math.round(e / t) * t
        }
        function r(e, t, a) {
            return t !== a && C.convert ? C.convert.call(this, e, t, a) : e
        }
        function o(e) {
            var t, n;
            b = r(C.min, H, e), v = r(C.max, H, e), L ? (g = b < 0 ? Math.ceil(b) : Math.floor(b), x = v < 0 ? Math.ceil(v) : Math.floor(v), T = a(b), y = a(v)) : (g = Math.round(b), x = Math.round(v), x = g + Math.floor((x - g) / j) * j, z = g % j), t = g, n = x, I && (n = Math.abs(t) > Math.abs(n) ? Math.abs(t) : Math.abs(n), t = t < 0 ? 0 : t), N.min = t < 0 ? Math.ceil(t / O) : Math.floor(t / O), N.max = n < 0 ? Math.ceil(n / O) : Math.floor(n / O)
        }
        function l(e) {
            return s(e).toFixed(L ? E : 0) + (F ? " " + P[e[p]] : "")
        }
        var c, d, m, u, f, p, b, v, g, x, T, y, _, w, M = Ke({}, e.settings),
            C = Ke(e.settings, oa, M),
            S = {}, k = [
                []
            ],
            D = {}, N = {}, A = {}, V = [],
            I = C.sign,
            F = C.units && C.units.length,
            H = F ? C.defaultUnit || C.units[0] : "",
            P = [],
            L = C.step < 1,
            O = C.step > 1 ? C.step : 1,
            E = L ? Math.max(C.scale, (C.step + "").split(".")[1].length) : 1,
            Y = Math.pow(10, E),
            j = Math.round(L ? C.step * Y : C.step),
            z = 0,
            $ = 0,
            W = 0;
        if (e.setVal = function(t, a, n, s, i) {
            e._setVal($e.isArray(t) ? l(t) : t, a, n, s, i)
        }, C.units) for (w = 0; w < C.units.length; ++w) _ = C.units[w], P.push(C.unitNames ? C.unitNames[_] || _ : _);
        if (I) if (I = !1, F) for (w = 0; w < C.units.length; w++) r(C.min, H, C.units[w]) < 0 && (I = !0);
        else I = C.min < 0;
        if (I && (k[0].push({
            data: ["-", "+"],
            label: C.signText
        }), W++), N = {
            label: C.wholeText,
            data: function(e) {
                return g % O + e * O
            },
            getIndex: function(e) {
                return Math.round((e - g % O) / O)
            }
        }, k[0].push(N), f = W++, o(H), L) {
            for (k[0].push(A), A.data = [], A.label = C.fractionText, w = $; w < Y; w += j) V.push(w), A.data.push({
                value: w,
                display: "." + function(e, t) {
                    for (e += ""; e.length < t;) e = "0" + e;
                    return e
                }(w, E)
            });
            u = W++, c = Math.ceil(100 / j), C.invalid && C.invalid.length && ($e.each(C.invalid, function(e, t) {
                var a = t > 0 ? Math.floor(t) : Math.ceil(t);
                0 === a && (a = t <= 0 ? -.001 : .001), D[a] = (D[a] || 0) + 1, 0 === t && (a = .001, D[a] = (D[a] || 0) + 1)
            }), $e.each(D, function(e, t) {
                t < c ? delete D[e] : D[e] = e
            }))
        }
        if (F) {
            for (S = {
                data: [],
                label: C.unitText,
                cssClass: "mbsc-msr-whl-unit",
                circular: !1
            }, w = 0; w < C.units.length; w++) S.data.push({
                value: w,
                display: P[w]
            });
            k[0].push(S)
        }
        return p = W, {
            wheels: k,
            minWidth: I && L ? 70 : 80,
            showLabel: !1,
            formatValue: l,
            compClass: "mbsc-msr",
            parseValue: function(e) {
                var t, a = ("number" == typeof e ? e + "" : e) || C.defaultValue,
                    s = (a + "").split(" "),
                    i = +s[0],
                    r = [],
                    l = "";
                return F && (l = $e.inArray(s[1], P), l = -1 == l ? $e.inArray(H, C.units) : l, l = -1 == l ? 0 : l), m = F ? C.units[l] : "", o(m), i = isNaN(i) ? 0 : i, i = h(i, b, v), t = n(i), t[1] = h(t[1], g, x), d = i, I && (r[0] = t[0], t[1] = Math.abs(t[1])), r[f] = t[1], L && (r[u] = t[2]), F && (r[p] = l), r
            },
            onCancel: function() {
                d = void 0
            },
            validate: function(t) {
                var a, l, c, _, w, M = t.values,
                    S = t.index,
                    k = t.direction,
                    A = {}, P = [],
                    E = {}, Y = F ? C.units[M[p]] : "";
                if (I && 0 === S && (d = Math.abs(d) * ("-" == M[0] ? -1 : 1)), (S === f || S === u && L || void 0 === d || void 0 === S) && (d = s(M), m = Y), (F && S === p && m !== Y || void 0 === S) && (o(Y), d = r(d, m, Y), m = Y, l = n(d), void 0 !== S && (E[f] = N, e.changeWheel(E)), I && (M[0] = l[0])), P[f] = [], I) for (P[0] = [], b > 0 && (P[0].push("-"), M[0] = "+"), v < 0 && (P[0].push("+"), M[0] = "-"), w = Math.abs("-" == M[0] ? g : x), W = w + O; W < w + 20 * O; W += O) P[f].push(W), A[W] = !0;
                if (d = h(d, b, v), l = n(d), c = I ? Math.abs(l[1]) : l[1], a = I ? "-" == M[0] : d < 0, M[f] = c, a && (l[0] = "-"), L && (M[u] = l[2]), $e.each(L ? D : C.invalid, function(e, t) {
                    if (I && a) {
                        if (!(t <= 0)) return;
                        t = Math.abs(t)
                    }
                    t = i(r(t, H, Y), L ? 1 : j), A[t] = !0, P[f].push(t)
                }), M[f] = e.getValidValue(f, c, k, A), l[1] = M[f] * (I && a ? -1 : 1), L) {
                    P[u] = [];
                    var z = I ? M[0] + M[1] : (d < 0 ? "-" : "+") + Math.abs(l[1]),
                        $ = (b < 0 ? "-" : "+") + Math.abs(g),
                        R = (v < 0 ? "-" : "+") + Math.abs(x);
                    z === $ && $e(V).each(function(e, t) {
                        (a ? t > T : t < T) && P[u].push(t)
                    }), z === R && $e(V).each(function(e, t) {
                        (a ? t < y : t > y) && P[u].push(t)
                    }), $e.each(C.invalid, function(e, t) {
                        _ = n(r(t, H, Y)), (l[0] === _[0] || 0 === l[1] && 0 === _[1] && 0 === _[2]) && l[1] === _[1] && P[u].push(_[2])
                    })
                }
                return {
                    disabled: P,
                    valid: M
                }
            }
        }
    };
    var la = {
        min: 0,
        max: 100,
        defaultUnit: "km",
        units: ["m", "km", "in", "ft", "yd", "mi"]
    }, ca = {
        mm: .001,
        cm: .01,
        dm: .1,
        m: 1,
        dam: 10,
        hm: 100,
        km: 1e3,
        in : .0254,
        ft: .3048,
        yd: .9144,
        ch: 20.1168,
        fur: 201.168,
        mi: 1609.344,
        lea: 4828.032
    };
    ht.distance = function(e) {
        var t = Ke({}, la, e.settings);
        return Ke(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * ca[t] / ca[a]
            }
        }), ht.measurement.call(this, e)
    };
    var da = {
        min: 0,
        max: 100,
        defaultUnit: "N",
        units: ["N", "kp", "lbf", "pdl"]
    }, ma = {
        N: 1,
        kp: 9.80665,
        lbf: 4.448222,
        pdl: .138255
    };
    ht.force = function(e) {
        var t = Ke({}, da, e.settings);
        return Ke(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * ma[t] / ma[a]
            }
        }), ht.measurement.call(this, e)
    };
    var ua = {
        min: 0,
        max: 1e3,
        defaultUnit: "kg",
        units: ["g", "kg", "oz", "lb"],
        unitNames: {
            tlong: "t (long)",
            tshort: "t (short)"
        }
    }, ha = {
        mg: .001,
        cg: .01,
        dg: .1,
        g: 1,
        dag: 10,
        hg: 100,
        kg: 1e3,
        t: 1e6,
        drc: 1.7718452,
        oz: 28.3495,
        lb: 453.59237,
        st: 6350.29318,
        qtr: 12700.58636,
        cwt: 50802.34544,
        tlong: 1016046.9088,
        tshort: 907184.74
    };
    ht.mass = function(e) {
        var t = Ke({}, ua, e.settings);
        return Ke(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * ha[t] / ha[a]
            }
        }), ht.measurement.call(this, e)
    };
    var fa = {
        min: 0,
        max: 100,
        defaultUnit: "kph",
        units: ["kph", "mph", "mps", "fps", "knot"],
        unitNames: {
            kph: "km/h",
            mph: "mi/h",
            mps: "m/s",
            fps: "ft/s",
            knot: "knot"
        }
    }, pa = {
        kph: 1,
        mph: 1.60934,
        mps: 3.6,
        fps: 1.09728,
        knot: 1.852
    };
    ht.speed = function(e) {
        var t = Ke({}, fa, e.settings);
        return Ke(e.settings, t, {
            sign: !1,
            convert: function(e, t, a) {
                return e * pa[t] / pa[a]
            }
        }), ht.measurement.call(this, e)
    };
    var ba = {
        min: -20,
        max: 40,
        defaultUnit: "c",
        units: ["c", "k", "f", "r"],
        unitNames: {
            c: "°C",
            k: "K",
            f: "°F",
            r: "°R"
        }
    }, va = {
        c2k: function(e) {
            return e + 273.15
        },
        c2f: function(e) {
            return 9 * e / 5 + 32
        },
        c2r: function(e) {
            return 9 * (e + 273.15) / 5
        },
        k2c: function(e) {
            return e - 273.15
        },
        k2f: function(e) {
            return 9 * e / 5 - 459.67
        },
        k2r: function(e) {
            return 9 * e / 5
        },
        f2c: function(e) {
            return 5 * (e - 32) / 9
        },
        f2k: function(e) {
            return 5 * (e + 459.67) / 9
        },
        f2r: function(e) {
            return e + 459.67
        },
        r2c: function(e) {
            return 5 * (e - 491.67) / 9
        },
        r2k: function(e) {
            return 5 * e / 9
        },
        r2f: function(e) {
            return e - 459.67
        }
    };
    ht.temperature = function(e) {
        var t = Ke({}, ba, e.settings);
        return Ke(e.settings, t, {
            sign: !0,
            convert: function(e, t, a) {
                return va[t + "2" + a](e)
            }
        }), ht.measurement.call(this, e)
    }, o("measurement", vt), o("distance", vt), o("force", vt), o("mass", vt), o("speed", vt), o("temperature", vt); /* eslint-disable no-unused-vars */
    var ga = 1,
        xa = function(e, t, a) {
            function n(e) {
                clearTimeout(b), b = setTimeout(function() {
                    r("load" !== e.type)
                }, 200)
            }
            function s(t, a) {
                if (t.length) {
                    if (a = k._onItemTap(t, a), o = t, t.parent()[0] == e) {
                        var n = t.offset().left,
                            s = t[0].offsetLeft,
                            i = t[0].offsetWidth,
                            r = c.offset().left;
                        v && (s = _ - s - i), "a" == y.variant ? n < r ? g.scroll(v ? s + i - h : -s, S, !0) : n + i > r + h && g.scroll(v ? s : h - s - i, S, !0) : g.scroll(h / 2 - s - i / 2, S, !0)
                    }
                    a && M("onItemTap", {
                        target: t[0]
                    })
                }
            }
            function i() {
                var e, t;
                k._initMarkup(c), D.find(".mbsc-ripple").remove(), k._$items = D.children(), k._$items.each(function(a) {
                    var n, s = $e(this),
                        i = s.attr("data-ref");
                    i || (i = ga++), 0 === a && (e = s), o || (o = k._getActiveItem(s)), t = k._getItemProps(s) || {}, n = "mbsc-scv-item mbsc-btn-e " + (t.cssClass || ""), s.attr("data-ref", i).removeClass(C[i]).addClass(n), C[i] = n
                }), o || (o = e), k._markupReady(c)
            }
            function r(t, a) {
                var n = y.itemWidth,
                    s = y.layout;
                k.contWidth = h = c.width(), t && p === h || !h || (p = h, m(s) && (f = h ? h / s : n) < n && (s = "liquid"), n && ("liquid" == s ? f = h ? h / Math.min(Math.floor(h / n), k._$items.length) : n : "fixed" == s && (f = n)), k._size(h, f), f && D.children().css("width", f + "px"), k.totalWidth = _ = e.offsetWidth, Ke(g.settings, {
                    contSize: h,
                    maxSnapScroll: !! y.paging && 1,
                    maxScroll: 0,
                    minScroll: _ > h ? h - _ : 0,
                    snap: y.paging ? h : !! T && (f || ".mbsc-scv-item"),
                    elastic: _ > h && (f || h)
                }), g.refresh(a))
            }
            var o, c, d, u, h, f, p, b, v, g, T, y, _, w, M, C = {}, S = 1e3,
                k = this,
                D = $e(e);
            qe.call(this, e, t, !0), k.navigate = function(e, t) {
                s(k._getItem(e), t)
            }, k.next = function(e) {
                if (o) {
                    var t = o.next();
                    t.length && (o = t, s(o, e))
                }
            }, k.prev = function(e) {
                if (o) {
                    var t = o.prev();
                    t.length && (o = t, s(o, e))
                }
            }, k.refresh = k.position = function(e) {
                i(), r(!1, e)
            }, k._init = function() {
                var e;
                d = $e(y.context), u = $e("body" == y.context ? window : y.context), k.__init(), 
                v = y.rtl, T = !(!y.itemWidth || void 0 !== y.snap) || y.snap, e = "mbsc-scv-c mbsc-no-touch mbsc-" + y.theme + " " + (y.cssClass || "") + " " + (y.wrapperClass || "") + (y.baseTheme ? " mbsc-" + y.baseTheme : "") + (v ? " mbsc-rtl" : " mbsc-ltr") + (y.itemWidth ? " mbsc-scv-hasw" : "") + ("body" == y.context ? "" : " mbsc-scv-ctx") + " " + (k._getContClass() || ""),
                c ? (c.attr("class", e), D.off(".mbsc-ripple")) : (c = $e('<div class="' + e + '"><div class="mbsc-scv-sc"></div></div>').insertAfter(D), c.find(".mbsc-scv-sc").append(D), g = new ut(c[0], {
                    axis: "X",
                    contSize: 0,
                    maxScroll: 0,
                    maxSnapScroll: 1,
                    minScroll: 0,
                    snap: 1,
                    elastic: 1,
                    rtl: v,
                    mousewheel: y.mousewheel,
                    thresholdX: y.threshold,
                    stopProp: y.stopProp,
                    onStart: function(e) {
                        w || "touchstart" != e.domEvent.type || (w = !0, d.find(".mbsc-no-touch").removeClass("mbsc-no-touch"))
                    },
                    onBtnTap: function(e) {
                        "touchend" === e.domEvent.type && x(e.domEvent, e.target), s($e(e.target), !0)
                    },
                    onGestureStart: function(e) {
                        M("onGestureStart", e)
                    },
                    onGestureEnd: function(e) {
                        M("onGestureEnd", e)
                    },
                    onMove: function(e) {
                        M("onMove", e)
                    },
                    onAnimationStart: function(e) {
                        M("onAnimationStart", e)
                    },
                    onAnimationEnd: function(e) {
                        M("onAnimationEnd", e)
                    }
                })), D.css("display", "").addClass("mbsc-scv").removeClass("mbsc-cloak"), i(), M("onMarkupReady", {
                    target: c[0]
                }), r(), c.find("img").on("load", n), u.on("orientationchange resize", n)
            }, k._size = l, k._initMarkup = l, k._markupReady = l, k._getContClass = l, k._getItemProps = l, k._getActiveItem = l, k.__init = l, k.__destroy = l, k._destroy = function() {
                k.__destroy(), u.off("orientationchange resize", n), D.removeClass("mbsc-scv").insertAfter(c).find(".mbsc-scv-item").each(function() {
                    var e = $e(this);
                    e.width("").removeClass(C[e.attr("data-ref")])
                }), c.remove(), g.destroy()
            }, k._getItem = function(e) {
                return "object" !== (void 0 === e ? "undefined" : ge(e)) && (e = k._$items.filter('[data-id="' + e + '"]')), $e(e)
            }, k._onItemTap = function(e, t) {
                return void 0 === t || t
            }, y = k.settings, M = k.trigger, a || k.init(t)
        };
    xa.prototype = {
        _class: "scrollview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: {
            tap: !0,
            stopProp: !1,
            context: "body",
            layout: "liquid"
        }
    }, Je.ScrollView = xa;
    var Ta = function(e, t, a) {
        function n() {
            o && "inline" != o && r.find(".mbsc-page").css("padding-" + o, "")
        }
        function s(e) {
            e.addClass(m).attr("data-selected", "true").attr("aria-selected", "true")
        }
        function i(e) {
            e.removeClass(m).removeAttr("data-selected").removeAttr("aria-selected")
        }
        var r, o, c, d, m, u, h = $e(e),
            f = this;
        xa.call(this, e, t, !0), f.select = function(e) {
            c || i(f._$items.filter(".mbsc-ms-item-sel")), s(f._getItem(e))
        }, f.deselect = function(e) {
            i(f._getItem(e))
        }, f.enable = function(e) {
            f._getItem(e).removeClass("mbsc-disabled").removeAttr("data-disabled").removeAttr("aria-disabled")
        }, f.disable = function(e) {
            f._getItem(e).addClass("mbsc-disabled").attr("data-disabled", "true").attr("aria-disabled", "true")
        }, f.setBadge = function(e, t) {
            var a;
            e = f._getItem(e).attr("data-badge", t), a = $e(".mbsc-ms-badge", e), a.length ? t ? a.html(t) : a.remove() : t && e.append('<span class="mbsc-ms-badge">' + t + "</span>")
        }, f._markupReady = function(e) {
            f._hasIcons ? e.addClass("mbsc-ms-icons") : e.removeClass("mbsc-ms-icons"), f._hasText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"), f.__markupReady(e)
        }, f._size = function(t, a) {
            f.__size(t, a), "inline" != o && r.find(".mbsc-page").css("padding-" + o, e.offsetHeight + "px")
        }, f._onItemTap = function(e, t) {
            return !1 !== f.__onItemTap(e, t) && (void 0 === t && (t = !c), d && t && !e.hasClass("mbsc-disabled") && (c ? "true" == e.attr("data-selected") ? i(e) : s(e) : (i(f._$items.filter(".mbsc-ms-item-sel")), s(e))), t)
        }, f._getActiveItem = function(e) {
            var t = "true" == e.attr("data-selected");
            if (d && !c && t) return e
        }, f._getItemProps = function(e) {
            var t = "true" == e.attr("data-selected"),
                a = "true" == e.attr("data-disabled"),
                n = e.attr("data-icon"),
                s = e.attr("data-badge");
            return e.attr("data-role", "button").attr("aria-selected", t ? "true" : "false").attr("aria-disabled", a ? "true" : "false"), s && e.append('<span class="mbsc-ms-badge">' + s + "</span>"), n && (f._hasIcons = !0), e.text() && (f._hasText = !0), {
                cssClass: "mbsc-ms-item " + (u.itemClass || "") + " " + (t ? m : "") + (a ? " mbsc-disabled " + (u.disabledClass || "") : "") + (n ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + n : "")
            }
        }, f._getContClass = function() {
            return " mbsc-ms-c mbsc-ms-" + u.variant + " mbsc-ms-" + o + (d ? "" : " mbsc-ms-nosel") + (f.__getContClass() || "")
        }, f.__init = function() {
            f.___init(), r = $e(u.context), n(), o = u.display, c = "multiple" == u.select, d = "off" != u.select, m = " mbsc-ms-item-sel " + (u.activeClass || ""), h.addClass("mbsc-ms mbsc-ms-base " + (u.groupClass || ""))
        }, f.__destroy = function() {
            h.removeClass("mbsc-ms mbsc-ms-base " + (u.groupClass || "")), n(), f.___destroy()
        }, f.__onItemTap = l, f.__getContClass = l, f.__markupReady = l, f.__size = l, f.___init = l, f.___destroy = l, u = f.settings, a || f.init(t)
    };
    Ta.prototype = {
        _defaults: Ke({}, xa.prototype._defaults)
    };
    var ya = function(e, t) {
        var a = this;
        Ta.call(this, e, t, !0), a.___init = function() {}, a.init(t)
    };
    ya.prototype = {
        _class: "optionlist",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: Ke({}, Ta.prototype._defaults, {
            select: "multiple",
            variant: "a",
            display: "inline"
        })
    }, Je.Optionlist = ya, ve.themes.optionlist = ve.themes.navigation, o("optionlist", ya, !1);
    var _a = function(e, t) {
        var a, n, s, i, r, o = $e(e),
            l = o.is("ul,ol"),
            c = this;
        Ta.call(this, e, t, !0), c._initMarkup = function() {
            a && a.remove(), n && o.append(n.children())
        }, c.__size = function(e, t) {
            var l, d = t || 72,
                m = c._$items.length,
                u = 0;
            r.hide(), "bottom" == i.type && (o.removeClass("mbsc-scv-liq"), a.remove(), c._$items.remove().each(function(a) {
                var s = $e(this);
                o.append(s), u += t || this.offsetWidth || 0, Math.round(u + (a < m - 1 ? d : 0)) > e && (l = !0, n.append(s.css("width", "").addClass("mbsc-fr-btn-e")))
            }), a.attr("class", s + (i.moreIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + i.moreIcon : "")).html(c._hasIcons && c._hasText ? i.moreText : ""), l && o.append(a)), "liquid" == i.layout && o.addClass("mbsc-scv-liq")
        }, c.__onItemTap = function(e) {
            if (e.hasClass("mbsc-menu-item") && !1 !== c.trigger("onMenuShow", {
                target: e[0],
                menu: r
            })) return r.show(!1, !0), !1
        }, c.__getContClass = function() {
            return "hamburger" == i.type ? " mbsc-ms-hamburger" : ""
        }, c.__markupReady = function(e) {
            "hamburger" == i.type && (n.append(c._$items.addClass("mbsc-fr-btn-e")), a.attr("class", s + (i.menuIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + i.menuIcon : "")).html(i.menuText || ""), o.append(a), i.menuText && i.menuIcon || e.removeClass("mbsc-ms-icons"), i.menuText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"))
        }, c.___init = function() {
            var e;
            "tab" == i.type ? (i.display = i.display || "top", i.variant = i.variant || "b") : "bottom" == i.type ? (i.display = i.display || "bottom", i.variant = i.variant || "a") : "hamburger" == i.type && (i.display = i.display || "inline", i.variant = i.variant || "a"), s = "mbsc-scv-item mbsc-ms-item mbsc-btn-e mbsc-menu-item " + (i.itemClass || ""), a || (a = $e(l ? "<li></li>" : "<div></div>"), n = $e(l ? "<ul></ul>" : "<div></div>").addClass("mbsc-scv mbsc-ms")), r = new qt(n[0], {
                display: "bubble",
                theme: i.theme,
                lang: i.lang,
                context: i.context,
                buttons: [],
                anchor: a,
                onBeforeShow: function(t, a) {
                    e = null, a.settings.cssClass = "mbsc-wdg mbsc-ms-a mbsc-ms-more" + (c._hasText ? "" : " mbsc-ms-more-icons")
                },
                onBeforeClose: function() {
                    return c.trigger("onMenuHide", {
                        target: e && e[0],
                        menu: r
                    })
                },
                onMarkupReady: function(t, a) {
                    c.tap(a._markup.find(".mbsc-fr-c"), function(t) {
                        e = $e(t.target).closest(".mbsc-ms-item"), e.length && !e.hasClass("mbsc-disabled") && (c.navigate(e, !0), r.hide())
                    })
                }
            })
        }, c.___destroy = function() {
            r.destroy(), o.append(c._$items), a.remove()
        }, i = c.settings, c.init(t)
    };
    _a.prototype = {
        _class: "navigation",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: Ke({}, Ta.prototype._defaults, {
            type: "bottom",
            moreText: "More",
            moreIcon: "material-more-horiz",
            menuIcon: "material-menu"
        })
    }, Je.Navigation = _a, o("nav", _a, !1), ht.number = ht.measurement, o("number", vt);
    var wa = {}, Ma = function(e, t, a) {
        function n(t) {
            var a, n = x.validate.call(e, {
                values: V.slice(0),
                variables: j
            }, O) || [],
                i = n && n.disabled || [];
            if (O._isValid = !n.invalid, O._tempValue = x.formatValue.call(e, V.slice(0), j, O), g = V.length, I = n.length || H, O._isVisible && ve.SYcKw) {
                if ($e(".mbsc-np-ph", p).each(function(e) {
                    $e(this).html("ltr" == x.fill ? e >= g ? v : y || V[e] : e >= H - I ? e + g < H ? v : y || V[e + g - H] : "")
                }), $e(".mbsc-np-cph", p).each(function() {
                    $e(this).html(j[$e(this).attr("data-var")] || $e(this).attr("data-ph"))
                }), g === H) for (a = 0; a <= 9; a++) i.push(a);
                for ($e(".mbsc-np-btn", p).removeClass(b), a = 0; a < i.length; a++) $e('.mbsc-np-btn[data-val="' + i[a] + '"]', p).addClass(b);
                O._isValid ? $e(".mbsc-fr-btn-s .mbsc-fr-btn", p).removeClass(b) : $e(".mbsc-fr-btn-s .mbsc-fr-btn", p).addClass(b), O.live && (O._hasValue = t || O._hasValue, s(t, !1, t), t && F("onSet", {
                    valueText: O._value
                }))
            }
        }
        function s(e, t, a, s) {
            t && n(), s || (P = V.slice(0), z = Ke({}, j), E = Y.slice(0), O._value = O._hasValue ? O._tempValue : null), e && (O._isInput && L.val(O._hasValue && O._isValid ? O._value : ""), F("onFill", {
                valueText: O._hasValue ? O._tempValue : "",
                change: a
            }), a && (O._preventChange = !0, L.trigger("change")))
        }
        function i(e) {
            var t, a, n = e || [],
                s = [];
            for (Y = [], j = {}, t = 0; t < n.length; t++) /:/.test(n[t]) ? (a = n[t].split(":"), j[a[0]] = a[1], Y.push(a[0])) : (s.push(n[t]), Y.push("digit"));
            return s
        }
        function r(e, t) {
            !(g || t || x.allowLeadingZero) || e.hasClass("mbsc-disabled") || e.hasClass("mbsc-np-btn-empty") || g < H && ve.SYcKw && (Y.push("digit"), V.push(t), n(!0))
        }
        function o(e) {
            var t, a, s = e.attr("data-val"),
                i = "false" !== e.attr("data-track"),
                r = e.attr("data-var");
            if (!e.hasClass("mbsc-disabled")) {
                if (r && (a = r.split(":"), i && Y.push(a[0]), j[a[0]] = void 0 === a[2] ? a[1] : j[a[0]] == a[1] ? a[2] : a[1]), s.length + g <= I) for (t = 0; t < s.length; ++t) a = m(s[t]) ? +s[t] : s[t], (x.allowLeadingZero || g || a) && (Y.push("digit"), V.push(a), g = V.length);
                n(!0)
            }
        }
        function l() {
            var e, t, a = Y.pop();
            if (g || "digit" !== a) {
                if ("digit" !== a && j[a]) for (delete j[a], t = Y.slice(0), Y = [], e = 0; e < t.length; e++) t[e] !== a && Y.push(t[e]);
                else V.pop();
                n(!0)
            }
        }
        function c(e) {
            D = !0, _ = T(e, "X"), w = T(e, "Y"), clearInterval(N), clearTimeout(N), l(), N = setInterval(function() {
                l()
            }, 150)
        }
        function d() {
            clearInterval(N), D = !1
        }
        function u(e) {
            if (A(e, this)) {
                if ("keydown" == e.type && 32 != e.keyCode) return;
                c(e), "mousedown" == e.type && $e(document).on("mousemove", h).on("mouseup", f)
            }
        }
        function h(e) {
            D && (M = T(e, "X"), C = T(e, "Y"), S = M - _, k = C - w, (Math.abs(S) > 7 || Math.abs(k) > 7) && d())
        }
        function f(e) {
            D && (e.preventDefault(), d(), "mouseup" == e.type && $e(document).off("mousemove", h).off("mouseup", f))
        }
        var p, b, v, g, x, y, _, w, M, C, S, k, D, N, V, I, F, H, P, L = $e(e),
            O = this,
            E = [],
            Y = [],
            j = {}, z = {}, $ = {
                107: "+",
                109: "-"
            }, W = {
                48: 0,
                49: 1,
                50: 2,
                51: 3,
                52: 4,
                53: 5,
                54: 6,
                55: 7,
                56: 8,
                57: 9,
                96: 0,
                97: 1,
                98: 2,
                99: 3,
                100: 4,
                101: 5,
                102: 6,
                103: 7,
                104: 8,
                105: 9
            };
        dt.call(this, e, t, !0), O.setVal = O._setVal = function(t, a, n, r) {
            O._hasValue = null !== t && void 0 !== t, V = i($e.isArray(t) ? t.slice(0) : x.parseValue.call(e, t, O)), s(a, !0, void 0 === n ? a : n, r)
        }, O.getVal = O._getVal = function(e) {
            return O._hasValue || e ? O[e ? "_tempValue" : "_value"] : null
        }, O.setArrayVal = O.setVal, O.getArrayVal = function(e) {
            return e ? V.slice(0) : O._hasValue ? P.slice(0) : null
        }, O._readValue = function() {
            var t = L.val() || "";
            "" !== t && (O._hasValue = !0), y ? (j = {}, Y = [], V = []) : (j = O._hasValue ? z : {}, Y = O._hasValue ? E : [], V = O._hasValue && P ? P.slice(0) : i(x.parseValue.call(e, t, O)), s(!1, !0))
        }, O._fillValue = function() {
            O._hasValue = !0, s(!0, !1, !0)
        }, O._generateContent = function() {
            var e, t, a, n = 1,
                s = "",
                i = "";
            for (i += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + x.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + x.deleteIcon + '"></div><div class="mbsc-np-dsp">', s = x.template.replace(/d/g, '<span class="mbsc-np-ph">' + v + "</span>").replace(/&#100;/g, "d"), s = s.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>'), i += s, i += "</div></div>", i += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">', e = 0; e < 4; e++) {
                for (i += '<div class="mbsc-np-row">', t = 0; t < 3; t++) a = n, 10 == n || 12 == n ? a = "" : 11 == n && (a = 0), "" === a ? 10 == n && x.leftKey ? i += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (x.leftKey.variable ? 'data-var="' + x.leftKey.variable + '"' : "") + ' data-val="' + (x.leftKey.value || "") + '" ' + (void 0 !== x.leftKey.track ? ' data-track="' + x.leftKey.track + '"' : "") + ">" + x.leftKey.text + "</div>" : 12 == n && x.rightKey ? i += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (x.rightKey.variable ? 'data-var="' + x.rightKey.variable + '"' : "") + ' data-val="' + (x.rightKey.value || "") + '" ' + (void 0 !== x.rightKey.track ? ' data-track="' + x.rightKey.track + '"' : "") + " >" + x.rightKey.text + "</div>" : i += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' : i += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + a + '">' + a + "</div>", n++;
                i += "</div>"
            }
            return i += "</div></div>"
        }, O._markupReady = function() {
            p = O._markup, n()
        }, O._attachEvents = function(e) {
            e.on("keydown", function(t) {
                var a;
                void 0 !== $[t.keyCode] ? (a = $e('.mbsc-np-btn[data-var="sign:-:"]', e), a.length && (j.sign = 107 == t.keyCode ? "-" : "", o(a))) : void 0 !== W[t.keyCode] ? r($e('.mbsc-np-btn[data-val="' + W[t.keyCode] + '"]', e), W[t.keyCode]) : 8 == t.keyCode && (t.preventDefault(), l())
            }), O.tap($e(".mbsc-np-btn", e), function() {
                var e = $e(this);
                e.hasClass("mbsc-np-btn-custom") ? o(e) : r(e, +e.attr("data-val"))
            }, !1, 30, !0), $e(".mbsc-np-del", e).on("touchstart mousedown keydown", u).on("touchmove mousemove", h).on("touchend mouseup keyup", f)
        }, O.__init = function() {
            x = O.settings, x.cssClass = (x.cssClass || "") + " mbsc-np", x.template = x.template.replace(/\\d/, "&#100;"), v = x.placeholder, H = (x.template.match(/d/g) || []).length, b = "mbsc-disabled " + (x.disabledClass || ""), y = x.mask, F = O.trigger, y && L.is("input") && L.attr("type", "password")
        }, O._indexOf = function(e, t) {
            var a;
            for (a = 0; a < e.length; ++a) if (e[a].toString() === t.toString()) return a;
            return -1
        }, a || O.init(t)
    };
    Ma.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "numpad",
        _presets: wa,
        _defaults: Ke({}, dt.prototype._defaults, {
            template: "dd.dd",
            placeholder: "0",
            deleteIcon: "backspace",
            allowLeadingZero: !1,
            headerText: !1,
            fill: "rtl",
            deleteText: "Delete",
            decimalSeparator: ".",
            thousandsSeparator: ",",
            validate: l,
            parseValue: l,
            formatValue: function(e, t, a) {
                var n, s = 1,
                    i = a.settings,
                    r = i.placeholder,
                    o = i.template,
                    l = e.length,
                    c = o.length,
                    d = "";
                for (n = 0; n < c; n++) "d" == o[c - n - 1] ? (d = s <= l ? e[l - s] + d : r + d, s++) : d = o[c - n - 1] + d;
                return $e.each(t, function(e, t) {
                    d = d.replace("{" + e + "}", t)
                }), $e("<div>" + d + "</div>").text()
            }
        })
    }, Je.Numpad = Ma, ve.themes.numpad = ve.themes.frame;
    var Ca = {
        min: 0,
        max: 99.99,
        scale: 2,
        prefix: "",
        suffix: "",
        returnAffix: !1
    };
    wa.decimal = function(e) {
        function t(e, t) {
            for (var a, n = e.slice(0), i = 0; n.length;) i = 10 * i + n.shift();
            for (a = 0; a < s.scale; a++) i /= 10;
            return t ? -1 * i : i
        }
        function a(e) {
            return t(e).toFixed(s.scale).replace(".", s.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, s.thousandsSeparator)
        }
        var n = Ke({}, e.settings),
            s = Ke(e.settings, Ca, n),
            i = s.min < 0;
        return e.getVal = function(t) {
            var a = new RegExp(s.thousandsSeparator, "g"),
                n = e._getVal(t),
                i = (n + "").replace(s.decimalSeparator, ".").replace(a, "");
            return m(i) ? +i : n
        }, {
            template: (i ? "{sign}" : "") + s.prefix.replace(/d/g, "\\d") + Array((Math.floor(Math.max(s.max, Math.abs(s.min))) + "").length + 1).join("d") + (s.scale ? "." + Array(s.scale + 1).join("d") : "") + s.suffix.replace(/d/g, "\\d"),
            leftKey: i ? {
                text: "-/+",
                variable: "sign:-:",
                track: !1
            } : void 0,
            parseValue: function(e) {
                var t, a, n = e || s.defaultValue,
                    i = [];
                if (n && (n = (n + "").replace(s.decimalSeparator, ".").replace(s.thousandsSeparator, ""), a = n.match(/\d+\.?\d*/g))) for (a = (+a[0]).toFixed(s.scale), t = 0; t < a.length; t++) "." != a[t] && (+a[t] ? i.push(+a[t]) : i.length && i.push(0));
                return e < 0 && i.push("sign:-"), i
            },
            formatValue: function(e, n) {
                var i = a(e);
                return (t(e, n && "-" == n.sign) < 0 ? "-" : "") + (s.returnAffix ? s.prefix + i + s.suffix : i)
            },
            validate: function(n) {
                var i = n.values,
                    r = a(i),
                    o = t(i, n.variables && "-" == n.variables.sign),
                    l = [];
                return i.length || s.allowLeadingZero || l.push(0), e.isVisible() && $e(".mbsc-np-dsp", e._markup).html((n.variables.sign || "") + s.prefix + r + s.suffix), {
                    disabled: l,
                    invalid: o > s.max || o < s.min || !! s.invalid && -1 != e._indexOf(s.invalid, o)
                }
            }
        }
    };
    var Sa = ["h", "m", "s"],
        ka = {
            min: 0,
            max: 362439,
            defaultValue: 0,
            hourTextShort: "h",
            minuteTextShort: "m",
            secTextShort: "s"
        };
    wa.timespan = function(e) {
        function t(e) {
            var t, a = "",
                n = 3600;
            return $e(Sa).each(function(i, r) {
                t = Math.floor(e / n), e -= t * n, n /= 60, (t > 0 || "s" == r && !a) && (a = a + (a ? " " : "") + t + s[r])
            }), a
        }
        var a = Ke({}, e.settings),
            n = Ke(e.settings, ka, a),
            s = {
                h: n.hourTextShort.replace(/d/g, "\\d"),
                m: n.minuteTextShort.replace(/d/g, "\\d"),
                s: n.secTextShort.replace(/d/g, "\\d")
            }, i = 'd<span class="mbsc-np-sup mbsc-np-time">' + s.s + "</span>";
        return n.max > 9 && (i = "d" + i), n.max > 99 && (i = '<span class="mbsc-np-ts-m">' + (n.max > 639 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.m + "</span>" + i), n.max > 6039 && (i = '<span class="mbsc-np-ts-h">' + (n.max > 38439 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.h + "</span>" + i), e.setVal = function(a, n, s, i) {
            return m(a) && (a = t(a)), e._setVal(a, n, s, i)
        }, e.getVal = function(t) {
            return e._hasValue || t ? de(e.getArrayVal(t)) : null
        }, {
            template: i,
            parseValue: function(e) {
                var a, i = e || t(n.defaultValue),
                    r = [];
                return i && $e(Sa).each(function(e, t) {
                    a = new RegExp("(\\d+)" + s[t], "gi").exec(i), a ? (a = +a[1], a > 9 ? (r.push(Math.floor(a / 10)), r.push(a % 10)) : (r.length && r.push(0), (a || r.length) && r.push(a))) : r.length && (r.push(0), r.push(0))
                }), r
            },
            formatValue: function(e) {
                return t(de(e))
            },
            validate: function(t) {
                var a = t.values,
                    s = de(a.slice(0)),
                    i = [];
                return a.length || i.push(0), {
                    disabled: i,
                    invalid: s > n.max || s < n.min || !! n.invalid && -1 != e._indexOf(n.invalid, +s)
                }
            }
        }
    };
    var Da = {
        timeFormat: "hh:ii A",
        amText: "am",
        pmText: "pm"
    };
    wa.time = function(e) {
        function t(e, t) {
            var a, n = "";
            for (a = 0; a < e.length; ++a) n += e[a] + (a % 2 == (e.length % 2 == 1 ? 0 : 1) && a != e.length - 1 ? ":" : "");
            return $e.each(t, function(e, t) {
                n += " " + t
            }), n
        }
        function a(e) {
            var t, a, n, o, l, b, v, g, x, T, y = [],
                _ = 2 * i.length;
            if (c = _, e.length || (r && (y.push(0), y.push(s.leftKey.value)), y.push(s.rightKey.value)), !r && (_ - e.length < 2 || 1 != e[0] && (e[0] > 2 || e[1] > 3) && _ - e.length <= 2) && (y.push("30"), y.push("00")), (r ? e[0] > 1 || e[1] > 2 : 1 != e[0] && (e[0] > 2 || e[1] > 3)) && e[0] && (e.unshift(0), c = _ - 1), e.length == _) for (t = 0; t <= 9; ++t) y.push(t);
            else if (1 == e.length && r && 1 == e[0] || e.length && e.length % 2 == 0 || !r && 2 == e[0] && e[1] > 3 && e.length % 2 == 1) for (t = 6; t <= 9; ++t) y.push(t);
            if (x = void 0 !== e[1] ? "" + e[0] + e[1] : "", T = +h == +(void 0 !== e[3] ? "" + e[2] + e[3] : ""), s.invalid) for (t = 0; t < s.invalid.length; ++t) if (b = s.invalid[t].getHours(), v = s.invalid[t].getMinutes(), g = s.invalid[t].getSeconds(), b == +x) {
                if (2 == i.length && (v < 10 ? 0 : +("" + v)[0]) == +e[2]) {
                    y.push(v < 10 ? v : +("" + v)[1]);
                    break
                }
                if ((g < 10 ? 0 : +("" + g)[0]) == +e[4]) {
                    y.push(g < 10 ? g : +("" + g)[1]);
                    break
                }
            }
            if (s.min || s.max) {
                if (a = +d == +x, n = +m == +x, l = n && T, o = a && T, 0 === e.length) {
                    for (t = r ? 2 : d > 19 ? d[0] : 3; t <= (1 == d[0] ? 9 : d[0] - 1); ++t) y.push(t);
                    if (d >= 10 && (y.push(0), 2 == d[0])) for (t = 3; t <= 9; ++t) y.push(t);
                    if (m && m < 10 || d && d >= 10) for (t = m && m < 10 ? +m[0] + 1 : 0; t < (d && d >= 10 ? d[0] : 10); ++t) y.push(t)
                }
                if (1 == e.length) {
                    if (0 === e[0]) for (t = 0; t < d[0]; ++t) y.push(t);
                    if (d && 0 !== e[0] && (r ? 1 == e[0] : 2 == e[0])) for (t = r ? 3 : 4; t <= 9; ++t) y.push(t);
                    if (e[0] == d[0]) for (t = 0; t < d[1]; ++t) y.push(t);
                    if (e[0] == m[0] && !r) for (t = +m[1] + 1; t <= 9; ++t) y.push(t)
                }
                if (2 == e.length && (a || n)) for (t = n ? +h[0] + 1 : 0; t < (a ? +u[0] : 10); ++t) y.push(t);
                if (3 == e.length && (n && e[2] == h[0] || a && e[2] == u[0])) for (t = n && e[2] == h[0] ? +h[1] + 1 : 0; t < (a && e[2] == u[0] ? +u[1] : 10); ++t) y.push(t);
                if (4 == e.length && (o || l)) for (t = l ? +p[0] + 1 : 0; t < (o ? +f[0] : 10); ++t) y.push(t);
                if (5 == e.length && (o && e[4] == f[0] || l && e[4] == p[0])) for (t = l && e[4] == p[0] ? +p[1] + 1 : 0; t < (o && e[4] == f[0] ? +f[1] : 10); ++t) y.push(t)
            }
            return y
        }
        var n = Ke({}, e.settings),
            s = Ke(e.settings, Da, n),
            i = s.timeFormat.split(":"),
            r = s.timeFormat.match(/a/i),
            o = r ? "a" == r[0] ? s.amText : s.amText.toUpperCase() : "",
            l = r ? "a" == r[0] ? s.pmText : s.pmText.toUpperCase() : "",
            c = 0,
            d = s.min ? "" + s.min.getHours() : "",
            m = s.max ? "" + s.max.getHours() : "",
            u = s.min ? "" + (s.min.getMinutes() < 10 ? "0" + s.min.getMinutes() : s.min.getMinutes()) : "",
            h = s.max ? "" + (s.max.getMinutes() < 10 ? "0" + s.max.getMinutes() : s.max.getMinutes()) : "",
            f = s.min ? "" + (s.min.getSeconds() < 10 ? "0" + s.min.getSeconds() : s.min.getSeconds()) : "",
            p = s.max ? "" + (s.max.getSeconds() < 10 ? "0" + s.max.getSeconds() : s.max.getSeconds()) : "";
        return s.min && s.min.setFullYear(2014, 7, 20), s.max && s.max.setFullYear(2014, 7, 20), {
            placeholder: "-",
            allowLeadingZero: !0,
            template: (3 == i.length ? "dd:dd:dd" : 2 == i.length ? "dd:dd" : "dd") + (r ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
            leftKey: r ? {
                text: o,
                variable: "ampm:" + o,
                value: "00"
            } : {
                text: ":00",
                value: "00"
            },
            rightKey: r ? {
                text: l,
                variable: "ampm:" + l,
                value: "00"
            } : {
                text: ":30",
                value: "30"
            },
            parseValue: function(e) {
                var t, a, n = e || s.defaultValue,
                    i = [];
                if (n) {
                    if (n += "", a = n.match(/\d/g)) for (t = 0; t < a.length; t++) i.push(+a[t]);
                    r && i.push("ampm:" + (n.match(new RegExp(s.pmText, "gi")) ? l : o))
                }
                return i
            },
            formatValue: function(e, a) {
                return t(e, a)
            },
            validate: function(n) {
                var i = n.values,
                    o = n.variables,
                    l = t(i, o),
                    d = i.length >= 3 ? new Date(2014, 7, 20, "" + i[0] + (i.length % 2 == 0 ? i[1] : ""), "" + i[i.length % 2 == 0 ? 2 : 1] + i[i.length % 2 == 0 ? 3 : 2]) : "";
                return {
                    disabled: a(i),
                    length: c,
                    invalid: (r ? !new RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + s.amText + "|" + s.pmText + ")$", "i").test(l) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(l)) || !! s.invalid && -1 != e._indexOf(s.invalid, d) || !((!s.min || s.min <= d) && (!s.max || d <= s.max))
                }
            }
        }
    };
    var Na = {
        dateOrder: "mdy",
        dateFormat: "mm/dd/yy",
        delimiter: "/"
    };
    wa.date = function(e) {
        function t(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }
        function a(e) {
            var a, n, o, l, c, m = [],
                g = void 0 !== e[s + 3] ? "" + e[s] + e[s + 1] + e[s + 2] + e[s + 3] : "",
                x = void 0 !== e[i + 1] ? "" + e[i] + e[i + 1] : "",
                T = void 0 !== e[r + 1] ? "" + e[r] + e[r + 1] : "",
                y = "" + d.getMaxDayOfMonth(g || 2012, x - 1 || 0),
                _ = b === g && +u == +x,
                w = v === g && +h == +x;
            if (d.invalid) for (a = 0; a < d.invalid.length; ++a) {
                if (o = d.getYear(d.invalid[a]), l = d.getMonth(d.invalid[a]), c = d.getDay(d.invalid[a]), o == +g && l + 1 == +x && (c < 10 ? 0 : +("" + c)[0]) == +e[r]) {
                    m.push(c < 10 ? c : +("" + c)[1]);
                    break
                }
                if (l + 1 == +x && c == +T && ("" + o).substring(0, 3) == "" + e[s] + e[s + 1] + e[s + 2]) {
                    m.push(("" + o)[3]);
                    break
                }
                if (o == +g && c == +T && (l < 10 ? 0 : +("" + (l + 1))[0]) == +e[i]) {
                    m.push(l < 10 ? l : +("" + (l + 1))[1]);
                    break
                }
            }
            if ("31" != T || e.length != i && e.length != i + 1 || (1 != e[i] ? m.push(2, 4, 6, 9, 11) : m.push(1)), "30" == T && 0 === e[i] && e.length <= i + 1 && m.push(2), e.length == i) {
                for (a = v === g && +h < 10 ? 1 : 2; a <= 9; ++a) m.push(a);
                b === g && +u >= 10 && m.push(0)
            }
            if (e.length == i + 1) {
                if (1 == e[i]) {
                    for (a = v === g ? +h[1] + 1 : 3; a <= 9; ++a) m.push(a);
                    if (b == g) for (a = 0; a < +u[1]; ++a) m.push(a)
                }
                if (0 === e[i] && (m.push(0), v === g || b === g)) for (a = v === g ? +T > +p ? +h : +h + 1 : 0; a <= (b === g ? +u - 1 : 9); ++a) m.push(a)
            }
            if (e.length == r) {
                for (a = w ? 1 + (+p > 10 ? +p[0] : 0) : +y[0] + 1; a <= 9; ++a) m.push(a);
                if (_) for (a = 0; a < (+f < 10 ? 0 : f[0]); ++a) m.push(a)
            }
            if (e.length == r + 1) {
                if (e[r] >= 3 || "02" == x) for (a = +y[1] + 1; a <= 9; ++a) m.push(a);
                if (w && +p[0] == e[r]) for (a = +p[1] + 1; a <= 9; ++a) m.push(a);
                if (_ && f[0] == e[r]) for (a = 0; a < +f[1]; ++a) m.push(a);
                if (0 === e[r] && (m.push(0), w || _)) for (a = w ? +p + 1 : 1; a <= (_ ? +f - 1 : 9); ++a) m.push(a)
            }
            if (void 0 !== e[s + 2] && "02" == x && "29" == T) for (n = +("" + e[s] + e[s + 1] + e[s + 2] + 0); n <= +("" + e[s] + e[s + 1] + e[s + 2] + 9); ++n) m.push(t(n) ? "" : n % 10);
            if (e.length == s) {
                if (d.min) for (a = 0; a < +b[0]; ++a) m.push(a);
                if (d.max) for (a = +v[0] + 1; a <= 9; ++a) m.push(a);
                m.push(0)
            }
            if (d.min || d.max) for (n = 1; n < 4; ++n) if (e.length == s + n) {
                if (e[s + n - 1] == +b[n - 1] && (3 != n || e[s + n - 2] == +b[n - 2])) for (a = 0; a < +b[n] + (3 == n && e[i + 1] && +u > +x ? 1 : 0); ++a) m.push(a);
                if (e[s + n - 1] == +v[n - 1] && (3 != n || e[s + n - 2] == +v[n - 2])) for (a = +v[n] + (3 == n && +h < +x ? 0 : 1); a <= 9; ++a) m.push(a)
            }
            return m
        }
        function n(e) {
            return new Date(+("" + e[s] + e[s + 1] + e[s + 2] + e[s + 3]), +("" + e[i] + e[i + 1]) - 1, +("" + e[r] + e[r + 1]))
        }
        var s, i, r, o, l = [],
            c = Ke({}, e.settings),
            d = Ke(e.settings, Ue, Na, c),
            m = d.dateOrder,
            u = d.min ? "" + (d.getMonth(d.min) + 1) : 0,
            h = d.max ? "" + (d.getMonth(d.max) + 1) : 0,
            f = d.min ? "" + d.getDay(d.min) : 0,
            p = d.max ? "" + d.getDay(d.max) : 0,
            b = d.min ? "" + d.getYear(d.min) : 0,
            v = d.max ? "" + d.getYear(d.max) : 0;
        for (m = m.replace(/y+/gi, "yyyy"), m = m.replace(/m+/gi, "mm"), m = m.replace(/d+/gi, "dd"), s = m.toUpperCase().indexOf("Y"), i = m.toUpperCase().indexOf("M"), r = m.toUpperCase().indexOf("D"), m = "", l.push({
            val: s,
            n: "yyyy"
        }, {
            val: i,
            n: "mm"
        }, {
            val: r,
            n: "dd"
        }), l.sort(function(e, t) {
            return e.val - t.val
        }), $e.each(l, function(e, t) {
            m += t.n
        }), s = m.indexOf("y"), i = m.indexOf("m"), r = m.indexOf("d"), m = "", o = 0; o < 8; ++o) m += "d", o + 1 != s && o + 1 != i && o + 1 != r || (m += d.delimiter);
        return e.getVal = function(t) {
            return e._hasValue || t ? n(e.getArrayVal(t)) : null
        }, {
            placeholder: "-",
            fill: "ltr",
            allowLeadingZero: !0,
            template: m,
            parseValue: function(e) {
                var t, a = [],
                    n = e || d.defaultValue,
                    s = D(d.dateFormat, n, d);
                if (n) for (t = 0; t < l.length; ++t) a = /m/i.test(l[t].n) ? a.concat(((d.getMonth(s) < 9 ? "0" : "") + (d.getMonth(s) + 1)).split("")) : /d/i.test(l[t].n) ? a.concat(((d.getDay(s) < 10 ? "0" : "") + d.getDay(s)).split("")) : a.concat((d.getYear(s) + "").split(""));
                return a
            },
            formatValue: function(e) {
                return k(d.dateFormat, n(e), d)
            },
            validate: function(t) {
                var s = t.values,
                    i = n(s);
                return {
                    disabled: a(s),
                    invalid: !("Invalid Date" != i && (!d.min || d.min <= i) && (!d.max || i <= d.max)) || !! d.invalid && -1 != e._indexOf(d.invalid, i)
                }
            }
        }
    }, o("numpad", Ma, !1);
    var Aa = {
        autoCorrect: !0,
        showSelector: !0,
        minRange: 1,
        rangeTap: !0,
        fromText: "Start",
        toText: "End"
    };
    ht.range = function(e) {
        function t(e, t) {
            e && (e.setFullYear(t.getFullYear()), e.setMonth(t.getMonth()), e.setDate(t.getDate()))
        }
        function a(t, a) {
            var n = e._order,
                s = new Date(t);
            return void 0 === n.h && s.setHours(a ? 23 : 0), void 0 === n.i && s.setMinutes(a ? 59 : 0), void 0 === n.s && s.setSeconds(a ? 59 : 0), s.setMilliseconds(a ? 999 : 0), s
        }
        function n(t) {
            e._startDate = H = w, e._endDate = P = C, Y.startInput && ($e(Y.startInput).val(y), t && $e(Y.startInput).trigger("change")), Y.endInput && ($e(Y.endInput).val(_), t && $e(Y.endInput).trigger("change"))
        }
        function s(e, t) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t)
        }
        function i(e) {
            b ? (C - w > Y.maxRange - 1 && (e ? w = new Date(Math.max(x, C - Y.maxRange + 1)) : C = new Date(Math.min(g, +w + Y.maxRange - 1))), C - w < Y.minRange - 1 && (e ? w = new Date(Math.max(x, C - Y.minRange + 1)) : C = new Date(Math.min(g, +w + Y.minRange - 1)))) : (Math.ceil((C - w) / $) > R && (e ? w = a(Math.max(x, s(C, 1 - R)), !1) : C = a(Math.min(g, s(w, R - 1)), !0)), Math.ceil((C - w) / $) < W && (e ? w = a(Math.max(x, s(C, 1 - W)), !1) : C = a(Math.min(g, s(w, W - 1)), !0)))
        }
        function r(e, t) {
            var a = !0;
            return e && w && C && (i(L), i(!L)), w && C || (a = !1), t && d(), a
        }
        function o() {
            return w && C ? Math.max(1, Math.round((new Date(C).setHours(0, 0, 0, 0) - new Date(w).setHours(0, 0, 0, 0)) / 864e5) + 1) : 0
        }
        function l(e) {
            e.addClass(B).attr("aria-checked", "true")
        }
        function c() {
            F && h && ($e(".mbsc-range-btn", h).removeClass(B).removeAttr("aria-checked"), l($e(".mbsc-range-btn", h).eq(L)))
        }
        function d() {
            var e, t, a, n, s, i = 0,
                r = z || !L ? " mbsc-cal-day-hl mbsc-cal-sel-start" : " mbsc-cal-sel-start",
                o = z || L ? " mbsc-cal-day-hl mbsc-cal-sel-end" : " mbsc-cal-sel-end";
            if (y = w ? k(p, w, Y) : "", _ = C ? k(p, C, Y) : "", h && ($e(".mbsc-range-btn-v-start", h).html(y || "&nbsp;"), $e(".mbsc-range-btn-v-end", h).html(_ || "&nbsp;"), e = w ? new Date(w) : null, a = C ? new Date(C) : null, !e && a && (e = new Date(a)), !a && e && (a = new Date(e)), s = L ? a : e, $e(".mbsc-cal-day-picker .mbsc-cal-day-hl", h).removeClass(K), $e(".mbsc-cal-day-picker .mbsc-selected", h).removeClass("mbsc-cal-sel-start mbsc-cal-sel-end " + B).removeAttr("aria-selected"), e && a)) for (t = e.setHours(0, 0, 0, 0), n = a.setHours(0, 0, 0, 0); a >= e && i < 126;) $e('.mbsc-cal-day[data-full="' + s.getFullYear() + "-" + (s.getMonth() + 1) + "-" + s.getDate() + '"]', h).addClass(B + " " + (s.getTime() === t ? r : "") + (s.getTime() === n ? o : "")).attr("aria-selected", "true"), s.setDate(s.getDate() + (L ? -1 : 1)), i++
        }
        function m(e, t) {
            return {
                h: e ? e.getHours() : t ? 23 : 0,
                i: e ? e.getMinutes() : t ? 59 : 0,
                s: e ? e.getSeconds() : t ? 59 : 0
            }
        }
        var u, h, f, p, b, v, g, x, T, y, _, w, M, C, S, N, V, I, F, H = e._startDate,
            P = e._endDate,
            L = 0,
            O = new Date,
            E = Ke({}, e.settings),
            Y = Ke(e.settings, Aa, E),
            j = Y.anchor,
            z = Y.rangeTap,
            $ = 864e5,
            W = Math.round(Y.minRange / $),
            R = Math.round(Y.maxRange / $),
            J = "mbsc-disabled " + (Y.disabledClass || ""),
            B = "mbsc-selected " + (Y.selectedClass || ""),
            K = "mbsc-cal-day-hl",
            q = null === Y.defaultValue ? [] : Y.defaultValue || [new Date(O.setHours(0, 0, 0, 0)), new Date(O.getFullYear(), O.getMonth(), O.getDate() + 6, 23, 59, 59, 999)];
        return z && (Y.tabs = !0), u = yt.call(this, e), p = e._format, b = /time/i.test(Y.controls.join(",")), N = "time" === Y.controls.join(""), F = 1 != Y.controls.length || "calendar" != Y.controls[0] || Y.showSelector, g = Y.max ? a(Y.max, !0) : 1 / 0, x = Y.min ? a(Y.min, !1) : -1 / 0, Y.startInput && (V = $e(Y.startInput).prop("readonly"), e.attachShow($e(Y.startInput).prop("readonly", !0), function() {
            L = 0, Y.anchor = j || $e(Y.startInput)
        })), Y.endInput && (I = $e(Y.endInput).prop("readonly"), e.attachShow($e(Y.endInput).prop("readonly", !0), function() {
            L = 1, Y.anchor = j || $e(Y.endInput)
        })), e._getDayProps = function(e, t) {
            var a = w ? new Date(w.getFullYear(), w.getMonth(), w.getDate()) : null,
                n = C ? new Date(C.getFullYear(), C.getMonth(), C.getDate()) : null;
            return {
                selected: a && n && e >= a && e <= C,
                cssClass: t.cssClass + " " + ((z || !L) && a && a.getTime() === e.getTime() || (z || L) && n && n.getTime() === e.getTime() ? K : "") + (a && a.getTime() === e.getTime() ? " mbsc-cal-sel-start" : "") + (n && n.getTime() === e.getTime() ? " mbsc-cal-sel-end" : "")
            }
        }, e.setVal = function(t, a, n, s, i) {
            var r = t || [],
                o = t;
            (void 0 === r[0] || null === r[0] || r[0].getTime) && (T = !0, w = r[0] || null, y = w ? k(p, w, Y) : "", L || (o = u.parseValue(y, e))), (void 0 === r[1] || null === r[1] || r[1].getTime) && (T = !0, C = r[1] || null, _ = C ? k(p, C, Y) : "", L && (o = u.parseValue(_, e))), s || (e._startDate = H = w, e._endDate = P = C), e._setVal(o, a, n, s, i)
        }, e.getVal = function(t) {
            return t ? [w, C] : e._hasValue ? [H, P] : null
        }, e.setActiveDate = function(t) {
            var a;
            L = "start" == t ? 0 : 1, a = "start" == t ? w : C, e.isVisible() && (c(), z || ($e(".mbsc-cal-table .mbsc-cal-day-hl", h).removeClass(K), a && $e('.mbsc-cal-day[data-full="' + a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + '"]', h).addClass(K)), a && (v = !0, e.setDate(a, !1, 1e3, !0)))
        }, e.getValue = e.getVal, Ke({}, u, {
            highlight: !1,
            outerMonthChange: !1,
            formatValue: function() {
                return y + (Y.endInput ? "" : _ ? " - " + _ : "")
            },
            parseValue: function(t) {
                var a = t ? t.split(" - ") : [];
                return Y.defaultValue = q[1], P = Y.endInput ? $e(Y.endInput).val() ? D(p, $e(Y.endInput).val(), Y) : q[1] : a[1] ? D(p, a[1], Y) : q[1], Y.defaultValue = q[0], H = Y.startInput ? $e(Y.startInput).val() ? D(p, $e(Y.startInput).val(), Y) : q[0] : a[0] ? D(p, a[0], Y) : q[0], Y.defaultValue = q[L], y = H ? k(p, H, Y) : "", _ = P ? k(p, P, Y) : "", e._startDate = H, e._endDate = P, u.parseValue(L ? _ : y, e)
            },
            onFill: function(e) {
                n(e.change)
            },
            onBeforeClose: function(t) {
                if ("set" === t.button && !r(!0, !0)) return e.setActiveDate(L ? "start" : "end"), !1
            },
            onHide: function() {
                u.onHide.call(e), L = 0, h = null, Y.anchor = j
            },
            onClear: function() {
                z && (L = 0)
            },
            onBeforeShow: function() {
                w = H || q[0], C = P || q[1], M = m(w, 0), S = m(C, 1), Y.counter && (Y.headerText = function() {
                    var e = o();
                    return (e > 1 ? Y.selectedPluralText || Y.selectedText : Y.selectedText).replace(/{count}/, e)
                }), T = !0
            },
            onMarkupReady: function(t) {
                var a;
                w && (v = !0, e.setDate(w, !1, 0, !0), w = e.getDate(!0)), C && (v = !0, e.setDate(C, !1, 0, !0), C = e.getDate(!0)), (L && C || !L && w) && (v = !0, e.setDate(L ? C : w, !1, 0, !0)), d(), u.onMarkupReady.call(this, t), h = $e(t.target), h.addClass("mbsc-range"), F && (a = '<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" data-select="start" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + Y.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (y || "&nbsp;") + '</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" data-select="end" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + Y.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (_ || "&nbsp;") + "</div></div></div></div>", Y.headerText ? $e(".mbsc-fr-hdr", h).after(a) : $e(".mbsc-fr-w", h).prepend(a), c()), $e(".mbsc-range-btn", h).on("touchstart click", function(t) {
                    A(t, this) && (e._showDayPicker(), e.setActiveDate($e(this).attr("data-select")))
                })
            },
            onDayChange: function(e) {
                e.active = L ? "end" : "start", f = !0
            },
            onSetDate: function(n) {
                var s;
                v || (s = a(n.date, L), T && !f || (z && f && (1 == L && s < w && (L = 0), L ? s.setHours(S.h, S.i, S.s, 999) : s.setHours(M.h, M.i, M.s, 0)), L ? (C = new Date(s), S = m(C)) : (w = new Date(s), M = m(w)), N && Y.autoCorrect && (t(w, s), t(C, s)), z && f && !L && (C = null))), N && !Y.autoCorrect && C < w && (C = new Date(C.setDate(C.getDate() + 1))), e._isValid = r(T || f || Y.autoCorrect, !v), n.active = L ? "end" : "start", !v && z && (f && (L = L ? 0 : 1), c()),
                e.isVisible() && (e._isValid ? $e(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).removeClass(J) : $e(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup).addClass(J)), f = !1, T = !1, v = !1
            },
            onTabChange: function(t) {
                "calendar" != t.tab && e.setDate(L ? C : w, !1, 1e3, !0), r(!0, !0)
            },
            onDestroy: function() {
                $e(Y.startInput).prop("readonly", V), $e(Y.endInput).prop("readonly", I)
            }
        })
    }, o("range", vt), o("scroller", vt, !1), o("scrollview", xa, !1);
    var Va = 0;
    var Ia = {
        inputClass: "",
        invalid: [],
        rtl: !1,
        showInput: !0,
        groupLabel: "Groups",
        dataHtml: "html",
        dataText: "text",
        dataValue: "value",
        dataGroup: "group",
        dataDisabled: "disabled",
        filterPlaceholderText: "Type to filter",
        filterEmptyText: "No results",
        filterClearIcon: "material-close"
    };
    ht.select = function(e) {
        function t(e) {
            var t, a, n, s, i, r, o = 0,
                l = 0,
                c = {};
            if (j = {}, S = {}, A = [], C = [], te.length = 0, q) $e.each(T, function(o, d) {
                i = d[O.dataText], a = d[O.dataHtml], r = d[O.dataValue], n = d[O.dataGroup], s = {
                    value: r,
                    html: a,
                    text: i,
                    index: o
                }, j[r] = s, e && !b(i, e) || (A.push(s), U && (void 0 === c[n] ? (t = {
                    text: n,
                    value: l,
                    options: [],
                    index: l
                }, S[l] = t, c[n] = l, C.push(t), l++) : t = S[c[n]], Z && (s.index = t.options.length), s.group = c[n], t.options.push(s)), d[O.dataDisabled] && te.push(r))
            });
            else if (U) {
                var d = !0;
                $e("optgroup", P).each(function(t) {
                    S[t] = {
                        text: this.label,
                        value: t,
                        options: [],
                        index: t
                    }, d = !0, $e("option", this).each(function(a) {
                        s = {
                            value: this.value,
                            text: this.text,
                            index: Z ? a : o++,
                            group: t
                        }, j[this.value] = s, e && !b(this.text, e) || (d && (C.push(S[t]), d = !1), A.push(s), S[t].options.push(s), this.disabled && te.push(this.value))
                    })
                })
            } else $e("option", P).each(function(t) {
                s = {
                    value: this.value,
                    text: this.text,
                    index: t
                }, j[this.value] = s, e && !b(this.text, e) || (A.push(s), this.disabled && te.push(this.value))
            });
            O.defaultValue ? y = O.defaultValue : A.length && (y = A[0].value), Q && (A = [], o = 0, $e.each(S, function(e, t) {
                t.options.length && (r = "__group" + e, s = {
                    text: t.text,
                    value: r,
                    group: e,
                    index: o++,
                    cssClass: "mbsc-sel-gr"
                }, j[r] = s, A.push(s), te.push(s.value), $e.each(t.options, function(e, t) {
                    t.index = o++, A.push(t)
                }))
            })), E && (A.length ? E.removeClass("mbsc-sel-empty-v") : E.addClass("mbsc-sel-empty-v"))
        }
        function a(e, t, a) {
            var n, s = [];
            for (n = 0; n < e.length; n++) s.push({
                value: e[n].value,
                display: e[n].html || e[n].text,
                cssClass: e[n].cssClass
            });
            return {
                circular: !1,
                multiple: t,
                data: s,
                label: a
            }
        }
        function n() {
            return a(C, !1, O.groupLabel)
        }
        function s() {
            return a(Z ? S[M].options : A, R, K)
        }
        function i() {
            var e, t, a = [
                []
            ];
            return X && (e = n(), $ ? a[0][k] = e : a[k] = [e]), t = s(), $ ? a[0][V] = t : a[V] = [t], a
        }
        function r(e) {
            W && (e && u(e) && (e = e.split(",")), $e.isArray(e) && (e = e[0])), N = void 0 === e || null === e || "" === e ? y : e, X && (M = j[N] ? j[N].group : null)
        }
        function o(e) {
            return F[e] || (j[e] ? j[e].text : "")
        }
        function h(t) {
            var a, n, s = [];
            if (R) {
                for (a in e._tempSelected[V]) s.push(o(a));
                return s.join(", ")
            }
            return n = t[V], o(n)
        }
        function f() {
            var t, a = "",
                n = e.getVal(),
                s = O.formatValue.call(H, e.getArrayVal(), e);
            if (O.filter && "inline" == O.display || x.val(s), P.is("select") && q) {
                if (W) for (t = 0; t < n.length; t++) a += '<option value="' + n[t] + '">' + o(n[t]) + "</option>";
                else a = '<option value="' + n + '">' + s + "</option>";
                P.html(a)
            }
            H !== x[0] && P.val(n)
        }
        function p() {
            var t = {};
            t[V] = s(), I = !0, e.changeWheel(t)
        }
        function b(e, t) {
            return t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), e.match(new RegExp(t, "ig"))
        }
        function v(e) {
            return O.data.dataField ? e[O.data.dataField] : O.data.processResponse ? O.data.processResponse(e) : e
        }
        function g(a) {
            var o = {};
            t(a), O.wheels = i(), r(N), o[V] = s(), e._tempWheelArray[V] = N, X && (o[k] = n(), e._tempWheelArray[k] = M), e._isVisible && e.changeWheel(o, 0, !0)
        }
        var x, T, y, _, w, M, C, S, k, D, N, A, V, I, F = {}, H = this,
            P = $e(H),
            L = Ke({}, e.settings),
            O = Ke(e.settings, Ia, L),
            E = $e('<div class="mbsc-sel-empty">' + O.filterEmptyText + "</div>"),
            Y = O.readonly,
            j = {}, z = O.layout || (/top|bottom|inline/.test(O.display) || O.filter ? "liquid" : ""),
            $ = "liquid" == z,
            W = m(O.select) ? O.select : "multiple" == O.select || P.prop("multiple"),
            R = W || !! O.filter && 1,
            J = this.id + "_dummy",
            B = $e('label[for="' + this.id + '"]').attr("for", J),
            K = void 0 !== O.label ? O.label : B.length ? B.text() : P.attr("name"),
            q = !! O.data,
            U = q ? !! O.group : $e("optgroup", P).length,
            G = O.group,
            X = U && G && !1 !== G.groupWheel,
            Z = U && G && X && !0 === G.clustered,
            Q = U && (!G || !1 !== G.header && !Z),
            ee = P.val() || (W ? [] : [""]),
            te = [];
        return e.setVal = function(t, a, n, s, i) {
            R && (null === t || void 0 === t || W || (t = [t]), t && u(t) && (t = t.split(",")), e._tempSelected[V] = d(t), s || (e._selected[V] = d(t)), t = t ? t[0] : null), e._setVal(t, a, n, s, i)
        }, e.getVal = function(t, a) {
            var n;
            return R ? (n = c(t ? e._tempSelected[V] : e._selected[V]), n = W ? n : n.length ? n[0] : null) : (n = t ? e._tempWheelArray : e._hasValue ? e._wheelArray : null, n = n ? n[V] : null), W ? n : void 0 !== n ? U && a ? [j[n] ? j[n].group : null, n] : n : null
        }, e.refresh = function(e, t, a) {
            a = a || l, e ? T = O.data = e : $e.isArray(O.data) && (T = O.data), !e && D && void 0 === t ? he(O.data.url, function(e) {
                T = v(e), g(), a()
            }, O.data.dataType) : (g(t), a())
        }, O.invalid.length || (O.invalid = te), X ? (k = 0, V = 1) : (k = -1, V = 0), R && (W && P.prop("multiple", !0), ee && u(ee) && (ee = ee.split(",")), e._selected[V] = d(ee)), e._$input && e._$input.remove(), P.next().is("input.mbsc-control") ? x = P.next().removeAttr("tabindex") : O.input ? x = $e(O.input) : (O.filter && "inline" == O.display ? e._$input = $e('<div class="mbsc-sel-input-wrap"><input type="text" id="' + J + '" class="mbsc-control ' + O.inputClass + '" readonly /></div>') : (x = $e('<input type="text" id="' + J + '" class="mbsc-control ' + O.inputClass + '" readonly />'), e._$input = x), O.showInput && (e._$input.insertBefore(P), x || (x = e._$input.find("#" + J)))), e.attachShow(x.attr("placeholder", O.placeholder || "")), x[0] !== H && P.addClass("mbsc-sel-hdn").attr("tabindex", -1), !R || O.rows % 2 || (O.rows = O.rows - 1), O.filter && (_ = O.filter.minLength || 0), D = O.data && O.data.url, D ? e.refresh(void 0, void 0, f) : (q && (T = O.data), t(), r(P.val())), {
            layout: z,
            headerText: !1,
            anchor: x,
            compClass: "mbsc-sel" + (X ? " mbsc-sel-gr-whl" : "") + (R ? " mbsc-sel-multi" : ""),
            setOnTap: !X || [!1, !0],
            formatValue: h,
            parseValue: function(e) {
                return r(void 0 === e ? P.val() : e), X ? [M, N] : [N]
            },
            validate: function(e) {
                var t = e.index,
                    a = [];
                return a[V] = O.invalid, Z && !I && void 0 === t && p(), I = !1, {
                    disabled: a
                }
            },
            onRead: f,
            onFill: f,
            onMarkupReady: function(e, t) {
                if (O.filter) {
                    var a, n, s, i = $e(".mbsc-fr-w", e.target),
                        r = $e('<span class="mbsc-sel-filter-clear mbsc-ic mbsc-ic-' + O.filterClearIcon + '"></span>');
                    "inline" == O.display ? (a = x, x.parent().find(".mbsc-sel-filter-clear").remove()) : (i.find(".mbsc-fr-c").before('<div class="mbsc-input mbsc-sel-filter-cont mbsc-control-w"><span class="mbsc-input-wrap"><input tabindex="0" type="text" class="mbsc-sel-filter-input mbsc-control"/></span></div>'), a = i.find(".mbsc-sel-filter-input")), w = null, s = a[0], a.prop("readonly", !1).attr("placeholder", O.filterPlaceholderText).parent().append(r), i.find(".mbsc-fr-c").prepend(E), t._activeElm = s, t.tap(r, function() {
                        s.value = "", t.refresh(), r.removeClass("mbsc-sel-filter-show-clear")
                    }), a.on("keydown", function(e) {
                        13 != e.keyCode && 27 != e.keyCode || (e.stopPropagation(), s.blur())
                    }).on("keyup", function() {
                        clearTimeout(n), s.value.length ? r.addClass("mbsc-sel-filter-show-clear") : r.removeClass("mbsc-sel-filter-show-clear"), n = setTimeout(function() {
                            w !== s.value && !1 !== t.trigger("onFilter", {
                                filterText: s.value
                            }) && (w = s.value, (w.length >= _ || !w.length) && (D && O.data.remoteFilter ? he(O.data.url + encodeURIComponent(w), function(e) {
                                t.refresh(v(e))
                            }, O.data.dataType) : t.refresh(void 0, w)))
                        }, 500)
                    })
                }
            },
            onBeforeShow: function() {
                W && O.counter && (O.headerText = function() {
                    var t = 0;
                    return $e.each(e._tempSelected[V], function() {
                        t++
                    }), (t > 1 ? O.selectedPluralText || O.selectedText : O.selectedText).replace(/{count}/, t)
                }), r(P.val()), O.filter && t(void 0), e.settings.wheels = i(), I = !0
            },
            onWheelGestureStart: function(e) {
                e.index == k && (O.readonly = [!1, !0])
            },
            onWheelAnimationEnd: function(t) {
                var a = e.getArrayVal(!0);
                t.index == k ? (O.readonly = Y, a[k] != M && (M = a[k], N = S[M].options[0].value, a[V] = N, Z ? p() : e.setArrayVal(a, !1, !1, !0, 1e3))) : t.index == V && a[V] != N && (N = a[V], X && j[N] && j[N].group != M && (M = j[N].group, a[k] = M, e.setArrayVal(a, !1, !1, !0, 1e3)))
            },
            onItemTap: function(e) {
                if (e.index == V && (F[e.value] = j[e.value].text, R && !W && e.selected)) return !1
            },
            onClose: function() {
                D && O.data.remoteFilter && w && e.refresh()
            },
            onDestroy: function() {
                e._$input && e._$input.remove(), P.removeClass("mbsc-sel-hdn").removeAttr("tabindex")
            }
        }
    }, o("select", vt);
    var Fa = {
        autostart: !1,
        step: 1,
        useShortLabels: !1,
        labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds", ""],
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide",
        mode: "countdown"
    };
    ht.timer = function(e) {
        function t(e) {
            return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())
        }
        function a(e) {
            var a = {};
            if (P && M[I].index > M.days.index) {
                var n, s, i, r, o = new Date,
                    l = b ? o : H,
                    c = b ? H : o;
                for (c = t(c), l = t(l), a.years = l.getFullYear() - c.getFullYear(), a.months = l.getMonth() - c.getMonth(), a.days = l.getDate() - c.getDate(), a.hours = l.getHours() - c.getHours(), a.minutes = l.getMinutes() - c.getMinutes(), a.seconds = l.getSeconds() - c.getSeconds(), a.fract = (l.getMilliseconds() - c.getMilliseconds()) / 10, n = w.length; n > 0; n--) s = w[n - 1], i = M[s], r = w[$e.inArray(s, w) - 1], M[r] && a[s] < 0 && (a[r]--, a[s] += "months" == r ? 32 - new Date(l.getFullYear(), l.getMonth(), 32).getDate() : i.until + 1);
                "months" == I && (a.months += 12 * a.years, delete a.years)
            } else $e(w).each(function(t, n) {
                M[n].index <= M[I].index && (a[n] = Math.floor(e / M[n].limit), e -= a[n] * M[n].limit)
            });
            return a
        }
        function n(e) {
            var t = 1,
                a = M[e],
                n = a.wheel,
                i = a.prefix,
                r = a.until,
                o = M[w[$e.inArray(e, w) - 1]];
            if (a.index <= M[I].index && (!o || o.limit > V)) if (C[e] || L[0].push(n), C[e] = 1, n.data = [], n.label = a.label || "", n.cssClass = "mbsc-timer-whl-" + e, V >= a.limit && (t = Math.max(Math.round(V / a.limit), 1), d = t * a.limit), e == I) n.min = 0, n.data = function(e) {
                return {
                    value: e,
                    display: s(e, i, a.label)
                }
            }, n.getIndex = function(e) {
                return e
            };
            else for (l = 0; l <= r; l += t) n.data.push({
                value: l,
                display: s(l, i, a.label)
            })
        }
        function s(e, t, a) {
            return (t || "") + (e < 10 ? "0" : "") + e + '<span class="mbsc-timer-lbl">' + a + "</span>"
        }
        function i(e) {
            var t, n = [],
                s = a(e);
            return $e(w).each(function(e, a) {
                C[a] && (t = Math.max(Math.round(V / M[a].limit), 1), n.push(Math.round(s[a] / t) * t))
            }), n
        }
        function r(e) {
            P ? (f = H - new Date, f < 0 ? (f *= -1, b = !0) : b = !1, p = 0, A = !0) : void 0 !== H ? (A = !1, f = 1e3 * H, b = "countdown" != T.mode, e && (p = 0)) : (f = 0, b = "countdown" != T.mode, A = b, e && (p = 0))
        }
        function o() {
            D ? ($e(".mbsc-fr-w", v).addClass("mbsc-timer-running mbsc-timer-locked"), $e(".mbsc-timer-btn-toggle-c > div", v).text(T.stopText), e.buttons.start.icon && $e(".mbsc-timer-btn-toggle-c > div", v).removeClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && $e(".mbsc-timer-btn-toggle-c > div", v).addClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == T.mode && ($e(".mbsc-timer-btn-resetlap-c > div", v).text(T.lapText), e.buttons.reset.icon && $e(".mbsc-timer-btn-resetlap-c > div", v).removeClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && $e(".mbsc-timer-btn-resetlap-c > div", v).addClass("mbsc-ic-" + e.buttons.lap.icon))) : ($e(".mbsc-fr-w", v).removeClass("mbsc-timer-running"), $e(".mbsc-timer-btn-toggle-c > div", v).text(T.startText), e.buttons.start.icon && $e(".mbsc-timer-btn-toggle-c > div", v).addClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && $e(".mbsc-timer-btn-toggle-c > div", v).removeClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == T.mode && ($e(".mbsc-timer-btn-resetlap-c > div", v).text(T.resetText), e.buttons.reset.icon && $e(".mbsc-timer-btn-resetlap-c > div", v).addClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && $e(".mbsc-timer-btn-resetlap-c > div", v).removeClass("mbsc-ic-" + e.buttons.lap.icon)))
        }
        var l, c, d, m, u, h, f, p, b, v, g, x = Ke({}, e.settings),
            T = Ke(e.settings, Fa, x),
            y = T.useShortLabels ? T.labelsShort : T.labels,
            _ = ["resetlap", "toggle"],
            w = ["years", "months", "days", "hours", "minutes", "seconds", "fract"],
            M = {
                years: {
                    index: 6,
                    until: 10,
                    limit: 31536e6,
                    label: y[0],
                    wheel: {}
                },
                months: {
                    index: 5,
                    until: 11,
                    limit: 2592e6,
                    label: y[1],
                    wheel: {}
                },
                days: {
                    index: 4,
                    until: 31,
                    limit: 864e5,
                    label: y[2],
                    wheel: {}
                },
                hours: {
                    index: 3,
                    until: 23,
                    limit: 36e5,
                    label: y[3],
                    wheel: {}
                },
                minutes: {
                    index: 2,
                    until: 59,
                    limit: 6e4,
                    label: y[4],
                    wheel: {}
                },
                seconds: {
                    index: 1,
                    until: 59,
                    limit: 1e3,
                    label: y[5],
                    wheel: {}
                },
                fract: {
                    index: 0,
                    until: 99,
                    limit: 10,
                    label: y[6],
                    prefix: ".",
                    wheel: {}
                }
            }, C = {}, S = [],
            k = 0,
            D = !1,
            N = !0,
            A = !1,
            V = Math.max(10, 1e3 * T.step),
            I = T.maxWheel,
            F = "stopwatch" == T.mode || P,
            H = T.targetTime,
            P = H && void 0 !== H.getTime,
            L = [
                []
            ];
        return e.start = function() {
            if (N && e.reset(), !D) {
                if (r(), !A && p >= f) return;
                D = !0, N = !1, u = new Date, m = p, T.readonly = !0, e.setVal(i(b ? p : f - p), !0, !0, !1, 100), c = setInterval(function() {
                    p = new Date - u + m, e.setVal(i(b ? p : f - p), !0, !0, !1, Math.min(100, d - 10)), !A && p + d >= f && (clearInterval(c), setTimeout(function() {
                        e.stop(), p = f, e.setVal(i(b ? p : 0), !0, !0, !1, 100), e.trigger("onFinish", {
                            time: f
                        }), N = !0
                    }, f - p))
                }, d), o(), e.trigger("onStart")
            }
        }, e.stop = function() {
            D && (D = !1, clearInterval(c), p = new Date - u + m, o(), e.trigger("onStop", {
                ellapsed: p
            }))
        }, e.toggle = function() {
            D ? e.stop() : e.start()
        }, e.reset = function() {
            e.stop(), p = 0, S = [], k = 0, e.setVal(i(b ? 0 : f), !0, !0, !1, 1e3), e.settings.readonly = F, N = !0, F || $e(".mbsc-fr-w", v).removeClass("mbsc-timer-locked"), e.trigger("onReset")
        }, e.lap = function() {
            D && (h = new Date - u + m, g = h - k, k = h, S.push(h), e.trigger("onLap", {
                ellapsed: h,
                lap: g,
                laps: S
            }))
        }, e.resetlap = function() {
            D && "stopwatch" == T.mode ? e.lap() : e.reset()
        }, e.getTime = function() {
            return f
        }, e.setTime = function(e) {
            H = e / 1e3, f = e
        }, e.getEllapsedTime = function() {
            return N ? 0 : D ? new Date - u + m : p
        }, e.setEllapsedTime = function(t, a) {
            N || (m = p = t, u = new Date, e.setVal(i(b ? p : f - p), !0, a, !1, 1e3))
        }, r(!0), I || f || (I = "minutes"), "inline" !== T.display && _.unshift("hide"), I || $e(w).each(function(e, t) {
            if (!I && f >= M[t].limit) return I = t, !1
        }), $e(w).each(function(e, t) {
            n(t)
        }), d = Math.max(97, d), T.autostart && setTimeout(function() {
            e.start()
        }, 0), e.handlers.toggle = e.toggle, e.handlers.start = e.start, e.handlers.stop = e.stop, e.handlers.resetlap = e.resetlap, e.handlers.reset = e.reset, e.handlers.lap = e.lap, e.buttons.toggle = {
            parentClass: "mbsc-timer-btn-toggle-c",
            text: T.startText,
            icon: T.startIcon,
            handler: "toggle"
        }, e.buttons.start = {
            text: T.startText,
            icon: T.startIcon,
            handler: "start"
        }, e.buttons.stop = {
            text: T.stopText,
            icon: T.stopIcon,
            handler: "stop"
        }, e.buttons.reset = {
            text: T.resetText,
            icon: T.resetIcon,
            handler: "reset"
        }, e.buttons.lap = {
            text: T.lapText,
            icon: T.lapIcon,
            handler: "lap"
        }, e.buttons.resetlap = {
            parentClass: "mbsc-timer-btn-resetlap-c",
            text: T.resetText,
            icon: T.resetIcon,
            handler: "resetlap"
        }, e.buttons.hide = {
            parentClass: "mbsc-timer-btn-hide-c",
            text: T.hideText,
            icon: T.closeIcon,
            handler: "cancel"
        }, {
            wheels: L,
            headerText: !1,
            readonly: F,
            buttons: _,
            compClass: "mbsc-timer",
            parseValue: function() {
                return i(b ? 0 : f)
            },
            formatValue: function(e) {
                var t = "",
                    a = 0;
                return $e(w).each(function(n, s) {
                    "fract" != s && C[s] && (t += e[a] + ("seconds" == s && C.fract ? "." + e[a + 1] : "") + " " + y[n] + " ", a++)
                }), t
            },
            validate: function(e) {
                var t = e.values,
                    a = e.index,
                    n = 0;
                N && void 0 !== a && (H = 0, $e(w).each(function(e, a) {
                    C[a] && (H += M[a].limit * t[n], n++)
                }), H /= 1e3, r(!0))
            },
            onBeforeShow: function() {
                T.showLabel = !0
            },
            onMarkupReady: function(e) {
                v = $e(e.target), o(), F && $e(".mbsc-fr-w", v).addClass("mbsc-timer-locked")
            },
            onPosition: function(e) {
                $e(".mbsc-fr-w", e.target).css("min-width", 0).css("min-width", $e(".mbsc-fr-btn-cont", e.target)[0].offsetWidth)
            },
            onDestroy: function() {
                clearInterval(c)
            }
        }
    }, o("timer", vt);
    var Ha = {
        wheelOrder: "hhiiss",
        useShortLabels: !1,
        min: 0,
        max: 1 / 0,
        labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"],
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"]
    };
    ht.timespan = function(e) {
        function t(e) {
            var t = {};
            return $e(b).each(function(a, n) {
                t[n] = T[n] ? Math.floor(e / v[n].limit) : 0, e -= t[n] * v[n].limit
            }), t
        }
        function a(e) {
            var t = !1,
                a = x[T[e] - 1] || 1,
                s = v[e],
                i = s.label,
                o = s.wheel;
            if (o.data = [], o.label = s.label, f.match(new RegExp(s.re + s.re, "i")) && (t = !0), e == y) o.min = c[e], o.max = d[e], o.data = function(e) {
                return {
                    value: e * a,
                    display: n(e * a, t, i)
                }
            }, o.getIndex = function(e) {
                return Math.round(e / a)
            };
            else for (r = 0; r <= s.until; r += a) o.data.push({
                value: r,
                display: n(r, t, i)
            })
        }
        function n(e, t, a) {
            return (e < 10 && t ? "0" : "") + e + '<span class="mbsc-ts-lbl">' + a + "</span>"
        }
        function s(e) {
            var t = 0;
            return $e.each(g, function(a, n) {
                isNaN(+e[0]) || (t += v[n.v].limit * e[a])
            }), t
        }
        function i(e, t) {
            return Math.floor(e / t) * t
        }
        var r, o, l, c, d, u = Ke({}, e.settings),
            h = Ke(e.settings, Ha, u),
            f = h.wheelOrder,
            p = h.useShortLabels ? h.labelsShort : h.labels,
            b = ["years", "months", "days", "hours", "minutes", "seconds"],
            v = {
                years: {
                    ord: 0,
                    index: 6,
                    until: 10,
                    limit: 31536e6,
                    label: p[0],
                    re: "y",
                    wheel: {}
                },
                months: {
                    ord: 1,
                    index: 5,
                    until: 11,
                    limit: 2592e6,
                    label: p[1],
                    re: "m",
                    wheel: {}
                },
                days: {
                    ord: 2,
                    index: 4,
                    until: 31,
                    limit: 864e5,
                    label: p[2],
                    re: "d",
                    wheel: {}
                },
                hours: {
                    ord: 3,
                    index: 3,
                    until: 23,
                    limit: 36e5,
                    label: p[3],
                    re: "h",
                    wheel: {}
                },
                minutes: {
                    ord: 4,
                    index: 2,
                    until: 59,
                    limit: 6e4,
                    label: p[4],
                    re: "i",
                    wheel: {}
                },
                seconds: {
                    ord: 5,
                    index: 1,
                    until: 59,
                    limit: 1e3,
                    label: p[5],
                    re: "s",
                    wheel: {}
                }
            }, g = [],
            x = h.steps || [],
            T = {}, y = "seconds",
            _ = h.defaultValue || Math.max(h.min, Math.min(0, h.max)),
            w = [
                []
            ];
        return $e(b).each(function(e, t) {
            (o = f.search(new RegExp(v[t].re, "i"))) > -1 && (g.push({
                o: o,
                v: t
            }), v[t].index > v[y].index && (y = t))
        }), g.sort(function(e, t) {
            return e.o > t.o ? 1 : -1
        }), $e.each(g, function(e, t) {
            T[t.v] = e + 1, w[0].push(v[t.v].wheel)
        }), c = t(h.min), d = t(h.max), $e.each(g, function(e, t) {
            a(t.v)
        }), e.getVal = function(t, a) {
            return a ? e._getVal(t) : e._hasValue || t ? s(e.getArrayVal(t)) : null
        }, {
            showLabel: !0,
            wheels: w,
            compClass: "mbsc-ts",
            parseValue: function(e) {
                var a, n = [];
                return m(e) || !e ? (l = t(e || _), $e.each(g, function(e, t) {
                    n.push(l[t.v])
                })) : $e.each(g, function(t, s) {
                    a = new RegExp("(\\d+)\\s?(" + h.labels[v[s.v].ord] + "|" + h.labelsShort[v[s.v].ord] + ")", "gi").exec(e), n.push(a ? a[1] : 0)
                }), $e(n).each(function(e, t) {
                    n[e] = i(t, x[e] || 1)
                }), n
            },
            formatValue: function(e) {
                var t = "";
                return $e.each(g, function(a, n) {
                    t += +e[a] ? e[a] + " " + v[n.v].label + " " : ""
                }), t ? t.replace(/\s+$/g, "") : 0
            },
            validate: function(a) {
                var n, i, r, o, l = a.values,
                    m = a.direction,
                    u = [],
                    h = !0,
                    f = !0;
                return $e(b).each(function(a, p) {
                    if (void 0 !== T[p]) {
                        if (r = T[p] - 1, u[r] = [], o = {}, p != y) {
                            if (h) for (i = d[p] + 1; i <= v[p].until; i++) o[i] = !0;
                            if (f) for (i = 0; i < c[p]; i++) o[i] = !0
                        }
                        l[r] = e.getValidValue(r, l[r], m, o), n = t(s(l)), h = h && n[p] == d[p], f = f && n[p] == c[p], $e.each(o, function(e) {
                            u[r].push(e)
                        })
                    }
                }), {
                    disabled: u
                }
            }
        }
    }, o("timespan", vt), ht.treelist = aa, o("treelist", vt), o("widget", qt, !1), ve.i18n.ar = {
        rtl: !0,
        setText: "تعيين",
        cancelText: "إلغاء",
        clearText: "مسح",
        selectedText: "{count} المحدد",
        dateFormat: "dd/mm/yy",
        dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
        dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        dayText: "يوم",
        hourText: "ساعات",
        minuteText: "الدقائق",
        monthNames: ["كانون الثاني", "شهر فبراير", "مارس", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "شهر اكتوبر", "شهر نوفمبر", "ديسمبر"],
        monthNamesShort: ["كانون الثاني", "شهر فبراير", "مارس", "أبريل", "قد", "يونيو", "يوليو", "أغسطس", "سبتمبر", "شهر اكتوبر", "شهر نوفمبر", "ديسمبر"],
        monthText: "شهر",
        secText: "ثواني",
        amText: "ص",
        pmText: "م",
        timeFormat: "hh:ii A",
        yearText: "عام",
        nowText: "الآن",
        firstDay: 0,
        dateText: "تاريخ",
        timeText: "وقت",
        closeText: "إغلاق",
        todayText: "اليوم",
        prevMonthText: "الشهر السابق",
        nextMonthText: "الشهر القادم",
        prevYearText: "السنه السابقة",
        nextYearText: "العام القادم",
        eventText: "الحدث",
        eventsText: "أحداث",
        fromText: "يبدا",
        toText: "ينتهي",
        wholeText: "كامل",
        fractionText: "جزء",
        unitText: "وحدة",
        delimiter: "/",
        decimalSeparator: ".",
        thousandsSeparator: ",",
        labels: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
        labelsShort: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
        startText: "بدء",
        stopText: "إيقاف",
        resetText: "إعادة ضبط",
        lapText: "الدورة",
        hideText: "إخفاء",
        offText: "إيقاف",
        onText: "تشغيل",
        backText: "رجوع",
        undoText: "تراجع"
    }, ve.i18n.bg = {
        setText: "Задаване",
        cancelText: "Отмяна",
        clearText: "Изчистване",
        selectedText: "{count} подбран",
        dateFormat: "dd.mm.yy",
        dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
        dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
        dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
        dayText: "ден",
        delimiter: ".",
        hourText: "час",
        minuteText: "минута",
        monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
        monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
        monthText: "месец",
        secText: "секунди",
        timeFormat: "H:ii",
        yearText: "година",
        nowText: "Сега",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Дата",
        timeText: "път",
        todayText: "днес",
        prevMonthText: "Предишния месец",
        nextMonthText: "Следващият месец",
        prevYearText: "Предходната година",
        nextYearText: "Следващата година",
        closeText: "затвори",
        eventText: "Събитие",
        eventsText: "Събития",
        fromText: "ОТ",
        toText: "ДО",
        wholeText: "цяло",
        fractionText: "фракция",
        unitText: "единица",
        labels: ["Години", "месеца", "дни", "часа", "минути", "секунди", ""],
        labelsShort: ["Години", "месеца", "дни", "часа", "минути", "секунди", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: "Нулиране",
        lapText: "Обиколка",
        hideText: "крия",
        backText: "връщане",
        undoText: "ОТМЯНА",
        offText: "ИЗКЛ",
        onText: "ВКЛ",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.ca = {
        setText: "Acceptar",
        cancelText: "Cancel·lar",
        clearText: "Esborrar",
        selectedText: "{count} seleccionat",
        selectedPluralText: "{count} seleccionats",
        dateFormat: "dd/mm/yy",
        dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
        dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
        dayText: "Dia",
        hourText: "Hores",
        minuteText: "Minuts",
        monthNames: ["Gener", "Febrer", "Mar&ccedil;", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
        monthText: "Mes",
        secText: "Segons",
        timeFormat: "HH:ii",
        yearText: "Any",
        nowText: "Ara",
        pmText: "pm",
        amText: "am",
        todayText: "Avui",
        firstDay: 1,
        dateText: "Data",
        timeText: "Temps",
        closeText: "Tancar",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Sencer",
        fractionText: "Fracció",
        unitText: "Unitat",
        labels: ["Anys", "Mesos", "Dies", "Hores", "Minuts", "Segons", ""],
        labelsShort: ["Anys", "Mesos", "Dies", "Hrs", "Mins", "Secs", ""],
        startText: "Iniciar",
        stopText: "Aturar",
        resetText: "Reiniciar",
        lapText: "Volta",
        hideText: "Amagar",
        backText: "Enrere",
        undoText: "Desfés",
        offText: "No",
        onText: "Si"
    }, ve.i18n.cs = {
        setText: "Zadej",
        cancelText: "Storno",
        clearText: "Vymazat",
        selectedText: "Označený: {count}",
        dateFormat: "dd.mm.yy",
        dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
        dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
        dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
        dayText: "Den",
        hourText: "Hodiny",
        minuteText: "Minuty",
        monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
        monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
        monthText: "Měsíc",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Teď",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Čas",
        closeText: "Zavřít",
        fromText: "Začátek",
        toText: "Konec",
        wholeText: "Celý",
        fractionText: "Část",
        unitText: "Jednotka",
        labels: ["Roky", "Měsíce", "Dny", "Hodiny", "Minuty", "Sekundy", ""],
        labelsShort: ["Rok", "Měs", "Dny", "Hod", "Min", "Sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetovat",
        lapText: "Etapa",
        hideText: "Schovat",
        backText: "Zpět",
        undoText: "Zpět",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.da = {
        setText: "Sæt",
        cancelText: "Annuller",
        clearText: "Ryd",
        selectedText: "{count} valgt",
        selectedPluralText: "{count} valgt",
        dateFormat: "dd/mm/yy",
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        hourText: "Timer",
        minuteText: "Minutter",
        monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Måned",
        secText: "Sekunder",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH.ii",
        yearText: "År",
        nowText: "Nu",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        closeText: "Luk",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hele",
        fractionText: "Dele",
        unitText: "Enhed",
        labels: ["År", "Måneder", "Dage", "Timer", "Minutter", "Sekunder", ""],
        labelsShort: ["År", "Mdr", "Dg", "Timer", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Nulstil",
        lapText: "Omgang",
        hideText: "Skjul",
        offText: "Fra",
        onText: "Til",
        backText: "Tilbage",
        undoText: "Fortryd"
    }, ve.i18n.de = {
        setText: "OK",
        cancelText: "Abbrechen",
        clearText: "Löschen",
        selectedText: "{count} ausgewählt",
        dateFormat: "dd.mm.yy",
        dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
        dayText: "Tag",
        delimiter: ".",
        hourText: "Stunde",
        minuteText: "Minuten",
        monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        monthText: "Monat",
        secText: "Sekunden",
        timeFormat: "HH:ii",
        yearText: "Jahr",
        nowText: "Jetzt",
        pmText: "pm",
        amText: "am",
        todayText: "Heute",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Zeit",
        closeText: "Schließen",
        fromText: "Von",
        toText: "Bis",
        wholeText: "Ganze Zahl",
        fractionText: "Bruchzahl",
        unitText: "Maßeinheit",
        labels: ["Jahre", "Monate", "Tage", "Stunden", "Minuten", "Sekunden", ""],
        labelsShort: ["Jahr.", "Mon.", "Tag.", "Std.", "Min.", "Sek.", ""],
        startText: "Starten",
        stopText: "Stoppen",
        resetText: "Zurücksetzen",
        lapText: "Lap",
        hideText: "Ausblenden",
        backText: "Zurück",
        undoText: "Rückgängig machen",
        offText: "Aus",
        onText: "Ein",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.el = {
        setText: "Ορισμος",
        cancelText: "Ακυρωση",
        clearText: "Διαγραφη",
        selectedText: "{count} επιλεγμένα",
        dateFormat: "dd/mm/yy",
        dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
        dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
        dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
        dayText: "ημέρα",
        delimiter: "/",
        hourText: "ώρα",
        minuteText: "λεπτό",
        monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
        monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
        monthText: "Μήνας",
        secText: "δευτερόλεπτα",
        timeFormat: "H:ii",
        yearText: "έτος",
        nowText: "τώρα",
        pmText: "μμ",
        amText: "πμ",
        firstDay: 1,
        dateText: "Ημερομηνία",
        timeText: "φορά",
        todayText: "Σήμερα",
        prevMonthText: "Προηγούμενο μήνα",
        nextMonthText: "Επόμενο μήνα",
        prevYearText: "Προηγούμενο έτος",
        nextYearText: "Επόμενο έτος",
        closeText: "Κλείσιμο",
        eventText: "Γεγονότα",
        eventsText: "Γεγονότα",
        fromText: "Αρχή",
        toText: "Τέλος",
        wholeText: "Ολόκληρος",
        fractionText: "κλάσμα",
        unitText: "Μονάδα",
        labels: ["Χρόνια", "Μήνες", "Ημέρες", "Ωρες", "Λεπτά", "δευτερόλεπτα", ""],
        labelsShort: ["Χρόνια", "Μήνες", "Ημέρες", "Ωρες", "Λεπτά", "δευτ", ""],
        startText: "΄Εναρξη",
        stopText: "Διακοπή",
        resetText: "Επαναφορά",
        lapText: "Γύρος",
        hideText: "κρύβω",
        backText: "Πίσω",
        undoText: "Αναιρεση",
        offText: "Ανενεργό",
        onText: "Ενεργό",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n["en-GB"] = ve.i18n["en-UK"] = {
        dateFormat: "dd/mm/yy",
        timeFormat: "HH:ii"
    }, ve.i18n.es = {
        setText: "Aceptar",
        cancelText: "Cancelar",
        clearText: "Borrar",
        selectedText: "{count} seleccionado",
        selectedPluralText: "{count} seleccionados",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domingo", "Lunes", "Martes", "Mi&#xE9;rcoles", "Jueves", "Viernes", "S&#xE1;bado"],
        dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "S&#xE1;"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        dayText: "D&#237;a",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        monthText: "Mes",
        secText: "Segundos",
        timeFormat: "HH:ii",
        yearText: "A&ntilde;o",
        nowText: "Ahora",
        pmText: "pm",
        amText: "am",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Fecha",
        timeText: "Tiempo",
        closeText: "Cerrar",
        fromText: "Iniciar",
        toText: "Final",
        wholeText: "Entero",
        fractionText: "Fracción",
        unitText: "Unidad",
        labels: ["Años", "Meses", "Días", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Año", "Mes", "Día", "Hora", "Min", "Seg", ""],
        startText: "Iniciar",
        stopText: "Deténgase",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Atrás",
        undoText: "Deshacer",
        offText: "No",
        onText: "Sí",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    var Pa = {
        gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
    };
    Pa.jalaliToGregorian = function(e, t, a) {
        e = parseInt(e), t = parseInt(t), a = parseInt(a);
        var n, s = e - 979,
            i = t - 1,
            r = a - 1,
            o = 365 * s + 8 * parseInt(s / 33) + parseInt((s % 33 + 3) / 4);
        for (n = 0; n < i; ++n) o += Pa.jDaysInMonth[n];
        o += r;
        var l = o + 79,
            c = 1600 + 400 * parseInt(l / 146097);
        l %= 146097;
        var d = !0;
        for (l >= 36525 && (l--, c += 100 * parseInt(l / 36524), l %= 36524, l >= 365 ? l++ : d = !1), c += 4 * parseInt(l / 1461), l %= 1461, l >= 366 && (d = !1, l--, c += parseInt(l / 365), l %= 365), n = 0; l >= Pa.gDaysInMonth[n] + (1 == n && d); n++) l -= Pa.gDaysInMonth[n] + (1 == n && d);
        return [c, n + 1, l + 1]
    }, Pa.checkDate = function(e, t, a) {
        return !(e < 0 || e > 32767 || t < 1 || t > 12 || a < 1 || a > Pa.jDaysInMonth[t - 1] + (12 == t && (e - 979) % 33 % 4 == 0))
    }, Pa.gregorianToJalali = function(e, t, a) {
        e = parseInt(e), t = parseInt(t), a = parseInt(a);
        var n, s = e - 1600,
            i = t - 1,
            r = a - 1,
            o = 365 * s + parseInt((s + 3) / 4) - parseInt((s + 99) / 100) + parseInt((s + 399) / 400);
        for (n = 0; n < i; ++n) o += Pa.gDaysInMonth[n];
        i > 1 && (s % 4 == 0 && s % 100 != 0 || s % 400 == 0) && ++o, o += r;
        var l = o - 79,
            c = parseInt(l / 12053);
        l %= 12053;
        var d = 979 + 33 * c + 4 * parseInt(l / 1461);
        for (l %= 1461, l >= 366 && (d += parseInt((l - 1) / 365), l = (l - 1) % 365), n = 0; n < 11 && l >= Pa.jDaysInMonth[n]; ++n) l -= Pa.jDaysInMonth[n];
        return [d, n + 1, l + 1]
    }, ve.i18n.fa = {
        setText: "تاييد",
        cancelText: "انصراف",
        clearText: "واضح ",
        selectedText: "{count} منتخب",
        dateFormat: "yy/mm/dd",
        dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
        dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        dayText: "روز",
        hourText: "ساعت",
        minuteText: "دقيقه",
        monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        monthText: "ماه",
        secText: "ثانيه",
        timeFormat: "HH:ii",
        timeWheels: "iiHH",
        yearText: "سال",
        nowText: "اکنون",
        amText: "ب",
        pmText: "ص",
        todayText: "امروز",
        getYear: function(e) {
            return Pa.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[0]
        },
        getMonth: function(e) {
            return --Pa.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[1]
        },
        getDay: function(e) {
            return Pa.gregorianToJalali(e.getFullYear(), e.getMonth() + 1, e.getDate())[2]
        },
        getDate: function(e, t, a, n, s, i, r) {
            t < 0 && (e += Math.floor(t / 12), t = 12 + t % 12), t > 11 && (e += Math.floor(t / 12), t %= 12);
            var o = Pa.jalaliToGregorian(e, +t + 1, a);
            return new Date(o[0], o[1] - 1, o[2], n || 0, s || 0, i || 0, r || 0)
        },
        getMaxDayOfMonth: function(e, t) {
            for (var a = 31; !1 === Pa.checkDate(e, t + 1, a);) a--;
            return a
        },
        firstDay: 6,
        rtl: !0,
        dateText: "تاریخ ",
        timeText: "زمان ",
        closeText: "نزدیک",
        fromText: "شروع ",
        toText: "پایان",
        wholeText: "تمام",
        fractionText: "کسر",
        unitText: "واحد",
        labels: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
        labelsShort: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
        startText: "شروع",
        stopText: "پايان",
        resetText: "تنظیم مجدد",
        lapText: "Lap",
        hideText: "پنهان کردن",
        backText: "پشت",
        undoText: "واچیدن"
    }, ve.i18n.fi = {
        setText: "Aseta",
        cancelText: "Peruuta",
        clearText: "Tyhjennä",
        selectedText: "{count} valita",
        dateFormat: "d. MM yy",
        dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
        dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
        dayText: "Päivä",
        delimiter: ".",
        hourText: "Tuntia",
        minuteText: "Minuutti",
        monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
        monthText: "Kuukausi",
        secText: "Sekunda",
        timeFormat: "H:ii",
        yearText: "Vuosi",
        nowText: "Nyt",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Päiväys",
        timeText: "Aika",
        todayText: "Tänään",
        prevMonthText: "Edellinen kuukausi",
        nextMonthText: "Ensi kuussa",
        prevYearText: "Edellinen vuosi",
        nextYearText: "Ensi vuosi",
        closeText: "Sulje",
        eventText: "Tapahtumia",
        eventsText: "Tapahtumia",
        fromText: "Alkaa",
        toText: "Päättyy",
        wholeText: "Kokonainen",
        fractionText: "Murtoluku",
        unitText: "Yksikkö",
        labels: ["Vuosi", "Kuukausi", "Päivä", "Tunnin", "Minuutti", "sekuntia", ""],
        labelsShort: ["Vuo", "Kuu", "Päi", "Tun", "Min", "Sek", ""],
        startText: "Käynnistys",
        stopText: "Seis",
        resetText: "Aseta uudelleen",
        lapText: "Kierros",
        hideText: "Vuota",
        backText: "Edellinen",
        undoText: "Kumoa",
        offText: "Pois",
        onText: "Päällä",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.fr = {
        setText: "Terminer",
        cancelText: "Annuler",
        clearText: "Effacer",
        selectedText: "{count} sélectionné",
        selectedPluralText: "{count} sélectionnés",
        dateFormat: "dd/mm/yy",
        dayNames: ["&#68;imanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        dayNamesShort: ["&#68;im.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
        dayNamesMin: ["&#68;", "L", "M", "M", "J", "V", "S"],
        dayText: "Jour",
        monthText: "Mois",
        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
        hourText: "Heures",
        minuteText: "Minutes",
        secText: "Secondes",
        timeFormat: "HH:ii",
        yearText: "Année",
        nowText: "Maintenant",
        pmText: "pm",
        amText: "am",
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: "Date",
        timeText: "Heure",
        closeText: "Fermer",
        fromText: "Démarrer",
        toText: "Fin",
        wholeText: "Entier",
        fractionText: "Fraction",
        unitText: "Unité",
        labels: ["Ans", "Mois", "Jours", "Heures", "Minutes", "Secondes", ""],
        labelsShort: ["Ans", "Mois", "Jours", "Hrs", "Min", "Sec", ""],
        startText: "Démarrer",
        stopText: "Arrêter",
        resetText: "Réinitialiser",
        lapText: "Lap",
        hideText: "Cachez",
        backText: "Retour",
        undoText: "Annuler",
        offText: "Non",
        onText: "Oui",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.he = {
        rtl: !0,
        setText: "שמירה",
        cancelText: "ביטול",
        clearText: "נקה",
        selectedText: "{count} נבחר",
        selectedPluralText: "{count} נבחרו",
        dateFormat: "dd/mm/yy",
        dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
        dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
        dayText: "יום",
        hourText: "שעות",
        minuteText: "דקות",
        monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        monthText: "חודש",
        secText: "שניות",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        timeWheels: "iiHH",
        yearText: "שנה",
        nowText: "עכשיו",
        firstDay: 0,
        dateText: "תאריך",
        timeText: "זמן",
        closeText: "סגירה",
        todayText: "היום",
        eventText: "מִקרֶה",
        eventsText: "מִקרֶה",
        fromText: "התחלה",
        toText: "סיום",
        wholeText: "כֹּל",
        fractionText: "שבריר",
        unitText: "יחידה",
        labels: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
        labelsShort: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
        startText: "התחל",
        stopText: "עצור",
        resetText: "אתחול",
        lapText: "הקפה",
        hideText: "הסתר",
        offText: "כיבוי",
        onText: "הפעלה",
        backText: "חזור",
        undoText: "ביטול פעולה"
    }, ve.i18n.hi = {
        setText: "सैट करें",
        cancelText: "रद्द करें",
        clearText: "साफ़ को",
        selectedText: "{count} चयनित",
        dateFormat: "dd/mm/yy",
        dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
        dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
        dayText: "दिन",
        delimiter: ".",
        hourText: "घंटा",
        minuteText: "मिनट",
        monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
        monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
        monthText: "महीना",
        secText: "सेकंड",
        timeFormat: "H:ii",
        yearText: "साल",
        nowText: "अब",
        pmText: "अपराह्न",
        amText: "पूर्वाह्न",
        firstDay: 1,
        dateText: "तिथि",
        timeText: "समय",
        todayText: "आज",
        prevMonthText: "पिछ्ला महिना",
        nextMonthText: "अगले महीने",
        prevYearText: "पिछला साल",
        nextYearText: "अगले वर्ष",
        closeText: "बंद",
        eventText: "इवेट३",
        eventsText: "इवेट३",
        fromText: "से",
        toText: "तक",
        wholeText: "समूचा",
        fractionText: "अंश",
        unitText: "इकाई",
        labels: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
        labelsShort: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
        startText: "प्रारंभ",
        stopText: "रोकें",
        resetText: "रीसेट करें",
        lapText: "लैप",
        hideText: "छिपाना",
        backText: "वापस",
        undoText: "वापस लाएं",
        offText: "बंद",
        onText: "चालू",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.hr = {
        setText: "Postavi",
        cancelText: "Izlaz",
        clearText: "Izbriši",
        selectedText: "{count} odabran",
        dateFormat: "dd.mm.yy",
        dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
        dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
        dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
        dayText: "Dan",
        delimiter: ".",
        hourText: "Sat",
        minuteText: "Minuta",
        monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
        monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
        monthText: "Mjesec",
        secText: "Sekunda",
        timeFormat: "H:ii",
        yearText: "Godina",
        nowText: "Sada",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Vrijeme",
        todayText: "Danas",
        prevMonthText: "Prethodni mjesec",
        nextMonthText: "Sljedeći mjesec",
        prevYearText: "Prethodni godina",
        nextYearText: "Slijedeće godine",
        closeText: "Zatvori",
        eventText: "Događaj",
        eventsText: "događaja",
        fromText: "Počinje",
        toText: "Završava",
        wholeText: "Cjelina",
        fractionText: "Frakcija",
        unitText: "Jedinica",
        labels: ["godina", "mjesec", "dan", "sat", "minuta", "sekunda", ""],
        labelsShort: ["god", "mje", "dan", "sat", "min", "sec", ""],
        startText: "Početak",
        stopText: "Prekid",
        resetText: "Resetiraj",
        lapText: "Ciklus",
        hideText: "Sakriti",
        backText: "Natrag",
        undoText: "Poništavanje",
        offText: "Uklj.",
        onText: "Isklj.",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.hu = {
        setText: "OK",
        cancelText: "Mégse",
        clearText: "Törlés",
        selectedText: "{count} kiválasztva",
        dateFormat: "yy.mm.dd.",
        dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
        dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
        dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
        dayText: "Nap",
        delimiter: ".",
        hourText: "Óra",
        minuteText: "Perc",
        monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
        monthText: "Hónap",
        secText: "Másodperc",
        timeFormat: "H:ii",
        yearText: "Év",
        nowText: "Most",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Dátum",
        timeText: "Idő",
        todayText: "Ma",
        prevMonthText: "Előző hónap",
        nextMonthText: "Következő hónap",
        prevYearText: "Előző év",
        nextYearText: "Következő év",
        closeText: "Bezár",
        eventText: "esemény",
        eventsText: "esemény",
        fromText: "Eleje",
        toText: "Vége",
        wholeText: "Egész",
        fractionText: "Tört",
        unitText: "Egység",
        labels: ["Év", "Hónap", "Nap", "Óra", "Perc", "Másodperc", ""],
        labelsShort: ["Év", "Hó.", "Nap", "Óra", "Perc", "Mp.", ""],
        startText: "Indít",
        stopText: "Megállít",
        resetText: "Visszaállít",
        lapText: "Lap",
        hideText: "Elrejt",
        backText: "Vissza",
        undoText: "Visszavon",
        offText: "Ki",
        onText: "Be",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.it = {
        setText: "OK",
        cancelText: "Annulla",
        clearText: "Chiarire",
        selectedText: "{count} selezionato",
        selectedPluralText: "{count} selezionati",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domenica", "Lunedì", "Mertedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
        dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
        dayText: "Giorno",
        hourText: "Ore",
        minuteText: "Minuti",
        monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        monthText: "Mese",
        secText: "Secondi",
        timeFormat: "HH:ii",
        yearText: "Anno",
        nowText: "Ora",
        pmText: "pm",
        amText: "am",
        todayText: "Oggi",
        firstDay: 1,
        dateText: "Data",
        timeText: "Volta",
        closeText: "Chiudere",
        fromText: "Inizio",
        toText: "Fine",
        wholeText: "Intero",
        fractionText: "Frazione",
        unitText: "Unità",
        labels: ["Anni", "Mesi", "Giorni", "Ore", "Minuti", "Secondi", ""],
        labelsShort: ["Anni", "Mesi", "Gio", "Ore", "Min", "Sec", ""],
        startText: "Inizio",
        stopText: "Arresto",
        resetText: "Ripristina",
        lapText: "Lap",
        hideText: "Nascondi",
        backText: "Indietro",
        undoText: "Annulla",
        offText: "Via",
        onText: "Su",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.ja = {
        setText: "セット",
        cancelText: "キャンセル",
        clearText: "クリア",
        selectedText: "{count} 選択",
        dateFormat: "yy年mm月dd日",
        dayNames: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
        dayText: "日",
        hourText: "時",
        minuteText: "分",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        yearText: "年",
        nowText: "今",
        pmText: "午後",
        amText: "午前",
        yearSuffix: "年",
        monthSuffix: "月",
        daySuffix: "日",
        todayText: "今日",
        dateText: "日付",
        timeText: "時間",
        closeText: "クローズ",
        fromText: "開始",
        toText: "終わり",
        wholeText: "全数",
        fractionText: "分数",
        unitText: "単位",
        labels: ["年間", "月間", "日間", "時間", "分", "秒", ""],
        labelsShort: ["年間", "月間", "日間", "時間", "分", "秒", ""],
        startText: "開始",
        stopText: "停止",
        resetText: "リセット",
        lapText: "ラップ",
        hideText: "隠す",
        backText: "バック",
        undoText: "アンドゥ"
    }, ve.i18n.ko = {
        setText: "설정",
        cancelText: "취소",
        clearText: "삭제",
        selectedText: "{count} 선택된",
        dateFormat: "yy-mm-dd",
        dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
        dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
        dayText: "일",
        delimiter: "-",
        hourText: "시간",
        minuteText: "분",
        monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthText: "달",
        secText: "초",
        timeFormat: "H:ii",
        yearText: "년",
        nowText: "지금",
        pmText: "오후",
        amText: "오전",
        firstDay: 0,
        dateText: "날짜",
        timeText: "시간",
        todayText: "오늘",
        prevMonthText: "이전 달",
        nextMonthText: "다음 달",
        prevYearText: "이전 년",
        nextYearText: "다음 년",
        closeText: "닫기",
        eventText: "이벤트",
        eventsText: "이벤트",
        fromText: "시작",
        toText: "종료",
        wholeText: "정수",
        fractionText: "분수",
        unitText: "단위",
        labels: ["년", "달", "일", "시간", "분", "초", ""],
        labelsShort: ["년", "달", "일", "시간", "분", "초", ""],
        startText: "시작",
        stopText: "중지 ",
        resetText: "초기화",
        lapText: "기록",
        hideText: "숨는 장소",
        backText: "뒤로",
        undoText: "실행취소",
        offText: "끔",
        onText: "켬",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.lt = {
        setText: "OK",
        cancelText: "Atšaukti",
        clearText: "Išvalyti",
        selectedText: "Pasirinktas {count}",
        selectedPluralText: "Pasirinkti {count}",
        dateFormat: "yy-mm-dd",
        dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
        dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
        dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
        dayText: "Diena",
        hourText: "Valanda",
        minuteText: "Minutes",
        monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
        monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
        monthText: "Mėnuo",
        secText: "Sekundes",
        amText: "am",
        pmText: "pm",
        timeFormat: "HH:ii",
        yearText: "Metai",
        nowText: "Dabar",
        todayText: "Šiandien",
        firstDay: 1,
        dateText: "Data",
        timeText: "Laikas",
        closeText: "Uždaryti",
        fromText: "Nuo",
        toText: "Iki",
        wholeText: "Visas",
        fractionText: "Frakcija",
        unitText: "Vienetas",
        labels: ["Metai", "Mėnesiai", "Dienos", "Valandos", "Minutes", "Sekundes", ""],
        labelsShort: ["m", "mėn.", "d", "h", "min", "s", ""],
        startText: "Pradėti",
        stopText: "Sustabdyti",
        resetText: "Išnaujo",
        lapText: "Ratas",
        hideText: "Slėpti",
        backText: "Atgal",
        undoText: "Anuliuoti",
        offText: "Išj.",
        onText: "Įj.",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.nl = {
        setText: "Instellen",
        cancelText: "Annuleren",
        clearText: "Leegmaken",
        selectedText: "{count} gekozen",
        dateFormat: "dd-mm-yy",
        dayNames: ["zondag", "maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
        dayNamesShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
        dayNamesMin: ["z", "m", "d", "w", "d", "v", "z"],
        dayText: "Dag",
        hourText: "Uur",
        minuteText: "Minuten",
        monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
        monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        monthText: "Maand",
        secText: "Seconden",
        timeFormat: "HH:ii",
        yearText: "Jaar",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "Vandaag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tijd",
        closeText: "Sluiten",
        fromText: "Start",
        toText: "Einde",
        wholeText: "geheel",
        fractionText: "fractie",
        unitText: "eenheid",
        labels: ["Jaren", "Maanden", "Dagen", "Uren", "Minuten", "Seconden", ""],
        labelsShort: ["j", "m", "d", "u", "min", "sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Ronde",
        hideText: "Verbergen",
        backText: "Terug",
        undoText: "Onged. maken",
        offText: "Uit",
        onText: "Aan",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.no = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Tømme",
        selectedText: "{count} valgt",
        dateFormat: "dd.mm.yy",
        dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        delimiter: ".",
        hourText: "Time",
        minuteText: "Minutt",
        monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        monthText: "Måned",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "År",
        nowText: "Nå",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Dato",
        timeText: "Tid",
        closeText: "Lukk",
        fromText: "Start",
        toText: "End",
        wholeText: "Hele",
        fractionText: "Fraksjon",
        unitText: "Enhet",
        labels: ["År", "Måneder", "Dager", "Timer", "Minutter", "Sekunder", ""],
        labelsShort: ["År", "Mån", "Dag", "Time", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stopp",
        resetText: "Tilbakestille",
        lapText: "Runde",
        hideText: "Skjul",
        backText: "Tilbake",
        undoText: "Angre",
        offText: "Av",
        onText: "På",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.pl = {
        setText: "Zestaw",
        cancelText: "Anuluj",
        clearText: "Oczyścić",
        selectedText: "Wybór: {count}",
        dateFormat: "yy-mm-dd",
        dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        dayNamesShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
        dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
        dayText: "Dzień",
        hourText: "Godziny",
        minuteText: "Minuty",
        monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
        monthText: "Miesiąc",
        secText: "Sekundy",
        timeFormat: "HH:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dzisiaj",
        firstDay: 1,
        dateText: "Data",
        timeText: "Czas",
        closeText: "Zakończenie",
        fromText: "Rozpoczęcie",
        toText: "Koniec",
        wholeText: "Cały",
        fractionText: "Ułamek",
        unitText: "Jednostka",
        labels: ["Lata", "Miesiąc", "Dni", "Godziny", "Minuty", "Sekundy", ""],
        labelsShort: ["R", "M", "Dz", "Godz", "Min", "Sek", ""],
        startText: "Rozpoczęcie",
        stopText: "Zatrzymać",
        resetText: "Zresetować",
        lapText: "Zakładka",
        hideText: "Ukryć",
        backText: "Wróć",
        undoText: "Cofnij",
        offText: "Wył",
        onText: "Wł",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n["pt-BR"] = {
        setText: "Selecionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd/mm/yy",
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        dayText: "Dia",
        hourText: "Hora",
        minuteText: "Minutos",
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        monthText: "Mês",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Agora",
        pmText: "pm",
        amText: "am",
        todayText: "Hoje",
        dateText: "Data",
        timeText: "Tempo",
        closeText: "Fechar",
        fromText: "In&iacute;cio",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Fração",
        unitText: "Unidade",
        labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Ano", "M&ecirc;s", "Dia", "Hora", "Min", "Seg", ""],
        startText: "Começar",
        stopText: "Pare",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Anterior",
        undoText: "Desfazer",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n["pt-PT"] = {
        setText: "Seleccionar",
        cancelText: "Cancelar",
        clearText: "Claro",
        selectedText: "{count} selecionado",
        selectedPluralText: "{count} selecionados",
        dateFormat: "dd-mm-yy",
        dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        dayText: "Dia",
        hourText: "Horas",
        minuteText: "Minutos",
        monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        monthText: "M&ecirc;s",
        secText: "Segundo",
        timeFormat: "HH:ii",
        yearText: "Ano",
        nowText: "Actualizar",
        pmText: "pm",
        amText: "am",
        todayText: "Hoy",
        firstDay: 1,
        dateText: "Data",
        timeText: "Tempo",
        closeText: "Fechar",
        fromText: "In&iacute;cio",
        toText: "Fim",
        wholeText: "Inteiro",
        fractionText: "Frac&ccedil;&atilde;o",
        unitText: "Unidade",
        labels: ["Anos", "Meses", "Dias", "Horas", "Minutos", "Segundos", ""],
        labelsShort: ["Ano", "M&ecirc;s", "Dia", "Hora", "Min", "Seg", ""],
        startText: "Come&ccedil;ar",
        stopText: "Parar",
        resetText: "Reinicializar",
        lapText: "Lap",
        hideText: "Esconder",
        backText: "Anterior",
        undoText: "Anular",
        offText: "Desl",
        onText: "Lig",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.ro = {
        setText: "Setare",
        cancelText: "Anulare",
        clearText: "Ştergere",
        selectedText: "{count} selectat",
        selectedPluralText: "{count} selectate",
        dateFormat: "dd.mm.yy",
        dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
        dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
        dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
        dayText: " Ziua",
        delimiter: ".",
        hourText: " Ore ",
        minuteText: "Minute",
        monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
        monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
        monthText: "Luna",
        secText: "Secunde",
        timeFormat: "HH:ii",
        yearText: "Anul",
        nowText: "Acum",
        amText: "am",
        pmText: "pm",
        todayText: "Astăzi",
        firstDay: 1,
        dateText: "Data",
        timeText: "Ora",
        closeText: "Închidere",
        fromText: "Start",
        toText: "Final",
        wholeText: "Complet",
        fractionText: "Parţial",
        unitText: "Unitate",
        labels: ["Ani", "Luni", "Zile", "Ore", "Minute", "Secunde", ""],
        labelsShort: ["Ani", "Luni", "Zile", "Ore", "Min.", "Sec.", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetare",
        lapText: "Tură",
        hideText: "Ascundere",
        backText: "Înapoi",
        undoText: "Anulează",
        offText: "Nu",
        onText: "Da",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n["ru-UA"] = {
        setText: "Установить",
        cancelText: "Отменить",
        clearText: "Очиститьr",
        selectedText: "{count} Вібрать",
        dateFormat: "dd.mm.yy",
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
        dayText: "День",
        delimiter: ".",
        hourText: "Часы",
        minuteText: "Минуты",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
        monthText: "Месяцы",
        secText: "Сикунды",
        timeFormat: "HH:ii",
        yearText: "Год",
        nowText: "Сейчас",
        amText: "am",
        pmText: "pm",
        todayText: "Cегодня",
        firstDay: 1,
        dateText: "Дата",
        timeText: "Время",
        closeText: "Закрыть",
        fromText: "Начало",
        toText: "Конец",
        wholeText: "Весь",
        fractionText: "Часть",
        unitText: "Единица",
        labels: ["Годы", " Месяцы ", " Дни ", " Часы ", " Минуты ", " Секунды", ""],
        labelsShort: ["Год", "Мес.", "Дн.", "Ч.", "Мин.", "Сек.", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: " Сброс ",
        lapText: " Этап ",
        hideText: " Скрыть ",
        backText: "назад",
        undoText: "ОтменитЬ",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n["ru-RU"] = ve.i18n.ru = {
        setText: "Установить",
        cancelText: "Отмена",
        clearText: "Очистить",
        selectedText: "{count} Выбрать",
        dateFormat: "dd.mm.yy",
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
        dayText: "День",
        delimiter: ".",
        hourText: "Час",
        minuteText: "Минут",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        monthText: "Месяц",
        secText: "Секунд",
        timeFormat: "HH:ii",
        yearText: "Год",
        nowText: "Сейчас",
        amText: "am",
        pmText: "pm",
        todayText: "Cегодня",
        firstDay: 1,
        dateText: "Дата",
        timeText: "Время",
        closeText: "Закрыть",
        fromText: "Начало",
        toText: "Конец",
        wholeText: "Целое",
        fractionText: "Дробное",
        unitText: "Единица",
        labels: ["Лет", "Месяцев", "Дней", "Часов", "Минут", "Секунд", ""],
        labelsShort: ["Лет", "Мес", "Дн", "Час", "Мин", "Сек", ""],
        startText: "Старт",
        stopText: "Стоп",
        resetText: "Сбросить",
        lapText: "Круг",
        hideText: "Скрыть",
        backText: "назад",
        undoText: "ОтменитЬ",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.sk = {
        setText: "Zadaj",
        cancelText: "Zrušiť",
        clearText: "Vymazať",
        selectedText: "Označený: {count}",
        dateFormat: "d.m.yy",
        dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
        dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
        dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
        dayText: "Ďeň",
        hourText: "Hodiny",
        minuteText: "Minúty",
        monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Mesiac",
        secText: "Sekundy",
        timeFormat: "H:ii",
        yearText: "Rok",
        nowText: "Teraz",
        amText: "am",
        pmText: "pm",
        todayText: "Dnes",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Čas",
        closeText: "Zavrieť",
        fromText: "Začiatok",
        toText: "Koniec",
        wholeText: "Celý",
        fractionText: "Časť",
        unitText: "Jednotka",
        labels: ["Roky", "Mesiace", "Dni", "Hodiny", "Minúty", "Sekundy", ""],
        labelsShort: ["Rok", "Mes", "Dni", "Hod", "Min", "Sec", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Resetovať",
        lapText: "Etapa",
        hideText: "Schovať",
        backText: "Späť",
        undoText: "Späť",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.sr = {
        setText: "Постави",
        cancelText: "Откажи",
        clearText: "Обриши",
        selectedText: "{count} изабрана",
        dateFormat: "dd.mm.yy",
        dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
        dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
        dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
        dayText: "Дан",
        delimiter: ".",
        hourText: "Час",
        minuteText: "Минут",
        monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
        monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
        monthText: "месец",
        secText: "Секунд",
        timeFormat: "H:ii",
        yearText: "година",
        nowText: "сада",
        pmText: "pm",
        amText: "am",
        firstDay: 1,
        dateText: "Датум",
        timeText: "време",
        todayText: "Данас",
        prevMonthText: "Претходни мјесец",
        nextMonthText: "Следећег месеца",
        prevYearText: "Претходна године",
        nextYearText: "Следеће године",
        closeText: "Затвори",
        eventText: "Догађај",
        eventsText: "Догађаји",
        fromText: "Од",
        toText: "До",
        wholeText: "цео",
        fractionText: "Фракција",
        unitText: "единица",
        labels: ["Године", "Месеци", "Дана", "Сати", "Минута", "Секунди", ""],
        labelsShort: ["Год", "Мес", "Дана", "Сати", "Мину", "Секу", ""],
        startText: "Започни",
        stopText: "Стоп",
        resetText: "Ресетуј",
        lapText: "Круг",
        hideText: "Сакрити",
        backText: "Повратак",
        undoText: "Опозови",
        offText: "нe",
        onText: "да",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.sv = {
        setText: "OK",
        cancelText: "Avbryt",
        clearText: "Klara",
        selectedText: "{count} vald",
        dateFormat: "yy-mm-dd",
        dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
        dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
        dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
        dayText: "Dag",
        hourText: "Timme",
        minuteText: "Minut",
        monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        monthText: "Månad",
        secText: "Sekund",
        timeFormat: "HH:ii",
        yearText: "År",
        nowText: "Nu",
        pmText: "pm",
        amText: "am",
        todayText: "I dag",
        firstDay: 1,
        dateText: "Datum",
        timeText: "Tid",
        closeText: "Stäng",
        fromText: "Start",
        toText: "Slut",
        wholeText: "Hela",
        fractionText: "Bråk",
        unitText: "Enhet",
        labels: ["År", "Månader", "Dagar", "Timmar", "Minuter", "Sekunder", ""],
        labelsShort: ["År", "Mån", "Dag", "Tim", "Min", "Sek", ""],
        startText: "Start",
        stopText: "Stopp",
        resetText: "Återställ",
        lapText: "Varv",
        hideText: "Dölj",
        backText: "Tillbaka",
        undoText: "Ångra",
        offText: "Av",
        onText: "På"
    }, ve.i18n.tr = {
        setText: "Seç",
        cancelText: "İptal",
        clearText: "Temizleyin",
        selectedText: "{count} seçilmiş",
        dateFormat: "dd.mm.yy",
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
        dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
        dayText: "Gün",
        delimiter: ".",
        hourText: "Saat",
        minuteText: "Dakika",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        monthText: "Ay",
        secText: "Saniye",
        timeFormat: "HH:ii",
        yearText: "Yıl",
        nowText: "Şimdi",
        pmText: "pm",
        amText: "am",
        todayText: "Bugün",
        firstDay: 1,
        dateText: "Tarih",
        timeText: "Zaman",
        closeText: "Kapatmak",
        fromText: "Başla",
        toText: "Son",
        wholeText: "Tam",
        fractionText: "Kesir",
        unitText: "Birim",
        labels: ["Yıl", "Ay", "Gün", "Saat", "Dakika", "Saniye", ""],
        labelsShort: ["Yıl", "Ay", "Gün", "Sa", "Dak", "Sn", ""],
        startText: "Başla",
        stopText: "Durdur",
        resetText: "Sıfırla",
        lapText: "Tur",
        hideText: "Gizle",
        backText: "Geri",
        undoText: "Geri Al",
        offText: "O",
        onText: "I",
        decimalSeparator: ",",
        thousandsSeparator: "."
    }, ve.i18n.vi = {
        setText: "Đặt",
        cancelText: "Hủy bò",
        clearText: "Xóa",
        selectedText: "{count} chọn",
        dateFormat: "dd/mm/yy",
        dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
        dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        dayText: "",
        delimiter: "/",
        hourText: "Giờ",
        minuteText: "Phút",
        monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
        monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        monthText: "Tháng",
        secText: "Giây",
        timeFormat: "H:ii",
        yearText: "Năm",
        nowText: "Bây giờ",
        pmText: "pm",
        amText: "am",
        firstDay: 0,
        dateText: "Ngày",
        timeText: "Hồi",
        todayText: "Hôm nay",
        prevMonthText: "Tháng trước",
        nextMonthText: "Tháng tới",
        prevYearText: "Măm trước",
        nextYearText: "Năm tới",
        closeText: "Đóng",
        eventText: "Sự kiện",
        eventsText: "Sự kiện",
        fromText: "Từ",
        toText: "Tới",
        wholeText: "Toàn thể",
        fractionText: "Phân số",
        unitText: "đơn vị",
        labels: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
        labelsShort: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
        startText: "Bắt đầu",
        stopText: "Dừng",
        resetText: "Đặt lại",
        lapText: "Vòng",
        hideText: "Giấu",
        backText: "Quay lại",
        undoText: "Hoàn tác",
        offText: "Tất",
        onText: "Bật",
        decimalSeparator: ",",
        thousandsSeparator: " "
    }, ve.i18n.zh = {
        setText: "确定",
        cancelText: "取消",
        clearText: "明确",
        selectedText: "{count} 选",
        dateFormat: "yy/mm/dd",
        dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        dayText: "日",
        hourText: "时",
        minuteText: "分",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        yearText: "年",
        nowText: "当前",
        pmText: "下午",
        amText: "上午",
        todayText: "今天",
        dateText: "日",
        timeText: "时间",
        closeText: "关闭",
        fromText: "开始时间",
        toText: "结束时间",
        wholeText: "合计",
        fractionText: "分数",
        unitText: "单位",
        labels: ["年", "月", "日", "小时", "分钟", "秒", ""],
        labelsShort: ["年", "月", "日", "点", "分", "秒", ""],
        startText: "开始",
        stopText: "停止",
        resetText: "重置",
        lapText: "圈",
        hideText: "隐藏",
        backText: "返回",
        undoText: "复原",
        offText: "关闭",
        onText: "开启",
        decimalSeparator: ",",
        thousandsSeparator: " "
    };
    var La = ve.themes;
    La.frame.bootstrap = {
        disabledClass: "disabled",
        selectedClass: "btn-primary",
        selectedTabClass: "active",
        tabLink: !0,
        todayClass: "text-primary mbsc-cal-today",
        onMarkupInserted: function(e) {
            var t = $e(e.target),
                a = $e(".mbsc-cal-tabs", t);
            $e(".mbsc-fr-popup", t).addClass("popover"), $e(".mbsc-fr-w", t).addClass("popover-content"), $e(".mbsc-fr-hdr", t).addClass("popover-title popover-header"), $e(".mbsc-fr-arr-i", t).addClass("popover"), $e(".mbsc-fr-arr", t).addClass("arrow"), $e(".mbsc-fr-btn", t).addClass("btn btn-default btn-secondary"), $e(".mbsc-fr-btn-s .mbsc-fr-btn", t).removeClass("btn-default btn-secondary").addClass("btn btn-primary"), a.addClass("nav nav-tabs"), a.find(".mbsc-cal-tab").addClass("nav-item"), a.find("a").addClass("nav-link"), a.find(".mbsc-cal-tab.active .nav-link").addClass("active"), $e(".mbsc-cal-picker", t).addClass("popover"), $e(".mbsc-cal-events", t).addClass("popover"), $e(".mbsc-cal-events-arr", t).addClass("arrow"), $e(".mbsc-range-btn", t).addClass("btn btn-sm btn-small btn-default"), $e(".mbsc-np-btn", t).addClass("btn btn-default"), $e(".mbsc-sel-filter-cont", t).removeClass("mbsc-input"), $e(".mbsc-sel-filter-input", t).addClass("form-control")
        },
        onTabChange: function(e, t) {
            $e(".mbsc-cal-tabs .nav-link", t._markup).removeClass("active"), $e(".mbsc-cal-tab.active .nav-link", t._markup).addClass("active")
        },
        onPosition: function(e) {
            setTimeout(function() {
                $e(".mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i", e.target).removeClass("bottom bs-popover-bottom").addClass("top bs-popover-top"), $e(".mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i", e.target).removeClass("top bs-popover-top").addClass("bottom  bs-popover-bottom")
            }, 10)
        }
    }, La.scroller.bootstrap = Ke({}, La.frame.bootstrap, {
        dateDisplay: "Mddyy",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5 btn-light",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5 btn-light",
        selectedLineHeight: !0,
        onEventBubbleShow: function(e) {
            var t = $e(e.eventList);
            $e(".mbsc-cal-event-list", t).addClass("list-group"), $e(".mbsc-cal-event", t).addClass("list-group-item"), setTimeout(function() {
                t.hasClass("mbsc-cal-events-b") ? t.removeClass("top").addClass("bottom") : t.removeClass("bottom").addClass("top")
            }, 10)
        }
    }), La.navigation.bootstrap = {
        wrapperClass: "popover panel panel-default",
        groupClass: "btn-group",
        activeClass: "btn-primary",
        disabledClass: "disabled",
        itemClass: "btn btn-default"
    };
    var Oa = ve.themes;
    Oa.frame.ios = {
        display: "bottom",
        headerText: !1,
        btnWidth: !1,
        deleteIcon: "ios-backspace",
        scroll3d: !0
    }, Oa.scroller.ios = Ke({}, Oa.frame.ios, {
        rows: 5,
        height: 34,
        minWidth: 55,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        showLabel: !1,
        useShortLabels: !0,
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        checkIcon: "ion-ios7-checkmark-empty",
        filterClearIcon: "ion-close-circled",
        dateDisplay: "MMdyy",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    }), Oa.listview.ios = {
        leftArrowClass: "mbsc-ic-ion-ios7-arrow-back",
        rightArrowClass: "mbsc-ic-ion-ios7-arrow-forward"
    }, Oa.form.ios = {};
    var Ea, Ya, ja = ve.themes;
    ja.frame.material = {
        headerText: !1,
        btnWidth: !1,
        deleteIcon: "material-backspace",
        onMarkupReady: function(e) {
            be($e(e.target), ".mbsc-fr-btn-e", "mbsc-disabled", "mbsc-fr-btn-nhl")
        }
    }, ja.scroller.material = Ke({}, ja.frame.material, {
        showLabel: !1,
        selectedLineBorder: 2,
        weekDays: "min",
        icon: {
            filled: "material-star",
            empty: "material-star-outline"
        },
        checkIcon: "material-check",
        btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
        btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
        btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
        btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
        onEventBubbleShow: function(e) {
            var t = $e(e.eventList),
                a = $e(e.target).closest(".mbsc-cal-row").index() < 2,
                n = $e(".mbsc-cal-event-color", t).eq(a ? 0 : -1).css("background-color");
            $e(".mbsc-cal-events-arr", t).css("border-color", a ? "transparent transparent " + n + " transparent" : n + "transparent transparent transparent")
        }
    }), ja.listview.material = {
        leftArrowClass: "mbsc-ic-material-keyboard-arrow-left",
        rightArrowClass: "mbsc-ic-material-keyboard-arrow-right",
        onItemActivate: function(e) {
            fe($e(e.target), e.domEvent)
        },
        onItemDeactivate: function() {
            pe(Ya)
        },
        onSlideStart: function(e) {
            $e(".mbsc-ripple", e.target).remove()
        },
        onSortStart: function(e) {
            $e(".mbsc-ripple", e.target).remove()
        }
    }, ja.navigation.material = {
        onInit: function() {
            be($e(this), ".mbsc-ms-item.mbsc-btn-e", "mbsc-disabled", "mbsc-btn-nhl")
        },
        onMarkupInit: function() {
            $e(".mbsc-ripple", this).remove()
        },
        onDestroy: function() {
            $e(this).off(".mbsc-ripple")
        }
    }, ja.form.material = {
        addRipple: function(e, t) {
            fe(e, t)
        },
        removeRipple: function() {
            pe(Ya)
        }
    };
    var za = ve.themes;
    za.frame.windows = {
        headerText: !1,
        deleteIcon: "backspace4",
        btnReverse: !0
    }, za.scroller.windows = Ke({}, za.frame.windows, {
        rows: 6,
        minWidth: 88,
        height: 44,
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        checkIcon: "material-check",
        dateDisplay: "MMdyy",
        showLabel: !1,
        showScrollArrows: !0,
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        useShortLabels: !0
    }), za.form.windows = {}, ve.customTheme("ios-dark", "ios"), ve.customTheme("material-dark", "material"), ve.customTheme("mobiscroll-dark", "mobiscroll"), ve.customTheme("windows-dark", "windows");
    var $a = ve.themes,
        Wa = void 0;
    return "android" == Ae ? Wa = "material" : "ios" == Ae ? Wa = "ios" : "wp" == Ae && (Wa = "windows"), $e.each($a.frame, function(e, t) {
        if (Wa && t.baseTheme == Wa && "material-dark" != e && "windows-dark" != e && "ios-dark" != e) return ve.autoTheme = e, !1;
        e == Wa && (ve.autoTheme = e)
    }), ve
});