webpackJsonp([2],[function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(1);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar info = {\n    template: "#slider-info"\n};\n\nvar display = {\n    template: "#slider-display"\n};\n\nvar buttons = {\n    template: "#slider-buttons"\n};\n\nnew _vue2.default({\n    el: "#slider-component",\n    components: {\n        info: info,\n        display: display,\n        buttons: buttons\n    },\n    template: "#slider"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanM/MTE4YyJdLCJuYW1lcyI6WyJpbmZvIiwidGVtcGxhdGUiLCJkaXNwbGF5IiwiYnV0dG9ucyIsIlZ1ZSIsImVsIiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTztBQUNUQyxjQUFVO0FBREQsQ0FBYjs7QUFJQSxJQUFNQyxVQUFVO0FBQ1pELGNBQVU7QUFERSxDQUFoQjs7QUFJQSxJQUFNRSxVQUFVO0FBQ1pGLGNBQVU7QUFERSxDQUFoQjs7QUFJQSxJQUFJRyxhQUFKLENBQVE7QUFDSkMsUUFBSSxtQkFEQTtBQUVKQyxnQkFBWTtBQUNSTixrQkFEUTtBQUVSRSx3QkFGUTtBQUdSQztBQUhRLEtBRlI7QUFPSkYsY0FBVTtBQVBOLENBQVIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5cclxuY29uc3QgaW5mbyA9IHtcclxuICAgIHRlbXBsYXRlOiBcIiNzbGlkZXItaW5mb1wiXHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5ID0ge1xyXG4gICAgdGVtcGxhdGU6IFwiI3NsaWRlci1kaXNwbGF5XCJcclxufTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSB7XHJcbiAgICB0ZW1wbGF0ZTogXCIjc2xpZGVyLWJ1dHRvbnNcIlxyXG59O1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogXCIjc2xpZGVyLWNvbXBvbmVudFwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGluZm8sXHJcbiAgICAgICAgZGlzcGxheSxcclxuICAgICAgICBidXR0b25zXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IFwiI3NsaWRlclwiXHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3NsaWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')},,,,function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(0);\n\nvar menuBtn = document.querySelector('.hero__menu');\nvar popap = document.querySelector('.popap-page');\n\nmenuBtn.addEventListener('click', function (e) {\n    e.preventDefault();\n    menuBtn.classList.toggle(\"active\");\n    popap.classList.toggle(\"is-active\");\n});\n\n//map\n\nfunction initMap() {\n    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);\n    var mapOptions = {\n        center: centerLatLng,\n        zoom: 8\n    };\n    var map = new google.maps.Map(document.getElementById(\"map\"), mapOptions);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZjA4MCJdLCJuYW1lcyI6WyJtZW51QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicG9wYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaW5pdE1hcCIsImNlbnRlckxhdExuZyIsImdvb2dsZSIsIm1hcHMiLCJMYXRMbmciLCJtYXBPcHRpb25zIiwiY2VudGVyIiwiem9vbSIsIm1hcCIsIk1hcCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQUlBLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZDtBQUNBLElBQUlDLFFBQVFGLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWjs7QUFFQUYsUUFBUUksZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBVUMsQ0FBVixFQUFhO0FBQzNDQSxNQUFFQyxjQUFGO0FBQ0FOLFlBQVFPLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FMLFVBQU1JLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLFdBQXZCO0FBQ0gsQ0FKRDs7QUFNQTs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2YsUUFBSUMsZUFBZSxJQUFJQyxPQUFPQyxJQUFQLENBQVlDLE1BQWhCLENBQXVCLFVBQXZCLEVBQW1DLFVBQW5DLENBQW5CO0FBQ0EsUUFBSUMsYUFBYTtBQUNiQyxnQkFBUUwsWUFESztBQUViTSxjQUFNO0FBRk8sS0FBakI7QUFJQSxRQUFJQyxNQUFNLElBQUlOLE9BQU9DLElBQVAsQ0FBWU0sR0FBaEIsQ0FBb0JqQixTQUFTa0IsY0FBVCxDQUF3QixLQUF4QixDQUFwQixFQUFvREwsVUFBcEQsQ0FBVjtBQUNIIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL21vZHVsZXMvc2xpZGVyXCI7XHJcblxyXG52YXIgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19tZW51Jyk7XHJcbnZhciBwb3BhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BhcC1wYWdlJyk7XHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIHBvcGFwLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XHJcbn0pXHJcblxyXG4vL21hcFxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIHZhciBjZW50ZXJMYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU2LjI5Mjg1MTUsIDQzLjc4NjY2NDEpO1xyXG4gICAgdmFyIG1hcE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY2VudGVyOiBjZW50ZXJMYXRMbmcsXHJcbiAgICAgICAgem9vbTogOFxyXG4gICAgfTtcclxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCBtYXBPcHRpb25zKTtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n")}],[4]);