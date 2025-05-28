const man = require("./man")

const footer = `
<g stroke="#3288bd" fill="white" stroke-width="5">
	<circle cx="250" cy="235" r="40" fill-opacity="0.4"/>
	<circle cx="380" cy="235" r="40" fill-opacity="0.4"/>
</g>


<g
     opacity="0.199997"
     transform="matrix(4.8611007,0,0,2.5394385,-209.94129,-130.39137)"
     id="bicycle_shadow">
    <path
       d="m 0,0 c -12.543,0 -22.711,-1.137 -22.711,-2.54 0,-1.402 10.168,-2.539 22.711,-2.539 12.542,0 22.71,1.137 22.71,2.539 C 22.71,-1.137 12.542,0 0,0"
       style="fill:#686868;fill-opacity:1;fill-rule:evenodd;stroke:none"
       transform="matrix(1.3333333,0,0,-1.3333333,108.81773,159.61267)"
       clip-path="url(#clipPath354-4)"
       id="path355-1" />
  </g>

<g fill="none" stroke-width="3" stroke-linecap="round" stroke="#3288bd" class="path">
	<circle cx="250" cy="235" r="30"/>
	<circle cx="380" cy="235" r="30"/>
</g>

<g fill="none" stroke-width="5" stroke-linecap="round" stroke="#d53e4f" class="bicycle">
	<line x1="250" y1="235" x2="280" y2="155" />
	<line x1="275" y1="175" x2="320" y2="235" />
	<line x1="320" y1="235" x2="380" y2="235" />
	<line x1="340" y1="175" x2="380" y2="235" />
	<line x1="275" y1="175" x2="340" y2="175" />
	<line x1="320" y1="235" x2="345" y2="165" />

	<line x1="270" y1="150" x2="280" y2="155" />
</g>

<g class="label"> 
	<text x="200" y="30" fill="#3288bd" >Github Total Stats:</text>
</g>
<g class="man" transform="translate(255, 55) scale(1.65)">
    ${man.man}
</g>

</svg>`

exports.footer = footer;