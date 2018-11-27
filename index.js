//
// 
var app = {
    version : '1.0.0',
    targetEvent : 'click',
    isCordova : false,
    
    hook : function () {
        stopWatch
        document.getElementById('stopWatch').addEventListener(app.targetEvent, function (evt) {
            console.log(evt.target.id, geo.watchID);
            geo.clearWatch();
        });

		geo.watchGeo();
    },
    //
    onDOMContentLoaded : function () {
        app.targetEvent = 'click';
        app.isCordova   = (typeof window.cordova !== "undefined");
        //
        app.hook();
    },
    //
    onDeviceReady : function() {
        app.targetEvent = 'touchend';
        app.isCordova   = (typeof window.cordova !== "undefined");
    }
};
