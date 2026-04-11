// axios vs fetch

const axios = require("axios");

// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async (response) => {
//         const json = await response.json();
//         console.log(json.todos.length);

//     });

// }


// prefer aynsc await over .then to fetch 

async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json();
    console.log(json.todos.length);
    
}

// axios
async function main() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos")
    console.log(response.data.todos.length);
    
}

// axios
// Here we are sending a GET request to the server.
// Axios is a more convenient library compared to fetch.
// The data we get back is JSON, which is already a parsed data and response.data contains the final parsed data.
// Axios automatically parses the JSON response into a JavaScript object.


// response.data
// Axios already parsed JSON
// So no need for:
// await response.json()

main()