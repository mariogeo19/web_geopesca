let mapa_principal_region = L.map('mapa_principal_nav').setView([20.00, -104.00], 5);

let lyrOSM= L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { minZoom: 3, maxZoom: 17 });

//Cargar otros mapas base
let lyrTopo = L.tileLayer.provider('OpenTopoMap', { minZoom: 3, maxZoom: 17 });
let lyrImagery = L.tileLayer.provider('Esri.WorldImagery', { minZoom: 3, maxZoom: 17 });
mapa_principal_region.addLayer(lyrImagery)

function regiones_marinas_get_color(feauture) {
    if(feauture === "Golfo de México Norte") return "#367338";
    if(feauture === "Pacífico Transicional Mexicano") return "#e11e26";
    if(feauture === "Golfo de California") return "#a83723";
    if(feauture === "Pacífico Transicional de Monterrey") return "#ee9321";
    if(feauture === "Golfo de México Sur") return "#406eb5";
    if(feauture === "Pacífico Sudcaliforniano") return "#8e4399";
    if(feauture === "Mar Caribe") return "#6dc6aa";
    if(feauture === "Pacífico Centroamericano") return "#6f1111";
    if(feauture === "Panamá Pacífico") return "#6a3d9a";
    if(feauture === "Panamá Atlántico") return "#b15928";
    if(feauture === "Colombia") return "#ee3a67";
    if(feauture === "Colombia Atlántico") return "#7794ea";
    if(feauture === "Nicaragua Pacífico") return "#7be11c";
    if(feauture === "Nicaragua Atlántico") return "#58514c";
    if(feauture === "El Salvador Pacífico") return "#d4b57e";
    if(feauture === "El Salvador") return "#d4b57e";
    if(feauture === "Costa Rica Pacífico") return "#e9f084";
    if(feauture === "Costa Rica Atlántico") return "#ce0e94";
    if(feauture === "Honduras") return "#2c31d3";
    if(feauture === "Honduras Atlántico") return "#2c31d3";
    if(feauture === "Guatemala Pacífico") return "#30d9e8";
    if(feauture === "Guatemala") return "#30d9e8";
    if(feauture === "Clipperton Island") return "#e9f50b";
    if(feauture === "Colombian Exclusive Economic Zone (Quitasueño)") return "#7794ea";
    if(feauture === "Serrana Bank") return "#7794ea";
    if(feauture === "Belize") return "#74bcdb";
    return "grey";
}

function style_region (feature) {
    return {
        fillColor: regiones_marinas_get_color(feature.properties.UNION),
        weight: 0.5,
        color: 'black',
        opacity: 1,
        fillOpacity: 0.7
    };
}


function regiones_marinas_get_link(feauture) {
    //if(feauture === "Pacífico Transicional de Monterrey") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Centroamericano") return '<a href = "mapweb/2019_2021_PCS/2019_2021_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Sudcaliforniano") return '<a href = "mapweb/2019_2021_CooPBC/2019_2021_CooPBC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Golfo de California") return '<a href = "mapweb/2019_2021_GC/2019_2021_GC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Golfo de México Sur") return '<a href = "#" ><b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Clipperton Island") return '<a href = "mapweb/2019_Clipperton/2019_Clipperton.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Mar Caribe") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Transicional Mexicano") return '<a href = "mapweb/2019_2021_PCS/2019_2021_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Golfo de México Norte") return '';
    //if(feauture === "Panamá Atlántico") return '';
    //if(feauture === "Panamá Pacífico") return '';
    return "";
}

function regiones_marinas_get_link2022(feauture) {
    //if(feauture === "Pacífico Transicional de Monterrey") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Centroamericano") return '<a href = "mapweb/2022_PCS/2022_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Sudcaliforniano") return '<a href = "mapweb/2022_CooPBC/2022_CooPBC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Golfo de California") return '<a href = "mapweb/2022_GC/2022_GC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Golfo de México Sur") return '<a href = "#" ><b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Clipperton Island") return '<a href = "#" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Mar Caribe") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Transicional Mexicano") return '<a href = "mapweb/2022_PCS/2022_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Golfo de México Norte") return '';
    //if(feauture === "Panamá Atlántico") return '';
    //if(feauture === "Panamá Pacífico") return '';
    return "";
}

function regiones_marinas_get_link2023(feauture) {
    //if(feauture === "Pacífico Transicional de Monterrey") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Centroamericano") return '<a href = "mapweb/2023_PCS/2023_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Sudcaliforniano") return '<a href = "mapweb/2023_CooPBC/2023_CooPBC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Golfo de California") return '<a href = "mapweb/2023_GC/2023_GC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Golfo de México Sur") return '<a href = "#" ><b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Clipperton Island") return '<a href = "#" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Mar Caribe") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Transicional Mexicano") return '<a href = "mapweb/2023_PCS/2023_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Golfo de México Norte") return '';
    //if(feauture === "Panamá Atlántico") return '';
    //if(feauture === "Panamá Pacífico") return '';
    return "";
}

function regiones_marinas_get_link2024(feauture) {
    //if(feauture === "Pacífico Transicional de Monterrey") return '<a href = "#" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Centroamericano") return '<a href = "mapweb/2024_PCS/2024_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Pacífico Sudcaliforniano") return '<a href = "mapweb/2024_CooPBC/2024_CooPBC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Golfo de California") return '<a href = "mapweb/2024_GC/2024_GC.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Golfo de México Sur") return '<a href = "#" ><b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Clipperton Island") return '<a href = "#" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    if(feauture === "Mar Caribe") return '<a href = "mapweb/2024_caribe/2024_caribe.html" > <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Pacífico Transicional Mexicano") return '<a href = "mapweb/2023_PCS/2023_PCS.html" target="_blank"> <b> Ver Mapa </b>  <i class="fas fa-angle-double-right"></i></a>';
    //if(feauture === "Golfo de México Norte") return '';
    //if(feauture === "Panamá Atlántico") return '';
    //if(feauture === "Panamá Pacífico") return '';
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
            <td> ${feature.properties.UNION}</td>
        </tr>
        <tr>
            <td> <b> Periodo 2019-2021</b> </td>
            <td> ${regiones_marinas_get_link(feature.properties.UNION)}</td> 
        </tr> 
        <tr>
            <td> <b> Periodo 2022</b> </td>
            <td> ${regiones_marinas_get_link2022(feature.properties.UNION)}</td> 
        </tr> 
        <tr>
            <td> <b> Periodo 2023</b> </td>
            <td> ${regiones_marinas_get_link2023(feature.properties.UNION)}</td> 
        </tr> 
        <tr>
            <td> <b> Periodo 2024</b> </td>
            <td> ${regiones_marinas_get_link2024(feature.properties.UNION)}</td> 
        </tr> 
    </table>`);
  }

let lyr_regiones_marinas = L.geoJSON.ajax("./data/Ecorregiones_marinas_nivel_1.geojson", {style: style_region, onEachFeature: popup_region}).addTo(mapa_principal_region)

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
