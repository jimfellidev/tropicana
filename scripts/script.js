//             // DATEPICKER
$.datepicker.setDefaults({
  showAnim: '',
  // dateFormat: 'dd',
  altFormat: "MM",
  minDate: 0
});

    




$(document).ready(function(){
  $("#datepicker").datepicker({
      altField: ".datepicker-month", 
      altFormat: "MM",
      // dateFormat: "dd",
      onSelect: function(selected, inst) {
        $("#datepicker-1").datepicker("option","minDate", selected)
      },
  });

  // set placeholder date to today
  $("#datepicker").datepicker("setDate", "+0");

  

  $("#datepicker-1").datepicker({ 
      // dateFormat: "dd",
      altFormat: "MM",
      altField: ".datepicker-month-1",
      onSelect: function(selected, inst) {
         $("#datepicker").datepicker("option","maxDate", selected)      
      },
  });  

  // set placeholder date to 3 days from now
  $("#datepicker-1").datepicker("setDate", "+3");

});

  




      // COMPARE THESE 2

// $( "#datepicker" ).datepicker({
// altField: ".datepicker-month",
// minDate: new Date(),
// showOn: "focus",       
// minDate: '+0',
// });


// $( "#datepicker-1" ).datepicker({
//   altField: ".datepicker-month-1",
//   minDate: '+0',
// });










      // fidget w this

      // http://jsfiddle.net/rvaldez/YdeY8/
    //   $(document).ready(function(){
    //     $("#datepicker").datepicker({
    //         numberOfMonths: 2,
    //         onSelect: function(selected, inst) {
    //           $("#datepicker-1").datepicker("option","minDate", selected)
    //         }
    //     });
    //     $("#datepicker-1").datepicker({ 
    //         numberOfMonths: 2,
    //         onSelect: function(selected, inst) {
    //            $("#datepicker").datepicker("option","maxDate", selected)
    //         }
    //     });  
    // });
    



    
  $( "#datepicker-2" ).datepicker({
  dateFormat: "dd",
  altField: ".datepicker-month-2"
  });
  // --- set placeholder day to today
  $("#datepicker-2").datepicker("setDate", "+0");
    


  $( "#datepicker-3" ).datepicker({
  dateFormat: "dd",
  altField: ".datepicker-month-3"
  });
  // --- set placeholder date to today
  $("#datepicker-3").datepicker("setDate", "+0");

    
            // event listener to scroll through sections
            
$(".booking__btn--booking").click(function(){
    $(".booking__app-wrap--booking").addClass("active-app");
    $(".booking__app-wrap--dining").removeClass("active-app");
    $(".booking__app-wrap--show").removeClass("active-app");
    });

$(".booking__btn--dining").click(function(){
    $(".booking__app-wrap--booking").removeClass("active-app");
    $(".booking__app-wrap--dining").addClass("active-app");
    $(".booking__app-wrap--show").removeClass("active-app");
    });    

$(".booking__btn--show").click(function(){
    $(".booking__app-wrap--booking").removeClass("active-app");
    $(".booking__app-wrap--dining").removeClass("active-app");
    $(".booking__app-wrap--show").addClass("active-app");
    });    

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

    // book now close dropdown
$(".book_now").click(function(){
  if ($("#hamburger").hasClass("is-active")){
      $("#hamburger").removeClass("is-active");
      $("#myDropdown").removeClass("toggle-active");
  } 
});


        //   DINING

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

  // LISTENER TO MAKE NON-FUNCTIONAL LINKS DO NOTHING ON CLICK
  $(".do-nothing").click(function(e) {
    e.preventDefault();
});