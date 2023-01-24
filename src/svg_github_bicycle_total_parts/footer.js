const footer = `
<!-- tyres-->
<g stroke="#4B7196" fill="white" stroke-width="5">
	<circle cx="250" cy="235" r="40"/>
	<circle cx="380" cy="235" r="40" />
	
	<!--shadow-->
	<line x1="220" y1="280" x2="410" y2="280" stroke="#C0CECF" />
</g>

<!--needles-->
<g fill="none" stroke-width="3" stroke-linecap="round" stroke="#4B7196" class="path">
	<circle cx="250" cy="235" r="30"/>
	<circle cx="380" cy="235" r="30"/>
</g>
<!--bicycle-->
<g fill="none" stroke-width="5" stroke-linecap="round" stroke="#F96A93" class="bicycle">

	<line x1="250" y1="235" x2="280" y2="155" />
	<line x1="275" y1="175" x2="320" y2="235" />
	<line x1="320" y1="235" x2="380" y2="235" />
	<line x1="340" y1="175" x2="380" y2="235" />
	<line x1="275" y1="175" x2="340" y2="175" />
	<line x1="320" y1="235" x2="345" y2="165" />
	
	<!--seat place-->
	<line x1="335" y1="165" x2="365" y2="165" />

	<!--rudder-->
	<line x1="270" y1="150" x2="280" y2="155" />

</g>

<g class="label"> 
	<text x="200" y="30" fill="#4a7cb1" >Github Total Stats:</text>
</g>

</svg>`

exports.footer = footer;