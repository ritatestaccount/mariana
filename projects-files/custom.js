/**
 * custom.js
 */

function dazzle_wpml_widget_position() {
	'use strict';
    var dazzle_sitenavheight = jQuery('.is-nav-desktop #primary-menu').height();
    var dazzle_flagsheight = jQuery('.is-nav-desktop .flags_language_selector ul').outerHeight();
    var dazzle_search = jQuery('.is-nav-desktop .searchform-switch').outerHeight();
    jQuery("#site-navigation.is-nav-desktop .flags_language_selector").css({'margin-top': (dazzle_sitenavheight - dazzle_flagsheight) / 2 });      	
    jQuery("#site-navigation.is-nav-desktop .searchform-switch").css({'margin-top': (dazzle_sitenavheight - dazzle_search) / 2 });  
}

jQuery(document).ready( function() {
	'use strict';

    jQuery("#typed").typed({
        stringsElement: jQuery('#typed-strings'),
        cursorChar: ".",
        typeSpeed: 100,
        startDelay: 2000,
        backSpeed: 80,
        backDelay: 2000,
        loop: true,
        loopCount: 3
    });	

    jQuery("#text-typed").typed({
        stringsElement: jQuery('#text-typed-strings'),
        cursorChar: "_",
        typeSpeed: 100,
        startDelay: 2000,
        backSpeed: 80,
        backDelay: 2000,
        loop: true,
        loopCount: 3        
    });	    
	
	// Fixed Element Height
	var dazzle_headerheight = jQuery('#header').outerHeight();
	
	jQuery('.menu-fixer').css({'height': dazzle_headerheight});	

    if(typeof dazzle_custom !== 'undefined') {
        if(dazzle_custom.dazzle_header_top == '1') {
            var ptop = jQuery('.page-id-'+dazzle_custom.dazzle_id+' .page-title-wrapper').css("padding-top");
            jQuery('.page-id-'+dazzle_custom.dazzle_id+' .page-title-wrapper').css({"padding-top": 'calc('+ptop+' + '+dazzle_headerheight+'px)'});
        }
    }

    var dazzle_hswidth = jQuery('#headersocial').width();
    jQuery('.is-header-social .main-navigation.classic-menu').css({'margin-right': dazzle_hswidth + 40})
    jQuery('.is-header-social .main-navigation.minimal-menu').css({'margin-right': dazzle_hswidth + 110})

	var dazzle_open = false;

	var dazzle_wrap_li = jQuery("ul#wrap-navigation > li");
	dazzle_wrap_li.each(function(i) {
		jQuery(this).addClass("animated fadeInUp").addClass("fm-item-" + (i+1));
	});

	var dazzle_primary_li = jQuery("ul#primary-menu > li");
	dazzle_primary_li.each(function(i) {
		jQuery(this).addClass("animated fadeInUp").addClass("fm-item-" + (i+1));
	});	
    jQuery('.bm').on('click', function() {
        jQuery(this).find("#burger-menu").toggleClass("active");
        jQuery(this).find(".burger-icon").toggleClass("active");
        if (dazzle_open == false) {
            jQuery('.nav-trigger').fadeIn(300);
            jQuery('#header').addClass('is-triggered');
            jQuery('#headersocial').addClass('is-triggered');
            // if (jQuery('#site-navigation').hasClass('dark-header')) {
            // 	jQuery('#header.initial-state').css({'background': '#323232'});
            // }
            // else if (jQuery('#site-navigation').hasClass('light-header')) {
            // 	jQuery('#header.initial-state').css({'background': '#fff'});
            // }

            dazzle_open = true;

            // fullscreen menu open
            jQuery('.overlay').fadeIn(200);
        } else {
            jQuery('.nav-trigger').fadeOut(300);
            jQuery('#header').removeClass('is-triggered');
            jQuery('#headersocial').removeClass('is-triggered');
            dazzle_open = false;

            // fullscreen menu close
            jQuery('.overlay').fadeOut(200);

        }   
        dazzle_wpml_widget_position();
    });

    if(jQuery("#site-navigation").hasClass('classic-menu')) {
    	dazzle_wpml_widget_position();
    }


	var dazzle_windoww = jQuery(window).width();

	if(dazzle_windoww < 1112) {
	    var dazzle_leftopen = false;
	    jQuery("#dazzle-left-side").addClass('is-mobile');

	    jQuery('.menu-to-trigger').on('click', function() {
	    	
	    	if (dazzle_leftopen == false) {
	    		jQuery('#leftside-content').fadeIn(300);
	    		dazzle_leftopen = true;
	    	}
	    	else {
	    		jQuery('#leftside-content').fadeOut(300);
	    		dazzle_leftopen = false;
	    	}
	    });
	    var dazzle_ismobileleftsidea = jQuery('.is-mobile #leftside-content a');
	    dazzle_ismobileleftsidea.on('click', function() {
	        jQuery('.is-mobile #leftside-content').fadeOut(300);
	        dazzle_leftopen = false;
	    });	    
	}
	else {
		jQuery("#dazzle-left-side").removeClass('is-mobile');
		jQuery('#leftside-content').fadeIn(300);
	}

	jQuery(window).resize(function () {
		var dazzle_windoww = jQuery(window).width();
		jQuery("#dazzle-left-side").addClass('is-mobile');

		if(dazzle_windoww < 1112) {
		    var dazzle_leftopen = false;

		    jQuery('.menu-to-trigger').on('click', function() {
		    	
		    	if (dazzle_leftopen == false) {
		    		jQuery('#leftside-content').fadeIn(300);
		    		dazzle_leftopen = true;
		    	}
		    	else {
		    		jQuery('#leftside-content').fadeOut(300);
		    		dazzle_leftopen = false;
		    	}
		    });
		    var dazzle_ismobileleftsidea = jQuery('.is-mobile #leftside-content a');
		    dazzle_ismobileleftsidea.on('click', function() {
		        jQuery('.is-mobile #leftside-content').fadeOut(300);
		        dazzle_leftopen = false;
		    });	    
		}		
		else {
			jQuery("#dazzle-left-side").removeClass('is-mobile');
			jQuery('#leftside-content').fadeIn(300);
		}
	});	


	jQuery('#header #site-navigation .switch-lang').tipsy({fade: true, gravity: 'n', className: 'wpml-switcher'});
	jQuery('#header .overlay .switch-lang').tipsy({fade: true, gravity: 's', className: 'wpml-switcher'});    

    var dazzle_wrapnava = jQuery('.wrap-nav a');
    dazzle_wrapnava.on('click', function() {
        jQuery('.overlay').fadeOut(400);
        jQuery('#burger-menu, .burger-icon').removeClass('active');
        open = false;
    });	

    
	var fullscreenul = jQuery('.wrap li.menu-item-has-children');
	fullscreenul.on({
	    mouseenter: function() {
	        jQuery(this).children('ul').slideDown(700);
	    },
	    mouseleave: function() {
	        jQuery(this).children('ul').slideUp(700);
	    }
	})	    

	// Minimum height for content, based on viewport:
	var dazzle_vph = jQuery(window).height();	
	var dazzle_sf = jQuery('.site-footer').outerHeight();
	var dazzle_sh = jQuery('.site-header').outerHeight();
	jQuery(".site-content").css({"min-height": dazzle_vph - dazzle_sf - dazzle_sh});

	// Magnific Popup
	var dazzle_ightbox = jQuery(".dt-lightbox");
	dazzle_ightbox.magnificPopup({

	});

	var dazzle_withlightboxa = jQuery(".with-lightbox a")
	dazzle_withlightboxa.magnificPopup({
		type: 'image'
	});

	var dazzle_mfpgallery = jQuery('.dt-gallery');
	dazzle_mfpgallery.each(function() {
	    jQuery(this).find('.dt-lightbox-gallery').magnificPopup({
	    	type: 'image',
	        gallery: {
	          enabled:true,
	          preload: [0,1]
	        }
	    });
	});				

	var dazzle_del_gallery = jQuery('.dt-gallery-trigger');
	dazzle_del_gallery.on('click', function () {
	    jQuery(this).next().magnificPopup('open');
	});

	var dazzle_dtsinglegal = jQuery('.dt-single-gallery');
	dazzle_dtsinglegal.each(function () {
	    jQuery(this).magnificPopup({
	        delegate: 'a',
	        type: 'image',
	        gallery: {
	            enabled: true,
	            navigateByImgClick: true
	        },
	        fixedContentPos: false
	    });
	});			


	// smoothscroll effect for custom links
	var dazzle_smoothscrollbtn = jQuery('.smooth-scroll, .smooth-scroll a');
	dazzle_smoothscrollbtn.on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = jQuery(this.hash);
		  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    jQuery('html,body').animate({
		      scrollTop: target.offset().top
		    }, 900);
		    return false;
		  }
		}
	});	

	var $searchformfatimes = jQuery(".searchform-switch .fa-times-circle");
	var $searchformfasearch = jQuery(".searchform-switch .fa-search");
	var $searchform = jQuery(".searchform-wrapper .search-form");

	$searchform.addClass("display-none");

	$searchformfatimes.fadeOut();
	$searchformfasearch.on('click', function () {
		$searchformfasearch.fadeOut("slow");
		
		$searchform.fadeIn("slow", function(){
			  jQuery(this).removeClass("display-none");
		});
		$searchformfatimes.fadeIn("slow");
	});
	
	$searchformfatimes.on('click', function () {
		$searchformfatimes.fadeOut("slow");
		$searchform.fadeOut("slow", function(){
			  jQuery(this).addClass("display-none");
		});			
		$searchformfasearch.fadeIn("slow");
	});				

	// tooltips for slider hexagons
	jQuery('.dt-hexagon').tipsy({
		gravity: 's',
		fade: true,
		delayIn: 100, 
		title: 'title',
		offset: 34
	})

	// Video in Posts
	var dazzle_postvideo = jQuery(".post-video");
	dazzle_postvideo.fitVids();		

	// page title height for flexbox
	var dazzle_pagetitleheight = jQuery('.page-title-wrapper .container').height();
	jQuery('.page-title-wrapper .flexbase').css({'height': dazzle_pagetitleheight});	 


	// to top btn
	var dazzle_offset = 500,
	dazzle_backtotop = jQuery('.upbtn');

	jQuery(window).scroll(function(){
		( jQuery(this).scrollTop() > dazzle_offset ) ? dazzle_backtotop.addClass('dt-is-visible') : dazzle_backtotop.removeClass('dt-is-visible');
	});	
	
	dazzle_backtotop.on('click', function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });			

	var dazzle_related_prod = jQuery('.related.products li');
    dazzle_related_prod.removeClass('four three five six').addClass('three');

	//sticky support
	jQuery('.dazzle-is-sticky').hcSticky({
		top: 150,
  		bottomEnd: 100
	});	


});


jQuery(window).load(function(){
	'use strict';
	// rtl 
	var row_full = jQuery('body.rtl div[data-vc-full-width="true"]');
	var row_pos = row_full.css("left");
	row_full.css({"left": "auto", "right": row_pos});
});