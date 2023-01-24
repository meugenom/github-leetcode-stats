'use strict';

require('dotenv').config();
const Mustache = require("mustache");
const fs = require("fs");
const MUSTACHE_MAIN_DIR = "./main.mustache";

const githubCommits = require("./src/github_commits");
const githubLanguages = require("./src/github_languages")
const leetcode = require("./src/leetcode");
const config = require("./src/config");
const svgGithubLanguages = require("./src/svg_github_sledge.js")
const svgLeetcodeTotalInfo = require("./src/svg_leetcode_circle.js")
const svgGithubTotalInfo = require("./src/svg_github_bicycle.js")
const githubToken = process.env.GH_TOKEN;


/**
 * check github token from .env or from the SECRET for github action
 */

if (!githubToken) {
	throw new Error('GH_TOKEN is not defined, see .env or main.yaml in actions');
}else{
	//for SECRET ACTION
	config.github_token = process.env.GH_TOKEN;
}

//mustache metadata file
let DATA = {
  date: new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    timeZone: "Europe/Berlin",
  })
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync("README.md", output);
  });
}

//main
async function main() {
	
	await githubCommits.get(config.username.github, config.github_token); //get info about github commits, repositories
  	//await console.log(JSON.stringify(githubCommits.info));
	await svgGithubTotalInfo.generateSVG(githubCommits.info.github);

  	
	await githubLanguages.get(config.username.github, config.github_token); //get info about github most used languages
  	//await console.log(JSON.stringify(githubLanguages.info));
	await svgGithubLanguages.generateSVG(githubLanguages.info.github.languages); //generate svg about languages
	
	await leetcode.get(config.username.leetcode);
	//await console.log(JSON.stringify(leetcode.info));
	await svgLeetcodeTotalInfo.generateSVG(leetcode.info.leetcode);
    
	await generateReadMe(); //generate mustache template
  
}

//start 
main();
