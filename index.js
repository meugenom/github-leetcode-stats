'use strict';

require('dotenv').config();
const Mustache = require("mustache");
const fs = require("fs");
const MUSTACHE_MAIN_DIR = "./main.mustache";

//own files
const githubCommits = require("./src/github_commits");
const githubLanguages = require("./src/github_languages")
const leetcode = require("./src/leetcode");
const config = require("./src/config");
const svgGeneratorLanguages = require("./src/svg_generator_circle_tails.js")
const githubToken = process.env.GH_TOKEN;

/**
 * main file
 */
//check github token
if (!githubToken) {
	throw new Error('GH_TOKEN is not defined, see .env or main.yaml in actions');
}else{
	config.github_token = githubToken;
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
  }),
  github: {
    totalRepositories: 0,
    totalCommits: 0,
    contributions: 0,
    pullRequests: 0,
    closedIssues: 0,
    followers: 0,
    stargazers: 0,
  },
  leetcode: {
    countAll: 0,
    submissionsAll: 0,
    byDifficulty: {
      easy: {
        name: "EASY",
        count: 0,
        submissions: 0,
      },
      medium: {
        name: "MEDIUM",
        count: 0,
        submissions: 0,
      },
      hard: {
        name: "HARD",
        count: 0,
        submissions: 0,
      },
    },
  },
};

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync("README.md", output);
  });
}

function generateGithubCommitsInfo(info){
	DATA.github.totalRepositories = info.github.totalRepositories;
	DATA.github.totalCommits = info.github.totalCommits;
	DATA.github.contributions = info.github.contributions;
    DATA.github.pullRequests = info.github.pullRequests;
    DATA.github.closedIssues = info.github.closedIssues;
    DATA.github.followers = info.github.followers;
    
	//need to know 
    //stargazers: 0,
}

function generateLeetcodeInfo(info){
	DATA.leetcode.countAll = info.countAll;
	DATA.leetcode.byDifficulty.easy.count = info.byDifficulty.easy.count;
	DATA.leetcode.byDifficulty.medium.count = info.byDifficulty.medium.count;
	DATA.leetcode.byDifficulty.hard.count = info.byDifficulty.hard.count;
}

//main
async function main() {
	
	await githubCommits.get(config.username, config.github_token); //get info about github commits, repositories
  	//await console.log(JSON.stringify(githubCommits.info));
  	await generateGithubCommitsInfo(githubCommits.info);

  	
	await githubLanguages.get(config.username, config.github_token); //get info about github most used languages
  	//await console.log(JSON.stringify(githubLanguages.info));
	await svgGeneratorLanguages.generateSVG(githubLanguages.info.github.languages); //generate svg about languages
	
	await leetcode.get(config.username);
	//await console.log(JSON.stringify(leetcode.info));
	await generateLeetcodeInfo(leetcode.info.leetcode);

    
	await generateReadMe(); //generate mustache template
  	
  
}

//start 
main();
