const header = `
<svg 
	viewBox="0 0 600 300"
	height="200px"
	width="600px" 
	xmlns="http://www.w3.org/2000/svg">
<style>
.label {
	font: bold 25px sans-serif;
	color: #404040;
	-webkit-text-stroke: 1px white;
  }

.totals: {
	font: bold 25px sans-serif;
	color: black;
	-webkit-text-stroke: 1px white;
}

.path {
	stroke-dasharray: 100;
	stroke-dashoffset: 100;
	animation: dash 0.2s infinite linear backwards;
}
  
@keyframes dash {
	from {
		stroke-dashoffset: 0;
	}
}

.ground {
	animation: forest 30s linear infinite forwards;
}

@keyframes forest {
	from {
		transform: translate(-1900px, 0px);
	}
	to {
		transform: translate(700px, 0px);
	}
}

.bicycle {
	animation: moving 0.5s ease-in-out infinite forwards;
	animation-direction: alternate-reverse;
}

@keyframes moving {
	from {
		transform: translate(0px, 4px);
	}
	to {
		transform: translate(0px, 0px);
	}
}
</style>


<g class="ground"></g>
<g  stroke="#c3b5bb" fill="none" stroke-width="10">
	<line x1="-200" y1="220" x2="750" y2="220" />
</g>
`

exports.header = header;