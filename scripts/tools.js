//----------------------------------------------------------------
// Auteurs : Mathilde
// Date : Mars 2020
//----------------------------------------------------------------

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

function loadFile(){
    document.getElementById("popupCharger").style.display="block";
}

function uploadFile(files){
    var reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = loadHandler;

    function loadHandler(event) {
        mydata=[];
        lines=event.target.result.split("\n");
        columns=lines[0].split("\t");
        mydata["columns"]=columns;
        for (var i=1; i<lines.length;i++){
            var smallDict={};
            for (c in columns){
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
}

function endLoad(){
    document.getElementById("popupCharger").style.display="none";
}