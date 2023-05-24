//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))]

//create reference between email class in HTML and JS file
const emailRef = document.querySelector(".email");

// Two ways to use a promise

/*
// 1. Then
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json(); //returns promise
  })
  .then((data) => { //accesses promise
    console.log(data); 
    emailRef.innerHTML = data.email;
  });
*/ 

// 2. Async/Await
async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1") //returns promise
    const data = await response.json()
    console.log(data)
    emailRef.innerHTML = data.email
}

main()

