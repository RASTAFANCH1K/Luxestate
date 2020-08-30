$(document).ready(function() {
	$('.nav-menu-toggle').on('click', function(e) {
		e.preventDefault();
		$('.header').toggleClass('nav-menu-active')
  });
  
  (function ($) {
    var o = $('.counter');
    var cc = 1;
    if (o.length > 0) {
      $(window).scroll(function(){
        var targetPos = o.offset().top;
        var winHeight = $(window).height();
        var scrollToElem = targetPos - winHeight;
        var winScrollTop = $(this).scrollTop();
        if (winScrollTop > scrollToElem) {
          if (cc < 2){
            cc = cc + 2;
            $(document).ready(function () {
              $(o).countTo({
                speed: 3000,
                refreshInterval: 50,
                formatter: function (value, options) {
                  return value.toFixed(options.decimals);
                },
                onUpdate: function (value) {
                  console.debug(this);
                },
                onComplete: function (value) {
                  console.debug(this);
                }
              });
            });
          }
        }
      });
    }
  })(jQuery);

  jQuery('.nav-menu-list').singlePageNav({
		offset: jQuery('.nav-menu-list').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});

	$('.agents-cards').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
})

