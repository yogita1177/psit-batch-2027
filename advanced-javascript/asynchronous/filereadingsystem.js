const fileSystem = require('fs');

const readTextFile = (printFileContentCallback) => {
    fileSystem.readFile('/Users/aakashverma/Documents/psit-kanpur/psit-batch-2027/advanced-javascript/asynchronous/sample.txt', 'utf8', function (err, data) {
        if (err == null) {
            printFileContentCallback(data);
        } else {
            console.error('Error reading file...');
        }
    })
}

const printFileContent = (fruitsData) => {
    console.log(fruitsData);
}

// Just call the function
readTextFile(printFileContent);
