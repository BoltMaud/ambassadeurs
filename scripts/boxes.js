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
    var boxRow = document.createElement("div");
    boxRow.classList.add("row");
    boxRow.classList.add("grey");
    boxRow.classList.add("lighten-3");
    boxRow.id=item["Identifiant"];
    document.getElementById("results").appendChild(boxRow);

    var boxCol = document.createElement("div");
    boxCol.classList.add("col");
    boxCol.classList.add("s12");
    boxRow.appendChild(boxCol);

    var boxCard = document.createElement("div");
    boxCard.classList.add("card");
    boxCol.appendChild(boxCard);

    var cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    var cardTitle = document.createElement("span");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML="<h6>" + item["Identifiant"] + "</h6>";
    cardContent.appendChild(cardTitle);

    cardContent.innerHTML += "<ul>";
    for (j in item){
        if (j!="Identifiant" && j!="Latitude" && j!="Longitude"){
            cardContent.innerHTML+="<li>"+j+" : "+  item[j]+"</li>";
        }
    }
    cardContent.innerHTML += "</ul>";
    boxCard.appendChild(cardContent);

    var cardAction = document.createElement("div");
    cardAction.classList.add("card-action");
    boxCard.appendChild(cardAction);
}

