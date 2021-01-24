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
        <div id='map' style='width: 400px; height: 300px;'></div>
        <script>
            mapboxgl.accessToken = "pk.eyJ1IjoiemhhbmdjaSIsImEiOiJja2themJsZTcxOTRzMnZsbjZxNmIxOTF1In0.xY5kzc2fZFfaURdJNvUEsQ"
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-74.5, 40],
                zoom: 9
            });
        </script>
    </body>
</html>
