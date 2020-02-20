//----------------------------------------------------------------
// Auteur : Mathilde 
// Date : Decembre 2017 
// fichier contenant tous les élements pour l'affichage de la carte
//----------------------------------------------------------------

//----------------------------------------------------------------
// crée la div svg 
var largeur = 700, hauteur = 600;
var svgFrance = d3.select( "#carte" )
	.append( "svg" )
	.attr( "width", largeur )
	.attr( "height", hauteur );
var g = svgFrance.append("g");

//----------------------------------------------------------------
// crée le polygone de la France 
var projection =  d3.geoConicConformal()
					          .center([2.351, 48.857])
			            	.scale(20000)
                    .translate([largeur / 2, hauteur / 2]);
var path = d3.geoPath()
			 .projection(projection);

var tooltipVille = svgFrance.append("rect")	
    .attr("fill","#4caf50")
    .attr("position","relative")
    .attr("rx", 8)
    .attr("height",50);

//----------------------------------------------------------------
// Crée la carte avec les noms des villes et les routes
//---------------------------------------------------------------- 

function creationCarte(){
  // création des villes 
  var villesd3 = svgFrance.selectAll(".villes")
      .data(villes.villes)
      .enter();
      
  // labels des villes 
  // id html : nom de la ville sans espace en petit caractère 
  // classes html : nom de la ville sans espace (classe commune label + rond) + "villes" 
    villesd3
      .append("text")
      .attr("class", "villes")
      .attr("id",function(d){return d.nom.replace(/\s/g, '').toUpperCase();})
      .attr("class",function(d){  return d.nom.replace(/\s/g, '');})
      .text(function(d){return d.nom;})
      .attr("font-size", "11px")
      .attr("fill", "#585858")
      .attr("x",function(d){return projection(d.pos)[0]-15;})
      .attr("y",function(d){ if(d.nom =="LYON"){
                                return projection(d.pos)[1]-15;
                            }
                            else{
                                  return projection(d.pos)[1]-5;}
      });

  // rond représentant les villes 
  // classe html : nom de la ville sans espace (classe commune label + rond) 
    villesd3
      .append("circle")
      .attr("r", 3)
      .attr("id",function(d){return "rond"+d.nom.replace(/\s/g, '');})
      .attr("class",function(d){return d.nom.replace(/\s/g, '');})
      .attr("fill", "#585858")
      .attr("cx",function(d){return projection(d.pos)[0];})
      .attr("cy",function(d){return projection(d.pos)[1];});
    
}

//----------------------------------------------------------------
// affiche la carte
//----------------------------------------------------------------
function affichageCarte() {
	g.selectAll("path")
	   .data(geoJsonFrance.features)
	   .enter()
	   .append("path")
     .attr("class","france");
  g.selectAll(".france")
		 .attr( "fill", "#cfd8dc" )
	   .attr("d", path);
}


function colorieDepartArrive(){
  d3.select("#"+depart.replace(/\s/g, ''))
    .attr("font-weight","bold")
    .attr("fill","black");
  d3.select("#"+arrivee.replace(/\s/g, ''))
    .attr("font-size", "13px")
    .attr("font-weight","bold")
    .attr("fill","green");
}