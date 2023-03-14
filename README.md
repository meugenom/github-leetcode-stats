### Dynamically generated stats for GitHub and Leetcode stats for README.md
	last automatic update: Tuesday, 14 March at 07:14 CET

![chart-bar](/assets/github-total-bicycle.svg)

![chart-bar](/assets/github-languages-sledge.svg)

![chart-bar](/assets/leetcode-total-info-circle.svg)

[![README build](https://github.com/meugenom/github-leetcode-stats/actions/workflows/main.yml/badge.svg)](https://github.com/meugenom/github-leetcode-stats/actions/workflows/main.yml)

-----------------------
### How can it configure for you:

1. Please make your fork.
2. Open the web `Settings(Github User) -> Developing Settings -> Personal Access Token -> Token(classic) -> Generate new token (classic) ` and generate a new Personal Access Token (classic). Please name this token `GH_TOKEN. Remember this token for the next manipulations.
3. Create in the forked repository for local usage a new file `.env` and copy params from `simple.env`. Adding remembered token to `GH_TOKEN=your_token`
4. Create in the web Action Secret for the usage of the `main.yml` action: In the current forked repository go to `Settings (current repository) -> In the left menu select 'Secrets and variables' -> Actions -> select Green Button 'New repository Secret'`. In the Name put please `GH_TOKEN` and in the Secret your remembered personal access token.
5. Put in file `./src/config.js` your github name(login) and leetcode name(login).
6. Action script starts from GitHub service automatic every 6 hours by cron (see action script in the `/.github/workflows/main.yml`  line 8)

### What we use:
- [Node v16.14.2 (LTS)](https://nodejs.org/en/blog/release/v16.14.2/)
- [Javascript v. ES5](https://262.ecma-international.org/5.1/)
- [Mustache Template System v.4.2.0.](https://www.npmjs.com/package/mustache)
- [Promise based HTTP and GraphQL client axios v.0.27.2](https://www.npmjs.com/package/axios)
- [Zero-dependency module that loads environment variables from a .env file into process.env v.16.0.3](https://www.npmjs.com/package/dotenv)
- [Github Action Workflow Script YML](https://docs.github.com/en/actions/learn-github-actions/essential-features-of-github-actions)

### How can start local
- Use terminal command:
```
	node index.js
```

### What I will do later:
- Adding more animated SVG elements and statistics
- Colorization with other color pallets

### Author

- [meugenom](https://meugenom.com)
-----------------------
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
