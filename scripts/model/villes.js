//----------------------------------------------------------------
// Description des classes concernant les villes.
//----------------------------------------------------------------



/**
 * Définit une ville par son nom. Pour simplifier, le nom est enregistré en minuscule.
 * Les villes adjacentes (i.e. les villes accessibles depuis l'instance),
 * sont enregistrées dans des tableaux associatifs en tant que trajet
 */
class Ville {

    constructor (nom, pos) {
        this.nom = nom.toUpperCase();
        this.pos = pos; // les coordonnées terrestres
        this.villesAdjVoiture =  []; // tableau associatif des villes accessibles (adjacentes) en voiture.
        this.villesAdjTrain =  []; // tableau associatif des villes accessibles (adjacentes) en Train.
        this.villesAdjAvion =  []; // tableau associatif des villes accessibles (adjacentes) en Avion.
    }

    /**
     * retourne la coordonnée x dans le SVG d'après la projection
     * @param projection la projection du svg
     * @returns { int}
     */
    getX(projection) {
        return projection(this.pos)[0];
    }

    /**
     * retourne la coordonnée y dans le SVG d'après la projection
     * @param projection la projection du svg
     * @returns { int }
     */
    getY(projection) {
        return projection(this.pos)[1];
    }
}


/**
 * Classe contenant un dictionnaire des villes
 */
class Villes {
    constructor() {
        this.villes = []
    }

    addVille(ville) {
        this.villes.push(ville);
    }

    getVille(nom) {
        for(var i=0; i<this.villes.length;i++){
            if(nom == this.villes[i].nom){
                return this.villes[i];
            }
        }
        return null;
    }

    getVilleByIndex(j){

        if(j< this.villes.length){
            return this.villes[j];
        }
        return null;
    }

    getVilles(){
        return this.villes;
    }

    displayTrajetsDepuisVille(ville) {
        this.villes[ville.toLowerCase()].displayTrajetDepuisVilleCourante();
    }


}
