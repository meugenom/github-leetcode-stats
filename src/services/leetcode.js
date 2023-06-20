/**
 * leetcode fetcher
 */

const axios = require("axios").default;

let info = {
	leetcode: {
		allQuestionsStats: 
		[
			{difficulty: "All", count: 0},
			{difficulty: "Easy", count: 0},
			{difficulty: "Medium", count: 0},
			{difficulty: "Hard", count: 0}
		],
		problemSolvedStats: 
		[
			{difficulty: "Easy", percentage: 0},
			{difficulty: "Medium", percentage: 0},
			{difficulty: "Hard", percentage: 0}
		],
		acSubmissionNum: 
		[
			{difficulty: "All", count: 0},
			{difficulty: "Easy", count: 0},
			{difficulty: "Medium", count: 0},
			{difficulty: "Hard", count: 0}
		]
	}
};

const setData = async (res) => {
	
	let object = JSON.parse(res)["data"];

	//console.log(object);
  
	info.leetcode.allQuestionsStats[0].count = object.allQuestionsStats[0].count;
	info.leetcode.allQuestionsStats[1].count = object.allQuestionsStats[1].count;
	info.leetcode.allQuestionsStats[2].count = object.allQuestionsStats[2].count;
	info.leetcode.allQuestionsStats[3].count = object.allQuestionsStats[3].count;

	let acSubmissionNum = object["matchedUser"]["submitStats"]["acSubmissionNum"];
	info.leetcode.acSubmissionNum[0].count = acSubmissionNum[0].count;
	info.leetcode.acSubmissionNum[1].count = acSubmissionNum[1].count;
	info.leetcode.acSubmissionNum[2].count = acSubmissionNum[2].count;
	info.leetcode.acSubmissionNum[3].count = acSubmissionNum[3].count;
 	
	let problemSolvedStats = object["matchedUser"]["problemSolvedStats"];
	info.leetcode.problemSolvedStats[0].percentage = problemSolvedStats[0].percentage;
	info.leetcode.problemSolvedStats[1].percentage = problemSolvedStats[1].percentage;
	info.leetcode.problemSolvedStats[2].percentage = problemSolvedStats[2].percentage;

	//console.log(JSON.stringify(info))

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
					  }
					}
					problemSolvedStats: problemsSolvedBeatsStats {
						difficulty
						percentage
					}
				  }				  
				  allQuestionsStats: allQuestionsCount {
					difficulty
					count
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
