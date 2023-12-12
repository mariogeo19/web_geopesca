
//Colocar las coordenadas en el mapa con el pluging L.Control.MousePosition
const ctlMousePosition = L.control.mousePosition().addTo(map)

//Agregar la escala en millas nauticas
map.addControl(new L.Control.ScaleNautic({
    metric: false,
    imperial: false,
    nautic: true,
    position: "bottomright",
}));
