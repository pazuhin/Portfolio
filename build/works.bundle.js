webpackJsonp([2],{0:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar links = document.querySelectorAll("[href^=\'#\']");\nvar V = 0.6; // scrolling speed\n\n\nvar _loop = function _loop(iter) {\n    iter.addEventListener("click", function (e) {\n        e.preventDefault();\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n            for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                var _iter = _step2.value;\n\n                _iter.classList.remove("is-active");\n            }\n        } catch (err) {\n            _didIteratorError2 = true;\n            _iteratorError2 = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                    _iterator2.return();\n                }\n            } finally {\n                if (_didIteratorError2) {\n                    throw _iteratorError2;\n                }\n            }\n        }\n\n        e.target.classList.add("is-active");\n        var anchor = document.querySelector(iter.getAttribute("href"));\n        var coordAnchor = anchor.getBoundingClientRect().top;\n        var windowY = window.pageYOffset;\n\n        var start = null;\n\n        requestAnimationFrame(step);\n\n        function step(time) {\n            if (start === null) start = time;\n            var progress = time - start;\n\n            var coordY = coordAnchor < 0 ? Math.max(windowY - progress / V, windowY + coordAnchor) : Math.min(windowY + progress / V, windowY + coordAnchor);\n\n            window.scrollTo(0, coordY);\n            if (coordY != windowY + coordAnchor) {\n                requestAnimationFrame(step);\n            }\n        }\n    });\n};\n\nvar _iteratorNormalCompletion = true;\nvar _didIteratorError = false;\nvar _iteratorError = undefined;\n\ntry {\n    for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var iter = _step.value;\n\n        _loop(iter);\n    }\n} catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n} finally {\n    try {\n        if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n        }\n    } finally {\n        if (_didIteratorError) {\n            throw _iteratorError;\n        }\n    }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9uYXYtbWVudS1jbGljay5qcz84MTU0Il0sIm5hbWVzIjpbImxpbmtzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiViIsIml0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFyZ2V0IiwiYWRkIiwiYW5jaG9yIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImNvb3JkQW5jaG9yIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93WSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwidGltZSIsInByb2dyZXNzIiwiY29vcmRZIiwiTWF0aCIsIm1heCIsIm1pbiIsInNjcm9sbFRvIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFFBQVFDLFNBQVNDLGdCQUFULENBQTBCLGFBQTFCLENBQWQ7QUFDQSxJQUFNQyxJQUFJLEdBQVYsQyxDQUFlOzs7MkJBR0pDLEk7QUFDUEEsU0FBS0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsYUFBSztBQUNoQ0MsVUFBRUMsY0FBRjtBQURnQztBQUFBO0FBQUE7O0FBQUE7QUFFNUIsa0NBQW1CUCxLQUFuQixtSUFBMEI7QUFBQSxvQkFBZkksS0FBZTs7QUFDdEJBLHNCQUFLSSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsV0FBdEI7QUFDSDtBQUoyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUt4QkgsVUFBRUksTUFBRixDQUFTRixTQUFULENBQW1CRyxHQUFuQixDQUF1QixXQUF2QjtBQUNSLFlBQU1DLFNBQVNYLFNBQVNZLGFBQVQsQ0FBdUJULEtBQUtVLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBdkIsQ0FBZjtBQUNBLFlBQU1DLGNBQWNILE9BQU9JLHFCQUFQLEdBQStCQyxHQUFuRDtBQUNBLFlBQU1DLFVBQVVDLE9BQU9DLFdBQXZCOztBQUVBLFlBQUlDLFFBQVEsSUFBWjs7QUFFQUMsOEJBQXNCQyxJQUF0Qjs7QUFFQSxpQkFBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2hCLGdCQUFJSCxVQUFVLElBQWQsRUFBb0JBLFFBQVFHLElBQVI7QUFDcEIsZ0JBQUlDLFdBQVdELE9BQU9ILEtBQXRCOztBQUVBLGdCQUFJSyxTQUNBWCxjQUFjLENBQWQsR0FDTVksS0FBS0MsR0FBTCxDQUFTVixVQUFVTyxXQUFXdEIsQ0FBOUIsRUFBaUNlLFVBQVVILFdBQTNDLENBRE4sR0FFTVksS0FBS0UsR0FBTCxDQUFTWCxVQUFVTyxXQUFXdEIsQ0FBOUIsRUFBaUNlLFVBQVVILFdBQTNDLENBSFY7O0FBS0FJLG1CQUFPVyxRQUFQLENBQWdCLENBQWhCLEVBQW1CSixNQUFuQjtBQUNBLGdCQUFJQSxVQUFVUixVQUFVSCxXQUF4QixFQUFxQztBQUNqQ08sc0NBQXNCQyxJQUF0QjtBQUNIO0FBQ0o7QUFDTCxLQTVCQTs7Ozs7Ozs7QUFESix5QkFBbUJ2QixLQUFuQiw4SEFBMEI7QUFBQSxZQUFmSSxJQUFlOztBQUFBLGNBQWZBLElBQWU7QUE4QnpCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaHJlZl49JyMnXVwiKTtcclxuY29uc3QgViA9IDAuNjsgLy8gc2Nyb2xsaW5nIHNwZWVkXHJcblxyXG5cclxuZm9yIChjb25zdCBpdGVyIG9mIGxpbmtzKSB7XHJcbiAgICBpdGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlciBvZiBsaW5rcykge1xyXG4gICAgICAgICAgICAgICAgaXRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcclxuICAgICAgICBjb25zdCBjb29yZEFuY2hvciA9IGFuY2hvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgY29uc3Qgd2luZG93WSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRpbWU7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWUgLSBzdGFydDtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb29yZFkgPVxyXG4gICAgICAgICAgICAgICAgY29vcmRBbmNob3IgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBNYXRoLm1heCh3aW5kb3dZIC0gcHJvZ3Jlc3MgLyBWLCB3aW5kb3dZICsgY29vcmRBbmNob3IpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbih3aW5kb3dZICsgcHJvZ3Jlc3MgLyBWLCB3aW5kb3dZICsgY29vcmRBbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGNvb3JkWSk7XHJcbiAgICAgICAgICAgIGlmIChjb29yZFkgIT0gd2luZG93WSArIGNvb3JkQW5jaG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgIH0pO1xyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvbmF2LW1lbnUtY2xpY2suanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},14:function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(15);\n\n__webpack_require__(0);\n\n__webpack_require__(1);\n\nvar menuBtn = document.querySelector('.hero__menu');\nvar popap = document.querySelector('.popap-page');\n\nmenuBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    menuBtn.classList.toggle(\"active\");\n    popap.classList.toggle(\"is-active\");\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OTg4YSJdLCJuYW1lcyI6WyJtZW51QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicG9wYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQUlBLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZDtBQUNBLElBQUlDLFFBQVFGLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWjs7QUFFQUYsUUFBUUksZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBVUMsQ0FBVixFQUFhO0FBQzNDQSxNQUFFQyxjQUFGO0FBQ0FOLFlBQVFPLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FMLFVBQU1JLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0gsQ0FKRCIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbW9kdWxlcy9zbGlkZXJcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL25hdi1tZW51LWNsaWNrLmpzXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9sb2FkZXIuanNcIjtcclxuXHJcbnZhciBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX21lbnUnKTtcclxudmFyIHBvcGFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcGFwLXBhZ2UnKTtcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgcG9wYXAuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n")},15:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(2);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar info = {\n    template: "#slider-info",\n    props: {\n        work: Object\n    },\n    methods: {\n        callback: function callback(eventName) {\n            console.log(eventName);\n        },\n        enterHandler: function enterHandler(el, done) {\n            var sentence = el.innerText.trim();\n            var wrapped = sentence.split("").map(function (item) {\n                return "\\n            <span class=\\"" + (item === " " ? "whitespace" : "") + "\\">" + item + "</span>\\n          ";\n            }).join("");\n\n            el.innerHTML = wrapped;\n\n            var words = Array.from(el.children);\n\n            var i = 0;\n            function animate(words) {\n                var currentLetter = words[i];\n\n                var timer = setTimeout(function () {\n                    animate(words);\n                }, 20);\n\n                currentLetter.classList.add("bounceIn");\n\n                i++;\n\n                if (i >= words.length) {\n                    clearTimeout(timer);\n                    done();\n                }\n            }\n\n            animate(words);\n        }\n    }\n};\n\nvar display = {\n    template: "#slider-display",\n    props: {\n        work: Object\n    }\n};\n\nvar buttons = {\n    template: "#slider-buttons",\n    props: {\n        works: Array,\n        currentIndex: Number\n    },\n    methods: {\n        slide: function slide(direction) {\n            this.$emit("slide", direction);\n        },\n        getReqImage: function getReqImage(direction) {\n            var worksArray = [].concat(_toConsumableArray(this.works));\n\n            switch (direction) {\n                case "prev":\n                    var lastItem = worksArray[worksArray.length - 1];\n                    worksArray.unshift(lastItem);\n                    worksArray.pop();\n                    break;\n\n                case "next":\n                    worksArray.push(worksArray[0]);\n                    worksArray.shift();\n                    break;\n            }\n\n            return worksArray[this.currentIndex];\n        }\n    }\n};\n\nnew _vue2.default({\n    el: "#slider-component",\n    components: {\n        info: info,\n        display: display,\n        buttons: buttons\n    },\n    data: {\n        works: [],\n        currentWork: {},\n        currentIndex: 0\n    },\n    watch: {\n        currentIndex: function currentIndex(value) {\n            var worksAmount = this.works.length - 1;\n            if (value > worksAmount) this.currentIndex = 0;\n            if (value < 0) this.currentIndex = worksAmount;\n\n            this.currentWork = this.works[value];\n        }\n    },\n    created: function created() {\n        this.works = __webpack_require__(16);\n        this.currentWork = this.works[0];\n    },\n\n    methods: {\n        handleSlide: function handleSlide(direction) {\n            console.log(direction);\n            switch (direction) {\n                case "next":\n                    this.currentIndex = this.currentIndex + 1;\n                    break;\n\n                case "prev":\n                    this.currentIndex = this.currentIndex - 1;\n                    break;\n            }\n        }\n    },\n    template: "#slider"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanM/MTE4YyJdLCJuYW1lcyI6WyJpbmZvIiwidGVtcGxhdGUiLCJwcm9wcyIsIndvcmsiLCJPYmplY3QiLCJtZXRob2RzIiwiY2FsbGJhY2siLCJldmVudE5hbWUiLCJjb25zb2xlIiwibG9nIiwiZW50ZXJIYW5kbGVyIiwiZWwiLCJkb25lIiwic2VudGVuY2UiLCJpbm5lclRleHQiLCJ0cmltIiwid3JhcHBlZCIsInNwbGl0IiwibWFwIiwiaXRlbSIsImpvaW4iLCJpbm5lckhUTUwiLCJ3b3JkcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiaSIsImFuaW1hdGUiLCJjdXJyZW50TGV0dGVyIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVuZ3RoIiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheSIsImJ1dHRvbnMiLCJ3b3JrcyIsImN1cnJlbnRJbmRleCIsIk51bWJlciIsInNsaWRlIiwiZGlyZWN0aW9uIiwiJGVtaXQiLCJnZXRSZXFJbWFnZSIsIndvcmtzQXJyYXkiLCJsYXN0SXRlbSIsInVuc2hpZnQiLCJwb3AiLCJwdXNoIiwic2hpZnQiLCJWdWUiLCJjb21wb25lbnRzIiwiZGF0YSIsImN1cnJlbnRXb3JrIiwid2F0Y2giLCJ2YWx1ZSIsIndvcmtzQW1vdW50IiwiY3JlYXRlZCIsInJlcXVpcmUiLCJoYW5kbGVTbGlkZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPO0FBQ1RDLGNBQVUsY0FERDtBQUVUQyxXQUFPO0FBQ0hDLGNBQU1DO0FBREgsS0FGRTtBQUtUQyxhQUFTO0FBQ0xDLGdCQURLLG9CQUNJQyxTQURKLEVBQ2U7QUFDaEJDLG9CQUFRQyxHQUFSLENBQVlGLFNBQVo7QUFDSCxTQUhJO0FBSUxHLG9CQUpLLHdCQUlRQyxFQUpSLEVBSVlDLElBSlosRUFJa0I7QUFDbkIsZ0JBQU1DLFdBQVdG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T2xCLFNBRFAsRUFDa0I7QUFDbkJqQyxvQkFBUUMsR0FBUixDQUFZZ0MsU0FBWjtBQUNBLG9CQUFRQSxTQUFSO0FBQ0kscUJBQUssTUFBTDtBQUNJLHlCQUFLSCxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsR0FBb0IsQ0FBeEM7QUFDQTs7QUFFSixxQkFBSyxNQUFMO0FBQ0kseUJBQUtBLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxHQUFvQixDQUF4QztBQUNBO0FBUFI7QUFTSDtBQVpJLEtBekJMO0FBdUNKckMsY0FBVTtBQXZDTixDQUFSIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcblxyXG5jb25zdCBpbmZvID0ge1xyXG4gICAgdGVtcGxhdGU6IFwiI3NsaWRlci1pbmZvXCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHdvcms6IE9iamVjdFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjYWxsYmFjayhldmVudE5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudGVySGFuZGxlcihlbCwgZG9uZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzZW50ZW5jZSA9IGVsLmlubmVyVGV4dC50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZWQgPSBzZW50ZW5jZVxyXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiXCIpXHJcbiAgICAgICAgICAgICAgICAubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHtpdGVtID09PSBcIiBcIiA/IFwid2hpdGVzcGFjZVwiIDogXCJcIn1cIj4ke2l0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHdyYXBwZWQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3b3JkcyA9IEFycmF5LmZyb20oZWwuY2hpbGRyZW4pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlKHdvcmRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TGV0dGVyID0gd29yZHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSh3b3Jkcyk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudExldHRlci5jbGFzc0xpc3QuYWRkKFwiYm91bmNlSW5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpID49IHdvcmRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhbmltYXRlKHdvcmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5ID0ge1xyXG4gICAgdGVtcGxhdGU6IFwiI3NsaWRlci1kaXNwbGF5XCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHdvcms6IE9iamVjdFxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgYnV0dG9ucyA9IHtcclxuICAgIHRlbXBsYXRlOiBcIiNzbGlkZXItYnV0dG9uc1wiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB3b3JrczogQXJyYXksXHJcbiAgICAgICAgY3VycmVudEluZGV4OiBOdW1iZXJcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2xpZGUoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJzbGlkZVwiLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVxSW1hZ2UoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtzQXJyYXkgPSBbLi4udGhpcy53b3Jrc107XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInByZXZcIjpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SXRlbSA9IHdvcmtzQXJyYXlbd29ya3NBcnJheS5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICB3b3Jrc0FycmF5LnVuc2hpZnQobGFzdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtzQXJyYXkucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5leHRcIjpcclxuICAgICAgICAgICAgICAgICAgICB3b3Jrc0FycmF5LnB1c2god29ya3NBcnJheVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya3NBcnJheS5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gd29ya3NBcnJheVt0aGlzLmN1cnJlbnRJbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogXCIjc2xpZGVyLWNvbXBvbmVudFwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGluZm8sXHJcbiAgICAgICAgZGlzcGxheSxcclxuICAgICAgICBidXR0b25zXHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHdvcmtzOiBbXSxcclxuICAgICAgICBjdXJyZW50V29yazoge30sXHJcbiAgICAgICAgY3VycmVudEluZGV4OiAwXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBjdXJyZW50SW5kZXgodmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgd29ya3NBbW91bnQgPSB0aGlzLndvcmtzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IHdvcmtzQW1vdW50KSB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDApIHRoaXMuY3VycmVudEluZGV4ID0gd29ya3NBbW91bnQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRXb3JrID0gdGhpcy53b3Jrc1t2YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy53b3JrcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9kYXRhL3dvcmtzLmpzb25cIik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V29yayA9IHRoaXMud29ya3NbMF07XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGhhbmRsZVNsaWRlKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5leHRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicHJldlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBcIiNzbGlkZXJcIlxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n')},16:function(module,exports){eval('module.exports = [{"id":1,"title":"1 Сайт школы онлайн образования","skills":"1 Html, Css, JavaScript","photo":"./assets/images/bg/works_big.png","link":"//google.com"},{"id":2,"title":"2 Сайт школы онлайн образования","skills":"2 Html, Css, JavaScript","photo":"./assets/images/bg/works_int.png","link":"//yandex.ru"},{"id":3,"title":"3 Сайт школы онлайн образования","skills":"3 Html, Css, JavaScript","photo":"./assets/images/bg/work-3.png","link":"//rambler.ru"},{"id":4,"title":"4 Сайт школы онлайн образования","skills":"4 Html, Css, JavaScript","photo":"./assets/images/bg/works_ioga.png","link":"//vk.com"}]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93b3Jrcy5qc29uPzEyNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLHFKQUFxSixFQUFFLG9KQUFvSixFQUFFLGtKQUFrSixFQUFFLGtKQUFrSiIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gW3tcImlkXCI6MSxcInRpdGxlXCI6XCIxINCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIixcInNraWxsc1wiOlwiMSBIdG1sLCBDc3MsIEphdmFTY3JpcHRcIixcInBob3RvXCI6XCIuL2Fzc2V0cy9pbWFnZXMvYmcvd29ya3NfYmlnLnBuZ1wiLFwibGlua1wiOlwiLy9nb29nbGUuY29tXCJ9LHtcImlkXCI6MixcInRpdGxlXCI6XCIyINCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIixcInNraWxsc1wiOlwiMiBIdG1sLCBDc3MsIEphdmFTY3JpcHRcIixcInBob3RvXCI6XCIuL2Fzc2V0cy9pbWFnZXMvYmcvd29ya3NfaW50LnBuZ1wiLFwibGlua1wiOlwiLy95YW5kZXgucnVcIn0se1wiaWRcIjozLFwidGl0bGVcIjpcIjMg0KHQsNC50YIg0YjQutC+0LvRiyDQvtC90LvQsNC50L0g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wiLFwic2tpbGxzXCI6XCIzIEh0bWwsIENzcywgSmF2YVNjcmlwdFwiLFwicGhvdG9cIjpcIi4vYXNzZXRzL2ltYWdlcy9iZy93b3JrLTMucG5nXCIsXCJsaW5rXCI6XCIvL3JhbWJsZXIucnVcIn0se1wiaWRcIjo0LFwidGl0bGVcIjpcIjQg0KHQsNC50YIg0YjQutC+0LvRiyDQvtC90LvQsNC50L0g0L7QsdGA0LDQt9C+0LLQsNC90LjRj1wiLFwic2tpbGxzXCI6XCI0IEh0bWwsIENzcywgSmF2YVNjcmlwdFwiLFwicGhvdG9cIjpcIi4vYXNzZXRzL2ltYWdlcy9iZy93b3Jrc19pb2dhLnBuZ1wiLFwibGlua1wiOlwiLy92ay5jb21cIn1dXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGF0YS93b3Jrcy5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n')}},[14]);