// Importing modules
const fetchDataFromAPI = require('./http.js');
const streamFileToConsole = require('./stream.js');
const logOsInfoToConsole = require('./os.js');

// Log messages for each section
console.log("Running code from http.js:");
// Run code from http.js
fetchDataFromAPI()
    .then(responseData => {
        console.log('Response data:', responseData);
        console.log(); //empty line for spacing
    })
    .catch(error => {
        console.error(error);
    });

console.log("\nRunning code from stream.js:");
// Run code from stream.js
streamFileToConsole();
console.log();

console.log("\nRunning code from os.js:");
// Run code from os.js
logOsInfoToConsole();
console.log(); 

