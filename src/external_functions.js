function getLocation() {
    let options = {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    function success(pos) {
        let gps = pos.coords;
        let coordinates = Array();
        alert("LAT: " + gps.latitude +
            " | LONG: " + gps.longitude +
            " | ACCURACY: " + gps.accuracy);
        coordinates.push(gps.latitude);
        coordinates.push(gps.longitude);

    }

    // var options = {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0
    // };
    //
    // function success(pos) {
    //     var crd = pos.coords;
    //
    //     console.log('Sua posição atual é:');
    //     console.log('Latitude : ' + crd.latitude);
    //     console.log('Longitude: ' + crd.longitude);
    //     console.log('Mais ou menos ' + crd.accuracy + ' metros.');
    // };
    //
    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
        return null;
    }

//
// navigator.geolocation.getCurrentPosition(success, error, options);
}