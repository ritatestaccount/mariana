function gallery_item_on_hover() {
	// Portfolio Grid In and Out Effect //
	var galleryhover = jQuery('.delicious-gallery-item a');
	galleryhover.on({
	    mouseenter: function() {
	       jQuery(this).find('.delicious-gallery-on-hover').animate({ opacity: 1 }, 350);
	    },
	    mouseleave: function() {
	       jQuery(this).find('.delicious-gallery-on-hover').animate({ opacity: 0 }, 350);
	    }
	})	
}


jQuery(document).ready(function() {	
	'use strict';

	gallery_item_on_hover();

	jQuery('.delicious-gallery-wrapper[id^="dt-gallery-"]').each( function() { 	

		var $div = jQuery(this);
		var token = $div.data('token');

		var settingObj = window['dt_gl_' + token];	

		var $container = jQuery('#dt-gallery-'+settingObj.id+' .delicious-gallery');

	var colWidth = function () {
		var w = $container.width(), 
			columnNum = 3,
			colw = 0;
			if (w > 1800) {
				columnNum  = settingObj.dt_columns_big_pc;
			} else if (w > 1440) {
				columnNum  = settingObj.dt_columns_pc;
			} else if (w > 1279) {
				columnNum  = settingObj.dt_columns_laptop;
			} else if (w > 1023) {
				columnNum  = settingObj.dt_columns_small_laptop;
			} else if (w > 767) {
				columnNum  = settingObj.dt_columns_tablet;
			} else if (w > 479) {
				columnNum  = settingObj.dt_columns_mobile;
			}	


		colw = Math.floor(w/columnNum);	

		$container.find('.delicious-gallery-item').each(function() {
			var $item = jQuery(this);

			$item.css({'width': colw});
			if(settingObj.grid_type != 'is-masonry') { 
				jQuery($item).css({
					'width'		 : (colw) + 'px',
					'height' : 2 * Math.floor(((colw) * 0.7763157894736842)/2) + 'px'
				});
				jQuery($item).find('img').css({
					'width'		 : ((colw)) + 'px',
					'height' : 'auto'
				});	

				if ($item.hasClass('twobytwo')) {
					jQuery('.twobytwo').css({
						'width'		 : (colw * 2) + 'px',
						'height' : 4 * Math.floor(((colw) * 0.7763157894736842)/2) + 'px'
					});
					jQuery('.twobytwo img').css({
						'width'		 : ((colw * 2)) + 'px',
						'height' : 'auto'
					});	
				}	

				if ($item.hasClass('twobyone')) {
					jQuery('.twobyone').css({
						'width'		 : (colw * 2) + 'px',
						'height' : 2* Math.floor(((colw) * 0.7763157894736842)/2) + 'px'
					});
					jQuery('.twobyone img').css({
						'width'		 : ((colw * 2)) + 'px',
						'height' : 'auto'
					});	
				}				

				if ($item.hasClass('onebytwo')) {
					jQuery('.onebytwo').css({
						'width'			: colw,
						'height' : 4 * Math.floor((( colw ) * 0.7763157894736842)/2) + 'px'
					});
					jQuery('.onebytwo img').css({
						'width'			: colw,
						'height'		 : 'auto'
					});	
				}	
			}						

		});		

		return colw;
	}		

		var $gal_grid = $container.imagesLoaded().done( function() {
		$gal_grid.isotope({
			layoutMode: 'packery',
			packery: {
			  	columnWidth: colWidth(),				
			},
			itemSelector: '.delicious-gallery-item',
			percentPosition: true,			
		});	

		jQuery(window).resize(function() {
			$gal_grid.isotope('layout');
			$gal_grid.isotope({
				layoutMode: 'packery',
			packery: {
			  	columnWidth: colWidth(),				
			},
			itemSelector: '.delicious-gallery-item',
			percentPosition: true,	
			});	
		});		

	});
});

});