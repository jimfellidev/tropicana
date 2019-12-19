// BOOKING 


  // NUMBERS - ROOMS
  $(".datepicker__number").click(function(){
    if ($(".selector").hasClass("select__options--active")){
        $(".selector").removeClass("select__options--active");
    } else { 
    $(".selector").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $(".datepicker__number")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#selector").removeClass("select__options--active");  
    }
  });

  $(".selector__li--1").click(function(){
    $( ".datepicker__number-room-answer").text("1");
  });
  $(".selector__li--2").click(function(){
    $( ".datepicker__number-room-answer").text("2");
  });
  $(".selector__li--3").click(function(){
    $( ".datepicker__number-room-answer").text("3");
  });
  $(".selector__li--4").click(function(){
    $( ".datepicker__number-room-answer").text("4");
  });










                //    GUEST

  // NUMBERS - booking guest
  $(".datepicker__number-guest").click(function(){
    if ($(".datepicker__guest-options-sm").hasClass("select__options--active")){
        $(".datepicker__guest-options-sm").removeClass("select__options--active");
    } else { 
    $(".datepicker__guest-options-sm").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#datepicker__number-guest")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $(".datepicker__guest-options-sm").removeClass("select__options--active");   
    }
  });

//   booking options click for answer guest
$(".selector__li-guest--1").click(function(){
  $( ".datepicker__number-guest--answer").text("1");
});
$(".selector__li-guest--2").click(function(){
  $( ".datepicker__number-guest--answer").text("2");
});
$(".selector__li-guest--3").click(function(){
  $( ".datepicker__number-guest--answer").text("3");
});
$(".selector__li-guest--4").click(function(){
  $( ".datepicker__number-guest--answer").text("4");
});








// SHOW TICKETS
  $(".datepicker__number-show").click(function(){
    if ($(".selector__tickets").hasClass("select__options--active")){
        $(".selector__tickets").removeClass("select__options--active");
    } else { 
    $(".selector__tickets").addClass("select__options--active");
    }
});


  $("body").click(function() {
    target = $("#datepicker__number-show")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#selector__tickets").removeClass("select__options--active");   
    }
  });




              // DINING

  // DINING TIME
  // number menu close on click 


  $("body").click(function() {
    target = $("#datepicker__number-select--dining")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#selector__dining-guest").removeClass("select__options--active");   
    }
  });



  //   booking options click for answer

$(".datepicker__time-select-dining").click(function(){
  if ($(".selector__time-dining").hasClass("select__options--active")){
      $(".selector__time-dining").removeClass("select__options--active");
  } else { 
  $(".selector__time-dining").addClass("select__options--active");
  }
});

$("body").click(function() {
  target = $("#datepicker__time-select-dining")[0];
  flag = event.path.some(function(el, i, arr) {
    return (el == target)
  });
  if (!flag) {
      $("#selector__time-dining").removeClass("select__options--active");  
  }
});


$(".select__options-time--1").click(function(){
  $( ".datepicker__time--answer").text("8:00");
});
$(".select__options-time--2").click(function(){
  $( ".datepicker__time--answer").text("8:30");
});
$(".select__options-time--3").click(function(){
  $( ".datepicker__time--answer").text("9:00");
});
$(".select__options-time--4").click(function(){
  $( ".datepicker__time--answer").text("9:30");
});



        // RESTAURANT SELECTION

$(".datepicker__word-select--dining").click(function(){
  if ($(".selector__word").hasClass("select__options--active")){
      $(".selector__word").removeClass("select__options--active");
  } else { 
  $(".selector__word").addClass("select__options--active");
  }
});

$("body").click(function() {
  target = $("#datepicker__word-select--dining")[0];
  flag = event.path.some(function(el, i, arr) {
    return (el == target)
  });
  if (!flag) {
      $("#selector__word").removeClass("select__options--active");  
  }
});
//   booking options click for answer
$(".selector__li-word--1").click(function(){
  $( ".datepicker__word-dining--answer").text("ROBERT IRVINE");
});
$(".selector__li-word--2").click(function(){
  $( ".datepicker__word-dining--answer").text("SOUTH BEACH");
});
$(".selector__li-word--3").click(function(){
  $( ".datepicker__word-dining--answer").text("TROPICANA CAFE");
});






                // SHOW

//   TIME - Show 

$(".datepicker__time-select-show").click(function(){
  if ($(".selector__time-show").hasClass("select__options--active")){
      $(".selector__time-show").removeClass("select__options--active");
  } else { 
  $(".selector__time-show").addClass("select__options--active");
  }
});

$("body").click(function() {
  target = $("#datepicker__time-select-show")[0];
  flag = event.path.some(function(el, i, arr) {
    return (el == target)
  });
  if (!flag) {
      $("#selector__time-show").removeClass("select__options--active");  
  }
});

$(".select__options-time--1-sm").click(function(){
  $( ".datepicker__time--answer").text("8:00");
});
$(".select__options-time--2-sm").click(function(){
  $( ".datepicker__time--answer").text("8:30");
});
$(".select__options-time--3-sm").click(function(){
  $( ".datepicker__time--answer").text("9:00");
});
$(".select__options-time--4-sm").click(function(){
  $( ".datepicker__time--answer").text("10:00");
});
                // SHOW SELECTION
  
  $(".datepicker__word-select--show").click(function(){
    if ($(".selector__show").hasClass("select__options--active")){
        $(".selector__show").removeClass("select__options--active");
    } else { 
    $(".selector__show").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#datepicker__word-select--show")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
      $("#selector__show").removeClass("select__options--active");  
    }
  });

  $(".selector__li-word-show--1").click(function(){
    $(".datepicker__word-show--answer").text("THE LATIN KINGS");
  });
  $(".selector__li-word-show--2").click(function(){
    $(".datepicker__word-show--answer").text("SARAH EVANS");
  });
  $(".selector__li-word-show--3").click(function(){
    $(".datepicker__word-show--answer").text("BAND OF MAGICIANS");
  });


  

