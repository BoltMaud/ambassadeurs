//----------------------------------------------------------------
// Author : Mathilde
// Date : Fev 2020
// openstreetmap with leaflet
//----------------------------------------------------------------

var lat = 48.7;
var lon = 2.4;
var macarte = null;
var markers = null;

//----------------------------------------------------------
/**
 * Initialize the map with Leaflet
 */
function initMap() {
    document.getElementById("carte").innerHTML="";
    macarte = L.map('carte').setView([lat, lon], 8.5);

    // background of the map
    L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
                        attribution: ' © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - <a href="//openstreetmap.fr">OSM France</a>',
                        minZoom: 7,
                        maxZoom: 12,
                        trackResize:false
                    }).addTo(macarte);

    // white background when not Ile de France
    L.geoJSON(region, { style: {  color: 'white', weight: 2, fillOpacity: 0.9 } }).addTo(macarte);

    // trouble with zoom
    macarte.on("zoomstart", function (e) { document.getElementById("carte").style.opacity=0; });
    macarte.on("zoomend", function (e) { document.getElementById("carte").style.opacity=1; });

    // add border of the departments
    L.geoJSON(geoJsonFrance, {style: function(feature){return { stroke: true, color: "gray", weight: 1, fill:false }}}).addTo(macarte);
}

//----------------------------------------------------------
/**
 * From input data add markers
 */
function updateDataInMap(data){
    // remove existing makers
    if (markers!= null ) {markers.clearLayers();}
    // personnal marker icon
    var myIcon = L.icon({
            iconUrl: "./resources/img/map-marker-icon.png",
            iconSize: [40, 40],
            iconAnchor: [25, 50],
            popupAnchor: [-3, -76],
        });
    // create the group of markers (to remove them easly)
    markers= L.layerGroup().addTo(macarte);
    // add all the dots
    for( d in data){
        if (d!="columns"){
            // only the one that are validated by the filters
            if (filterAcceptThisItem(mydata[d])){
                var found=false;
                // some markers have the same coordinates
                for (m in markers._layers){
                    if (markers._layers[m]._latlng["Longitude"]==data[d]["Latitude"] && markers._layers[m]._latlng["lat"]==data[d]["lng"]){
                        // add content to existing point (same coordinates)
                        markers._layers[m]._popup._content+="<br>"+data[d]["Identifiant"];
                        found=true;
                        break;
                    }
                }
                if (! found){
                    // new point
                    var marker = L.marker([data[d]["Latitude"],data[d]["Longitude"] ], { icon: myIcon }).addTo(markers);
                    marker._icon.classList.add("marker");
                    marker.bindPopup(data[d]["Identifiant"]);
                }
            }
        }
    }
}
