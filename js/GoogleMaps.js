$(document).on("pageint", "#paginaMapa","#page2" function(e,data){
	var defaultPos = new google.maps.LatLng(19.289168, -99.653440);
	
	if(navigator.geolocation){
		function exito(pos){
			MuestraMapa(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
		}
		
		function falla(error){
			alert('Error en servicio Geolocalizador');
			MuestraMapa(defaultPos);
		}
	var options={maximumAge:500000, enableHighAccuracy:true, timeout: 5000};
	
	
	}else{
		MuestraMapa(defaultPos);
	}
	
	function MuestraMapa(latlng){
		
		
		var capa = String(latlng);
		var res = capa.replace(/\(|\)/g, '');
		
		var latitud = res.substring(0, res.indexOf(','));	
		var longitud = res.substring(res.indexOf(",")+2);
		$('#LatY').val(latitud);
		$('#LongX').val(longitud);
		var myOptions = {
			zoom: 16,
			center: latlng,
			disableDefaultUI: true,
			mapTypeId: google.maps.mapTypeId.ROADMAP};
		
		var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
		
		var infowindow = new google.maps.InfoWindow({
			position: latlng,
			content: '<p> Tu posicion actual</p>'+latlng});
	
		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: "Mi posicion",
			animation: google.maps.Animation.DROP
		});
		
		google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
	}
	
})