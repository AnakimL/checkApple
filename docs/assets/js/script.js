"use strict";

$(document).ready(function () {
  $('.faq__quest').on('click', function () {
    $(this).children('.faq__answer').toggle(600);
    $(this).children('.faq__icon').find('.fa').toggleClass('active', 400, "easeOutSine");
  });
  $('.cost__slider').owlCarousel({
    items: 1,
    margin: 0,
    center: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false
  });
  $('.sliders__slider').owlCarousel({
    items: 1,
    margin: 0,
    center: true,
    loop: true,
    dots: false,
    nav: true,
    navText: ["<div class='sliders__btn prev-slide'><i class='fa fa-chevron-left'></i></div>", "<div class='sliders__btn next-slide'><i class='fa fa-chevron-right'></i></div>"]
  });
  $('.comment__slider').owlCarousel({
    items: 1,
    margin: 0,
    center: true,
    loop: true,
    dots: true,
    nav: true,
    navText: ["<div class='sliders__btn prev-slide'><i class='fa fa-chevron-left'></i></div>", "<div class='sliders__btn next-slide'><i class='fa fa-chevron-right'></i></div>"]
  });
  $('.next__js').click(function (e) {
    e.preventDefault();
    $(this).trigger('next.owl.carousel');
  });
  $("input:checkbox").on('click', function () {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);

    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']"; // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method

      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  }); //	$('.faq__icon').click(function(){
  //		var znak = $(this).find('.fa-plus');
  //		var znakMinus = $(this).find('.fa-minus');
  //		if(znak.is(":visible")){
  //			znak.hide();
  //			znakMinus.show();
  //		} else {
  //			znak.show();
  //			znakMinus.hide();
  //		}
  //		
  //	});
});

(function ($) {
  $(function () {
    $(".program__tabs--js ul.program__tabs--gorizont").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.program__tabs--js").find("div").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
})(jQuery);

(function ($) {
  $(function () {
    $(".contact__list ul.contact__place").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest(".contact__list").find("div.addr").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
})(jQuery);

(function initScroll() {
  var navLink = $('.nav__link');
  if (!navLink.length) return;
  navLink.click(function (event) {
    event.preventDefault();
    var ToId = $(this).attr('href');
    var posTop = $(ToId).offset().top;
    $('html, body').animate({
      scrollTop: posTop
    }, 1000);
  });
})(jQuery);

(function initButtonToTop() {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $('#button-to-top').fadeIn();
    } else {
      $('#button-to-top').fadeOut();
    }
  });
  $('#button-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  });
})(jQuery);

(function initMaoData() {
  function Showmap() {
    var mapRiv = $('.map__riv');
    var mapPra = $('.map__pra');
    mapRiv.html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2f678be27852144f49952bfce892606ec82a110a6ae45bc00fa9909e8934be17&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=true" async></script>');
    mapPra.html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5c0e087e2de2363eecd61d92d2cec061dacd9829d0901db38958481d3eaced0e&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=true" async></script>');
  }

  setTimeout(Showmap, 7000);
})(jQuery); //	(function($){
//    jQuery.fn.lightTabs = function(options){
//        
//        var createTabs = function(){
//            tabs = this;
//            i = 0;
//            
//            showPage = function(i){
//                $(tabs).children("div").children("div").hide();
//                $(tabs).children("div").children("div").eq(i).show();
//                $(tabs).children("ul").children("li").removeClass("active");
//                $(tabs).children("ul").children("li").eq(i).addClass("active");
//            }
//            
//            showPage(0);				
//            
//            $(tabs).children("ul").children("li").each(function(index, element){
//                $(element).attr("data-page", i);
//                i++;                        
//            });
//            
//            $(tabs).children("ul").children("li").click(function(){
//                showPage(parseInt($(this).attr("data-page")));
//            });
//        };	
//        return this.each(createTabs);
//    };
//})(jQuery);
//
//
//$(".program__tabs--js").lightTabs();
//$(".program__tabs--js").on('click',$(this).lightTabs);