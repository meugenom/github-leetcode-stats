/**
 * leetcode fetcher
 */

const axios = require("axios").default;

let info = {
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
	  }
	};

const setData = async (res) => {
	
	let object = JSON.parse(res)["data"];

	//console.log(object)
    
	let arr = object["matchedUser"]["submitStats"]["acSubmissionNum"];
  
	info.leetcode.countAll = arr[0]["count"];
	info.leetcode.submissionsAll = arr[0]["submissions"];
	info.leetcode.byDifficulty.easy.count = arr[1]["count"];
	info.leetcode.byDifficulty.easy.submissions = arr[1]["submissions"];
	info.leetcode.byDifficulty.medium.count = arr[2]["count"];
	info.leetcode.byDifficulty.medium.submissions = arr[2]["submissions"];
	info.leetcode.byDifficulty.hard.count = arr[3]["count"];
	info.leetcode.byDifficulty.hard.submissions = arr[3]["submissions"];
  
	}

  const get = async (username) => {
    let body = {
		query: `
			{
				matchedUser(username: "${username}") {
					username
					submitStats: submitStatsGlobal {
					  acSubmissionNum {
						difficulty
						count
						submissions
					  }
					}
				  }
			}
			`,
		variables: {},
	  };
	  let options = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  await axios
	  .post("https://leetcode.com/graphql", body, options)
	  .then(async (response) => {
		//console.log(JSON.stringify(response.data));
		setData(JSON.stringify(response.data));
	  });
  };

  exports.get = get;
  exports.setData = setData;
  exports.info = info;
