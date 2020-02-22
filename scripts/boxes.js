//----------------------------------------------------------------
// Auteurs : Mathilde, Arthur
// Date : Fev 2020
//----------------------------------------------------------------


/**
 * box of d should be first because d has been selected
 */
function displayFirst(d){
}

//----------------------------------------------------------------
/**
 *
 */
function createAllBoxes(dataToDisplay){
    for (i in dataToDisplay){
        var node = document.createElement("div");
        node.classList.add("col");
        node.classList.add("card");
        node.classList.add("grey");
        node.classList.add("lighten-3");
        node.classList.add("s10");
        node.classList.add("offset-s1");
        node.id=dataToDisplay[i]["id"]+"box";
        document.getElementById("results").appendChild(node);

        var node = document.createElement("div");
        node.classList.add("card-content");
        node.classList.add("black-text");
        node.id=dataToDisplay[i]["id"]+"boxContent1";
        document.getElementById(dataToDisplay[i]["id"]+"box").appendChild(node);
        var node = document.createElement("div");
        node.classList.add("card-action");
        node.classList.add("black-text");
        node.id=dataToDisplay[i]["id"]+"boxContent2";
        document.getElementById(dataToDisplay[i]["id"]+"box").appendChild(node);

        var node = document.createElement("span");
        node.classList.add("card-title");
        node.innerHTML=dataToDisplay[i]["id"];
        document.getElementById(dataToDisplay[i]["id"]+"boxContent1").appendChild(node);

        var node = document.createElement("p");
        for (j in dataToDisplay[i]){
            if (j!="id" && j!="lat" && j!="lng"){
              node.innerHTML+=j+" : "+  dataToDisplay[i][j]+"<br>";
            }
        }
        document.getElementById(dataToDisplay[i]["id"]+"boxContent2").appendChild(node);

    }
}


//----------------------------------------------------------------
function updatesBoxesDueToFilter(filter){
    document.getElementById("results").innerHTML="";


}