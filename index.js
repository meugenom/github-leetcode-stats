'use strict';

const fs = require("fs");
require('dotenv').config();

// shablonizator Mustache
const Mustache = require("mustache");
const MUSTACHE_MAIN_DIR = "./main.mustache";

// services with API calls to get data from GitHub and Leetcode websites
const githubCommits = require("./src/services/github-total");
const githubLanguages = require("./src/services/github-languages")
const leetcode = require("./src/services/leetcode");

// config file
const config = require("./src/config");

// svg code generators
const svgGithubLanguages = require("./src/generators/github-generator-sledge.js")
const svgGithubChartPie = require("./src/generators/github-generator-chart-pie.js")
const svgLeetcodeTotalInfo = require("./src/generators/leetcode-generator-circles.js")
const svgGithubTotalInfo = require("./src/generators/github-generator-bicycle.js")

// github token when it exists in .env
const githubToken = process.env.GH_TOKEN;


/**
 * check GitHub token from .env or from the SECRET for GitHub action
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

//main code
async function main() {
	
	await githubCommits.get(config.username.github, config.github_token); //get info about GitHub commits, repositories
	await svgGithubTotalInfo.generateSVG(githubCommits.info.github); //generate svg about commits, repositories

  	
	await githubLanguages.get(config.username.github, config.github_token); //get info about GitHub most used languages
	await svgGithubLanguages.generateSVG(githubLanguages.info.github.languages); //generate svg about languages

  await svgGithubChartPie.generateSVGChart(githubLanguages.info.github.languages); //generate svg chart pie about chart languages
	  
  await leetcode.get(config.username.leetcode);//get info about leetcode
  await svgLeetcodeTotalInfo.generateSVG(leetcode.info.leetcode); //generate svg about leetcode
    
	await generateReadMe(); //generate mustache template
  
}

//entry point
main();
