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
    var boxCol = document.createElement("div");
    boxCol.classList.add("col");
    boxCol.classList.add("s12");
    document.getElementById("results").appendChild(boxCol);

    var boxScrollSpy = document.createElement("a");
    boxScrollSpy.id=item["Identifiant"].replace(/\W/g,'_');
    boxScrollSpy.classList.add("section");
    boxScrollSpy.classList.add("scrollspy");
    boxScrollSpy.classList.add("anchor");
    boxCol.appendChild(boxScrollSpy);

    var boxCard = document.createElement("div");
    boxCard.classList.add("card");
    boxCard.classList.add("hoverable");
    boxCol.appendChild(boxCard);

    var boxBtn = document.createElement("a");
    boxBtn.classList.add("waves-effect");
    boxBtn.classList.add("waves-red");
    boxBtn.classList.add("btn-flat");
    boxBtn.classList.add("card-btn");
    boxBtn.setAttribute("onclick", `selectMarkerFromCard(\'${item["Identifiant"].replace(/\W/g,'_')}\')`);
    boxCard.appendChild(boxBtn);

    var cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    var cardTitle = document.createElement("span");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML="<h6>" + item["Identifiant"] + "</h6>";
    cardContent.appendChild(cardTitle);

    cardContent.innerHTML += "<ul>";
    for (j in item){
        if (j!="Identifiant" && j!="Latitude" && j!="Longitude" && mydata["columns"].indexOf(j)!=-1){
            cardContent.innerHTML+="<li>"+j+" : "+  item[j]+"</li>";
        }
    }
    cardContent.innerHTML += "</ul>";
    boxBtn.appendChild(cardContent);

    var cardAction = document.createElement("div");
    cardAction.classList.add("card-action");
    boxBtn.appendChild(cardAction);
}

