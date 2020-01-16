// INCLUDE JQUERY & JQUERY UI 1.12.1
// $( function() {
// 	$( "#datepicker" ).datepicker({
// 		dateFormat: "MM dd"
// 		,	duration: "fast"
// 	});
// } );

            // just make datepicker3 class in html for show section datepicker to work
    $(function() {
        $( "#datepicker" ).datepicker({
        showAnim: "fold",
        dateFormat: "dd",
        altFormat: "MM",
        altField: ".datepicker-month"
        });
    });

    $(function() {
        $( "#datepicker-1" ).datepicker({
        showAnim: "fold",
        dateFormat: "dd",
        altFormat: "MM",
        altField: ".datepicker-month-1"
        });
    });

    $(function() {
        $( "#datepicker-2" ).datepicker({
        showAnim: "fold",
        dateFormat: "dd",
        altFormat: "MM",
        altField: ".datepicker-month-2"
        });
    });

    $(function() {
        $( "#datepicker-3" ).datepicker({
        showAnim: "fold",
        dateFormat: "dd",
        altFormat: "MM",
        altField: ".datepicker-month-3"
        });
    });
    $(function() {
        $( "#datepicker-4" ).datepicker({
        showAnim: "fold",
        dateFormat: "dd",
        altFormat: "MM",
        altField: ".datepicker-month-4"
        });
    });
    $(function() {
        $( "#datepicker-5" ).datepicker({
        showAnim: "fold",
        dateFormat: "dd",
        altFormat: "MM",
        altField: ".datepicker-month-5"
        });
    });
    $(function() {
        $( "#datepicker-6" ).datepicker({
        showAnim: "fold",
        dateFormat: "dd",
        altFormat: "MM",
        altField: ".datepicker-month-6"
        });
    });
    $(function() {
        $( "#datepicker-7" ).datepicker({
        showAnim: "fold",
        dateFormat: "dd",
        altFormat: "MM",
        altField: ".datepicker-month-7"
        });
    });



            // event listener to scroll through sections
            
$(".booking__link--booking").click(function(){
    $(".booking-form").addClass("active-form");
    $(".dining-form").removeClass("active-form");
    $(".show-form").removeClass("active-form");
    $(".booking__link--booking").addClass("booking__button-tab--active");
    $(".booking__link--dining").removeClass("booking__button-tab--active");
    $(".booking__link--show").removeClass("booking__button-tab--active");
    });

$(".booking__link--dining").click(function(){
    $(".booking__link--dining").addClass("booking__button-tab--active");
    $(".booking__link--booking").removeClass("booking__button-tab--active");
    $(".booking__link--show").removeClass("booking__button-tab--active");
    $(".dining-form").addClass("active-form");
    $(".booking-form").removeClass("active-form");
    $(".show-form").removeClass("active-form");
    });    

$(".booking__link--show").click(function(){
    $(".booking__link--show").addClass("booking__button-tab--active");
    $(".booking__link--dining").removeClass("booking__button-tab--active");
    $(".booking__link--booking").removeClass("booking__button-tab--active");
    $(".show-form").addClass("active-form");
    $(".booking-form").removeClass("active-form");
    $(".dining-form").removeClass("active-form");
    });    


 


// Center selector


// HAMBURGER ON CLICK

$(".hamburger").click(function(){
    if ($("#hamburger").hasClass("is-active")){
        $("#hamburger").removeClass("is-active");
        $("#myDropdown").removeClass("toggle-active");
    } else { 
    $(".hamburger").addClass("is-active");
    $("#myDropdown").addClass("toggle-active");
    }
});

// dropdown close on offclick
$("body").click(function() {
    target = $(".navbar")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#hamburger").removeClass("is-active");
        $("#myDropdown").removeClass("toggle-active");
    }
  });
// close dropbox when link is closed
$("#myDropdown").click(function() {
    $("#hamburger").removeClass("is-active");
    $("#myDropdown").removeClass("toggle-active");
});


  

//   dining

$(".dining__cafe--click").click(function(){
    $(".cafe").addClass("dining__container--active");
    $(".irvine").removeClass("dining__container--active");
    $(".foodcourt").removeClass("dining__container--active");
    $(".dining__cafe--click").addClass("dining__button--active");
    $(".dining__irvine--click").removeClass("dining__button--active");
    $(".dining__food-court--click").removeClass("dining__button--active");
    });

$(".dining__irvine--click").click(function(){
    $(".irvine").addClass("dining__container--active");
    $(".cafe").removeClass("dining__container--active");
    $(".foodcourt").removeClass("dining__container--active");
    $(".dining__cafe--click").removeClass("dining__button--active");
    $(".dining__irvine--click").addClass("dining__button--active");
    $(".dining__food-court--click").removeClass("dining__button--active");
    });

$(".dining__food-court--click").click(function(){
    $(".foodcourt").addClass("dining__container--active");
    $(".irvine").removeClass("dining__container--active");
    $(".cafe").removeClass("dining__container--active");
    $(".dining__cafe--click").removeClass("dining__button--active");
    $(".dining__irvine--click").removeClass("dining__button--active");
    $(".dining__food-court--click").addClass("dining__button--active");
    });

    // dining__irvine--click
    // cafe__click
    // dining__food-court--click
    // dining__button--active 



// if ($("#hamburger").hasClass("is-active")){
//     $("#myDropdown").addClass("toggle-active");
// } else {
//     $("#myDropdown").removeClass("toggle-active");
// };








// swiper

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




//   Copyright current year
const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerText = currentYear;













// SMOOTH SCROLL AND HEADER ADJUSTMENT ON NAV CLICK
// if (widthLarge()) {

(function(document, history, location) {
    var HISTORY_SUPPORT = !!(history && history.pushState);
    
    
    var anchorScrolls = {    
        ANCHOR_REGEX: /^#[^ ]+$/,
        OFFSET_HEIGHT_PX: 120,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
        this.scrollToCurrent();
        $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
        $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function() {
        return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
        var match, anchorOffset;

        if(!this.ANCHOR_REGEX.test(href)) {
        return false;
        }

        match = document.getElementById(href.slice(1));

        if(match) {
        anchorOffset = $(match).offset().top - this.getFixedOffset();
        $('html, body').animate({ scrollTop: anchorOffset});

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
            history.pushState({}, document.title, location.pathname + href);
        }
        }

        return !!match;
    },
    
    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function(e) { 
        if(this.scrollIfAnchor(window.location.hash) && e) {
            e.preventDefault();
        }
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
        var elem = e.target;

        if(this.scrollIfAnchor(elem.getAttribute('href'), true)) {
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



$(document).ready(function(){
    $(".pool__wrapper").mouseover(function(){
      $(".pool__title").css("background-color", "#e12f37");
    });
    $(".pool__wrapper").mouseout(function(){
      $(".pool__title").css("background-color", "#272a2b");
    });
  });
  

  $(document).ready(function(){
    $(".casino__wrapper").mouseover(function(){
      $(".casino__title").css("background-color", "#e12f37");
    });
    $(".casino__wrapper").mouseout(function(){
      $(".casino__title").css("background-color", "#272a2b");
    });
  });

  $(document).ready(function(){
    $(".spa__wrapper").mouseover(function(){
      $(".spa__title").css("background-color", "#e12f37");
    });
    $(".spa__wrapper").mouseout(function(){
      $(".spa__title").css("background-color", "#272a2b");
    });
  });



  // Click listener to take make all non-functioning links do nothing
  $(".do-nothing").click(function(e) {
    e.preventDefault();
});