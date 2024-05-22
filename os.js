const os = require('os');

function logOsInfoToConsole() {
    // Log free memory
    console.log("Free memory: " + os.freemem());

    // Log total memory
    console.log("Total memory: " + os.totalmem());

    // Log hostname
    console.log("Hostname: " + os.hostname());

    // Log OS name
    console.log("OS name: " + os.type());

    // Log current user info
    console.log("User information: " + JSON.stringify(os.userInfo()));

    // Log CPU information
    console.log("CPU information: " + JSON.stringify(os.cpus()));

    // Log OS release
    console.log("OS release: " + os.release());

    // Log OS default directory for temp files
    console.log("Temporary file default directory: " + os.tmpdir());

    // Add a newline character to separate sections
    console.log();
}

module.exports = logOsInfoToConsole;


//https://www.geeksforgeeks.org/node-js-os/
//https://www.w3schools.com/nodejs/ref_os.asp
