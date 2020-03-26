//----------------------------------------------------------------
// Auteurs : Mathilde
// Date : Fev 2020
// file that creates the html boxes on the left
//----------------------------------------------------------------


/**
 * box of d should be first because d has been selected
 */
function displayFirst(d){

}

//----------------------------------------------------------------
/**
 * create the html boxe of the item
 */
function displayBox(item){
    var node = document.createElement("div");
    node.classList.add("col");
    node.classList.add("row");
    node.classList.add("grey");
    node.classList.add("lighten-3");
    node.classList.add("s12");
    node.id=item["Identifiant"]+"box";
    document.getElementById("results").appendChild(node);

    var node = document.createElement("div");
    node.classList.add("card-content");
    node.classList.add("black-text");
    node.id=item["Identifiant"]+"boxContent1";
    document.getElementById(item["Identifiant"]+"box").appendChild(node);

    var node = document.createElement("div");
    node.classList.add("card-action");
    node.classList.add("black-text");
    node.id=item["Identifiant"]+"boxContent2";
    document.getElementById(item["Identifiant"]+"box").appendChild(node);

    var node = document.createElement("span");
    node.classList.add("card-title");
    node.innerHTML=item["Identifiant"];
    document.getElementById(item["Identifiant"]+"boxContent1").appendChild(node);

    var node = document.createElement("p");
    for (j in item){
        if (j!="Identifiant" && j!="Latitude" && j!="Longitude"){
          node.innerHTML+=j+" : "+  item[j]+"<br>";
        }
    }
    document.getElementById(item["Identifiant"]+"boxContent2").appendChild(node);
}

