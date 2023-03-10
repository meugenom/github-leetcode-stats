const fs = require("fs");
const svgHeader = require("./svg_github_bicycle_total_parts/header")
const svgFooter = require("./svg_github_bicycle_total_parts/footer")

//icons
const star = require("./svg_github_bicycle_total_parts/star")
const followers = require("./svg_github_bicycle_total_parts/followers")
const repositories = require("./svg_github_bicycle_total_parts/repositories")
const commits = require("./svg_github_bicycle_total_parts/commits")
const contributions = require("./svg_github_bicycle_total_parts/contributions")
const issues = require("./svg_github_bicycle_total_parts/issues")
const pullRequests = require("./svg_github_bicycle_total_parts/pullRequests")

//declarations
let out = svgHeader.header;

const generateSVG = async function (info) {

	//console.log(info)

	await setInfo(info);
  
  //construct all to one template
  out = out + svgFooter.footer;

  await fs.writeFile("./assets/github-total-bicycle.svg", out, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function setInfo(info){
	out = out +
	`
	<g fill="none" stroke-width="1" class="ground">
		
		
		<line x1="0" y1="220" x2="0" y2="165" stroke="#fee08b" stroke-width="2"/>
		<circle cx="0" cy="165" r="5" stroke="#fee08b" fill="#fee08b" />
		${pullRequests.pullRequests}
		<text x="-40" y="145" stroke-width="1" stroke="#3288bd" fill="#3288bd" class="totals">Total PRs: ${info["pullRequests"]}</text>
		

		
		<line x1="300" y1="220" x2="300" y2="165" stroke="#fee08b" stroke-width="2" />
		<circle cx="300" cy="165" r="5" stroke="#fee08b" fill="#fee08b" />
		${issues.issues}
		<text x="250" y="145" stroke-width="1" stroke="#3288bd" fill="#3288bd" class="totals">Closed Issues: ${info["closedIssues"]}</text>
		

		
		<line x1="600" y1="220" x2="600" y2="165" stroke="#fee08b" stroke-width="2" />
		<circle cx="600" cy="165" r="5" stroke="#fee08b" fill="#fee08b" />
		${contributions.contributions}
		<text x="555" y="145" stroke-width="1" stroke="#3288bd" fill="#3288bd" class="totals">Contributions: ${info["contributions"]}</text>
		

		
		<line x1="900" y1="220" x2="900" y2="165" stroke="#fee08b" stroke-width="2"/>
		<circle cx="900" cy="165" r="5" stroke="#fee08b" fill="#fee08b" />
		${commits.commits}
		<text x="830" y="145" stroke-width="1" stroke="#3288bd" fill="#3288bd" class="totals">Total Commits: ${info["totalCommits"]}</text>


		
		<line x1="1200" y1="220" x2="1200" y2="165" stroke="#fee08b" stroke-width="2"/>
		<circle cx="1200" cy="165" r="5" stroke="#fee08b" fill="#fee08b" />
		${repositories.repositories}
		<text x="1120" y="145" stroke-width="1" stroke="#3288bd" fill="#3288bd" class="totals">Github Repositories: ${info["totalRepositories"]}</text>

		
		
		<line x1="1500" y1="220" x2="1500" y2="165" stroke="#fee08b" stroke-width="2" />
		<circle cx="1500" cy="165" r="5" stroke="#fee08b" fill="#fee08b" />
		${followers.followers}
		<text x="1455" y="145" stroke-width="1" stroke="#3288bd" fill="#3288bd" class="totals">Followers: ${info["followers"]}</text>


		
		<line stroke="#fee08b" stroke-width="2" x1="1800" y1="220" x2="1800" y2="165" />
		<circle cx="1800" cy="165" r="5" stroke="#fee08b" fill="#fee08b" />
		${star.star}
		<text x="1730" y="145" stroke-width="1" stroke="#3288bd" fill="#3288bd" class="totals">Total Stars Earned: ${info["totalStargazers"]}</text>
	</g>`
}

exports.generateSVG = generateSVG;

