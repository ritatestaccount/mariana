jQuery(document).ready(function() {
	'use strict';
	//Google Map					
	jQuery('.map-wrapper[id^="delicious_map_"]').each( function() { 

		var $div = jQuery(this);
		var token = $div.data('token');
		var settingObj = window['dt_map_' + token];
		var id = settingObj.id;
		var zoomv = parseInt(settingObj.zoom);

		jQuery("#delicious_map_"+settingObj.id+"").each(function() {
			
			var latlng = new google.maps.LatLng(settingObj.latitude,settingObj.longitude);
			var settings = {
				zoom: zoomv,
				center: new google.maps.LatLng(settingObj.latitude,settingObj.longitude), 
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				navigationControl: false,
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

				};


				
			var map = new google.maps.Map(document.getElementById("google_map_"+settingObj.id+""), settings);
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});
			
			var contentString = '<div class="map-tooltip">'+
				'<h6>'+settingObj.pin_title+'</h6>'+
				'<p>'+settingObj.pin_desc+'</p>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			var pin = {
				path: 'M39.5,8.125c-12.643,0-22.929,10.286-22.929,22.929c0,12.221,20.87,38.4,21.758,39.51l1.17,1.459l1.17-1.459  c0.888-1.109,21.758-27.289,21.758-39.51C62.43,18.411,52.143,8.125,39.5,8.125z M39.5,42.667c-6.903,0-12.5-5.597-12.5-12.5  s5.597-12.5,12.5-12.5S52,23.264,52,30.167S46.403,42.667,39.5,42.667z',
				fillColor: ''+settingObj.pin_color+'',
				fillOpacity: 1,
				scale: 0.8,
				strokeColor: ''+settingObj.pin_color+'',
				strokeWeight: 1,
				anchor: new google.maps.Point(60, 75)
			};			
			
			var companyPos = new google.maps.LatLng(settingObj.latitude,settingObj.longitude);
			
			var companyMarker = new google.maps.Marker({
				position: companyPos,
				map: map,
				icon: pin, 
				zIndex: 3});	
			
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});

	    });

	});
});		