if('serviceWorker' in navigator){
	navigator.serviceWorker.register('../sw.js');
	console.log('SW Registered');
}