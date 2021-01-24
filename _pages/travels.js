---
permalink: /travels/
title: "Travels"
layout: space
---
# Map of travels
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href='https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css'/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css"/>
        <link rel="stylesheet" href="/leaflet/fullscreen/leaflet.fullscreen.css"/>
        <link rel="stylesheet" href="/leaflet/map.css"/>
        <script src='https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.js'></script>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <script src="https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js"></script>
        <script src="/leaflet/fullscreen/Leaflet.fullscreen.min.js"></script>
        <script src="/leaflet/locations.js"></script>
    </head>
    <body>
        <br>
        <div id="map">
            <script>
                mapboxgl.accessToken = "pk.eyJ1IjoiemhhbmdjaSIsImEiOiJja2themJsZTcxOTRzMnZsbjZxNmIxOTF1In0.xY5kzc2fZFfaURdJNvUEsQ";
                var map = new mapboxgl.Map({
                    container: "map",
                    style: "mapbox://styles/mapbox/streets-v11",
                    center: [0, 180],
                    zoom: 0.3
                });
    	     </script>
        </div>
    </body>
</html>
