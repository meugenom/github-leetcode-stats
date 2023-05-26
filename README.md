[![README build](https://github.com/meugenom/github-leetcode-stats/actions/workflows/main.yml/badge.svg)](https://github.com/meugenom/github-leetcode-stats/actions/workflows/main.yml)

### GitHub and LeetCode Stats Generator

This repository contains a tool that generates dynamically updated statistics 
for your GitHub profile and LeetCode account.

last automatic update: Friday, 26 May at 20:10 CEST

![chart-bar](/assets/github-total-bicycle.svg)

![chart-bar](/assets/github-languages-sledge.svg)

![chart-bar](/assets/leetcode-total-info-circle.svg)

-----------------------

### Features:

- Generates a chart showing your GitHub contributions
- Generates a chart showing your GitHub language usage
- Generates a chart showing your LeetCode statistics
- Runs automatically every 6 hours through a GitHub Action
- Supports custom color palettes

### How to Use:

1. Fork this repository.
2. Generate a new Personal Access Token (classic) on GitHub and name it `GH_TOKEN`. Save the token for later use.
3. Create a `.env` file in your forked repository and copy the contents from `simple.env`. Add the `GH_TOKEN` you generated in step 2 to the `.env` file.
4. Create a new secret named `GH_TOKEN` in your repository's settings under "Secrets and Variables" with your `GH_TOKEN` value.
5. Edit the `./src/config.js` file to include your GitHub and LeetCode usernames.
6. The action will run automatically every 6 hours.

### Dependencies:
- [Node v16.14.2 (LTS)](https://nodejs.org/en/blog/release/v16.14.2/)
- [Javascript v. ES5](https://262.ecma-international.org/5.1/)
- [Mustache Template System v.4.2.0.](https://www.npmjs.com/package/mustache)
- [Promise based HTTP and GraphQL client axios v.0.27.2](https://www.npmjs.com/package/axios)
- [Zero-dependency module that loads environment variables from a .env file into process.env v.16.0.3](https://www.npmjs.com/package/dotenv)
- [Github Action Workflow Script YML](https://docs.github.com/en/actions/learn-github-actions/essential-features-of-github-actions)

### How to Run Locally:
1. Clone the repository
2. Install the dependencies using `npm install`
3. Run the generator using `npm index.js`


### Future Plans:
- Adding more animated SVG and statistics
- Support more color palletes

### Author

This project was created by [meugenom](https://meugenom.com)

-----------------------
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
