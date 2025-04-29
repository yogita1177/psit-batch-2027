function complete(){
    console.log("function completed!");
    return;
}

setTimeout(complete, 2000);

console.log("Hello");