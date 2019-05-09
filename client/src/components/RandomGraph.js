// import React from "react";
// let d3 = require("http://d3js.org/d3.v3.min.js");
// const width =  60; // 960 480 240 120 60
// const height = 31; // 500 250 125 62.5 31.25
// const colors = d3.scale.category10();

//     const n = 20, // number of nodes 
//         m = 22, // number of links
//         charge = -1000;


//     export class RandomGraph extends React.Component {
//         constructor(props){
//             super(props);
//             this.state = {
//                 graph: null
//             }
//         }

        

        

//         create() {
//             svg.selectAll(".link, .node").remove();
//             this.randomGraph(n, m, charge);
//         }

//         randomChoose = (s, k) => { // returns a random k element subset of s
//             let a = [], i = -1, j;
//             while (++i < k) {
//                 j = Math.floor(Math.random() * s.length);
//                 a.push(s.splice(j, 1)[0]);
//             };
//             return a;
//         }

//         unorderedPairs = (s) => { // returns the list of all unordered pairs from s
//             let i = -1, a = [], j;
//             while (++i < s.length) {
//                 j = i;
//                 while (++j < s.length) a.push([s[i],s[j]])
//             };
//             return a;
//         }

//         randomGraph = (n, m, charge) => { //creates a random graph on n nodes and m links
//             let nodes = d3.range(n).map(Object),
//                 list  = this.randomChoose(this.unorderedPairs(d3.range(n)), m),
//                 links = list.map(function (a) { return {source: a[0], target: a[1]} });
        
//             let force = d3.layout.force()
//                 .size([width, height])
//                 .nodes(nodes)
//                 .links(links)
//                 .charge(charge)
//                 .on("tick", this.tick())
//                 .start();

//             let svg = d3.select("body").append("svg")
//                 .attr("width", width)
//                 .attr("height", height)
//                 .on("mousedown", this.create());

//             let svgLinks = svg.selectAll(".link").data(links)
//                 .enter().append("line")
//                 .attr("class", "link");
        
//             let svgNodes = svg.selectAll(".node").data(nodes)
//                 .enter().append("circle")
//                 .attr("class", "node")
//                 .attr("r", 3)
//                 .style("fill", "white");
        
//             svgNodes.transition().duration(800)
//                 .attr("r", function (d) { return 3 + 3 * d.weight })
//                 .style("fill", function (d) { return colors(d.weight) });
        
//             svgLinks.transition().duration(800)
//                 .style("stroke-width", 3);
        
//             tick = () => {
//                 svgNodes
//                     .attr("cx", function(d) { return d.x })
//                     .attr("cy", function(d) { return d.y });
        
//                 svgLinks
//                     .attr("x1", function(d) { return d.source.x })
//                     .attr("y1", function(d) { return d.source.y })
//                     .attr("x2", function(d) { return d.target.x })
//                     .attr("y2", function(d) { return d.target.y });
//             }
//         }


//         render(){
//             return(
//                 <div id = "random-graph-div">
//                     <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>


//                 </div>

//             );
//         }    
// }
