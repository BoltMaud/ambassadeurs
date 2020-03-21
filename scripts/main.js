//----------------------------------------------------------------
// Auteurs : Mathilde
// Date : Fev 2020
// main file that load the data and process the column names
//----------------------------------------------------------------

// coordonnées de la France
var geoJsonFrance;
// to display the in select of filter :
listOfColumnNames=[];
// data of the CSV
var mydata;

// data of Labs
var dataPromise = d3.queue()
    .defer(d3.tsv, "data.csv")
    .defer(d3.json, "resources/data/departements-ile-de-france.geojson")
    .defer(d3.json, "resources/data/iledeFrance.geojson")
    .await(function(error, data, ileDeFrance,Region) {
        if (error) {
            console.error('Oh dear, something went wrong: ' + error);
        }
        else {
            geoJsonFrance = ileDeFrance;
            region=Region
            const p2 = new Promise(function(resolve, reject) {
                // columns
                dataProcess(data);
                });
            // create boxes and dots
            p2.then(startMapBoxes());

        }
    });

//----------------------------------------------------------
/**
 * When mydata is filled, load boxes and map
 */
function startMapBoxes(){
    initMap();
    updatesBoxesAndMapDueToFilter();
}

//------------------------------------------------------------
/**
 * Initialize var mydata
 * Create the select with the right columns
 * Launches all the boxes of the data
 */
function dataProcess(data) {
    mydata = data;
    let listOfColumnNames = data.columns;
    for (name  in listOfColumnNames) {
        if (listOfColumnNames[name] !== "lat" && listOfColumnNames[name]!=="lng"){
            addNameInSelect(listOfColumnNames[name]);
        }
    }
    $('select').formSelect();
}

//------------------------------------------------------------
/**
 * add a component option to select
 * this function is mainly a html addition
 * needed in dataProcess
 */
function addNameInSelect(name){
    let node = document.createElement("option");
    let textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("filterOnAttributes").appendChild(node);
}

//----------------------------------------------------------------
/**
 * this function is ran after a filter adition or removing
 * everything is recomptued (not the best thing but it's a small project
 */
function updatesBoxesAndMapDueToFilter(){
    document.getElementById("results").innerHTML="";
    for (i in mydata){
        if (i!="columns"){
            if (filterAcceptThisItem(mydata[i])){
                displayBox(mydata[i]);
            }
        }
    }
    updateDataInMap(mydata);
}


// ---------------------------------------------------------------
  $(document).ready(function(){
    $('.tooltipped').tooltip();
  });