webpackJsonp([4],{1:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar links = document.querySelectorAll("[href^=\'#\']");\nvar V = 0.6; // scrolling speed\n\n\nvar _loop = function _loop(iter) {\n    iter.addEventListener("click", function (e) {\n        e.preventDefault();\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n            for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                var _iter = _step2.value;\n\n                _iter.classList.remove("is-active");\n            }\n        } catch (err) {\n            _didIteratorError2 = true;\n            _iteratorError2 = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                    _iterator2.return();\n                }\n            } finally {\n                if (_didIteratorError2) {\n                    throw _iteratorError2;\n                }\n            }\n        }\n\n        e.target.classList.add("is-active");\n        var anchor = document.querySelector(iter.getAttribute("href"));\n        var coordAnchor = anchor.getBoundingClientRect().top;\n        var windowY = window.pageYOffset;\n\n        var start = null;\n\n        requestAnimationFrame(step);\n\n        function step(time) {\n            if (start === null) start = time;\n            var progress = time - start;\n\n            var coordY = coordAnchor < 0 ? Math.max(windowY - progress / V, windowY + coordAnchor) : Math.min(windowY + progress / V, windowY + coordAnchor);\n\n            window.scrollTo(0, coordY);\n            if (coordY != windowY + coordAnchor) {\n                requestAnimationFrame(step);\n            }\n        }\n    });\n};\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n    for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var iter = _step.value;\n\n        _loop(iter);\n    }\n} catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n        }\n    } finally {\n        if (_didIteratorError) {\n            throw _iteratorError;\n        }\n    }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9uYXYtbWVudS1jbGljay5qcz84MTU0Il0sIm5hbWVzIjpbImxpbmtzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiViIsIml0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFyZ2V0IiwiYWRkIiwiYW5jaG9yIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImNvb3JkQW5jaG9yIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93WSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwidGltZSIsInByb2dyZXNzIiwiY29vcmRZIiwiTWF0aCIsIm1heCIsIm1pbiIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFFBQVFDLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQWQ7QUFDQSxJQUFNQyxJQUFJLEdBQVYsQyxDQUFlOzs7MkJBR0pDLEk7QUFDUEEsU0FBS0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsYUFBSztBQUNoQ0MsVUFBRUMsY0FBRjtBQURnQztBQUFBO0FBQUE7O0FBQUE7QUFFNUIsa0NBQW1CUCxLQUFuQixtSUFBMEI7QUFBQSxvQkFBZkksS0FBZTs7QUFDdEJBLHNCQUFLSSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsV0FBdEI7QUFDSDtBQUoyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUt4QkgsVUFBRUksTUFBRixDQUFTRixTQUFULENBQW1CRyxHQUFuQixDQUF1QixXQUF2QjtBQUNSLFlBQU1DLFNBQVNYLFNBQVNZLGFBQVQsQ0FBdUJULEtBQUtVLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBdkIsQ0FBZjtBQUNBLFlBQU1DLGNBQWNILE9BQU9JLHFCQUFQLEdBQStCQyxHQUFuRDtBQUNBLFlBQU1DLFVBQVVDLE9BQU9DLFdBQXZCOztBQUVBLFlBQUlDLFFBQVEsSUFBWjs7QUFFQUMsOEJBQXNCQyxJQUF0Qjs7QUFFQSxpQkFBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2hCLGdCQUFJSCxVQUFVLElBQWQsRUFBb0JBLFFBQVFHLElBQVI7QUFDcEIsZ0JBQUlDLFdBQVdELE9BQU9ILEtBQXRCOztBQUVBLGdCQUFJSyxTQUNBWCxjQUFjLENBQWQsR0FDTVksS0FBS0MsR0FBTCxDQUFTVixVQUFVTyxXQUFXdEIsQ0FBOUIsRUFBaUNlLFVBQVVILFdBQTNDLENBRE4sR0FFTVksS0FBS0UsR0FBTCxDQUFTWCxVQUFVTyxXQUFXdEIsQ0FBOUIsRUFBaUNlLFVBQVVILFdBQTNDLENBSFY7O0FBS0FJLG1CQUFPVyxRQUFQLENBQWdCLENBQWhCLEVBQW1CSixNQUFuQjtBQUNBLGdCQUFJQSxVQUFVUixVQUFVSCxXQUF4QixFQUFxQztBQUNqQ08sc0NBQXNCQyxJQUF0QjtBQUNIO0FBQ0o7QUFDTCxLQTVCQTs7Ozs7Ozs7QUFESix5QkFBbUJ2QixLQUFuQiw4SEFBMEI7QUFBQSxZQUFmSSxJQUFlOztBQUFBLGNBQWZBLElBQWU7QUE4QnpCIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHJlZl49JyMnXVwiKTtcclxuY29uc3QgViA9IDAuNjsgLy8gc2Nyb2xsaW5nIHNwZWVkXHJcblxyXG5cclxuZm9yIChjb25zdCBpdGVyIG9mIGxpbmtzKSB7XHJcbiAgICBpdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlciBvZiBsaW5rcykge1xyXG4gICAgICAgICAgICAgICAgaXRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcclxuICAgICAgICBjb25zdCBjb29yZEFuY2hvciA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgY29uc3Qgd2luZG93WSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRpbWU7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWUgLSBzdGFydDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZFkgPVxyXG4gICAgICAgICAgICAgICAgY29vcmRBbmNob3IgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1heCh3aW5kb3dZIC0gcHJvZ3Jlc3MgLyBWLCB3aW5kb3dZICsgY29vcmRBbmNob3IpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbih3aW5kb3dZICsgcHJvZ3Jlc3MgLyBWLCB3aW5kb3dZICsgY29vcmRBbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGNvb3JkWSk7XHJcbiAgICAgICAgICAgIGlmIChjb29yZFkgIT0gd2luZG93WSArIGNvb3JkQW5jaG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgIH0pO1xyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvbmF2LW1lbnUtY2xpY2suanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},42:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(1);\n\n__webpack_require__(43);\n\nvar _navMenuScroll = __webpack_require__(44);\n\nvar _navMenuScroll2 = _interopRequireDefault(_navMenuScroll);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import \"./modules/loader.js\";\n(0, _navMenuScroll2.default)();\n\nvar menuBtn = document.querySelector('.hero__menu');\nvar popap = document.querySelector('.popap-page');\n\nmenuBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    menuBtn.classList.toggle(\"active\");\n    popap.classList.toggle(\"is-active\");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz9kODVhIl0sIm5hbWVzIjpbIm1lbnVCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3BhcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7O0FBRUE7Ozs7OztBQUhBO0FBSUE7O0FBRUEsSUFBSUEsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFkO0FBQ0EsSUFBSUMsUUFBUUYsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFaOztBQUdBRixRQUFRSSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFVQyxDQUFWLEVBQWE7QUFDM0NBLE1BQUVDLGNBQUY7QUFDQU4sWUFBUU8sU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDQUwsVUFBTUksU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUIsV0FBdkI7QUFDSCxDQUpEIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL25hdi1tZW51LWNsaWNrLmpzXCI7XHJcbi8vIGltcG9ydCBcIi4vbW9kdWxlcy9sb2FkZXIuanNcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL25hdkJsb2ctbW9iaWwuanNcIjtcclxuXHJcbmltcG9ydCAgc2Nyb2xsUGFnIGZyb20gXCIuL21vZHVsZXMvbmF2LW1lbnUtc2Nyb2xsLmpzXCJcclxuc2Nyb2xsUGFnKCk7XHJcblxyXG52YXIgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19tZW51Jyk7XHJcbnZhciBwb3BhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BhcC1wYWdlJyk7XHJcblxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBwb3BhcC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xyXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9ibG9nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///42\n")},43:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar blogAside = document.querySelector(".blog__left");\nvar blogTrigger = document.querySelector(".nav-blog__trigger");\n\nblogTrigger.addEventListener("click", navOpen);\n\nfunction navOpen(e) {\n  e.preventDefault();\n  blogAside.classList.toggle("is-open");\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9uYXZCbG9nLW1vYmlsLmpzP2M1ODMiXSwibmFtZXMiOlsiYmxvZ0FzaWRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYmxvZ1RyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibmF2T3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZQyxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBQ0EsSUFBTUMsY0FBY0YsU0FBU0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBcEI7O0FBRUFDLFlBQVlDLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDQyxPQUF0Qzs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxDQUFqQixFQUFvQjtBQUNsQkEsSUFBRUMsY0FBRjtBQUNBUCxZQUFVUSxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixTQUEzQjtBQUNEIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmxvZ0FzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nX19sZWZ0XCIpO1xyXG5jb25zdCBibG9nVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJsb2dfX3RyaWdnZXJcIik7XHJcblxyXG5ibG9nVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2T3Blbik7XHJcblxyXG5mdW5jdGlvbiBuYXZPcGVuKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgYmxvZ0FzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1vcGVuXCIpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL25hdkJsb2ctbW9iaWwuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n')},44:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = scrollPage;\nfunction scrollPage() {\n  var sideBarHolder = document.getElementsByClassName("sidebar")[0];\n  console.log(sideBarHolder);\n  var links = document.querySelectorAll(".nav-blog__link");\n  var articleItems = document.getElementsByClassName("blog-content__item");\n  var menuList = document.getElementsByClassName("nav-blog__list");\n  console.log(menuList);\n\n  // получаем массив из объектов с top и bottom у каждой стаьти\n  var positionArticle = [];\n  var offsetHeight = 0;\n  console.log(positionArticle);\n\n  // передаем в функцию массив всех article\n  function scrollMenu(elements) {\n    for (var i = 0; i < elements.length; i++) {\n      var item = elements[i];\n      var obj = {};\n      console.log(item);\n\n      obj.top = item.offsetTop;\n      obj.bottom = obj.top + item.clientHeight;\n      positionArticle.push(obj);\n    }\n  }\n\n  function scrollPageFixMenu(e) {\n    var scroll = window.pageYOffset;\n    console.log(scroll);\n    if (scroll < positionArticle[0].offsetTop) {\n      sideBarHolder.classList.remove("fixed");\n    } else {\n      sideBarHolder.classList.add("fixed");\n    }\n\n    for (var i = 0; i < positionArticle.length; i++) {\n      var item = positionArticle[i];\n\n      if (scroll > item.top && scroll < item.bottom) {\n        links[i].classList.add("is-active");\n      } else {\n        links[i].classList.remove("is-active");\n      }\n    }\n  }\n\n  menuList.onclick = function (e) {\n    e.preventDefault();\n    console.log(e);\n  };\n\n  window.addEventListener("wheel", scrollPageFixMenu);\n  scrollMenu(articleItems);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9uYXYtbWVudS1zY3JvbGwuanM/NmEwMSJdLCJuYW1lcyI6WyJzY3JvbGxQYWdlIiwic2lkZUJhckhvbGRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcnRpY2xlSXRlbXMiLCJtZW51TGlzdCIsInBvc2l0aW9uQXJ0aWNsZSIsIm9mZnNldEhlaWdodCIsInNjcm9sbE1lbnUiLCJlbGVtZW50cyIsImkiLCJsZW5ndGgiLCJpdGVtIiwib2JqIiwidG9wIiwib2Zmc2V0VG9wIiwiYm90dG9tIiwiY2xpZW50SGVpZ2h0IiwicHVzaCIsInNjcm9sbFBhZ2VGaXhNZW51IiwiZSIsInNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib25jbGljayIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxVO0FBQVQsU0FBU0EsVUFBVCxHQUFzQjtBQUNuQyxNQUFNQyxnQkFBZ0JDLFNBQVNDLHNCQUFULENBQWdDLFNBQWhDLEVBQTJDLENBQTNDLENBQXRCO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWUosYUFBWjtBQUNBLE1BQU1LLFFBQVFKLFNBQVNLLGdCQUFULENBQTBCLGlCQUExQixDQUFkO0FBQ0EsTUFBTUMsZUFBZU4sU0FBU0Msc0JBQVQsQ0FBZ0Msb0JBQWhDLENBQXJCO0FBQ0EsTUFBTU0sV0FBV1AsU0FBU0Msc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQWpCO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWUksUUFBWjs7QUFFQTtBQUNBLE1BQUlDLGtCQUFrQixFQUF0QjtBQUNBLE1BQUlDLGVBQWUsQ0FBbkI7QUFDQVAsVUFBUUMsR0FBUixDQUFZSyxlQUFaOztBQUVBO0FBQ0EsV0FBU0UsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7QUFDNUIsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELFNBQVNFLE1BQTdCLEVBQXFDRCxHQUFyQyxFQUEwQztBQUN4QyxVQUFJRSxPQUFPSCxTQUFTQyxDQUFULENBQVg7QUFDQSxVQUFJRyxNQUFNLEVBQVY7QUFDQWIsY0FBUUMsR0FBUixDQUFZVyxJQUFaOztBQUVBQyxVQUFJQyxHQUFKLEdBQVVGLEtBQUtHLFNBQWY7QUFDQUYsVUFBSUcsTUFBSixHQUFhSCxJQUFJQyxHQUFKLEdBQVVGLEtBQUtLLFlBQTVCO0FBQ0FYLHNCQUFnQlksSUFBaEIsQ0FBcUJMLEdBQXJCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTTSxpQkFBVCxDQUEyQkMsQ0FBM0IsRUFBOEI7QUFDNUIsUUFBSUMsU0FBU0MsT0FBT0MsV0FBcEI7QUFDQXZCLFlBQVFDLEdBQVIsQ0FBWW9CLE1BQVo7QUFDQSxRQUFJQSxTQUFTZixnQkFBZ0IsQ0FBaEIsRUFBbUJTLFNBQWhDLEVBQTJDO0FBQ3pDbEIsb0JBQWMyQixTQUFkLENBQXdCQyxNQUF4QixDQUErQixPQUEvQjtBQUNELEtBRkQsTUFFTztBQUNMNUIsb0JBQWMyQixTQUFkLENBQXdCRSxHQUF4QixDQUE0QixPQUE1QjtBQUNEOztBQUVELFNBQUssSUFBSWhCLElBQUksQ0FBYixFQUFnQkEsSUFBSUosZ0JBQWdCSyxNQUFwQyxFQUE0Q0QsR0FBNUMsRUFBaUQ7QUFDL0MsVUFBSUUsT0FBT04sZ0JBQWdCSSxDQUFoQixDQUFYOztBQUVBLFVBQUlXLFNBQVNULEtBQUtFLEdBQWQsSUFBcUJPLFNBQVNULEtBQUtJLE1BQXZDLEVBQStDO0FBQzdDZCxjQUFNUSxDQUFOLEVBQVNjLFNBQVQsQ0FBbUJFLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0QsT0FGRCxNQUVPO0FBQ0x4QixjQUFNUSxDQUFOLEVBQVNjLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFdBQTFCO0FBQ0Q7QUFDRjtBQUNGOztBQUVEcEIsV0FBU3NCLE9BQVQsR0FBbUIsVUFBU1AsQ0FBVCxFQUFZO0FBQzdCQSxNQUFFUSxjQUFGO0FBQ0E1QixZQUFRQyxHQUFSLENBQVltQixDQUFaO0FBQ0QsR0FIRDs7QUFLQUUsU0FBT08sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNWLGlCQUFqQztBQUNBWCxhQUFXSixZQUFYO0FBQ0QiLCJmaWxlIjoiNDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxQYWdlKCkge1xyXG4gIGNvbnN0IHNpZGVCYXJIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2lkZWJhclwiKVswXTtcclxuICBjb25zb2xlLmxvZyhzaWRlQmFySG9sZGVyKTtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJsb2dfX2xpbmtcIik7XHJcbiAgY29uc3QgYXJ0aWNsZUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2ctY29udGVudF9faXRlbVwiKTtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXYtYmxvZ19fbGlzdFwiKTtcclxuICBjb25zb2xlLmxvZyhtZW51TGlzdCk7XHJcblxyXG4gIC8vINC/0L7Qu9GD0YfQsNC10Lwg0LzQsNGB0YHQuNCyINC40Lcg0L7QsdGK0LXQutGC0L7QsiDRgSB0b3Ag0LggYm90dG9tINGDINC60LDQttC00L7QuSDRgdGC0LDRjNGC0LhcclxuICBsZXQgcG9zaXRpb25BcnRpY2xlID0gW107XHJcbiAgbGV0IG9mZnNldEhlaWdodCA9IDA7XHJcbiAgY29uc29sZS5sb2cocG9zaXRpb25BcnRpY2xlKTtcclxuXHJcbiAgLy8g0L/QtdGA0LXQtNCw0LXQvCDQsiDRhNGD0L3QutGG0LjRjiDQvNCw0YHRgdC40LIg0LLRgdC10YUgYXJ0aWNsZVxyXG4gIGZ1bmN0aW9uIHNjcm9sbE1lbnUoZWxlbWVudHMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGl0ZW0gPSBlbGVtZW50c1tpXTtcclxuICAgICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuXHJcbiAgICAgIG9iai50b3AgPSBpdGVtLm9mZnNldFRvcDtcclxuICAgICAgb2JqLmJvdHRvbSA9IG9iai50b3AgKyBpdGVtLmNsaWVudEhlaWdodDtcclxuICAgICAgcG9zaXRpb25BcnRpY2xlLnB1c2gob2JqKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbFBhZ2VGaXhNZW51KGUpIHtcclxuICAgIGxldCBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBjb25zb2xlLmxvZyhzY3JvbGwpO1xyXG4gICAgaWYgKHNjcm9sbCA8IHBvc2l0aW9uQXJ0aWNsZVswXS5vZmZzZXRUb3ApIHtcclxuICAgICAgc2lkZUJhckhvbGRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlQmFySG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJmaXhlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9uQXJ0aWNsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgaXRlbSA9IHBvc2l0aW9uQXJ0aWNsZVtpXTtcclxuXHJcbiAgICAgIGlmIChzY3JvbGwgPiBpdGVtLnRvcCAmJiBzY3JvbGwgPCBpdGVtLmJvdHRvbSkge1xyXG4gICAgICAgIGxpbmtzW2ldLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlua3NbaV0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWVudUxpc3Qub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH07XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgc2Nyb2xsUGFnZUZpeE1lbnUpO1xyXG4gIHNjcm9sbE1lbnUoYXJ0aWNsZUl0ZW1zKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9uYXYtbWVudS1zY3JvbGwuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///44\n')}},[42]);