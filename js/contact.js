function initMap() {
    var seoul = {lat:  37.5618404, lng: 126.9361569};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: seoul});
    var marker = new google.maps.Marker({position: seoul, map: map});
}