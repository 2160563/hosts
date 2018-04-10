
	
	function addMarkerPoints(){
		var marker = new Image();
		marker.src = './images/marker.png';
		var canvas = document.getElementById('Map'),
		context = canvas.getContext('2d');		
			context.drawImage(marker,100,100,30,30);
	}
	
window.onload = function() {
		
	var canvas = document.getElementById('Map'),
	context = canvas.getContext('2d');
	base_image = new Image();
	base_image.src = './images/Baguio.png';
	base_image.onload = function(){
		context.drawImage(base_image,0,0)		
		addMarkerPoints();
	};
};
