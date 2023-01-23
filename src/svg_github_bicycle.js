const fs = require("fs");
const svgHeader = require("./svg_github_bicycle_total_parts/header")
const svgFooter = require("./svg_github_bicycle_total_parts/footer")

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
		
		<!-- 1 point-->
		<line x1="100" y1="220" x2="100" y2="195"/>
		<image x="40" y="140" width="60" height="60" href="./icons/git-pull-request.svg" />
		<text x="100" y="180" stroke-width="1" stroke="#4a7cb1" class="totals">Total PRs: ${info["pullRequests"]}</text>
		
		<!-- 2 point-->
		<line x1="300" y1="220" x2="300" y2="190" />
		<image x="240" y="110" width="60" height="60" href="./icons/issues-close.svg" />
		<text x="300" y="150" stroke-width="1" stroke="#4a7cb1" class="totals">Total Issues: ${info["closedIssues"]}</text>
		
		<!-- 3 point-->
		<line x1="600" y1="220" x2="600" y2="185" />
		<image x="540" y="110" width="60" height="60" href="./icons/two-persons.svg" />
		<text x="600" y="150" stroke-width="1" stroke="#4a7cb1" class="totals">Contributions: ${info["contributions"]}</text>
		
		<!-- 4 point-->
		<line x1="900" y1="220" x2="900" y2="180" />
		<image x="840" y="110" width="60" height="60" href="./icons/git-repository-commits.svg" />
		<text x="900" y="150" stroke-width="1" stroke="#4a7cb1" class="totals">Total Commits: ${info["totalCommits"]}</text>

		<!-- 5 point-->
		<line x1="1200" y1="220" x2="1200" y2="175" />
		<image x="1140" y="110" width="60" height="60" href="./icons/github-repositories.svg" />
		<text x="1200" y="150" stroke-width="1" stroke="#4a7cb1" class="totals">Github Repositories: ${info["totalRepositories"]}</text>

		<!-- 6 point-->
		<line x1="1500" y1="220" x2="1500" y2="170" />
		<image x="1440" y="110" width="60" height="60" href="./icons/followers.svg" />
		<text x="1505" y="150" stroke-width="1" stroke="#4a7cb1" class="totals">Followers: ${info["followers"]}</text>

		<!-- 7 point-->
		<line x1="1800" y1="220" x2="1800" y2="165" />
		<image x="1740" y="110" width="60" height="60" href="./icons/stars.svg" />
		<text x="1800" y="150" stroke-width="1" stroke="#4a7cb1" class="totals">Total Stars Earned: In Progress</text>
	</g>`
}

exports.generateSVG = generateSVG;

