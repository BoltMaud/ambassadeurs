//----------------------------------------------------------------
// Authors : Mathilde
// Date : Fev 2020
// file for filter inputs
//----------------------------------------------------------------

/**
 * A filter is a key, i.e., the name of the column in the csv file, a type in ["range","input","checkbox"] and
 * an element which either contains the min max of the range, either contains the string that is searched, either
 * the list of checked elements
 */
class Filter{
    constructor (column, type, elements) {
        this.column = column; // name of the column
        this.type = type ; // type : range, contains, checked
        this.elements =  elements; // min, max OR string OR checked
    }
}
//----------------------------------------------------------------
/**
 * we save the list of created filter
 */
var dictOfFilters={};
var currentTypeOfFitler;// in ["range","input","checkbox"]
//----------------------------------------------------------------


/**
 * When the first selector is selected : we want to display the filter of this attribute
 * Several choices are possibles : range, checkboxes, input
 * This depends on the data in the selected column
 */
$("#filterOnAttributes").on('change', function() {
    document.getElementById("filterIs").innerHTML="";

    selectedColumnInFilter=$(this)[0].selectedOptions[0].text;

    // checkbox or range
    var listOfValues=[];
    // get unique numbers in this column to know how many there are
    // this will determine checkboxes or range
    let p1 = new Promise(function(resolve, reject) {
        for(val in mydata){
            // for each unique val, we add it in listOfValues
            if(listOfValues.indexOf(mydata[val][selectedColumnInFilter])<0){
                listOfValues.push(mydata[val][selectedColumnInFilter]);
            }
        }
    });
    // then we can create the html filter form
    p1.then(addComponentToFilter(selectedColumnInFilter,listOfValues));

});
//----------------------------------------------------------------
/**
 * This function checks the type of the data to create the right type of filter
 */
function addComponentToFilter(selectedColumnInFilter,listOfValues){
        document.getElementById("addFilter").style.display="inline";
        // if the string does not contain letter :
        if (mydata[0][selectedColumnInFilter].search(/[a-z]/i)&& mydata[1][selectedColumnInFilter].search(/[a-z]/i)){
            // if at most 33, then checkbox, otherwise range
            if (listOfValues.length>34){
                addRange(selectedColumnInFilter);
            }
            else{
               addSelectorWithCheckbox(selectedColumnInFilter, listOfValues);
            }
        }
        // the column contains letter, checkbox only
        else{
            // if there are to many options like adresses, then INPUT otherwise CHECKBOXES
            if (listOfValues.length>20){
                addInput(selectedColumnInFilter);
            }
            else{
                addSelectorWithCheckbox(selectedColumnInFilter, listOfValues);
            }
        }
}
//----------------------------------------------------------------
/**
 * Add a selector with checkbox as filter
 * This function is mainly a html addition
*/
function addSelectorWithCheckbox(selectedColumnInFilter,listOfValues){
    currentTypeOfFitler="checkbox";
    var node = document.createElement("div");
    node.class="input-field col s12";
    node.id="filterCheckBoxes";
    node.innerHTML = '<select id="materializeSelectOfFilter" multiple><option value="" disabled selected>Choose Options :</option></select>';
    document.getElementById("filterIs").appendChild(node);
    let p1 = new Promise(function(resolve, reject) {
        for (i in listOfValues){
            var newOption = document.createElement("option");
            var textnode = document.createTextNode(listOfValues[i]);
            newOption.appendChild(textnode);
            document.getElementById("materializeSelectOfFilter").appendChild(newOption);
        }
    });
    p1.then(finishSelector(node));
}
function finishSelector(node){
        $('select').formSelect();
}
//----------------------------------------------------------------
/**
 * Add a range as filter
 * This function is mainly a html addition
*/
function addRange(selectedColumnInFilter,listOfValues){
    currentTypeOfFitler="range";
    var node = document.createElement("div");
    node.id="filterRange";
    document.getElementById("filterIs").appendChild(node);

    var node = document.createElement("div");
    node.classList.add("input-field");
    node.classList.add("col");
    node.classList.add("s2");
    node.id="filterRange1";
    document.getElementById("filterRange").appendChild(node);

    var node = document.createElement("input");
    var label = document.createElement("label");
    node.id="minRange";
    node.classList.add("validate");
    node.setAttribute("type","text");
    label.innerHTML="min";
    label.htmlFor="minRange";
    document.getElementById("filterRange1").appendChild(node);
    document.getElementById("filterRange1").appendChild(label);

    var node = document.createElement("div");
    node.classList.add("input-field");
    node.classList.add("col");
    node.classList.add("s2");
    node.id="filterRange2";
    document.getElementById("filterRange").appendChild(node);

    var node = document.createElement("input");
    var label = document.createElement("label");
    node.id="maxRange";
    node.setAttribute("type","text");
    node.classList.add("validate");
    label.innerHTML="max";
    label.htmlFor="maxRange";
    document.getElementById("filterRange2").appendChild(node);
    document.getElementById("filterRange2").appendChild(label);

}
//----------------------------------------------------------------
/**
 * Add a input as filter
 * This function is mainly a html addition
*/
function addInput(selectedColumnInFilter){
    currentTypeOfFitler="input";
    var node = document.createElement("div");
    node.id="filterInput";
    document.getElementById("filterIs").appendChild(node);

    var node = document.createElement("div");
    node.classList.add("input-field");
    node.id="filterRange1";
    document.getElementById("filterInput").appendChild(node);

    var node = document.createElement("input");
    var label = document.createElement("label");
    node.id="searchby";
    node.classList.add("validate");
    node.setAttribute("type","text");
    label.innerHTML="Search by ...";
    label.htmlFor="searchby";
    document.getElementById("filterRange1").appendChild(node);
    document.getElementById("filterRange1").appendChild(label);

    dictOfAutocomplete={}
    for( d in mydata){
        if(d!="columns"){
               dictOfAutocomplete[mydata[d][selectedColumnInFilter]]=null;
        }
    }
    $(document).ready(function(){
        $('#searchby').autocomplete({
          data: dictOfAutocomplete,
        });
      });
}
//----------------------------------------------------------------
/**
 * When click on add, we add a chip html
 * We also add the filter in the dict of filters, addFilterInDict
 */
function addFilter(){
    var node = document.createElement("div");
    node.classList.add("chip");
    columnName=document.getElementById("filterOnAttributes").value;
    node.innerHTML=columnName+'<i class="close material-icons" onclick="removeFilterInDict(\''+columnName +'\')">close</i>';
    document.getElementById("filters").appendChild(node);
    let p1 = new Promise(function(resolve, reject) { addFilterInDict();});
    p1.then(applyFilter());
}

//----------------------------------------------------------------
/**
 * ApplyFilter() runs after addFilterInDict(). At this point, we can update the boxes and the map
 * We also clear the div of filter and remove the column in the select
 */
function applyFilter(){
    document.getElementById("addFilter").style.display="none";
    document.getElementById("filterIs").innerHTML="";
    $('#filterOnAttributes option:selected').remove();
    $('#filterOnAttributes').find('option[value=""]').prop('selected', true);
    $('#titleFilter').attr('selected','selected');
    $('select').formSelect();
    updatesBoxesAndMapDueToFilter();
}

//----------------------------------------------------------------
/**
 * This function adds the new filter in the dict
 */
function addFilterInDict(){
    columnName=document.getElementById("filterOnAttributes").value;
    elements=[];
    if (currentTypeOfFitler=="range"){
        elements.push(document.getElementById("minRange").value);
        elements.push(document.getElementById("minRange").value);
    }
    if (currentTypeOfFitler=="input"){
        elements.push(document.getElementById("searchby").value);
    }
    if (currentTypeOfFitler=="checkbox"){
        selected = $("#materializeSelectOfFilter option:selected");
        for (i = 1; i < selected.length; i++){
            elements.push(selected[i]["label"]);

        }
    }
    dictOfFilters[columnName]=(new Filter(columnName,currentTypeOfFitler,elements));
    return;
}

//----------------------------------------------------------------
/**
 * This function removes the new filter in the dict
 * It also calls the function to update the boxes and map
 */
function removeFilterInDict(columnName){
    delete dictOfFilters[columnName];
    addNameInSelect(columnName);
    updatesBoxesAndMapDueToFilter();
}

//----------------------------------------------------------------
/**
 * Boolean function that says if a item can be displayed
 */
function filterAcceptThisItem(item){
    for (filter in dictOfFilters){
        if (!(filter in item)){
            return false;
        }
        if (dictOfFilters[filter].type=="range"){
            if (!(item[filter]>=dictOfFilters[filter].elements[0] && item[filter]<=dictOfFilters[filter].elements[1])){
                return false;
            }
        }
        else{
            if (dictOfFilters[filter].type=="input"){
                if (!item[filter].includes(dictOfFilters[filter].elements[0])){
                   return false;
                }
            }
            else{
               if (!dictOfFilters[filter].elements.includes(item[filter])){
                    return false;
               }
            }
        }
    }
    return true
}



