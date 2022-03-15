let mapa_principal_region = L.map('mapa_principal_nav').setView([17.06, -97.53], 4);

let lyrOSM= L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { minZoom: 3, maxZoom: 17 });

//Cargar otros mapas base
let lyrTopo = L.tileLayer.provider('OpenTopoMap', { minZoom: 3, maxZoom: 17 });
let lyrImagery = L.tileLayer.provider('Esri.WorldImagery', { minZoom: 3, maxZoom: 17 });
mapa_principal_region.addLayer(lyrImagery)

function regiones_marinas_get_color(feauture) {
    if(feauture === "Archipiélago de Revillagigedo") return "#a6cee3";
    if(feauture === "Costa Occidental de América Central") return "#b2df8a";
    if(feauture === "Costa Occidental de la Península de Baja California") return "#33a02c";
    if(feauture === "Costa Oriental de América Central") return "#fb9a99";
    if(feauture === "Golfo de California") return "#e31a1c";
    if(feauture === "Golfo de México") return "#fdbf6f";
    if(feauture === "Internacional del Atlántico") return "#ff7f00";
    if(feauture === "Internacional del Pacífico") return "#cab2d6";
    if(feauture === "Mar Caribe") return "#6a3d9a";
    if(feauture === "Pacífico Centro Sur mexicano") return "#b15928";
    return "grey";
}

function style_region (feature) {
    return {
        fillColor: regiones_marinas_get_color(feature.properties.Región),
        weight: 0.5,
        color: 'black',
        opacity: 1,
        fillOpacity: 0.7
    };
}


function regiones_marinas_get_link(feauture) {
    if(feauture === "Archipiélago de Revillagigedo") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Costa Occidental de América Central") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Costa Occidental de la Península de Baja California") return '<a href = "mapweb/2019_2021_CooPBC/2019_2021_CooPBC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Costa Oriental de América Central") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Golfo de California") return '<a href = "mapweb/2019_2021_GC/2019_2021_GC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Golfo de México") return '<a href = "#" ><b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Internacional del Atlántico") return '';
    if(feauture === "Internacional del Pacífico") return '<a href = "mapweb/2019_Clipperton/2019_Clipperton.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Mar Caribe") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Centro Sur mexicano") return '<a href = "mapweb/2019_2021_PCS/2019_2021_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    return "";
}

function popup_region (feature, layer) {
    layer.bindPopup(`<table class="tabla-geopesca"> 
        <thead>
            <tr>  
                <td>  IDENTIFICADOR </td> 
                <td> CLAVE </td> 
            </tr> 
        </thead>
        <tr>
            <td> <b> Región: </b> </td>
            <td> ${feature.properties.Región}</td>
        </tr>
        <tr>
            <td> <b> </b> </td>
            <td> ${regiones_marinas_get_link(feature.properties.Región)}</td> 
        </tr> 
    </table>`);
  }

let lyr_regiones_marinas = L.geoJSON.ajax("./data/Regiones_marinas.geojson", {style: style_region, onEachFeature: popup_region}).addTo(mapa_principal_region)

let lyr_zee = L.geoJSON.ajax("./data/contdv250_zeemgw_linea.geojson", {style:{
    weight: 1.5,
    color: 'white',
    dashArray: '3',
}}).addTo(mapa_principal_region)


let controlcapas = {
    "ZEE": lyr_zee,
    "Regiones":lyr_regiones_marinas,
}

let basemaps = {
    "Open Street Maps": lyrOSM,
    "Topo Map": lyrTopo,
    "Imagery Esri": lyrImagery
}

let ctlLayers = L.control.layers(basemaps, controlcapas).addTo(mapa_principal_region)
//Colocar las coordenadas en el mapa con el pluging L.Control.MousePosition
const ctlMousePosition = L.control.mousePosition().addTo(mapa_principal_region)
