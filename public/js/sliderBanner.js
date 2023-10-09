"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
document.addEventListener("DOMContentLoaded", function () {
  var BannerSlider = /*#__PURE__*/function () {
    function BannerSlider(_ref) {
      var mainSlider = _ref.mainSlider,
        secondSlider = _ref.secondSlider,
        _ref$btnNext = _ref.btnNext,
        btnNext = _ref$btnNext === void 0 ? undefined : _ref$btnNext,
        _ref$btnPrev = _ref.btnPrev,
        btnPrev = _ref$btnPrev === void 0 ? undefined : _ref$btnPrev;
      _classCallCheck(this, BannerSlider);
      this.mainSlider = mainSlider, this.secondSlider = secondSlider, this.btnNext = btnNext, this.btnPrev = btnPrev;
    }
    _createClass(BannerSlider, [{
      key: "init",
      value: function init() {
        $(this.mainSlider).owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          responsive: {
            200: {
              items: 1
            }
          }
        });
        //   $(`${this.secondSlider}`).owlCarousel({
        //     loop: true,
        //     margin: 10,
        //     nav: false,
        //     responsive: {
        //       200: {
        //         items: 1,
        //       },
        //     },
        //   });
      }
    }]);
    return BannerSlider;
  }();
  var aboutBanner = new BannerSlider({
    mainSlider: ".top_inner_slider-image",
    secondSlider: ".top_inner_slider-text"
  });
  aboutBanner.init();
});
//# sourceMappingURL=sliderBanner.js.map
