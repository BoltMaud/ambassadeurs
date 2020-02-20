//----------------------------------------------------------------
// Auteurs : Mathilde, Arthur
// Date : Fev 2020
//----------------------------------------------------------------

// d3 coordonnées de la France
var geoJsonFrance;
var villes=new Villes();

//----------------------------------------------------------
// C'est ici que tout le code commence !
//----------------------------------------------------------

/**
 * Récupération des données des différents fichiers en entrée.
 * Puis début de l'éxécution du script.
 */
var dataPromise = d3.queue()
    .defer(d3.csv, "ressources/data/labos_data.csv")
    .defer(d3.json, "ressources/data/departements-ile-de-france.geojson")
    .defer(d3.json,"ressources/data/coordVilles.json")
    .defer(d3.json, "ressources/data/coordVilles.json")
    .await(function(error, data, ileDeFrance, villesJson, labos) {
        if (error) {
            console.error('Oh dear, something went wrong: ' + error);
        }
        else {
            geoJsonFrance = ileDeFrance;

            let p1 = new Promise(function(resolve, reject) {
            console.log(villesJson)
                creationVilles(villesJson); });
            p1.then(traitementDonnees(data));

            let p2 = new Promise(function(resolve, reject) {
                creationCarte(); });
            p2.then(affichageCarte());
        }
    });


//----------------------------------------------------------------------------------
// Traitement des données :
// Instanciation des différents objets depuis les données fournies dans les fichiers.
//-----------------------------------------------------------------------------------

/**
 * Instanciation des villes à partir du fichier villes.csv
 */
function creationVilles(villesJson) {
    var tmpVille;
    villesJson.forEach(function (d) {
        tmpVille = new Ville(d.name, d.pos);
        villes.addVille(tmpVille);
    });
}

/**
 * Instanciation des trajets fournis par les fichiers voitures.csv, tgv.csv et avion.csv
 */
function traitementDonnees(data) {
    // Instanciation des trajets en voiture, et ajout de ceux ci à leurs villes de depart et d'arrivee.
    var tmpTrajetVoiture;
    /*voitures.forEach(function (c) {
        tmpTrajetVoiture = new Labo(c.depart, c.arrivee, c.temps, c.prix, c.CO2);
        villes.getVille(c.depart.toUpperCase()).addVilleAdjVoiture(tmpTrajetVoiture);
        villes.getVille(c.arrivee.toUpperCase()).addVilleAdjVoiture(tmpTrajetVoiture);
        trajets.addTrajet(tmpTrajetVoiture);
    });*/

}

