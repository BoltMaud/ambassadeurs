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
        if (d!=="columns"){
            // only the one that are validated by the filters
            if (filterAcceptThisItem(mydata[d])){
                var dataD = data[d];
                var title = dataD["Identifiant"];
                var id = title.replace(/\W/g,'_');
                var found=false;
                // some markers have the same coordinates
                for (m in markers._layers){
                    if (markers._layers[m]._latlng["Longitude"]==dataD["Latitude"] && markers._layers[m]._latlng["lat"]==dataD["lng"]){
                        // add content to existing point (same coordinates)
                        markers._layers[m]._popup._content+="<br>"+title;
                        found=true;
                        break;
                    }
                }
                if (! found){
                    // new point
                    var marker = L.marker([dataD["Latitude"],dataD["Longitude"] ], { icon: myIcon }).addTo(markers);
                    marker._icon.classList.add("marker");
                    // wrap marker in a link element <a>
                    var wrapperA = document.createElement('a');
                    wrapperA.setAttribute("href", `#${id}`);
                    wrapperA.setAttribute("onclick", `selectCardFromMarker(\'${id}\')`);

                    marker._icon.parentNode.insertBefore(wrapperA, marker._icon);
                    wrapperA.appendChild(marker._icon);
                    wrapperA.id = `${id}-Marker`;

                    // var wrapperLi = document.createElement('li');
                    // wrapperA.parentNode.insertBefore(wrapperLi, wrapperA);
                    // wrapperLi.appendChild(wrapperA);
                    // wrapperLi.classList.add('marker-li');

                    //marker._icon.innerHTML += ;
                    marker.bindPopup(`<div>${title}</div>`);
                }
            }
        }
    }
    // var wrapperUl = document.createElement('ul');
    // let listElement0 = $(".marker-li")[0];
    // listElement0.parentNode.insertBefore(wrapperUl, listElement0);
    // $(".marker-li").each(function() {wrapperUl.appendChild(this);});
}

/***
 * display and select the corresponding card when click on a marker
 * @param {string} id
 */
function selectCardFromMarker(id) {
    document.querySelectorAll(`#results > div`).forEach(d => d.classList.remove("red"));
    document.querySelector(`#${id}`).parentNode.classList.add('red');
}

function selectMarkerFromCard(id) {
    document.querySelectorAll(`#results > div`).forEach(d => d.classList.remove("red"));
    document.querySelector(`#${id}-Marker > img`).click();
}
