//----------------------------------------------------------------
// Auteurs : Mathilde
// Date : Fev 2020
// main file that load the data and process the column names
//----------------------------------------------------------------

// coordonnées de la France
var geoJsonFrance;
// data of the CSV
var mydata=null;
var firstTime=true;//temporaire
var changeName=true;
var fileToLoad = "project_data/data.csv";
// data of Labs
function startouille(){
if (firstTime){
    let dataPromise = d3.queue()
        .defer(d3.tsv, fileToLoad)
        .defer(d3.json, "resources/data/departements-ile-de-france.geojson")
        .defer(d3.json, "resources/data/iledeFrance.geojson")
        .await(function (error, data, ileDeFrance, Region) {
            if (error) {
                console.error('Oh dear, something went wrong: ' + error);
            } else {
                geoJsonFrance = ileDeFrance;
                region = Region;
                const p2 = new Promise(function (resolve, reject) {
                    // columns
                    dataProcess(data);
                });
                // create boxes and dots
                p2.then(startMapBoxes());

            }
        });
    firstTime=false;
    }
   else{
     if (changeName){
        let dataPromise = d3.queue()
            .defer(d3.tsv, fileToLoad)
            .await(function (error, data) {
                        if (error) {
                            console.error('Oh dear, something went wrong: ' + error);
                        } else {
                            const p2 = new Promise(function (resolve, reject) {
                                // columns
                                dataProcess(data);
                            });
                            // create boxes and dots
                            p2.then(updatesBoxesAndMapDueToFilter());

                        }
                    });
                    changeName=false;
   }
   else {
    updatesBoxesAndMapDueToFilter();
    }
   }
}

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
    fillTable();

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

/***
 * Use this function on onclick attributes to go to a specific tab
 * @param {string} tab   The ID of the tab to go to
 */
function goToTab(tab) {
    var tabs = document.getElementById("tabList");
    var instance = M.Tabs.getInstance(tabs);
    instance.select(tab);
}

function changeFileToLoad(name, value){
    document.getElementById("maptitle").innerHTML=value;
    fileToLoad=name;
    changeName=true;
    goToTab("map");
}

