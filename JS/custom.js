$(function () {


    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#js-preloader").delay(50).fadeOut("slow");
    });

    /*------------------
        header part
    --------------------*/
    
	$(function() {
        $("#tabs").tabs();
    });

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = $('.header-text').height();
	  var header = $('header').height();

	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});


    // Window Resize Mobile Menu Fix
	mobileNav();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	$(document).ready(function () {
	    $(document).on("scroll", onScroll);
	    
	    //smoothscroll
	    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	        e.preventDefault();
	        $(document).off("scroll");
	        
	        $('a').each(function () {
	            $(this).removeClass('active');
	        })
	        $(this).addClass('active');
	      
	        var target = this.hash,
	        menu = target;
	       	var target = $(this.hash);
	        $('html, body').stop().animate({
	            scrollTop: (target.offset().top) + 1
	        }, 500, 'swing', function () {
	            window.location.hash = target;
	            $(document).on("scroll", onScroll);
	        });
	    });
	});

	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}

    
	function onScroll(event){
	    var scrollPos = $(document).scrollTop();
	    $('.nav a').each(function () {
	        var currLink = $(this);
	        var refElement = $(currLink.attr("href"));
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('.nav ul li a').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }
	    });
	}


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 767) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}



	


    /*------------------
        Banner part
    --------------------*/
    // $('.banner_main').slick({
    //     Infinity: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     prevArrow:'<button type="button" class="slick-prev"></button>',
    //     nextArrow:'<button type="button" class="slick-next"></button>',
    //   });



    /*------------------
        Schedule part
    --------------------*/
    $('.schedule-filter li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.schedule-filter li').removeClass('active');
        $(this).addClass('active');
        if (tsfilter == 'all') {
            $('.schedule-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.schedule-table').addClass('filtering');
        }
        $('.ts-item').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


    /*------------------
        About part
    --------------------*/

    /*------------------
        For Body building
    --------------------*/
    {
        let circularprogress = document.querySelector(".for_photoshop"),
            ProgressValue = document.querySelector("#photoshop_number");

        let progressStartValue = 0,
            progressEndValue = 80,
            speed = 55;

        let progress = setInterval(() => {
            progressStartValue++;

            ProgressValue.textContent = `${progressStartValue}%`

            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }

        }, speed);

    }
    /*------------------
        For Training
    --------------------*/
    {
        let circularprogress = document.querySelector(".for_figma"),
            ProgressValue = document.querySelector("#figma_number");

        let progressStartValue = 0,
            progressEndValue = 90,
            speed = 52;

        let progress = setInterval(() => {
            progressStartValue++;

            ProgressValue.textContent = `${progressStartValue}%`

            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }

        }, speed);

    }

    /*------------------
        For Fitness
    --------------------*/

    {
        let circularprogress = document.querySelector(".for_video_editing"),
            ProgressValue = document.querySelector("#video_editing_number");

        let progressStartValue = 0,
            progressEndValue = 75,
            speed = 58;

        let progress = setInterval(() => {
            progressStartValue++;

            ProgressValue.textContent = `${progressStartValue}%`

            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }

        }, speed);

    }

    



    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });


    /*------------------
        back to top part
    --------------------*/
    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#cf2e2e  ${scrollValue}%, #212529 ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;


})