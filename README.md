[![README build](https://github.com/meugenom/github-leetcode-stats/actions/workflows/main.yml/badge.svg)](https://github.com/meugenom/github-leetcode-stats/actions/workflows/main.yml)

### GitHub and LeetCode Stats Generator

This repository contains a tool that generates dynamically updated statistics 
for your GitHub profile and LeetCode account.

last automatic update: Wednesday, 29 May at 02:08 CEST

![chart-bar](/assets/github-total-bicycle.svg)

![chart-bar](/assets/github-languages-pie-chart.svg)

![chart-bar](/assets/github-languages-sledge.svg)

![chart-bar](/assets/leetcode-total-info-circle.svg)

-----------------------

## About this project
The idea of this project was to write a script that could display statistics about projects on GitHub and statistics from Leetcode. The challenge was to present this information in the form of a graph in the README.md file. In reality, README.md supports embedding HTML code, but it can be quite cumbersome when trying to create a graph and insert it into the documentation file. Therefore, an alternative approach was chosen where the script would periodically retrieve the latest statistics using API requests and generate an SVG file, which can be displayed nicely in the README.md file.

-----------------------

### Features:

- Generates a chart showing your GitHub contributions
- Generates a chart showing your GitHub language usage
- Generates a chart showing your LeetCode statistics
- Runs automatically every 6 hours through a GitHub Action
- Supports generated color

### Code Structuring:

- Entry point in the file `src/index.js`.
- The file `simple.env` is used to run the script locally. It needs to be renamed to `.env` and requires the addition of a GitHub token from step 2 of "How to Use:"
- The file `main.mustache.simple` needs to be renamed to `main.mustache`.
- The file `src/config.js` contains a set of colors and parameter names for searching information on GitHub and LeetCode.
- The file `utils/utils.js` contains a set of utility functions.
- The files `src/generators/*.js` contain builders that assemble the code of SVG files.
- The files `src/services/*.js` use requests to the GitHub and LeetCode websites to retrieve up-to-date information.
- The files in `src/templates/` serve as static components for constructing SVG files.

### How to Use:

1. Fork this repository.

2. Generate a new Personal Access Token (classic) on GitHub and name it `GH_TOKEN`. Save the token for later use.

    2.1 We're on the GitHub website, and at the top left, you see your avatar. Click and select `Settings`;
    2.2 In the right sidebar choose `Developer Settings`, click on it;
    2.3 Select "Personal access tokens," and then "Tokens (classic).";
    2.4 Click `Generate new token`    
    <img width="1268" alt="Screenshot 2023-06-19 at 10 32 39" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/9a2a9459-d549-447c-bc01-0434e1c27e4b">
    2.5 Name this token as GH_TOKEN and choose settings:
        - repo (all)
        - workflow
        - write: packages
        - notifications
        - user: read:user
        <img width="1221" alt="Screenshot 2023-06-19 at 10 34 41" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/59ae0b89-3838-4fac-9ef9-8ece6500d8d5">
        <img width="1168" alt="Screenshot 2023-06-19 at 10 34 58" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/ea560b04-5162-4aae-b585-5b109d01e172">
    2.6 Save this new created token in the memory or localy 
    <img width="1197" alt="Screenshot 2023-06-19 at 10 35 44" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/dc76533f-54c8-4877-a63f-abb86d38002b">    
    2.7 Finally you can see your token in the tokens list
    <img width="1190" alt="Screenshot 2023-06-19 at 10 36 25" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/d21cce0e-47d2-4276-be86-5f840d5d2819">

3. Create a new secret named `GH_TOKEN` in your repository's settings under "Secrets and Variables" with your `GH_TOKEN` value.

    3.1 Open page on your repo and choose Settings
    <img width="1267" alt="Screenshot 2023-06-19 at 10 36 42" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/1e36402b-67c2-48e3-b6f1-712e99e41270">
    3.2  In opened page  please see right sidebar and choose `Secrets and Variables`
    <img width="1227" alt="Screenshot 2023-06-19 at 10 36 54" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/af1c216a-bb46-4d81-9050-2f2388bd74d0">
    3.3 Create new secret
    <img width="1241" alt="Screenshot 2023-06-19 at 10 37 08" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/dfc9b859-fefc-4b96-b611-15d6aab05424">
    3.4 Name this secret as GH_TOKEN and put you saved token ghp_HY....... to the Secret... and click "Add Secret"
    <img width="1252" alt="Screenshot 2023-06-19 at 10 38 02" src="https://github.com/meugenom/github-leetcode-stats/assets/26843480/e32a6d12-f49a-41c6-ba3b-6f66fb8ad207">

4. Edit the `./src/config.js` file to include your GitHub and LeetCode usernames.

5. Delete my template mustache file `main.mustache` and rename `main.mustache.simple` to `main.mustache`. 
`main.mustache.simple` presents Date values and generated svg charts: bicycle, sledge, circles. You can edit this file as you see fit.

6. The actions will run automatically every 6 hours. You can see it in `.github/workflows/mail.yml`

! When you want to start this script locally, need to create a `.env` file in your forked repository and copy the contents from `simple.env`. Add the `GH_TOKEN`, that generated in step 2 to the `.env` file.

### Dependencies:
- [Node v16.14.2 (LTS)](https://nodejs.org/en/blog/release/v16.14.2/)
- [Javascript v. ES5](https://262.ecma-international.org/5.1/)
- [Mustache Template System v.4.2.0.](https://www.npmjs.com/package/mustache)
- [Promise based HTTP and GraphQL client axios v.0.27.2](https://www.npmjs.com/package/axios)
- [Zero-dependency module that loads environment variables from a .env file into process.env v.16.0.3](https://www.npmjs.com/package/dotenv)
- [Github Action Workflow Script YML](https://docs.github.com/en/actions/learn-github-actions/essential-features-of-github-actions)


### Future Plans:
- Adding more animated SVG and statistics
- Support more color palletes

### Author

This project was created by [meugenom](https://meugenom.com)

-----------------------
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
