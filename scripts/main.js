//----------------------------------------------------------------
// Auteurs : Mathilde
// Date : Fev 2020
// main file that load the data and process the column names
//----------------------------------------------------------------

// d3 coordonnées de la France
var geoJsonFrance;
// to display the in select of filter :
listOfColumnNames=[];
// data of the CSV
var mydata;

//create the materialize select of the html
$(document).ready(function() {
    $('select').material_select();
});

//----------------------------------------------------------
/**
 * Récupération des données des différents fichiers en entrée.
 * Puis début de l'éxécution du script.
 */
var dataPromise = d3.queue()
    .defer(d3.tsv, "data.csv")
    .defer(d3.json, "ressources/data/departements-ile-de-france.geojson")
    .await(function(error, data, ileDeFrance) {
        if (error) {
            console.error('Oh dear, something went wrong: ' + error);
        }
        else {
            geoJsonFrance = ileDeFrance;
            const p2 = new Promise(function(resolve, reject) {
                // columns
                dataProcess(data);
                // dots in map
                createCircles();
                // background of ileDeFrance
                displayileDeFrance();});
            // create boxes and dots
            p2.then(updatesBoxesAndMapDueToFilter());
        }
    });
//------------------------------------------------------------
/**
 * Initialize var mydata
 * Create the select with the right columns
 * Launches all the boxes of the data
 */
function dataProcess(data) {
    mydata=data;
    listOfColumnNames= data.columns;
    console.log(listOfColumnNames)
    for (name  in listOfColumnNames) {
        if (listOfColumnNames[name] != "lat" && listOfColumnNames[name]!="lng"){
            addNameInSelect(listOfColumnNames[name])
        }
    }
}

//------------------------------------------------------------
/**
 * add a component option to select
 * this function is mainly a html addition
 * needed in dataProcess
 */
function addNameInSelect(name){
    var node = document.createElement("option");
    var textnode = document.createTextNode(name);
    node.appendChild(textnode);
    document.getElementById("filterOnAttributes").appendChild(node);
    $('select').material_select();
}

//----------------------------------------------------------------
/**
 * this function is ran after a filter adition or removing
 * everything is recomptued (not the best thing but it's a small project
 */
function updatesBoxesAndMapDueToFilter(){
    removeAllInMap();
    document.getElementById("results").innerHTML="";
    for (i in mydata){
        if (i!="columns"){
            if (filterAcceptThisItem(mydata[i])){
                displayBox(mydata[i]);
                displayOnMap(mydata[i]);
            }
        }
    }
}
