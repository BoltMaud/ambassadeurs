//----------------------------------------------------------------
// Auteurs : Mathilde, Arthur
// Date : Fev 2020
//----------------------------------------------------------------

// d3 coordonnées de la France
var geoJsonFrance;
listOfColumnNames=[];
var mydata;

$(document).ready(function() {
    $('select').material_select();
});
//----------------------------------------------------------
// C'est ici que tout le code commence !
//----------------------------------------------------------

/**
 * Récupération des données des différents fichiers en entrée.
 * Puis début de l'éxécution du script.
 */

var dataPromise = d3.queue()
    .defer(d3.tsv, "ressources/data/labs.tsv")
    .defer(d3.json, "ressources/data/departements-ile-de-france.geojson")
    .await(function(error, data, ileDeFrance) {
        if (error) {
            console.error('Oh dear, something went wrong: ' + error);
        }
        else {
            geoJsonFrance = ileDeFrance;


            let p2 = new Promise(function(resolve, reject) {
                traitementDonnees(data);
                creationCarte(); });
            p2.then(affichageCarte());
        }
    });


//----------------------------------------------------------------------------------
// Traitement des données :
// Instanciation des différents objets depuis les données fournies dans les fichiers.
//-----------------------------------------------------------------------------------

/**
 * Instanciation des trajets fournis par les fichiers voitures.csv, tgv.csv et avion.csv
 */
function traitementDonnees(data) {
    mydata=data;
    listOfColumnNames= data.columns;
    console.log(listOfColumnNames)
    for (name  in listOfColumnNames) {
        if (listOfColumnNames[name] != "lat" && listOfColumnNames[name]!="lng"){
            ajoutNomDansSelect(listOfColumnNames[name])
        }
    }
    createAllBoxes(mydata);
}
function ajoutNomDansSelect(name){
    var node = document.createElement("option");
    var textnode = document.createTextNode(name);
    node.appendChild(textnode);
    document.getElementById("filterOnAttributes").appendChild(node);
    $('select').material_select();
}

