let google_map = new L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            opacity: 1.0,
            attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 21
        });

let minimapa = new L.Control.MiniMap(google_map, {
    position: "bottomleft",
    toggleDisplay: true, 
}).addTo(map);
