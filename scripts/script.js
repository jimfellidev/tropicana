// DATEPICKER
$.datepicker.setDefaults({
  showAnim: '',
  dateFormat: 'dd',
  altFormat: "MM",
});
// DATEPICKER TO AND FROM DATES
$("#datepicker").datepicker({
  altField: ".datepicker-month",
  showOn: "focus",
  minDate: '+0',
});
// set datepicker placeholder
$("#datepicker").datepicker("setDate", "+0");
$("#datepicker-1").datepicker({
  altField: ".datepicker-month-1",
  minDate: '+0',
});
// set datepicker-1 placeholder
$("#datepicker-1").datepicker("setDate", "+3");
$("#datepicker-2").datepicker({
  altField: ".datepicker-month-2"
});
// --- set datepicker-2 placeholder
$("#datepicker-2").datepicker("setDate", "+0");
$("#datepicker-3").datepicker({
  altField: ".datepicker-month-3"
});
// --- set datepicker-3 placeholder
$("#datepicker-3").datepicker("setDate", "+0");
// event listener to scroll through sections
$(".booking__btn--booking").click(function () {
  $(".booking__app-wrap--booking").addClass("active-app");
  $(".booking__app-wrap--dining").removeClass("active-app");
  $(".booking__app-wrap--show").removeClass("active-app");
});
$(".booking__btn--dining").click(function () {
  $(".booking__app-wrap--booking").removeClass("active-app");
  $(".booking__app-wrap--dining").addClass("active-app");
  $(".booking__app-wrap--show").removeClass("active-app");
});
$(".booking__btn--show").click(function () {
  $(".booking__app-wrap--booking").removeClass("active-app");
  $(".booking__app-wrap--dining").removeClass("active-app");
  $(".booking__app-wrap--show").addClass("active-app");
});
// HAMBURGER ON CLICK
$(".hamburger").click(function () {
  if ($("#hamburger").hasClass("is-active")) {
    $("#hamburger").removeClass("is-active");
    $("#myDropdown").removeClass("toggle-active");
  } else {
    $(".hamburger").addClass("is-active");
    $("#myDropdown").addClass("toggle-active");
  }
});
// dropdown close on offclick
$("body").click(function () {
  target = $(".navbar")[0];
  flag = event.path.some(function (el, i, arr) {
    return (el == target)
  });
  if (!flag) {
    $("#hamburger").removeClass("is-active");
    $("#myDropdown").removeClass("toggle-active");
  }
});
// close dropbox when link is closed
$("#myDropdown").click(function () {
  $("#hamburger").removeClass("is-active");
  $("#myDropdown").removeClass("toggle-active");
});
// book now close dropdown
$(".book_now").click(function () {
  if ($("#hamburger").hasClass("is-active")) {
    $("#hamburger").removeClass("is-active");
    $("#myDropdown").removeClass("toggle-active");
  }
});
//   DINING
$(".dining__cafe--click").click(function () {
  $(".cafe").addClass("dining__container--active");
  $(".irvine").removeClass("dining__container--active");
  $(".foodcourt").removeClass("dining__container--active");
});

$(".dining__irvine--click").click(function () {
  $(".irvine").addClass("dining__container--active");
  $(".cafe").removeClass("dining__container--active");
  $(".foodcourt").removeClass("dining__container--active");
});

$(".dining__food-court--click").click(function () {
  $(".foodcourt").addClass("dining__container--active");
  $(".irvine").removeClass("dining__container--active");
  $(".cafe").removeClass("dining__container--active");
});
// SWIPER
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 10,
  centeredSlides: true,
  centeredSlidesBounds: true,
  effect: 'slide',
  speed: 1000,
  grabCursor: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletElement: "span",
  },
  fadeEffect: {
    crossFade: true,
  },
});
//   COPYRIGHT
const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerText = currentYear;
// SMOOTH SCROLL AND HEADER ADJUSTMENT ON NAV CLICK
(function (document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);
  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 120,
    init: function () {
      this.scrollToCurrent();
      $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
      $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
    },
    getFixedOffset: function () {
      return this.OFFSET_HEIGHT_PX;
    },
    scrollIfAnchor: function (href, pushToHistory) {
      var match, anchorOffset;

      if (!this.ANCHOR_REGEX.test(href)) {
        return false;
      }
      match = document.getElementById(href.slice(1));
      if (match) {
        anchorOffset = $(match).offset().top - this.getFixedOffset();
        $('html, body').animate({ scrollTop: anchorOffset });
        if (HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }
      return !!match;
    },
    scrollToCurrent: function (e) {
      if (this.scrollIfAnchor(window.location.hash) && e) {
        e.preventDefault();
      }
    },
    delegateAnchors: function (e) {
      var elem = e.target;

      if (this.scrollIfAnchor(elem.getAttribute('href'), true)) {
        e.preventDefault();
      }
    }
  };
  $(document).ready($.proxy(anchorScrolls, 'init'));
})(window.document, window.history, window.location);
// REMOVE BLUE RING ON BUTTONS, BUT KEEP FOR TAB CLICKS
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
}
function handleMouseDownOnce() {
  document.body.classList.remove('user-is-tabbing');

  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
}
window.addEventListener('keydown', handleFirstTab);
//   EXPERIENCE SECTION HOVER ATTRIBUTES
$(document).ready(function () {
  $(".pool__wrapper").mouseover(function () {
    $(".pool__title").css("background-color", "#e12f37");
  });
  $(".pool__wrapper").mouseout(function () {
    $(".pool__title").css("background-color", "#272a2b");
  });
  $(".casino__wrapper").mouseover(function () {
    $(".casino__title").css("background-color", "#e12f37");
  });
  $(".casino__wrapper").mouseout(function () {
    $(".casino__title").css("background-color", "#272a2b");
  });
  $(".spa__wrapper").mouseover(function () {
    $(".spa__title").css("background-color", "#e12f37");
  });
  $(".spa__wrapper").mouseout(function () {
    $(".spa__title").css("background-color", "#272a2b");
  });
});
// LISTENER TO MAKE NON-FUNCTIONAL LINKS DO NOTHING ON CLICK
$(".do-nothing").click(function (e) {
  e.preventDefault();
});




// Compare these 2 layouts and adjust dining


// $(".booking__btn--booking").click(function () {
//   $(".booking__app-wrap--booking").addClass("active-app");
//   $(".booking__app-wrap--dining").removeClass("active-app");
//   $(".booking__app-wrap--show").removeClass("active-app");
// });
// $(".booking__btn--dining").click(function () {
//   $(".booking__app-wrap--booking").removeClass("active-app");
//   $(".booking__app-wrap--dining").addClass("active-app");
//   $(".booking__app-wrap--show").removeClass("active-app");
// });
// $(".booking__btn--show").click(function () {
//   $(".booking__app-wrap--booking").removeClass("active-app");
//   $(".booking__app-wrap--dining").removeClass("active-app");
//   $(".booking__app-wrap--show").addClass("active-app");
// });

// vs

// $(".dining__cafe--click").click(function () {
//   $(".cafe").addClass("dining__container--active");
//   $(".irvine").removeClass("dining__container--active");
//   $(".foodcourt").removeClass("dining__container--active");
//   $(".dining__cafe--click").addClass("dining__button--active");
//   $(".dining__irvine--click").removeClass("dining__button--active");
//   $(".dining__food-court--click").removeClass("dining__button--active");
// });

// $(".dining__irvine--click").click(function () {
//   $(".irvine").addClass("dining__container--active");
//   $(".cafe").removeClass("dining__container--active");
//   $(".foodcourt").removeClass("dining__container--active");
//   $(".dining__cafe--click").removeClass("dining__button--active");
//   $(".dining__irvine--click").addClass("dining__button--active");
//   $(".dining__food-court--click").removeClass("dining__button--active");
// });

// $(".dining__food-court--click").click(function () {
//   $(".foodcourt").addClass("dining__container--active");
//   $(".irvine").removeClass("dining__container--active");
//   $(".cafe").removeClass("dining__container--active");
//   $(".dining__cafe--click").removeClass("dining__button--active");
//   $(".dining__irvine--click").removeClass("dining__button--active");
//   $(".dining__food-court--click").addClass("dining__button--active");
// });