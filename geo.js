//
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
// https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions
//    - enableHighAccuracy, timeout, maximumAge
// https://developer.mozilla.org/en-US/docs/Web/API/Position
//    - coords, timestamp
// https://developer.mozilla.org/en-US/docs/Web/API/Coordinates
//    - latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTimeStamp
//    - epoch
//
colors = ['lightred', 'lightgreen', 'lightblue', 'lightgold', 'lightpurple'];
lastidex = 0;
idex     = 0;
var geo = {
    version : '0.0.1',
    watchID : '',
    options : {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    },

    //
    init : function (opts) {
        geo.messageSpan = opts.message;
        return (navigator.geolocation !== 'undefined');
    },
    //
	onSuccess : function(position) {
		console.log('GOT location');
        console.log(position.coords.latitude + ' --- ' + position.coords.longitude, colors.length, idex, colors[idex]);
        document.getElementById('lat').innerHTML = position.coords.latitude;
        document.getElementById('lon').innerHTML = position.coords.longitude;
        document.getElementById('lon').classList.remove(colors[lastidex]);
        document.getElementById('lon').classList.add(colors[idex]);
        lastidex = (idex >= (colors.length - 1)) ? idex : idex + 1;
        idex     = (idex >= (colors.length - 1)) ? 0    : idex + 1;
	},
    //
	onError : function(error) {
		console.log('error getting geo!');
	},
    clearWatch : function () {
        navigator.geolocation.clearWatch(geo.watchID);
    },
    //
	watchGeo : function() {
		geo.watchID = navigator.geolocation.watchPosition(
			              geo.onSuccess,
                          geo.onError,
			              geo.options);
	},
    //
	getGeo : function() {
		navigator.geolocation.getCurrentPosition(
			  geo.onSuccess,
			  geo.onError,
			  geo.options);
	}
};