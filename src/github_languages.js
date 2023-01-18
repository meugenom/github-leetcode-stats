/**
 * github fetcher
 */

const axios = require("axios").default;

let info = {
  github: {
    totalRepositories: 0,
	allSize: 0,
    languages: []
    },
  };

const setData = async (res) => {
  let object = JSON.parse(res)["data"];
  info.github.totalRepositories = object["user"]["repositories"]["totalCount"];
  let repNodes = object["user"]["repositories"]["nodes"];
  let resultArray = [];

  //generate array type [{language: size}]
  repNodes.forEach((repNode) => {
    let = langNodes = repNode["languages"]["edges"];
    langNodes.forEach((langNode) => {
      //console.log(langNode["node"]["name"]+":"+langNode["size"])
      const node = {};
      node[langNode["node"]["name"]] = langNode["size"];
      resultArray.push(node);
    });
  });
  //console.log(resultArray);

  //sum by languages and sorting
  var reducedArray = resultArray.reduce(function (accumulator, item) {
    // loop over each item in the array
    Object.keys(item).forEach(function (key) {
      // loop over each key in the array item, and add its value to the accumulator.
      // Don't forget to initialize the accumulator field if it's not
      accumulator[key] = (accumulator[key] || 0) + item[key];
    });
    return accumulator;
  }, {});
  //console.log(reducedArray);

  //sorting
  let sortable = [];
  let allSize = 0;
  for (var language in reducedArray) {
    sortable.push([language, reducedArray[language]]);
	allSize = allSize + reducedArray[language];
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
  //console.log(sortable);

  //need return first six languages with %
  info.github.totalSize = allSize;
  sortable.forEach((item)=>{
	let tmp = {
		name: item[0],
		totalSize: item[1],
		percentage:  Math.round((item[1]/allSize)*100 * 10)/10  
	}	
	info.github.languages.push(tmp);
  })
  //console.log(info.github.languages);
};

const get = async (username, token) => {
  let body = {
    query: `
			query {
				user(login: "${username}") {
					repositories(isFork: false, privacy: PUBLIC, ownerAffiliations: [OWNER], first: 100, orderBy: {field: NAME, direction: ASC}) {
					  totalCount
					  nodes {
						name
						owner {
						  login
						}
						languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {
						  totalCount
						  edges {
							size
							node {
							  name
							}
						  }
						}
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
      Authorization: `bearer ${token}`,
    },
  };
  await axios
    .post("https://api.github.com/graphql", body, options)
    .then(async (response) => {
      //console.log(JSON.stringify(response.data));
      setData(JSON.stringify(response.data));
    });
};

exports.get = get;
exports.setData = setData;
exports.info = info;
