jQuery(document).ready(function() {
	'use strict';
	// Header Effect on Scroll

	var def_color = dazzle_styles.dazzle_default_color;	
	var header_logo = jQuery(".logo img");

	if(dazzle_styles.dazzle_pagenav_behavior_switch != 1) { 
		jQuery(".header-regular #header").css({'background': dazzle_styles.dazzle_header_bg});
	}
	else { 
		jQuery('.header-regular #site-navigation, .header-regular .bm, #headersocial').removeClass(dazzle_styles.dazzle_scheme).addClass(dazzle_styles.dazzle_initial_navigation_style);
		jQuery(".header-regular #header").css({"background": "rgba("+dazzle_styles.dazzle_initial_header_color+","+(dazzle_styles.dazzle_initial_header_color_opacity / 100)+")"});
		if(typeof(dazzle_styles.dazzle_initial_logo_image_url) != "undefined" && dazzle_styles.dazzle_initial_logo_image_url != '') { 
			header_logo.attr("src",""+dazzle_styles.dazzle_initial_logo_image_url+"");		

			if(typeof(dazzle_styles.dazzle_initial_logo_svg_retina) != "undefined" && dazzle_styles.dazzle_initial_logo_svg_retina != '') { 
				header_logo.attr("width",""+dazzle_styles.dazzle_initial_svg_retina_logo_width+"").attr("height",""+dazzle_styles.dazzle_initial_svg_retina_logo_height+"").css({"height": ""+dazzle_styles.dazzle_initial_svg_retina_logo_height+"px", "width": ""+dazzle_styles.dazzle_initial_svg_retina_logo_width+"px"});
			}
		}
	}

	if(dazzle_styles.dazzle_scrolling_effect != 0) {
		jQuery(window).scroll( function() {
			var value = jQuery(this).scrollTop();
			if ( value > 150 )	{

					jQuery(".header-regular #header").removeClass("initial-state").addClass("scrolled-header").css({"padding-top": dazzle_styles.dazzle_scroll_pt+"px", "padding-bottom": dazzle_styles.dazzle_scroll_pb+"px"});
					jQuery(".no-rgba .scrolled-header").css({"background": def_color});
					jQuery(".header-regular .logo img").css({"height": ""+dazzle_styles.dazzle_logo_onscroll_height+"px", "width": "auto"});
					if(dazzle_styles.dazzle_alternativelogo == 1) {
						if(dazzle_styles.dazzle_alternative_svg_logo_enabled == 0) {
							jQuery("#header.scrolled-header .logo img").attr("src",""+dazzle_styles.dazzle_alternativelogosrc+"");
						}
						else if(dazzle_styles.dazzle_alternative_svg_logo_enabled == 1) {
							jQuery("#header.scrolled-header .logo img").attr("src",""+dazzle_styles.dazzle_alternative_svg_logo_src+"").attr("width",""+dazzle_styles.dazzle_alternative_svg_logo_width+"").attr("height",""+dazzle_styles.dazzle_alternative_svg_logo_height+"").css({"height": ""+dazzle_styles.dazzle_alternative_svg_logo_height+"px", "width": ""+dazzle_styles.dazzle_alternative_svg_logo_width+"px"});
						}
						
					}

				if(dazzle_styles.dazzle_pagenav_behavior_switch != 1) { 
					jQuery(".header-regular .scrolled-header").css({"background": dazzle_styles.dazzle_header_scroll_bg});
					jQuery(".header-regular .scrolled-header .main-navigation ul ul").css({'background': dazzle_styles.dazzle_header_scroll_bg});
					if(dazzle_styles.dazzle_scheme != dazzle_styles.dazzle_scheme_on_scroll) {
						jQuery('#site-navigation, .bm, #headersocial, .searchform-wrapper').removeClass(dazzle_styles.dazzle_scheme).addClass(dazzle_styles.dazzle_scheme_on_scroll);
					}						
				}				

				else {
					// custom page background color
					jQuery(".header-regular .scrolled-header").css({"background": "rgba("+dazzle_styles.dazzle_onscroll_header_color+","+(dazzle_styles.dazzle_onscroll_header_color_opacity / 100)+")"});

					// custom page menu style
					jQuery('.header-regular #site-navigation, .bm, .header-regular  #headersocial, .searchform-wrapper').removeClass(dazzle_styles.dazzle_scheme).removeClass(dazzle_styles.dazzle_initial_navigation_style).addClass(dazzle_styles.dazzle_onscroll_navigation_style);

					// custom logo
					if(typeof(dazzle_styles.dazzle_onscroll_logo_image_url) != "undefined" && dazzle_styles.dazzle_onscroll_logo_image_url !== '') { 					
						header_logo.attr("src",""+dazzle_styles.dazzle_onscroll_logo_image_url+"").attr("height", ""+dazzle_styles.dazzle_logo_onscroll_height+"").css({"height": ""+dazzle_styles.dazzle_logo_onscroll_height+"px", "width": "auto"});

						if(typeof(dazzle_styles.dazzle_onscroll_logo_svg_retina) != "undefined" && dazzle_styles.dazzle_onscroll_logo_svg_retina !== '') { 
							header_logo.attr("width",""+dazzle_styles.dazzle_onscroll_svg_retina_logo_width+"").attr("height",""+dazzle_styles.dazzle_onscroll_svg_retina_logo_height+"").css({"height": ""+dazzle_styles.dazzle_onscroll_svg_retina_logo_height+"px", "width": ""+dazzle_styles.dazzle_onscroll_svg_retina_logo_width+"px"});
						}

					}
				}
			}
			else {
				jQuery(".header-regular #header").removeClass("scrolled-header").addClass("initial-state");
				jQuery(".header-regular #header").css({"padding-top": dazzle_styles.dazzle_init_pt+"px", "padding-bottom": dazzle_styles.dazzle_init_pb+"px"});
				jQuery(".logo img").css({"width": dazzle_styles.dazzle_logo_width, "height": dazzle_styles.dazzle_logo_height});

				if((dazzle_styles.dazzle_alternativelogo == 1) && (dazzle_styles.dazzle_logo_svg_enabled == 1)) {
					header_logo.attr("src",""+dazzle_styles.dazzle_logo_svg_url+"");
				}							
				else if((dazzle_styles.dazzle_alternativelogo == 1) && (dazzle_styles.dazzle_logo_svg_enabled == 0)) {
					header_logo.attr("src",""+dazzle_styles.dazzle_mainlogosrc+"");
				}

				if(dazzle_styles.dazzle_pagenav_behavior_switch != 1) { 
					jQuery(".header-regular .initial-state").css({'background': dazzle_styles.dazzle_header_bg});	
					if(dazzle_styles.dazzle_scheme != dazzle_styles.dazzle_scheme_on_scroll) {
						jQuery('#site-navigation, .bm').removeClass(dazzle_styles.dazzle_scheme_on_scroll).addClass(dazzle_styles.dazzle_scheme);
					}	
					jQuery(".initial-state .main-navigation ul ul").css({'background': dazzle_styles.dazzle_header_bg});
					if(dazzle_styles.dazzle_scheme != dazzle_styles.dazzle_scheme_on_scroll) {
						jQuery('#site-navigation, .bm, #headersocial, .searchform-wrapper').removeClass(dazzle_styles.dazzle_scheme_on_scroll).addClass(dazzle_styles.dazzle_scheme); 
					}	
				}		
				else {
					// custom page background color
					jQuery(".header-regular .initial-state").css({"background": "rgba("+dazzle_styles.dazzle_initial_header_color+","+(dazzle_styles.dazzle_initial_header_color_opacity / 100)+")"});


					// custom page menu style
					jQuery('.header-regular #site-navigation, .header-regular  .bm, #headersocial, .header-regular  .searchform-wrapper').removeClass(dazzle_styles.dazzle_scheme_on_scroll).removeClass(dazzle_styles.dazzle_onscroll_navigation_style).addClass(dazzle_styles.dazzle_initial_navigation_style);

					// custom logo
					if(typeof(dazzle_styles.dazzle_initial_logo_image_url) != "undefined" && dazzle_styles.dazzle_initial_logo_image_url !== '') { 					
						header_logo.removeAttr("src").attr("src",""+dazzle_styles.dazzle_initial_logo_image_url+"").attr("height",""+dazzle_styles.dazzle_initial_logo_image_height+"").css({"height": ""+dazzle_styles.dazzle_initial_logo_image_height+"px", "width": ""+dazzle_styles.dazzle_initial_logo_image_width+"px"});;

						if(typeof(dazzle_styles.dazzle_initial_logo_svg_retina) != "undefined" && dazzle_styles.dazzle_initial_logo_svg_retina !== '') { 
							header_logo.attr("width",""+dazzle_styles.dazzle_initial_svg_retina_logo_width+"").attr("height",""+dazzle_styles.dazzle_initial_svg_retina_logo_height+"").css({"height": ""+dazzle_styles.dazzle_initial_svg_retina_logo_height+"px", "width": ""+dazzle_styles.dazzle_initial_svg_retina_logo_width+"px"});
						} else { 
							header_logo.css({"width": dazzle_styles.dazzle_initial_logo_image_width, "height": dazzle_styles.dazzle_initial_logo_image_height});
						}						
								
					}
				}				
			}
		});	
	}
});


jQuery(window).load(function() {
	var headernavheight = jQuery('.header-regular .site-header .container').height();
	var socialaheight = jQuery('.header-regular #headersocial li a').height();
	jQuery('.header-regular .logo-container').css({'height': headernavheight});	 
	jQuery('.header-regular #headersocial').css({'height': headernavheight});	 
	jQuery('.header-regular #headersocial li').css({'margin-top': (headernavheight - socialaheight)/2 });		
	jQuery('.header-regular .header-nav').css({'min-height': headernavheight});		
})