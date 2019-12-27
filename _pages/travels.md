---
permalink: /travels/
title: "Travels"
layout: space
---
# Map of travels
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.3/dist/leaflet.css"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.css"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.3.0/dist/MarkerCluster.Default.css"/>
        <link rel="stylesheet" href="/leaflet/fullscreen/leaflet.fullscreen.css"/>
        <link rel="stylesheet" href="/leaflet/map.css"/>
        <script src="https://unpkg.com/leaflet@1.3.3/dist/leaflet.js"></script>
        <script src="https://unpkg.com/leaflet.markercluster@1.3.0/dist/leaflet.markercluster.js"></script>
        <script src="/leaflet/fullscreen/Leaflet.fullscreen.min.js"></script>
        <script src="/leaflet/locations.js"></script>
    </head>
    <body>
        <br>
        <div id="map">
            <script>
                var tileLayer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
                    id: "mapbox.streets",
                    accessToken: "pk.eyJ1IjoicmFiZXJuYXQiLCJhIjoiY2luajV5eW51MHhneXVhbTNhdWEzbmRkaSJ9.EzUhO4SMompzRVWAYZcoFw"
                });
                var map = L.map("map", {
                    center: [0, 180],
                    zoom: 0.3,
                    fullscreenControl: {
                        psudoFullscreen: false
                    }
                });
                map.addLayer(tileLayer);
                var markers = L.markerClusterGroup({
                    showCoverageOnHover: false,
                    maxClusterRadius: 80
                });
    		    for (var i = 0; i < addressPoints.length; i++) {
    			    var a = addressPoints[i];
    			    var title = a[0];
    			    var marker = L.marker(new L.LatLng(a[1], a[2]), { title: title });
    			    marker.bindPopup(title);
    			    markers.addLayer(marker);
    		     }
    		     map.addLayer(markers);
    		     map.zoomIn();
                 /*
                 map.on('click', function(e) {
                     alert(e.latlng.lat + ", " + e.latlng.lng)
                 });
                 */
    	     </script>
        </div>
    </body>
</html>
