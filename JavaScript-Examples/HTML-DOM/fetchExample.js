// import fetch from 'node-fetch';

// async function getRes() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return res;
// }

// const result = await getRes();
// const text = await result.json();
// console.log(text);


//fetch Example 

// import fetch from 'node-fetch';


// async function getUserDetails(){
//     const result  = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return result;
// }

// const anotherVariable  = await getUserDetails();
// const json = await anotherVariable.json();

// console.log(json);

// import fetch from 'node-fetch';

// async function getFile(){
//     const result  = fetch("fetch_data.txt");
//     return result;
// }
// const anotherVariable = await getFile();
// const textResult = anotherVariable.text();

// console.log(textResult);



//fetch Example 3

import fetch from 'node-fetch';


async function getUser(){
    let userVariable = await fetch("https://jsonplaceholder.typicode.com/todos");
    return userVariable;
}

let printResult = await getUser();

let displayResultasJson = await printResult.json();

console.log(displayResultasJson);

//document.getElementById("paragraph").innerHTML = displayResultasJson;