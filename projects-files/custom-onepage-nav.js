function dazzle_onepage_nav() {
	'use strict';

	jQuery(".dt-homepage-menu-container ul li, .menu-dazzle-menu-container ul li").css({ "overflow":"visible"});

	jQuery('.page-template-template-homepage .dt-homepage-menu-container ul li.external, .page-template-template-homepage .menu-dazzle-menu-container ul li.external').each(function() {
		jQuery(this).children('a').addClass('external');
		jQuery(this).removeClass('external');
	});


	var navn = jQuery(".page-template-template-homepage #site-navigation");
	jQuery(navn).find('a').on('click', function () {
		if (navn.is(":visible") && navn.hasClass("is-nav-mobile")) {
			jQuery('#burger-menu').trigger('click');
		}
	});		


	jQuery('.page-template-template-homepage .dt-homepage-menu-container ul li.initial, .page-template-template-homepage .menu-dazzle-menu-container ul li.initial').addClass('current');

	var bool = false;
	if(dazzle_onepage.dazzle_hashtags == 1) {
		bool = true;
	}

	//Scroll Nav
	jQuery('.page-template-template-homepage .dt-homepage-menu-container ul, .page-template-template-homepage .menu-dazzle-menu-container ul').onePageNav({
		currentClass: 'current',
		filter: ':not(.external)',
		changeHash: bool,
		scrollOffset: dazzle_onepage.dazzle_offset
	});		    		
}

jQuery(document).ready(function() {

	dazzle_onepage_nav();	

});