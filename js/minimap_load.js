let google_map = new L.tileLayer('http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}', {
            opacity: 1.0,
            attribution: '<a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 21
        });

let minimapa = new L.Control.MiniMap(google_map, {
    position: "bottomright",
    toggleDisplay: true, 
}).addTo(map);
