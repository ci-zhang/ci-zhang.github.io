---
permalink: /travels/
title: "Travels"
layout: space
---
# Map of travels
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.js"></script>
        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css"/>
        <link rel="stylesheet" href="/mapbox/map.css"/>
    </head>
    <body>
        <br>
        <div id="map"></div>
        <script>
            mapboxgl.accessToken = "pk.eyJ1IjoiemhhbmdjaSIsImEiOiJja2themJsZTcxOTRzMnZsbjZxNmIxOTF1In0.xY5kzc2fZFfaURdJNvUEsQ";
            var map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/streets-v11",
                center: [0, 180],
                zoom: 0.3
            });
            map.addControl(new mapboxgl.FullscreenControl());
        </script>
    </body>
</html>
