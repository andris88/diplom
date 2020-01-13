$(function(){
	$('.menu-tab').click(function(){
		$(".menu-col").slideToggle(1000);
		$(this).toggleClass("menu_open");

		if( $("img").is(".menu_open") ) $(this).attr("src","img/menu_delet.png");  
        else $(this).attr("src","img/menu_tab.png");
	});

	$('.header-mob__menu-mob').click(function(){
		$(".menu-col-mob").slideToggle(1000);
		$(this).toggleClass("menu_open");

		if( $("img").is(".menu_open") ) $(this).attr("src","img/menu_delet_mob.png");  
        else $(this).attr("src","img/menu_mob.png");
	});
});

                // POPUP //

$(function(){
	
	$('.phone__btn').click(function(){
		$('.popup-block-bell').fadeIn(1000);
	});

	$('.header-mob__bell-mob').click(function(){
		$('.popup-block-bell').fadeIn(1000);
	});

	$('.bell__btn').click(function(){
		$('.popup-block-bell').fadeIn(1000);
	});

	$('.bell-mob').click(function(){
		$('.popup-block-bell').fadeIn(1000);
	});



	$('.popup-block-bell').click(function(event){
		if (event.target == this) {
			$(this).fadeOut();
			$('.desc').val('');
		}
	});

	$('.submit').click(function(){
		$('.popup-block-bell').fadeOut();
		$('.desc').val('');
	});
	

});

$(function(){
	
	$('.name-btn').click(function(){
		$('.popup-block-info').fadeIn(1000);
	});

	$('.work-btn').click(function(){
		$('.popup-block-info').fadeIn(1000);
	});

	$('.btn-data-desk').click(function(){
		$('.popup-block-info').fadeIn(1000);
	});

	$('.btn-data-tab').click(function(){
		$('.popup-block-info').fadeIn(1000);
	});




	$('.popup-block-info').click(function(event){
		if (event.target == this) {
			$(this).fadeOut();
			$('.desc').val('');
		}
	});

	$('.submit').click(function(){
		$('.popup-block-info').fadeOut();
		$('.desc').val('');
	});
	

});

              // SLIDER //

    $('.slide').slick({
	  	infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    prevArrow: $('.arrow-left'),
	    nextArrow: $('.arrow-right'),
	    responsive: [
		    {
		       breakpoint: 1268,
		       settings: {
		       	infinite: true,
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        prevArrow: false,
		        nextArrow: false,
		        dots: true,
                }
            },

            {
		        breakpoint: 970,
		        settings: {
		        infinite: true,
		        initialSlide: 1,
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        prevArrow: false,
		        nextArrow: false,
		        dots: true,
                }
            },
		    ]
    });	
  