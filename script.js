async function fetchDataJson() {
    let response = await fetch('db.json');
    let responseAsJson = await response.json();
    console.log(responseAsJson);
}


async function fetchDataText() {
    let response = await fetch('h1.txt');
    let responseAsJson = await response.text();
    document.getElementById("content").innerHTML = responseAsText;
    console.log(responseAsText);
}