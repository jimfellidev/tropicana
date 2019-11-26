// BOOKING 




                // ROOM

// NUMBER - BOOKING ROOM - LG MQ

$(".select__numbers").click(function(){
    if ($(".booking__options").hasClass("booking__options--active")){
        $(".booking__options").removeClass("booking__options--active");
    } else { 
    $(".booking__options").addClass("booking__options--active");
    }
});

$("body").click(function() {
    target = $(".select__numbers")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#booking__options").removeClass("booking__options--active");  
    }
  });


//   booking options click for answer
  $(".booking__options--1").click(function(){
    $( ".select__numbers--answer").text("1");
  });
  $(".booking__options--2").click(function(){
    $( ".select__numbers--answer").text("2");
  });
  $(".booking__options--3").click(function(){
    $( ".select__numbers--answer").text("3");
  });
  $(".booking__options--4").click(function(){
    $( ".select__numbers--answer").text("4");
  });












                //    GUEST

//NUMBER -BOOKING GUEST -LG MQ 
$(".select__numbers-guest").click(function(){
    if ($(".booking__options-guest").hasClass("booking__options--active")){
        $(".booking__options-guest").removeClass("booking__options--active");
    } else { 
    $(".booking__options-guest").addClass("booking__options--active");
    }
});

$("body").click(function() {
    target = $("#select__numbers-guest")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#booking__options-guest").removeClass("booking__options--active");   
    }
  });






// NUMBERS - GUEST DINING - LG MQ

$(".select__numbers-guest-dining").click(function(){
    if ($(".booking__options-guest-dining").hasClass("booking__options--active")){
        $(".booking__options-guest-dining").removeClass("booking__options--active");
    } else { 
    $(".booking__options-guest-dining").addClass("booking__options--active");
    }
});

  $("body").click(function() {
    target = $("#select__numbers-guest-dining")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#booking__options-guest-dining").removeClass("booking__options--active");   
    }
  });







// NUMBERS - guest show - LG MQ

$(".select__numbers-guest-show").click(function(){
    if ($(".booking__options-guest-show").hasClass("booking__options--active")){
        $(".booking__options-guest-show").removeClass("booking__options--active");
    } else { 
    $(".booking__options-guest-show").addClass("booking__options--active");
    }
});


  $("body").click(function() {
    target = $("#select__numbers-guest-show")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#booking__options-guest-show").removeClass("booking__options--active");   
    }
  });


//   booking options click for answer guest
  $(".booking__options-guest--1").click(function(){
    $( ".select__numbers--answer-guest").text("1");
  });
  $(".booking__options-guest--2").click(function(){
    $( ".select__numbers--answer-guest").text("2");
  });
  $(".booking__options-guest--3").click(function(){
    $( ".select__numbers--answer-guest").text("3");
  });
  $(".booking__options-guest--4").click(function(){
    $( ".select__numbers--answer-guest").text("4");
  });









                // SHOW TIME

//   TIME - SHow LARGE MQ
$(".select__time").click(function(){
    if ($(".booking__options-time").hasClass("booking__options--active")){
        $(".booking__options-time").removeClass("booking__options--active");
    } else { 
    $(".booking__options-time").addClass("booking__options--active");
    }
});

$("body").click(function() {
    target = $("#select__time-show")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#booking__options-time-show").removeClass("booking__options--active");  
    }
  });






                //   DINING TIME

//   TIME DINING - LARGE MQ
$(".select__time-dining").click(function(){
    if ($(".booking__options-time-dining").hasClass("booking__options--active")){
        $(".booking__options-time-dining").removeClass("booking__options--active");
    } else { 
    $(".booking__options-time-dining").addClass("booking__options--active");
    }
});

$("body").click(function() {
    target = $("#select__time-dining")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#booking__options-time-dining").removeClass("booking__options--active");  
    }
  });

//   booking options click for answer
  $(".booking__options-time--1").click(function(){
    $( ".select__time--answer").text("8:00");
  });
  $(".booking__options-time--2").click(function(){
    $( ".select__time--answer").text("8:30");
  });
  $(".booking__options-time--3").click(function(){
    $( ".select__time--answer").text("9:00");
  });
  $(".booking__options-time--4").click(function(){
    $( ".select__time--answer").text("10:00");
  });








                            // RESTAURANT SELECTION

  //   dining word OPTIONS - LARGE MQ
$(".select__word").click(function(){
    if ($(".booking__options-word").hasClass("booking__options--active")){
        $(".booking__options-word").removeClass("booking__options--active");
    } else { 
    $(".booking__options-word").addClass("booking__options--active");
    }
});

$("body").click(function() {
    target = $("#select__word")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#booking__options-word").removeClass("booking__options--active");  
    }
  });
//   booking options click for answer
  $(".booking__options-word--1").click(function(){
    $( ".select__word--answer").text("ROBERT IRVINE");
  });
  $(".booking__options-word--2").click(function(){
    $( ".select__word--answer").text("SOUTH BEACH");
  });
  $(".booking__options-word--3").click(function(){
    $( ".select__word--answer").text("TROPICANA CAFE");
  });









                // SHOW SELECTION

//    SHOW options word // LG MQ
  $(".select__word-show").click(function(){
    if ($(".booking__options-word-show").hasClass("booking__options--active")){
        $(".booking__options-word-show").removeClass("booking__options--active");
    } else { 
    $(".booking__options-word-show").addClass("booking__options--active");
    }
});

$("body").click(function() {
    target = $("#select__word-show")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#booking__options-word-show").removeClass("booking__options--active");  
    }
  });

  $(".booking__options-word-show--1").click(function(){
    $( ".select__word-show--answer").text("THE LATIN KINGS");
  });
  $(".booking__options-word-show--2").click(function(){
    $( ".select__word-show--answer").text("SARAH EVANS");
  });
  $(".booking__options-word-show--3").click(function(){
    $( ".select__word-show--answer").text("BAND OF MAGICIANS");
  });


