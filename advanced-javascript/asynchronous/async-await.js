async function enrich(data) {
    return new Promise((resolve, reject) => {
        let finalResponse = { message: "users fetched successfully", data: data };
        setTimeout(() => {
            resolve(finalResponse);
            // reject(new Error("some error"));
        }, 5000);
    })
}

async function fetchSomeData(url) {
    const data = await fetch(url);
    const finalRes = await data.json();
    const enrichedData = await enrich(finalRes);
    console.log(enrichedData);
}

fetchSomeData("https://fake-json-api.mock.beeceptor.com/users");