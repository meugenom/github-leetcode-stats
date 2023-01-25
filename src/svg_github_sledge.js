const fs = require("fs");
const svgHeader = require("./svg_github_sledge_parts/header")
const svgFooter = require("./svg_github_sledge_parts/footer")

//min lanuages, by default 6
let minLanguages = 6;

//by default
const values = {	
	colors: //color
	[
		["#404040"],
		["#93648D"],
		["#4CC3D9"],
		["#7BC8A4"],
		["#FFC65D"],
		["#F16745"]
	],

	lines : //[X1,Y1,X2,Y2]
	[
		[550, 275, 20, 275],
		[450, 255, 20, 255],
		[350, 235, 20, 235],
		[250, 215, 20, 215],
		[150, 195, 20, 195],
		[50, 175, 20, 175],
	],

	paths: 
	{
		radius: [125, 105, 85, 65, 45, 25],
		startXY: //[X1,Y1]
		[
			[20,275],
			[20,255],
			[20,235],
			[20,215],
			[20, 195],
			[20, 175]
		],
		endXY: //[X2,Y2]
		[
			[20,25],
			[20,45],
			[20,65],
			[20,85],
			[20, 105],
			[20, 125]
		]
	}
	,
	labels:  //[name of the language]
	[ 
		["Java"],
		["JavaScript"],
		["TypeScript"],
		["SCSS"],
		["Go"],
		["C"]
	]
}

//persistent content
let content =
`	<style>
		.label {
			font: bold 25px sans-serif;
			color: #404040;
			-webkit-text-stroke: 1px white;
	  	}
		.name {
			font: bold 18px sans-serif;
			color: #404040;
	  	}

		.line {
			stroke-dasharray: 1000;
			stroke-dashoffset: 1000;
			animation: dash 3.5s ease-in-out forwards;	
			animation-iteration-count: infinite;
			animation-direction: alternate-reverse;
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
	<!-- gray rails by default-->
	<g stroke="#E6E2E1" fill="none" stroke-width="1">
  		<circle cx="20" cy="150" r="125" />
		<circle cx="20" cy="150" r="105" />
		<circle cx="20" cy="150" r="85" />
		<circle cx="20" cy="150" r="65" />
		<circle cx="20" cy="150" r="45" />
  		<circle cx="20" cy="150" r="25" />
	</g>
`;

//declare 
let contentPaths = ``;
let contentNames =  ``;
let contentLines =  ``;

const generateSVG = async function (languages) {
  
  //need check how many languages we have 
  if(languages.length < minLanguages){
	minLanguages = languages.length;
  }

  await setLanguages(languages);
  await calculatePaths (languages);
  
  //construct all to one template
  const out = svgHeader.header + 
  				content +
				contentLines +
				contentPaths + 
				contentNames +
				svgFooter.footer;

  await fs.writeFile("./assets/github-languages-sledge.svg", out, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

async function setLanguages(languages){

	contentNames = 
	`<!--names of languages-->
	 <g class="name">`;
	contentLines = 
	  `<!-- lines by default-->
	   <g fill="none" stroke-width="20" class="line">`

	//Y coordinates of the point of the first label
	let labelY = 280;

	//the first language has very big percentage, and goes as default
	const procentageFactor = languages[0]["percentage"];
	const maxLength = 550;

	for (let i = 0; i < minLanguages; i++) {
		
		//calc next currentWidth
		const currentWidth = parseInt(maxLength * languages[i]["percentage"]/procentageFactor);

		//every line
		contentLines = contentLines + 
		`<line x2="${currentWidth}" y2="${values.lines[i][1]}" x1="${values.lines[i][2]}" y1="${values.lines[i][3]}" stroke="${values.colors[i]}" />
		`
		//every label
		values.labels[i] = languages[i]["name"] + " ("+ languages[i]["percentage"]+"%)";
		contentNames = contentNames + 
		` <text x="${currentWidth+10}" y="${labelY}" fill="${values.colors[i]}" >${values.labels[i]}</text>
		`		
		//next step
		labelY = labelY - 20;
	}

	contentLines = contentLines + `</g>
	`;

	contentNames = contentNames + `</g>
	`;


	/*
	contentNames = 
	  `	<g class="name">
			  <text x="575" y="260" fill="${values.colors[0]}" >${values.labels[0]}</text>
			  <text x="475" y="240" fill="${values.colors[1]}" >${values.labels[1]}</text>
			  <text x="375" y="220" fill="${values.colors[2]}" >${values.labels[2]}</text>
			  <text x="275" y="200" fill="${values.colors[3]}" >${values.labels[3]}</text>
			  <text x="175" y="180" fill="${values.colors[4]}" >${values.labels[4]}</text>
			  <text x="75" y="160"  fill="${values.colors[5]}" >${values.labels[5]}</text>
		  </g>
	  `
	*/

	  /**
	   * 
	<!-- lines by default-->
	<g fill="none" stroke-width="20" class="line">
		<line x2="20" y2="275" x1="650" y1="275" stroke="${values.colors[0]}" />
		<line x2="20" y2="255" x1="550" y1="255" stroke="${values.colors[1]}" />
		<line x2="20" y2="235" x1="450" y1="235" stroke="${values.colors[2]}" />
		<line x2="20" y2="215" x1="350" y1="215" stroke="${values.colors[3]}" />
		<line x2="20" y2="195" x1="250" y1="195" stroke="${values.colors[4]}" />
		<line x2="20" y2="175" x1="150" y1="175" stroke="${values.colors[5]}" />
	</g>
	   */
}


function calculatePaths (languages){

	centerX = 20;
	centerY = 150;

	contentPaths = `
	<!-- changed paths -->
	<g fill="none" stroke-width="20" stroke-linecap="round" class="path">
	`;

	for (let i = 0; i < minLanguages; i++) {
		// need add +180 grad
		let degrees = Math.round(languages[i]["percentage"]) + 180;
		let degreesToRadians = (degrees * Math.PI)/180;

		let x = parseInt(values.paths.radius[i] * Math.cos(degreesToRadians) + centerX);
		let y = parseInt(values.paths.radius[i] * Math.sin(degreesToRadians) + centerY);
		
		//console.log(languages[i]["percentage"]+" : "+degrees+" |"+ degreesToRadians + "| x = "+x + "|y = "+y);
		
		contentPaths = contentPaths + 
		`<path d="M ${values.paths.startXY[i][0]} ${values.paths.startXY[i][1]} A ${values.paths.radius[i]} ${values.paths.radius[i]} 45 0 1 ${x} ${y}" stroke="${values.colors[i]}"/>
		`
	}

	contentPaths = contentPaths + `
	</g>
	`

	/*
	contentPaths = 
`	<!-- changed paths -->
	<g fill="none" stroke-width="20" stroke-linecap="round" class="path">
		<path d="M 20 275 A 125 125 45 0 1 20 25" stroke="${values.colors[0]}"/>
		<path d="M 20 255 A 105 105 45 0 1 20 45" stroke="${values.colors[1]}" />
		<path d="M 20 235 A 85 85 45 0 1 20 65"   stroke="${values.colors[2]}" />
		<path d="M 20 215 A 65 65 45 0 1 20 85"   stroke="${values.colors[3]}" />
		<path d="M 20 195 A 45 45 45 0 1 20 105"  stroke="${values.colors[4]}" />
		<path d="M 20 175 A 25 25 45 0 1 20 125"  stroke="${values.colors[5]}" />
	</g>
`	*/
}

exports.generateSVG = generateSVG;
