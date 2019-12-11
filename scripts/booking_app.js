// BOOKING 




                // ROOM

// NUMBER - BOOKING ROOM - LG MQ

$(".select__numbers").click(function(){
    if ($(".select__options").hasClass("select__options--active")){
        $(".select__options").removeClass("select__options--active");
    } else { 
    $(".select__options").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $(".select__numbers")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options").removeClass("select__options--active");  
    }
  });


//   booking options click for answer
  $(".select__li--1").click(function(){
    $( ".select__numbers-answer").text("1");
  });
  $(".select__li--2").click(function(){
    $( ".select__numbers-answer").text("2");
  });
  $(".select__li--3").click(function(){
    $( ".select__numbers-answer").text("3");
  });
  $(".select__li--4").click(function(){
    $( ".select__numbers-answer").text("4");
  });



  // SMALL 
  $(".select__numbers-sm").click(function(){
    if ($(".select__options-sm").hasClass("select__options--active")){
        $(".select__options-sm").removeClass("select__options--active");
    } else { 
    $(".select__options-sm").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $(".select__numbers-sm")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-sm").removeClass("select__options--active");  
    }
  });

  $(".select__li--1-sm").click(function(){
    $( ".select__numbers--answer-sm").text("1");
  });
  $(".select__li--2-sm").click(function(){
    $( ".select__numbers--answer-sm").text("2");
  });
  $(".select__li--3-sm").click(function(){
    $( ".select__numbers--answer-sm").text("3");
  });
  $(".select__li--4-sm").click(function(){
    $( ".select__numbers--answer-sm").text("4");
  });










                //    GUEST

//NUMBER -BOOKING GUEST -LG MQ 
$(".select__numbers-guest").click(function(){
    if ($(".select__options-guest").hasClass("select__options--active")){
        $(".select__options-guest").removeClass("select__options--active");
    } else { 
    $(".select__options-guest").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#select__numbers-guest")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-guest").removeClass("select__options--active");   
    }
  });


  // SMALL 
  $(".select__numbers-guest-sm").click(function(){
    if ($(".select__options-guest-sm").hasClass("select__options--active")){
        $(".select__options-guest-sm").removeClass("select__options--active");
    } else { 
    $(".select__options-guest-sm").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#select__numbers-guest-sm")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $(".select__options-guest-sm").removeClass("select__options--active");   
    }
  });

//   booking options click for answer guest
$(".select__li-guest--1-sm").click(function(){
  $( ".select__numbers--answer-guest-sm").text("1");
});
$(".select__li-guest--2-sm").click(function(){
  $( ".select__numbers--answer-guest-sm").text("2");
});
$(".select__li-guest--3-sm").click(function(){
  $( ".select__numbers--answer-guest-sm").text("3");
});
$(".select__li-guest--4-sm").click(function(){
  $( ".select__numbers--answer-guest-sm").text("4");
});






// NUMBERS - GUEST DINING - LG MQ

$(".select__numbers-guest-dining").click(function(){
    if ($(".select__options-guest-dining").hasClass("select__options--active")){
        $(".select__options-guest-dining").removeClass("select__options--active");
    } else { 
    $(".select__options-guest-dining").addClass("select__options--active");
    }
});

  $("body").click(function() {
    target = $("#select__numbers-guest-dining")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-guest-dining").removeClass("select__options--active");   
    }
  });

  $(".select__numbers-guest-dining-sm").click(function(){
    if ($(".select__options-guest-dining-sm").hasClass("select__options--active")){
        $(".select__options-guest-dining-sm").removeClass("select__options--active");
    } else { 
    $(".select__options-guest-dining-sm").addClass("select__options--active");
    }
});

  $("body").click(function() {
    target = $("#select__numbers-guest-dining-sm")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-guest-dining-sm").removeClass("select__options--active");   
    }
  });







// NUMBERS - guest show - LG MQ

$(".select__numbers-guest-show").click(function(){
    if ($(".select__options-guest-show").hasClass("select__options--active")){
        $(".select__options-guest-show").removeClass("select__options--active");
    } else { 
    $(".select__options-guest-show").addClass("select__options--active");
    }
});


  $("body").click(function() {
    target = $("#select__numbers-guest-show")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-guest-show").removeClass("select__options--active");   
    }
  });


//   booking options click for answer guest
  $(".select__li-guest--1").click(function(){
    $( ".select__numbers-answer-guest").text("1");
  });
  $(".select__li-guest--2").click(function(){
    $( ".select__numbers-answer-guest").text("2");
  });
  $(".select__li-guest--3").click(function(){
    $( ".select__numbers-answer-guest").text("3");
  });
  $(".select__li-guest--4").click(function(){
    $( ".select__numbers-answer-guest").text("4");
  });


// SHOW TICKETS SMALL MQ
  $(".select__numbers-guest-show-sm").click(function(){
    if ($(".select__options-guest-show-sm").hasClass("select__options--active")){
        $(".select__options-guest-show-sm").removeClass("select__options--active");
    } else { 
    $(".select__options-guest-show-sm").addClass("select__options--active");
    }
});


  $("body").click(function() {
    target = $("#select__numbers-guest-show-sm")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-guest-show-sm").removeClass("select__options--active");   
    }
  });






                // SHOW TIME

//   TIME - SHow LARGE MQ
$(".select__time").click(function(){
    if ($(".select__options-time").hasClass("select__options--active")){
        $(".select__options-time").removeClass("select__options--active");
    } else { 
    $(".select__options-time").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#select__time-show")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-time-show").removeClass("select__options--active");  
    }
  });



  // SMALL

  $(".select__time-sm").click(function(){
    if ($(".select__options-time-sm").hasClass("select__options--active")){
        $(".select__options-time-sm").removeClass("select__options--active");
    } else { 
    $(".select__options-time-sm").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#select__time-show-sm")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-time-show-sm").removeClass("select__options--active");  
    }
  });

  $(".select__options-time--1-sm").click(function(){
    $( ".select__time--answer").text("8:00");
  });
  $(".select__options-time--2-sm").click(function(){
    $( ".select__time--answer").text("8:30");
  });
  $(".select__options-time--3-sm").click(function(){
    $( ".select__time--answer").text("9:00");
  });
  $(".select__options-time--4-sm").click(function(){
    $( ".select__time--answer").text("10:00");
  });





                //   DINING TIME

//   TIME DINING - LARGE MQ
$(".select__time-dining").click(function(){
    if ($(".select__options-time-dining").hasClass("select__options--active")){
        $(".select__options-time-dining").removeClass("select__options--active");
    } else { 
    $(".select__options-time-dining").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#select__time-dining")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-time-dining").removeClass("select__options--active");  
    }
  });

  //   booking options click for answer
  $(".select__options-time--1").click(function(){
    $( ".select__time--answer").text("8:00");
  });
  $(".select__options-time--2").click(function(){
    $( ".select__time--answer").text("8:30");
  });
  $(".select__options-time--3").click(function(){
    $( ".select__time--answer").text("9:00");
  });
  $(".select__options-time--4").click(function(){
    $( ".select__time--answer").text("9:30");
  });
  

// SMALL //

$(".select__time-dining-sm").click(function(){
  if ($(".select__options-time-dining-sm").hasClass("select__options--active")){
      $(".select__options-time-dining-sm").removeClass("select__options--active");
  } else { 
  $(".select__options-time-dining-sm").addClass("select__options--active");
  }
});

$("body").click(function() {
  target = $("#select__time-dining-sm")[0];
  flag = event.path.some(function(el, i, arr) {
    return (el == target)
  });
  if (!flag) {
      $("#select__options-time-dining-sm").removeClass("select__options--active");  
  }
});


$(".select__options-time--1-sm").click(function(){
  $( ".select__time--answer").text("8:00");
});
$(".select__options-time--2-sm").click(function(){
  $( ".select__time--answer").text("8:30");
});
$(".select__options-time--3-sm").click(function(){
  $( ".select__time--answer").text("9:00");
});
$(".select__options-time--4-sm").click(function(){
  $( ".select__time--answer").text("9:30");
});










                            // RESTAURANT SELECTION

  //   dining word OPTIONS - LARGE MQ
$(".select__word").click(function(){
    if ($(".select__options-word").hasClass("select__options--active")){
        $(".select__options-word").removeClass("select__options--active");
    } else { 
    $(".select__options-word").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#select__word")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-word").removeClass("select__options--active");  
    }
  });
//   booking options click for answer
  $(".select__li-word--1").click(function(){
    $( ".select__word--answer").text("ROBERT IRVINE");
  });
  $(".select__li-word--2").click(function(){
    $( ".select__word--answer").text("SOUTH BEACH");
  });
  $(".select__li-word--3").click(function(){
    $( ".select__word--answer").text("TROPICANA CAFE");
  });

// SMALL
$(".select__word-sm").click(function(){
  if ($(".select__options-word-sm").hasClass("select__options--active")){
      $(".select__options-word-sm").removeClass("select__options--active");
  } else { 
  $(".select__options-word-sm").addClass("select__options--active");
  }
});

$("body").click(function() {
  target = $("#select__word-sm")[0];
  flag = event.path.some(function(el, i, arr) {
    return (el == target)
  });
  if (!flag) {
      $("#select__options-word-sm").removeClass("select__options--active");  
  }
});
//   booking options click for answer
$(".select__li-word--1-sm").click(function(){
  $( ".select__word--answer-sm").text("ROBERT IRVINE");
});
$(".select__li-word--2-sm").click(function(){
  $( ".select__word--answer-sm").text("SOUTH BEACH");
});
$(".select__li-word--3-sm").click(function(){
  $( ".select__word--answer-sm").text("TROPICANA CAFE");
});







                // SHOW SELECTION

//    SHOW options word // LG MQ
  $(".select__word-show").click(function(){
    if ($(".select__options-word-show").hasClass("select__options--active")){
        $(".select__options-word-show").removeClass("select__options--active");
    } else { 
    $(".select__options-word-show").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#select__word-show")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
        $("#select__options-word-show").removeClass("select__options--active");  
    }
  });

  $(".select__li-word-show--1").click(function(){
    $( ".select__word-show--answer").text("THE LATIN KINGS");
  });
  $(".select__li-word-show--2").click(function(){
    $( ".select__word-show--answer").text("SARAH EVANS");
  });
  $(".select__li-word-show--3").click(function(){
    $( ".select__word-show--answer").text("BAND OF MAGICIANS");
  });



  // SHOW SMALL


  $(".select__word-show-sm").click(function(){
    if ($(".select__options-word-show-sm").hasClass("select__options--active")){
        $(".select__options-word-show-sm").removeClass("select__options--active");
    } else { 
    $(".select__options-word-show-sm").addClass("select__options--active");
    }
});

$("body").click(function() {
    target = $("#select__word-show-sm")[0];
    flag = event.path.some(function(el, i, arr) {
      return (el == target)
    });
    if (!flag) {
      $("#select__options-word-show-sm").removeClass("select__options--active");  
    }
  });

  $(".select__options-word-show--1-sm").click(function(){
    $( ".select__word-show--answer-sm").text("THE LATIN KINGS");
  });
  $(".select__options-word-show--2-sm").click(function(){
    $( ".select__word-show--answer-sm").text("SARAH EVANS");
  });
  $(".select__options-word-show--3-sm").click(function(){
    $( ".select__word-show--answer-sm").text("BAND OF MAGICIANS");
  });


  

