//----------------------------------------------------------------
// Auteurs : Mathilde
// Date : Mars 2020
// file for the three buttons
//----------------------------------------------------------------

//----------------------------------------------------------------
/**
 * export the file
 */
function exportFile(){
    const rows=[];
    const columns= mydata["columns"];
    rows.push(columns);
    for (d in mydata){
        if(d!="columns"){
            var aRow=[];

            let l1 = new Promise(function(resolve, reject) {
                            for (c in columns){
                                aRow.push(mydata[d][columns[c]]);
                            }
                            });
            l1.then(rows.push(aRow));
        }
    }
    let csvContent = "data:text/csv;charset=utf-8,"
        + rows.map(e => e.join("\t")).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
}

//----------------------------------------------------------------
/**
 * read and update the map with the new data
 */
let currentFile;
function SelectFile(files) {
    currentFile = files[0];
}

function UploadFile(){
    let reader = new FileReader();
    reader.readAsText(currentFile);
    reader.onload = loadHandler;

    function loadHandler(event) {
        mydata=[];
        let lines = event.target.result.split("\n");
        let columns = lines[0].split("\t");
        mydata["columns"]=columns;
        for (let i=1; i<lines.length; i++){
            let smallDict = {};
            for (let c in columns){
                // ici ya un pb si une case est vide... ne pas faire de cases vides?
                smallDict[columns[c]]=lines[i].split("\t")[c];
            }
            mydata.push(smallDict);
        }
       const p2 = new Promise(function(resolve, reject) {
            // columns
            dataProcess(mydata);

           });
       // create boxes and dots
       p2.then(updatesBoxesAndMapDueToFilter());
    }
    document.getElementById("selectedFile").innerHTML="";
}

function fillTable(){
    //les colonnes
    let columns= mydata["columns"];
    setHeader(columns);

    // les données
    document.getElementById("tableOfElements").innerHTML="";
    for(m in mydata){
        if (m!="columns"){
            var newLine=document.createElement("tr");
            newLine.id="trLine"+mydata[m]["Identifiant"];
            document.getElementById("tableOfElements").appendChild(newLine);
            for (c in columns){
                var newTd=document.createElement("td");
                newTd.innerHTML=mydata[m][columns[c]];
                document.getElementById("trLine"+mydata[m]["Identifiant"]).appendChild(newTd);
            }
            var newTd=document.createElement("td");
            newTd.innerHTML='<a class="btn-small btn-floating black tooltipped" data-position="bottom" data-tooltip="Supprimer ce point" onclick="removePoint(\'trLine'+mydata[m]["Identifiant"]+'\')"><i class="material-icons">close</i>';
            document.getElementById("trLine"+mydata[m]["Identifiant"]).appendChild(newTd);
        }
    }
    $('.tooltipped').tooltip();
}
function setHeader(columns){
    document.getElementById("headerOfTableOfPoints").innerHTML="";
    document.getElementById("inputDataInTable").innerHTML="";
    for(c in columns){
        var newColumn=document.createElement("th");
        newColumn.innerHTML=columns[c];
        if (columns[c]!= "Identifiant" && columns[c]!="Latitude" && columns[c]!="Longitude"){
            newColumn.innerHTML+="<br>";
            newColumn.innerHTML+='<a class="btn-small  btn-floating black tooltipped" style="display: none" data-position="bottom" data-tooltip="Supprimer la colonne" onclick="removeColumn(\''+columns[c]+'\')"><i class="tiny material-icons">close</i>';
        }
        document.getElementById("headerOfTableOfPoints").appendChild(newColumn);

        var newField = document.createElement("td");
        newField.innerHTML=' <div class="input-field"><input  id="new'+columns[c]+'" type="text" class="validate"></div>'
        document.getElementById("inputDataInTable").appendChild(newField);
    }
    var addButton = document.createElement("td");
    addButton.innerHTML='<a class="btn-small btn-floating red tooltipped" data-position="bottom" data-tooltip="Ajouter un point" onclick="addPoint()"> <i class="material-icons">add</i></a>';
    document.getElementById("inputDataInTable").appendChild(addButton);

    var addButton = document.createElement("td");
    addButton.innerHTML='<a class="btn-small btn-floating red tooltipped modal-trigger" data-position="bottom" data-tooltip="Ajouter une colonne" href="#NewColModal"> <i class="material-icons" style="transform:rotate(-90deg)">playlist_add</i></a>';
    addButton.innerHTML+='<a class="btn-small btn-floating black tooltipped" data-position="bottom" data-tooltip="Supprimer une colonne" onclick="setColDeleteBtnVisible()"> <i class="material-icons">delete</i></a>';
    document.getElementById("headerOfTableOfPoints").appendChild(addButton);
}

function createNew(){
    let requiredColumns=["Identifiant","Longitude","Latitude"];
    setHeader(requiredColumns);
    document.getElementById("tableOfElements").innerHTML="";
    mydata=[];
    mydata["columns"]=requiredColumns;
}

function removePoint(point){
    let identifiant=point.split("trLine")[1];
    $("#"+point).removeClass("tooltipped");
    $('.tooltipped').tooltip();
    document.getElementById(point).remove();
    for (m in mydata){
        if (mydata[m]["Identifiant"]==identifiant){
            mydata.splice(m,1);
        }
    }
}

function addPoint(){
    let columns=mydata["columns"];
    var newPoint={};
    for (c in columns){
        newPoint[columns[c]]=document.getElementById("new"+columns[c]).value;
        document.getElementById("new"+columns[c]).value="";
    }
    mydata.push(newPoint);
    var newLine=document.createElement("tr");
    newLine.id="trLine"+newPoint["Identifiant"];
    document.getElementById("tableOfElements").insertBefore(newLine, document.getElementById("tableOfElements").childNodes[0]);
    for (c in columns){
        var newTd=document.createElement("td");
        newTd.innerHTML=newPoint[columns[c]];
        document.getElementById("trLine"+newPoint["Identifiant"]).appendChild(newTd);
    }
    var newTd=document.createElement("td");
    newTd.innerHTML='<a class="btn-small btn-floating black tooltipped" data-position="bottom" data-tooltip="Supprimer ce point"onclick="removePoint(\'trLine'+newPoint["Identifiant"]+'\')"><i class="material-icons">delete</i>';
    document.getElementById("trLine"+newPoint["Identifiant"]).appendChild(newTd);
    $('.tooltipped').tooltip();
}

function addColumn(){
    mydata["columns"].push(document.getElementById("newColumnName").value);
    for (m in mydata){
        if (m!="columns"){
            mydata[m][document.getElementById("newColumnName").value]="";
        }
    }
    document.getElementById("newColumnName").value="";
    console.log();
    fillTable();
}

function setColDeleteBtnVisible() {
    var trashes = document.querySelectorAll('#headerOfTableOfPoints th a');
    trashes.forEach(t => {
        var trashStyle = t.style;
        trashStyle.display === "none" ? trashStyle.display = "block" : trashStyle.display = "none";
    })
}