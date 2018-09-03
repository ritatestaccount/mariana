jQuery(document).ready(function() {	
	// Responsive Navigation 
	'use strict';
	var dazzle_nava = jQuery(".nav-btn"),
		dazzle_navb = jQuery("#site-navigation"),
		dazzle_wind = jQuery(window).width(),	
		dazzle_winh;
		
		if(dazzle_wind < 1024) {
			 dazzle_winh = jQuery(window).height()
		}
		else {
			dazzle_winh = jQuery(window).outerHeight() -jQuery('#header').outerHeight()
		}

	// Add classes		
    jQuery(window).resize(function () {
		var dazzle_nava = jQuery(".nav-btn"),
			dazzle_navb = jQuery("#site-navigation"),
			dazzle_wind = jQuery(window).width(),
			dazzle_winh;

		if(dazzle_wind < 1024) {
			 dazzle_winh = jQuery(window).height()
		}
		else {
			dazzle_winh = jQuery(window).outerHeight() -jQuery('#header').outerHeight()
		}
		
		if (dazzle_wind > 1023) {
			dazzle_navb.addClass("is-nav-desktop");
			dazzle_navb.removeClass("is-nav-mobile")
		}
		if (dazzle_wind < 1024) {
			dazzle_navb.addClass("is-nav-mobile");
			dazzle_navb.removeClass("is-nav-desktop")
		}

		// Nav CSS adjustment for mobile
		if (dazzle_wind < 1024) {
		jQuery('#site-navigation.is-nav-mobile').css({'max-height': dazzle_winh-200, 'overflow-y': 'scroll', 'overflow-x': 'hidden'});
		}
		if (dazzle_wind > 1023) {
			jQuery('#site-navigation.is-nav-desktop').css({'overflow': 'visible'});
		}		

    });
			
		if (dazzle_wind > 1023) {
			dazzle_navb.addClass("is-nav-desktop");
			dazzle_navb.removeClass("is-nav-mobile")
		}
		if (dazzle_wind < 1024) {
			dazzle_navb.addClass("is-nav-mobile");
			dazzle_navb.removeClass("is-nav-desktop");
		}	
		// Nav CSS adjustment for is-nav-mobile
		if (dazzle_wind < 1024) {
		jQuery('#site-navigation.is-nav-mobile').css({'max-height': dazzle_winh-200, 'overflow-y': 'scroll', 'overflow-x': 'hidden'});
		}
		if (dazzle_wind > 1023) {
			jQuery('#site-navigation.is-nav-desktop').css({'overflow': 'visible'});
		}				

});