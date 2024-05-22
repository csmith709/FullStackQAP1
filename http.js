//GET http
const https = require('https');

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        // Make an HTTP GET request to the API
        https.get(`https://reqres.in/api/users`, resp => {
            let data = '';

            // Event: Data received
            resp.on('data', chunk => {
                // Accumulate received data
                data += chunk;
            });

            // Event: End of response
            resp.on('end', () => {
                // Parse the received data
                const responseData = JSON.parse(data);
                // Resolve the promise with the parsed data
                resolve(responseData);
            });

        }).on('error', err => {
            // If there's an error during the request, reject the promise with an error message
            reject(new Error("Error fetching data from API: " + err.message));
        });
    });
}

// Export the function to make it accessible from other modules
module.exports = fetchDataFromAPI;

//https://www.memberstack.com/blog/node-http-request (code/research)