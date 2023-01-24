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
	<!--moved background-->	
	<g  stroke="#E6E2E1" fill="none" stroke-width="1" class="ground">
		
		<!-- 1 point: pullRequests-->
		<line x1="100" y1="220" x2="100" y2="195"/>
		${pullRequests.pullRequests}
		<text x="60" y="140" stroke-width="1" stroke="#4a7cb1" class="totals">Total PRs: ${info["pullRequests"]}</text>
		

		<!-- 2 point: Issues-->
		<line x1="300" y1="220" x2="300" y2="190" />
		${issues.issues}
		<text x="250" y="140" stroke-width="1" stroke="#4a7cb1" class="totals">Total Issues: ${info["closedIssues"]}</text>
		

		<!-- 3 point-->
		<line x1="600" y1="220" x2="600" y2="185" />
		${contributions.contributions}
		<text x="555" y="140" stroke-width="1" stroke="#4a7cb1" class="totals">Contributions: ${info["contributions"]}</text>
		

		<!-- 4 point-->
		<line x1="900" y1="220" x2="900" y2="180" />
		${commits.commits}
		<text x="830" y="140" stroke-width="1" stroke="#4a7cb1" class="totals">Total Commits: ${info["totalCommits"]}</text>


		<!-- 5 point-->
		<line x1="1200" y1="220" x2="1200" y2="175" />
		${repositories.repositories}
		<text x="1120" y="140" stroke-width="1" stroke="#4a7cb1" class="totals">Github Repositories: ${info["totalRepositories"]}</text>

		
		<!-- 6 point-->
		<line x1="1500" y1="220" x2="1500" y2="170" />
		${followers.followers}
		<text x="1455" y="140" stroke-width="1" stroke="#4a7cb1" class="totals">Followers: ${info["followers"]}</text>


		<!-- 7 point-->
		<line x1="1800" y1="220" x2="1800" y2="165" />
		${star.star}
		<text x="1700" y="145" stroke-width="1" stroke="#4a7cb1" class="totals">Total Stars Earned: ${info["totalStargazers"]}</text>
	</g>`
}

exports.generateSVG = generateSVG;

