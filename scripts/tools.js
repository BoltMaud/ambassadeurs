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
    

}

