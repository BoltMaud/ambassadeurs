//----------------------------------------------------------------
// Author : Mathilde
// Date : Fev 2020
// file that creates the D3JS map
//----------------------------------------------------------------

//----------------------------------------------------------------
// crée la div svg 
var largeur = 700, hauteur = 600;
var svgFrance = d3.select( "#carte" )
	.append( "svg" )
	.attr("id","cartesvg")
	.attr( "width", largeur )
	.attr( "height", hauteur );
var g = svgFrance.append("g");
var pointsd3 ;
var previousSelectedPoint;


//----------------------------------------------------------------
// crée le polygone de la France 
var projection =  d3.geoConicConformal()
					          .center([2.351, 48.6])
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
// crée le polygone de l'ile de france
function zoomed() {
    g.selectAll('path') // To prevent stroke width from scaling
    .attr('transform', d3.event.transform);
    currentZoom=this.__zoom;
    pointsd3.selectAll('circle')
          .attr("cx",function(d){return (projection([parseFloat(d.lat),parseFloat(d.lng)])[0]*currentZoom.k)+currentZoom.x;})
          .attr("cy",function(d){return (projection([parseFloat(d.lat),parseFloat(d.lng)])[1]*currentZoom.k)+currentZoom.y;});
}
const zoom = d3.zoom()
      .scaleExtent([1, 12])
      .on('zoom', zoomed);
svgFrance.call(zoom);

//----------------------------------------------------------------
/*
 * Create points of interets depending on the csv
**/
function createCircles(){
  // création des points 
    pointsd3 = svgFrance.selectAll(".points")
      .data(mydata)
      .enter();

  // rond représentant les points
    pointsd3
      .append("circle")
      .attr("r", 4)
      .attr("id",function(d){return "rond"+d.id.replace(/[^\w\d]/gi, '');})
      .attr("fill", "#585858")
      .attr("cx",function(d){return projection([parseFloat(d.lat),parseFloat(d.lng)])[0];})
      .attr("cy",function(d){return projection([parseFloat(d.lat),parseFloat(d.lng)])[1];})
      .on("click", function(d) {
          if (previousSelectedPoint){
            d3.select(previousSelectedPoint).style('fill', '#585858');
          }
          previousSelectedPoint=this;
          d3.select(this).style('fill', 'red');
          displayFirst(d);
      });
}
//----------------------------------------------------------------
/*
 * To update the interesting points
**/
function removeAllInMap(){
    $('circle')
     .attr("display","none");
}
//----------------------------------------------------------------
/*
 * Display only the interesting points
**/
function displayOnMap(i){
     $("#rond"+i["id"].replace(/[^\w\d]/gi, ''))
     .attr("display","inline");
}
//----------------------------------------------------------------
// affiche la carte
//----------------------------------------------------------------
function displayileDeFrance() {
	g.selectAll("path")
	   .data(geoJsonFrance.features)
	   .enter()
	   .append("path")
	   .attr("class","france")
	   .style("stroke-width","2px")
	   .attr("vector-effect", "non-scaling-stroke")
        .style("stroke", "white");
    g.selectAll(".france")
		 .attr( "fill", "#eeeeee" )
	     .attr("d", path);
}
