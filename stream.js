// Initialize
const fs = require('fs');
let data = '';

// Create a readable stream
const readerStream = fs.createReadStream('input.txt');

// Set encoding to utf8
readerStream.setEncoding('UTF8');

// Handle stream events: data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("Program Ended");

// Define the function to export
function streamFileToConsole() {
    // Code to execute when this function is called
    console.log("This is the streamFileToConsole function");
}

// Exporting the function to make it accessible from other modules
module.exports = streamFileToConsole;




//https://www.tutorialspoint.com/nodejs/nodejs_streams.htm (code help)
//https://nodesource.com/blog/understanding-streams-in-nodejs/ (research)