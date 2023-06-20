const fs = require("fs");
const svgHeader = require("./svg-chart-pie-parts/header")
const svgFooter = require("./svg-chart-pie-parts/footer")

//declarations
let out = svgHeader.header;

let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "cyan",
    "magenta",
    "lime",
    "maroon",
    "navy",
    "olive",
    "teal",
    "aqua",
    "silver",
    "gray",
    "crimson",
    "coral",
    "chocolate",
    "cadetblue",
    "burlywood",
];



const generateSVGChart = async function (languages) {

	//console.log(languages)

	await setInfo(languages);
  
    //construct all to one template
    out = out + svgFooter.footer;

    await fs.writeFile("./assets/github-languages-pie-chart.svg", out, (err) => {
        if (err) {
        console.error(err);
        }
  });
}

//make function to resort array colors
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}



function setInfo(languages){

    let lastStartAngle = 0;

    //shuffle colors
    colors = shuffle(colors);


    for (let i = 0; i < 10 ; i++) {
        //console.log(languages[i]['name']+" : "+languages[i]['percentage']);
        //console.log();
        //console.log(languages[i]['name'] + " - " + colors[i]);

        //calculate percent with 2 digits after comma
        const percent = Math.round(languages[i]['percentage'] * 100 * 3.6) / 100;

        const path = generateSectorPath(100, 100, 100, lastStartAngle, percent + lastStartAngle);

        lastStartAngle = lastStartAngle + percent;


        out = out +
        `
        
        <!-- ${languages[i]['name']} -->
        <path class="path_${i + 1}" d="${path}" fill="${colors[i]}" stroke="#fff" stroke-width="2"></path>
        <text class="txt_${i + 1}" x="320" y="${100 + i * 20}" fill="${colors[i]}" stroke="${colors[i]}" stroke-width="1" >${languages[i]['name']}</text>

        `
    }

    function generateSectorPath(cx, cy, radius, startAngle, endAngle) {
    
        const startRad = (startAngle - 90) * Math.PI / 180; // Convert angle to radians
        const endRad = (endAngle - 90) * Math.PI / 180;
      
        const startX = cx + radius * Math.cos(startRad); // Calculate start and end coordinates
        const startY = cy + radius * Math.sin(startRad);
      
        const endX = cx + radius * Math.cos(endRad); // Calculate start and end coordinates
        const endY = cy + radius * Math.sin(endRad);
      
        const totalAngle = endAngle - startAngle; // Calculate total angle of the sector
        const largeArcFlag = totalAngle <= 180 ? "0" : "1"; // Define flag of the big sector
      
        const path = `M ${cx},${cy} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} Z`; // Generate an SVG path
      
        return path;
      }    
}

exports.generateSVGChart = generateSVGChart;
