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
    node.classList.add("card");
    node.classList.add("grey");
    node.classList.add("lighten-3");
    node.classList.add("s10");
    node.classList.add("offset-s1");
    node.id=item["id"]+"box";
    document.getElementById("results").appendChild(node);

    var node = document.createElement("div");
    node.classList.add("card-content");
    node.classList.add("black-text");
    node.id=item["id"]+"boxContent1";
    document.getElementById(item["id"]+"box").appendChild(node);

    var node = document.createElement("div");
    node.classList.add("card-action");
    node.classList.add("black-text");
    node.id=item["id"]+"boxContent2";
    document.getElementById(item["id"]+"box").appendChild(node);

    var node = document.createElement("span");
    node.classList.add("card-title");
    node.innerHTML=item["id"];
    document.getElementById(item["id"]+"boxContent1").appendChild(node);

    var node = document.createElement("p");
    for (j in item){
        if (j!="id" && j!="lat" && j!="lng"){
          node.innerHTML+=j+" : "+  item[j]+"<br>";
        }
    }
    document.getElementById(item["id"]+"boxContent2").appendChild(node);
}

