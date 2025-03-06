function createElement(data) {
    let para = document.createElement('p');
    para.textContent = data;
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    request.open('GET', url, true);

    request.onload = function () {
        if (this.status === 200) {
            // Parse the response to JSON
            let response = JSON.parse(this.responseText);

            // Extract the page object
            let page = response.query.pages[Object.keys(response.query.pages)[0]];

            // Call the callback function with the extract text
            callback(page.extract);
        }
    };

    request.onerror = function() {
        console.log('An error occurred during the request');
    };

    request.send();
}

// Call queryWikipedia with createElement as callback
queryWikipedia(createElement);
