



// NUMBERS - ROOMS

// open / close booking app (long code but works on all browsers and mobile -- worth it)

// $(document).ready( function(){

//   // $(document).click(function(event){
//   //   // event.stopPropagation();
//   //   console.log('close on off click');
//   //   $(".selector").removeClass("select__options--active")
//   //   event.stopPropagation();
//   // });

//   $("#datepicker__guest-options").click(function () {
//     if (!$(".selector__rooms--1").hasClass("select__options--active")) {
//       $(".selector__rooms--1").addClass("select__options--active");

//       event.stopPropagation();
//       console.log('prop stop');
//     } else {
//       $(".selector__rooms--1").removeClass("select__options--active");
//     }
//   });

//   $("#datepicker__guest-options-2").click(function () {
//     if (!$(".selector__rooms--2").hasClass("select__options--active")) {
//       $(".selector__rooms--2").addClass("select__options--active");
//       event.stopPropagation();
//       console.log('prop stop');
//     } else {
//       $(".selector__rooms--2").removeClass("select__options--active");
//     }
//   });

//   $("#datepicker__guest-options-3").click(function () {
//     if (!$(".selector__rooms--3").hasClass("select__options--active")) {
//       $(".selector__rooms--3").addClass("select__options--active");
//       event.stopPropagation();
//       console.log('prop stop');
//     } else {
//       $(".selector__rooms--3").removeClass("select__options--active");
//     }
//   });

//   // dining time
//   $(".datepicker__time-select-dining").click(function () {
//     if (!$(".selector__time-dining").hasClass("select__options--active")) {
//       $(".selector__time-dining").addClass("select__options--active");
//       event.stopPropagation();
//       console.log('prop stop');
//     } else {
//       $(".selector__time-dining").removeClass("select__options--active");
      
//     }
//   });
// // rest select
//   $(".datepicker__word-select--dining").click(function () {
//     if (!$(".selector__word").hasClass("select__options--active")) {
//       $(".selector__word").addClass("select__options--active");
//       event.stopPropagation();
//       console.log('prop stop'); 
//     } else {
//       $(".selector__word").removeClass("select__options--active");
      
//     }
//   });

//   //   TIME - Show 
//   $(".datepicker__time-select-show").click(function () {
//     if (!$(".selector__time-show").hasClass("select__options--active")) {
//       $(".selector__time-show").addClass("select__options--active");
//       event.stopPropagation();
//       console.log('prop stop'); 
//     } else {
//       $(".selector__time-show").removeClass("select__options--active");
//     }
//   });

//   // SHOW SELECTION
// $(".datepicker__select-show").click(function () {
//   if (!$(".selector__show").hasClass("select__options--active")) {

//     $(".selector__show").addClass("select__options--active");
//     event.stopPropagation();
//     console.log('prop stop');
//   } else {
//     $(".selector__show").removeClass("select__options--active");
//   }
// });


//   $("#datepicker__number-show").click(function () {
//     if (!$(".selector__tickets").hasClass("select__options--active")) {
//       $(".selector__tickets").addClass("select__options--active");
//       event.stopPropagation();
//       console.log('prop stop');      
//     } else {
//       $(".selector__tickets").removeClass("select__options--active");
//     }
//   });

//   $(document).click(function(event){
//     // event.stopPropagation();
//     console.log('close on off click');
//     $(".selector").removeClass("select__options--active")
//   });

// });



// -----------------

// MAKE THIS CODE FOR OTHERS AS WELL (doesnt work on safari)
// $(".datepicker__number-show").click(function () {
//   if ($(".selector__tickets").hasClass("select__options--active")) {
//     $(".selector__tickets").removeClass("select__options--active");
//   } else {
//     $(".selector__tickets").addClass("select__options--active");
//   }
// });

// $("body").click(function () {
//   target = $("#datepicker__number-show")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $("#selector__tickets").removeClass("select__options--active");
//   }
// });



// ----

// var parent = document.getElementsByClassName("datepicker__parent");

// var myParentElement = function() {
//     console.log('you clicked a datepicker parent');
//     console.log(event.target);
//     // if event.target.childelement.contains
//     // add class to only the clicked items child elements
//   // $(".selector").addClass("select__options--active");
  
// };

// // for (var i = 0; i < elements.length; i++) {
// //     elements[i].addEventListener('click', myFunction, false);
// // }

// Array.from(parent).forEach(function(parent) {
//   parent.addEventListener('click', myParentElement);
// });

// ----




// CLOSE DATEPICKER ON OFFCLICK AND CLICKING OTHER DATEPICKERS -- works on safari and mobile
$(".datepicker__parent").click(function () {
  console.log(event.target);
  $(event.currentTarget).toggleClass(".datepicker__parent--active");
  console.log('active toggled');
  if ($('.datepicker__parent').hasClass(".datepicker__parent--active")) {
    $('.selector').removeClass('select__options--active')
    console.log('remove all selector elements')
    $(this).children('.selector').addClass('select__options--active');
    console.log('add selector only to clicked element')
  } else if (event.currentTarget !== $(".datepicker__parent")) {
    $(".selector").removeClass("select__options--active") 
  }
});

  
  $(document).ready( function(){
    $(".datepicker__parent").click(function () {
        event.stopPropagation();
    });

    $(document).click(function(event){
      console.log('close on off click');
      $(".selector").removeClass("select__options--active")
    });
});


  // $(document).ready( function(){

// e.target.addClass('testys');









// function isDescendant(parent, child) {
//   var node = child.parentNode;
//   while (node != null) {
//     if (node == parent) {
//       return true;
//     }
//     node = node.parentNode;
//   }
//   return false;
// }

























// // OFF CLICK FOR GOOGLE CHROME numbers
// $("body").click(function () {  
//   target = $("#datepicker__guest-options")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $(".selector__rooms--1").removeClass("select__options--active");
//   }
// });

// $("body").click(function () {
//   target = $("#datepicker__guest-options-2")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $(".selector__rooms--2").removeClass("select__options--active");
//   }
// });

// $("body").click(function () {
//   target = $("#datepicker__guest-options-3")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $(".selector__rooms--3").removeClass("select__options--active");
//   }
// });








// number selector for first booking guest datepicker

$(".selector__li--1").click(function () {
  $(".datepicker__number-room-answer").text("1");
});
$(".selector__li--2").click(function () {
  $(".datepicker__number-room-answer").text("2");
});
$(".selector__li--3").click(function () {
  $(".datepicker__number-room-answer").text("3");
});
$(".selector__li--4").click(function () {
  $(".datepicker__number-room-answer").text("4");
});














//    GUEST
// NUMBERS - BOOKING GUEST
// edit needed here for safari

// $(".datepicker__number-guest").click(function () {
//   if ($(".datepicker__guest-options-sm").hasClass("select__options--active")) {
//     $(".datepicker__guest-options-sm").removeClass("select__options--active");
//   } else {
//     $(".datepicker__guest-options-sm").addClass("select__options--active");
//   }
// });

// $("body").click(function () {
//   target = $("#datepicker__number-guest")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $(".datepicker__guest-options-sm").removeClass("select__options--active");
//   }
// });

//   BOOKING OPTIONS LISTENER FOR ANSWER
$(".selector__li-guest--1").click(function () {
  $(".datepicker__number-guest--answer").text("1");
});
$(".selector__li-guest--2").click(function () {
  $(".datepicker__number-guest--answer").text("2");
});
$(".selector__li-guest--3").click(function () {
  $(".datepicker__number-guest--answer").text("3");
});
$(".selector__li-guest--4").click(function () {
  $(".datepicker__number-guest--answer").text("4");
});


// DINING TICKETS
// $(".datepicker__number-select--dining").click(function () {
//   if ($(".selector__dining").hasClass("select__options--active")) {
//     $(".selector__dining").removeClass("select__options--active");
//   } else {
//     $(".selector__dining").addClass("select__options--active");
//   }
// });



// SHOW TICKETS
// $(".datepicker__number-show").click(function () {
//   if ($(".selector__tickets").hasClass("select__options--active")) {
//     $(".selector__tickets").removeClass("select__options--active");
//   } else {
//     $(".selector__tickets").addClass("select__options--active");
//   }
// });

// $("body").click(function () {
//   target = $("#datepicker__number-show")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $("#selector__tickets").removeClass("select__options--active");
//   }
// });



// DINING
// $("body").click(function () {
//   target = $("#datepicker__number-select--dining")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $("#selector__dining-guest").removeClass("select__options--active");
//   }
// });


//   booking options click for answer
// $(".datepicker__time-select-dining").click(function () {
//   if ($(".selector__time-dining").hasClass("select__options--active")) {
//     $(".selector__time-dining").removeClass("select__options--active");
//   } else {
//     $(".selector__time-dining").addClass("select__options--active");
//   }
// });
// $("body").click(function () {
//   target = $("#datepicker__time-select-dining")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $("#selector__time-dining").removeClass("select__options--active");
//   }
// });
$(".selector__li-time--1").click(function () {
  $(".datepicker__time--answer").text("8:00");
});
$(".selector__li-time--2").click(function () {
  $(".datepicker__time--answer").text("8:30");
});
$(".selector__li-time--3").click(function () {
  $(".datepicker__time--answer").text("9:00");
});
$(".selector__li-time--4").click(function () {
  $(".datepicker__time--answer").text("9:30");
});
// RESTAURANT SELECTION
// $(".datepicker__word-select--dining").click(function () {
//   if ($(".selector__word").hasClass("select__options--active")) {
//     $(".selector__word").removeClass("select__options--active");
//   } else {
//     $(".selector__word").addClass("select__options--active");
//   }
// });

// $("body").click(function () {
//   target = $("#datepicker__word-select--dining")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $("#selector__word").removeClass("select__options--active");
//   }
// });
//   BOOKING OPTIONS LISTENER FOR ANSWER
$(".selector__li-word--1").click(function () {
  $(".datepicker__word-dining--answer").text("ROBERT IRVINE");
});
$(".selector__li-word--2").click(function () {
  $(".datepicker__word-dining--answer").text("SOUTH BEACH");
});
$(".selector__li-word--3").click(function () {
  $(".datepicker__word-dining--answer").text("TROPICANA CAFE");
});
// SHOW
//   TIME - Show 
// $(".datepicker__time-select-show").click(function () {
//   if ($(".selector__time-show").hasClass("select__options--active")) {
//     $(".selector__time-show").removeClass("select__options--active");
//   } else {
//     $(".selector__time-show").addClass("select__options--active");
//   }
// });
// $("body").click(function () {
//   target = $("#datepicker__time-select-show")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $("#selector__time-show").removeClass("select__options--active");
//   }
// });
// SHOW SELECTION
// $(".datepicker__select-show").click(function () {
//   if ($(".selector__show").hasClass("select__options--active")) {
//     $(".selector__show").removeClass("select__options--active");
//   } else {
//     $(".selector__show").addClass("select__options--active");
//   }
// });
// $("body").click(function () {
//   target = $("#datepicker__select-show")[0];
//   flag = event.path.some(function (el, i, arr) {
//     return (el == target)
//   });
//   if (!flag) {
//     $("#selector__show").removeClass("select__options--active");
//   }
// });
$(".selector__li-show--1").click(function () {
  $(".datepicker__select-show--answer").text("THE LATIN KINGS");
});
$(".selector__li-show--2").click(function () {
  $(".datepicker__select-show--answer").text("SARAH EVANS");
});
$(".selector__li-show--3").click(function () {
  $(".datepicker__select-show--answer").text("BAND OF MAGICIANS");
});