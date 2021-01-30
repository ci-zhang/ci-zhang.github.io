---
permalink: /travels/
title: "Travels"
layout: space
---
# Map of travels
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src='https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css' rel='stylesheet' />
    </head>
    <body>
        <br>
        <div id="map" style="width: 100%; height: 480px;"></div>
        <script>
            mapboxgl.accessToken = 'pk.eyJ1IjoiemhhbmdjaSIsImEiOiJja2themJsZTcxOTRzMnZsbjZxNmIxOTF1In0.xY5kzc2fZFfaURdJNvUEsQ';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 0 // starting zoom
            });
            map.addControl(new mapboxgl.FullscreenControl());
        </script>
    </body>
</html>
