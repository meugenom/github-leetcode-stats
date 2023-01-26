const fs = require("fs");
const svgHeader = require("./svg_leetcode_circle_parts/header")
const svgFooter = require("./svg_leetcode_circle_parts/footer");

//declare 
let out = "";

//persistent content
let content =
`<style>
.label {
	font: bold 25px sans-serif;
	color: #404040;
	-webkit-text-stroke: 1px white;
  }
.name {
	font: bold 20px sans-serif;
	color: #404040;
  }

.line {
	stroke-dasharray: 1000;
	stroke-dashoffset: 1000;
	animation: dash 3.5s ease-in-out forwards;	
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
}

.totalSum {
	font: 50px sans-serif;
}

.totalSumLabel {
	font: 20px sans-serif;
}

.path {
	stroke-dasharray: 1000;
	stroke-dashoffset: 1000;
	animation: dash 3.5s ease-in-out forwards;	
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
}
  
@keyframes dash {
	to {
		stroke-dashoffset: 0;
	}
}

</style>
<g stroke="#E6E2E1" fill="none" stroke-width="2">
	<circle cx="20" cy="150" r="125" />
	<circle cx="20" cy="150" r="105" />
	<circle cx="20" cy="150" r="85" />
</g>
<g fill="none" stroke-width="20">
	<line x1="180" y1="120" x2="550" y2="120" stroke="#a5d9c1" />
	<line x1="180" y1="190" x2="550" y2="190" stroke="#ffdb99" />
	<line x1="180" y1="260" x2="550" y2="260" stroke="#f5977f" />
</g>
`;


out = svgHeader.header + 
		  content;


const generateSVG = async function (info) {
  
  await calculateLines(info);
  await calculatePaths (info); 
  await setNamesOfLines(info);
  
  
  //construct all to one template
out = 	out +
				svgFooter.footer;

  await fs.writeFile("./assets/leetcode-total-info-circle.svg", out, (err) => {
    if (err) {
      console.error(err);
    }
  });
};


function calculateLines(info){
	
	//lines by calculations
	out = out +
	`
	<g fill="none" stroke-width="20" class="line">
		<line x1="180" y1="120" x2="${180 + parseInt((550-180) * info.acSubmissionNum[1]["count"]/info.allQuestionsStats[1]["count"])}" y2="120"  stroke="#7BC8A4" />
		<line x1="180" y1="190" x2="${180 + parseInt((550-180)*info.acSubmissionNum[2]["count"]/info.allQuestionsStats[2]["count"])}" y2="190" stroke="#FFC65D" />
		<line x1="180" y1="260" x2="${180 + parseInt((550-180)*info.acSubmissionNum[3]["count"]/info.allQuestionsStats[3]["count"])}" y2="260" stroke="#F16745" />
	</g>
	`
}


function setNamesOfLines(info){
	//names of lines
	out = out +
	`
	 <g class="name">
		<text x="180" y="100" fill="#7BC8A4" >Easy</text>
		<text x="240" y="100" fill="#404040">${info.acSubmissionNum[1]["count"]}</text>
		<text x="270" y="100" fill="#ABABA1">/${info.allQuestionsStats[1]["count"]}</text>
		<text x="430" y="100" fill="#989894">Beats ${(parseInt(info.problemSolvedStats[0]["percentage"]*10))/10}%</text>

		<text x="180" y="170" fill="#FFC65D" >Medium</text>
		<text x="270" y="170" fill="#404040">${info.acSubmissionNum[2]["count"]}</text>
		<text x="300" y="170" fill="#ABABA1">/${info.allQuestionsStats[2]["count"]}</text>
		<text x="430" y="170" fill="#989894">Beats ${(parseInt(info.problemSolvedStats[1]["percentage"]*10))/10}%</text>

		<text x="180" y="240" fill="#F16745" >Hard</text>
		<text x="240" y="240" fill="#404040">${info.acSubmissionNum[3]["count"]}</text>
		<text x="270" y="240" fill="#ABABA1">/${info.allQuestionsStats[3]["count"]}</text>
		<text x="430" y="240" fill="#989894">Beats ${(parseInt(info.problemSolvedStats[2]["percentage"]*10))/10}%</text>
	</g>
	<g> 
		<text x="-20" y="165" fill="#404040" class="totalSum" >${info.acSubmissionNum[0]["count"]}</text>
		<text x="-10" y="200" fill="#8A8883" class="totalSumLabel" >Solved</text>
	</g>`
}


function calculatePaths (info){

	out = out + `
	<g fill="none" stroke-width="20" stroke-linecap="round" class="path">
	`;

	//<path d="M 20 25 A 125 125 45 0 1 145 150" stroke="#7BC8A4"/>
	//radius: 125
	
	//easy tasks
	let part = (parseInt(100 * info.acSubmissionNum[1]["count"]/info.allQuestionsStats[1]["count"]))
	//console.log("part: "+ part)
	let degrees = parseInt(part * 3.6);
	let xy = getXY(degrees, 125)
	out = out + `<path d="M 20 25 A 125 125 45 0 1 ${xy.x} ${xy.y}" stroke="#7BC8A4"/>
	`
	//medium tasks
	part = (parseInt(100*info.acSubmissionNum[2]["count"]/info.allQuestionsStats[2]["count"]))
	//console.log("part: "+ part)
	degrees = parseInt(part * 3.6);
	xy = getXY(degrees, 105)
	out = out + `<path d="M 20 45 A 105 105 45 0 1 ${xy.x} ${xy.y}" stroke="#FFC65D"/>
	`
	//hard issues
	part = (parseInt(100*info.acSubmissionNum[3]["count"]/info.allQuestionsStats[3]["count"]))
	//console.log("part: "+ part)
	degrees = parseInt(part * 3.6);
	xy = getXY(degrees, 85)
	out = out + `<path d="M 20 65 A 85 85 45 0 1 ${xy.x} ${xy.y}" stroke="#F16745"/>
	`

	out = out + `
	</g>
	`
}

function getXY(degrees, radius){

	//console.log("degrees : "+ degrees)

	//let degrees = Math.round(percent) + 180;
	const centerX = 20;
	const centerY = 150;

	degrees = degrees - 90; //need turn left on 90 degrees
	let degreesToRadians = (degrees * 2 * Math.PI)/360;

	//console.log("degreesToRadians :"+ degreesToRadians)

	let x = parseInt(radius * Math.cos(degreesToRadians) + centerX);
	let y = parseInt(radius * Math.sin(degreesToRadians) + centerY);
	
	//console.log("X: "+ x + " Y: "+y)

	return {x, y};
}

exports.generateSVG = generateSVG;
