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
	//names of languages
	contentNames = 
	`<g class="name">`;
	//lines of languages
	contentLines = 
	  `<g fill="none" stroke-width="20" class="line">`

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
}


function calculatePaths (languages){

	centerX = 20;
	centerY = 150;

	//radius of circles
	contentPaths = `
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
}

exports.generateSVG = generateSVG;
