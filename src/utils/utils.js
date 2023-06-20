// Generate a path for a sector
const generateSectorPath = function (cx, cy, radius, startAngle, endAngle) {

    const startRad = (startAngle - 90) * Math.PI / 180; // Convert angle to radians
    const endRad = (endAngle - 90) * Math.PI / 180;

    const startX = cx + radius * Math.cos(startRad); // Calculate start and end coordinates
    const startY = cy + radius * Math.sin(startRad);

    const endX = cx + radius * Math.cos(endRad); // Calculate start and end coordinates
    const endY = cy + radius * Math.sin(endRad);

    const totalAngle = endAngle - startAngle; // Calculate total angle of the sector
    const largeArcFlag = totalAngle <= 180 ? "0" : "1"; // Define flag of the big sector

    const path = `M ${cx},${cy} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} Z`; // Generate an SVG path

    return path;
};

//make function to resort array colors
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = function (array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};


exports.generateSectorPath = generateSectorPath;
exports.shuffle = shuffle;