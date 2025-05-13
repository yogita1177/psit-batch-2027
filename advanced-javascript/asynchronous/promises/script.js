// function func(resolve, reject) {
//     console.log("Hello");
//     reject("error");
// }

// const promise = new Promise(func);
// console.log(promise);



function myFetchFunction(url) {
    console.log("fetching data from", url);
    return new Promise((resolve, reject) => {
        console.log("taking some time to fetch users data...");
        
        // const data = null;
        // const data = [
        //     { name: "John", age: 26, salary: 100000, pincode: 201201 },
        //     {name: "Sam", age: 27, salary: 110000, pincode: 201202}
        // ]
        setTimeout(() => {
            // if (data == null) {
            //     reject(new Error("failed to fetch the data from url"));
            // }
            // resolve(data);

            const promise = fetch(url);
            reject(promise);
        }, 3000);
    })
}

function enrich(data) {
    return new Promise((resolve, reject) => {
        let finalResponse = { message: "users fetched successfully", data: data };
        setTimeout(() => {
            // resolve(finalResponse);
            reject(new Error("some error"));
        }, 7000);
    })
}

// const promise = fetch("https://fake-json-api.mock.beeceptor.com/users");

// promise
//     .then(response => response.json()
//         .then(res => enrich(res)
//             .then(finalRes => console.log(finalRes))));

// promise
//     .then(response => response.json())
//     .then(res => enrich(res))
//     .then(finalRes => console.log(finalRes))
//     .catch(error => console.log(error));

async function fetchSomeData(url) {
    const data = await (await fetch(url)).json();
    console.log(data);
}

fetchSomeData();