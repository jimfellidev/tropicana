// add class selector-li to all select options
// if click selector-li remove class selector__options--active from class selector

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


// TIME
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

$(".selector__li-show--1").click(function () {
  $(".datepicker__select-show--answer").text("THE LATIN KINGS");
});
$(".selector__li-show--2").click(function () {
  $(".datepicker__select-show--answer").text("SARAH EVANS");
});
$(".selector__li-show--3").click(function () {
  $(".datepicker__select-show--answer").text("BAND OF MAGICIANS");
});



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

$(document).ready(function () {
  $(".selector-answer").click(function () {
    $(".selector").removeClass("select__options--active")
    event.stopPropagation();
  });
  $(".datepicker__parent").click(function () {
    $(event.currentTarget).toggleClass(".datepicker__parent--active");

    event.stopPropagation();
  });

  $(document).click(function (event) {
    console.log('close on off click');
    $(".selector").removeClass("select__options--active")
  });
});
