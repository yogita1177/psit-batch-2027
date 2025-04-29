// const users = fetch("https://fake-json-api.mock.beeceptor.com/users");
// console.log(users);

// const ans = setTimeout(function () {
//     console.log("Hello, I am here...");
// }, 2000);

// console.log(ans);


function firstStatement(secondStatement) {
    console.log("I am executed at first place.");
    const data = { name: "John", age: 30 };
    secondStatement(data);
}

function secondStatement(data) {
    console.log(data); // you're saving it in database.
}

function execute() {
    firstStatement(secondStatement);
}

setTimeout(execute, 2000);

// setTimeout(firstStatement, 2000); // const data = fetch(url.....)
// setTimeout(secondStatement, 1000); // db.save(data);

console.log("Hello");

